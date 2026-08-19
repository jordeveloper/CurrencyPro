// Application State
const state = {
    apiKey: localStorage.getItem('n2yo_api_key') || '',
    userPosition: { lat: null, lng: null, alt: 0 },
    searchRadius: 1000,
    category: 52,
    isTracking: false,
    satellites: [],
    trackingInterval: null,
    scene: null,
    camera: null,
    renderer: null,
    globe: null,
    radarCtx: null,
    controls: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    initializeGlobe();
    initializeRadar();
    getUserLocation();
    
    if (state.apiKey) {
        document.getElementById('api-key').value = state.apiKey;
    }
});

// UI Initialization
function initializeUI() {
    // API Key
    document.getElementById('save-api-key').addEventListener('click', saveApiKey);
    
    // Position
    document.getElementById('update-position').addEventListener('click', getUserLocation);
    
    // Search Radius
    const radiusSlider = document.getElementById('search-radius');
    const radiusValue = document.getElementById('radius-value');
    radiusSlider.addEventListener('input', (e) => {
        state.searchRadius = parseInt(e.target.value);
        radiusValue.textContent = `${state.searchRadius} km`;
    });
    
    // Category
    document.getElementById('category').addEventListener('change', (e) => {
        state.category = parseInt(e.target.value);
    });
    
    // Tracking Controls
    document.getElementById('start-tracking').addEventListener('click', startTracking);
    document.getElementById('stop-tracking').addEventListener('click', stopTracking);
}

// Save API Key
function saveApiKey() {
    const apiKeyInput = document.getElementById('api-key');
    state.apiKey = apiKeyInput.value.trim();
    
    if (state.apiKey) {
        localStorage.setItem('n2yo_api_key', state.apiKey);
        updateStatus('Clé API enregistrée avec succès', 'active');
    } else {
        updateStatus('Veuillez entrer une clé API valide', 'error');
    }
}

// Get User Location
function getUserLocation() {
    updateStatus('Détection de votre position...', 'active');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                state.userPosition.lat = position.coords.latitude;
                state.userPosition.lng = position.coords.longitude;
                state.userPosition.alt = position.coords.altitude || 0;
                
                const positionText = `${state.userPosition.lat.toFixed(4)}°, ${state.userPosition.lng.toFixed(4)}°`;
                document.getElementById('user-position').textContent = positionText;
                updateStatus('Position détectée', 'active');
                
                // Update globe with user position
                updateGlobeUserPosition();
            },
            (error) => {
                console.error('Erreur de géolocalisation:', error);
                updateStatus('Impossible de détecter la position', 'error');
                
                // Use default position (Paris)
                state.userPosition.lat = 48.8566;
                state.userPosition.lng = 2.3522;
                document.getElementById('user-position').textContent = 'Position par défaut (Paris)';
            }
        );
    } else {
        updateStatus('Géolocalisation non supportée', 'error');
        state.userPosition.lat = 48.8566;
        state.userPosition.lng = 2.3522;
        document.getElementById('user-position').textContent = 'Position par défaut (Paris)';
    }
}

// Start Tracking
async function startTracking() {
    if (!state.apiKey) {
        updateStatus('Veuillez entrer une clé API N2YO', 'error');
        return;
    }
    
    if (!state.userPosition.lat || !state.userPosition.lng) {
        updateStatus('Position non disponible', 'error');
        return;
    }
    
    state.isTracking = true;
    document.getElementById('start-tracking').disabled = true;
    document.getElementById('stop-tracking').disabled = false;
    
    updateStatus('Suivi en cours...', 'active');
    
    // Initial fetch
    await fetchSatellites();
    
    // Update every 10 seconds
    state.trackingInterval = setInterval(fetchSatellites, 10000);
}

// Stop Tracking
function stopTracking() {
    state.isTracking = false;
    document.getElementById('start-tracking').disabled = false;
    document.getElementById('stop-tracking').disabled = true;
    
    if (state.trackingInterval) {
        clearInterval(state.trackingInterval);
        state.trackingInterval = null;
    }
    
    updateStatus('Suivi arrêté', '');
}

// Fetch Satellites from N2YO API
async function fetchSatellites() {
    try {
        const { lat, lng, alt } = state.userPosition;
        const radius = state.searchRadius;
        const category = state.category;
        
        // N2YO API endpoint: /above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}
        const url = `https://api.n2yo.com/rest/v1/satellite/above/${lat}/${lng}/${alt}/${radius}/${category}/&apiKey=${state.apiKey}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.above && Array.isArray(data.above)) {
            state.satellites = data.above;
            updateSatelliteList(data.above);
            updateRadar(data.above);
            updateGlobeSatellites(data.above);
            updateLastUpdate();
            updateStatus(`${data.above.length} satellites détectés`, 'active');
        } else {
            state.satellites = [];
            updateSatelliteList([]);
            updateStatus('Aucun satellite détecté', '');
        }
        
    } catch (error) {
        console.error('Erreur lors de la récupération des satellites:', error);
        updateStatus(`Erreur: ${error.message}`, 'error');
    }
}

// Update Satellite List
function updateSatelliteList(satellites) {
    const listContainer = document.getElementById('satellite-list');
    const countElement = document.getElementById('satellite-count');
    
    countElement.textContent = `${satellites.length} satellite${satellites.length > 1 ? 's' : ''} détecté${satellites.length > 1 ? 's' : ''}`;
    
    if (satellites.length === 0) {
        listContainer.innerHTML = '<p class="no-data">Aucun satellite détecté dans cette zone.</p>';
        return;
    }
    
    listContainer.innerHTML = satellites.map(sat => `
        <div class="satellite-card">
            <h3>${sat.satname || 'Satellite'}</h3>
            <div class="sat-info">
                <span><strong>ID:</strong> ${sat.satid}</span>
                <span><strong>Altitude:</strong> ${sat.satalt ? sat.satalt.toFixed(0) : 'N/A'} km</span>
                <span><strong>Latitude:</strong> ${sat.satlat ? sat.satlat.toFixed(2) : 'N/A'}°</span>
                <span><strong>Longitude:</strong> ${sat.satlon ? sat.satlon.toFixed(2) : 'N/A'}°</span>
            </div>
        </div>
    `).join('');
}

// Initialize 3D Globe
function initializeGlobe() {
    const canvas = document.getElementById('globe-canvas');
    const container = document.getElementById('globe-container');
    
    // Scene
    state.scene = new THREE.Scene();
    
    // Camera
    state.camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    state.camera.position.z = 3;
    
    // Renderer
    state.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    state.renderer.setSize(container.clientWidth, container.clientHeight);
    state.renderer.setPixelRatio(window.devicePixelRatio);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    state.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    state.scene.add(directionalLight);
    
    // Earth
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhongMaterial({
        color: 0x2233ff,
        emissive: 0x112244,
        shininess: 25
    });
    
    state.globe = new THREE.Mesh(geometry, material);
    state.scene.add(state.globe);
    
    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ccff,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    state.scene.add(atmosphere);
    
    // Mouse controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            
            state.globe.rotation.y += deltaX * 0.01;
            state.globe.rotation.x += deltaY * 0.01;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        state.camera.position.z += e.deltaY * 0.01;
        state.camera.position.z = Math.max(1.5, Math.min(5, state.camera.position.z));
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Auto-rotation when not dragging
        if (!isDragging) {
            state.globe.rotation.y += 0.001;
        }
        
        state.renderer.render(state.scene, state.camera);
    }
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        state.camera.aspect = width / height;
        state.camera.updateProjectionMatrix();
        state.renderer.setSize(width, height);
    });
}

// Update Globe with User Position
function updateGlobeUserPosition() {
    if (!state.userPosition.lat || !state.userPosition.lng) return;
    
    // Remove previous marker
    const existingMarker = state.scene.getObjectByName('userMarker');
    if (existingMarker) {
        state.scene.remove(existingMarker);
    }
    
    // Convert lat/lng to 3D position
    const phi = (90 - state.userPosition.lat) * (Math.PI / 180);
    const theta = (state.userPosition.lng + 180) * (Math.PI / 180);
    
    const x = -(1.02 * Math.sin(phi) * Math.cos(theta));
    const y = 1.02 * Math.cos(phi);
    const z = 1.02 * Math.sin(phi) * Math.sin(theta);
    
    // Create marker
    const markerGeometry = new THREE.SphereGeometry(0.02, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(x, y, z);
    marker.name = 'userMarker';
    state.scene.add(marker);
}

// Update Globe with Satellites
function updateGlobeSatellites(satellites) {
    // Remove previous satellite markers
    const existingMarkers = state.scene.children.filter(child => child.name === 'satelliteMarker');
    existingMarkers.forEach(marker => state.scene.remove(marker));
    
    satellites.forEach(sat => {
        if (!sat.satlat || !sat.satlon) return;
        
        const phi = (90 - sat.satlat) * (Math.PI / 180);
        const theta = (sat.satlon + 180) * (Math.PI / 180);
        
        const altitude = sat.satalt ? (1 + sat.satalt / 6371) : 1.1; // Earth radius ~6371 km
        
        const x = -(altitude * Math.sin(phi) * Math.cos(theta));
        const y = altitude * Math.cos(phi);
        const z = altitude * Math.sin(phi) * Math.sin(theta);
        
        const markerGeometry = new THREE.SphereGeometry(0.015, 8, 8);
        const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff4444 });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.set(x, y, z);
        marker.name = 'satelliteMarker';
        state.scene.add(marker);
    });
}

// Initialize Radar
function initializeRadar() {
    const canvas = document.getElementById('radar-canvas');
    const container = document.getElementById('radar-container');
    
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    state.radarCtx = canvas.getContext('2d');
    
    // Initial draw
    drawRadar();
    
    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        drawRadar();
    });
}

// Draw Radar
function drawRadar() {
    const ctx = state.radarCtx;
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 50;
    
    // Clear canvas
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw concentric circles
    ctx.strokeStyle = '#2a3555';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * (i / 4), 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // Draw crosshair
    ctx.beginPath();
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX, centerY + radius);
    ctx.stroke();
    
    // Draw center marker (user position)
    ctx.fillStyle = '#00ff88';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
}

// Update Radar with Satellites
function updateRadar(satellites) {
    drawRadar();
    
    const ctx = state.radarCtx;
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 50;
    
    satellites.forEach(sat => {
        if (!sat.satlat || !sat.satlon) return;
        
        // Calculate relative position
        const latDiff = sat.satlat - state.userPosition.lat;
        const lngDiff = sat.satlon - state.userPosition.lng;
        
        // Convert to radar coordinates
        const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
        const angle = Math.atan2(lngDiff, latDiff);
        
        // Normalize distance to radar radius
        const maxDistance = state.searchRadius / 111; // Approximate degrees
        const normalizedDistance = Math.min(distance / maxDistance, 1) * radius;
        
        const x = centerX + normalizedDistance * Math.sin(angle);
        const y = centerY - normalizedDistance * Math.cos(angle);
        
        // Draw satellite
        ctx.fillStyle = '#ff4444';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
        gradient.addColorStop(0, 'rgba(255, 68, 68, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 68, 68, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Update Status
function updateStatus(message, className) {
    const statusText = document.getElementById('status-text');
    statusText.textContent = message;
    statusText.className = className;
}

// Update Last Update Time
function updateLastUpdate() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR');
    document.getElementById('last-update').textContent = `Dernière mise à jour: ${timeString}`;
}
