// Demo Mode - Satellite Radar with Simulated Data

// Demo locations
const demoLocations = {
    paris: { lat: 48.8566, lng: 2.3522, name: 'Paris, France' },
    newyork: { lat: 40.7128, lng: -74.0060, name: 'New York, USA' },
    tokyo: { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japon' },
    sydney: { lat: -33.8688, lng: 151.2093, name: 'Sydney, Australie' },
    london: { lat: 51.5074, lng: -0.1278, name: 'Londres, UK' }
};

// Simulated satellites data
const simulatedSatellites = {
    iss: [
        {
            satid: 25544,
            satname: "SPACE STATION (ISS)",
            satlat: 48.5,
            satlon: 2.0,
            satalt: 418.5
        }
    ],
    gps: [
        { satid: 32711, satname: "GPS BIIR-2", satlat: 50.2, satlon: 1.5, satalt: 20200 },
        { satid: 28474, satname: "GPS BIIR-7", satlat: 49.8, satlon: 3.2, satalt: 20180 },
        { satid: 40730, satname: "GPS BIIF-3", satlat: 48.1, satlon: 2.8, satalt: 20190 },
        { satid: 41019, satname: "GPS BIIF-6", satlat: 47.5, satlon: 1.9, satalt: 20210 },
        { satid: 32260, satname: "GPS BIIA-25", satlat: 50.5, satlon: 0.8, satalt: 20175 }
    ],
    starlink: [
        { satid: 44713, satname: "STARLINK-1007", satlat: 49.2, satlon: 1.8, satalt: 550 },
        { satid: 45360, satname: "STARLINK-1235", satlat: 48.3, satlon: 2.9, satalt: 548 },
        { satid: 46123, satname: "STARLINK-1489", satlat: 47.9, satlon: 3.5, satalt: 552 },
        { satid: 47234, satname: "STARLINK-1678", satlat: 49.8, satlon: 0.9, satalt: 547 },
        { satid: 48901, satname: "STARLINK-2012", satlat: 48.0, satlon: 1.2, satalt: 551 },
        { satid: 49345, satname: "STARLINK-2156", satlat: 50.1, satlon: 3.1, satalt: 549 },
        { satid: 50234, satname: "STARLINK-2389", satlat: 47.4, satlon: 2.5, satalt: 553 }
    ],
    weather: [
        { satid: 33591, satname: "NOAA 19", satlat: 48.9, satlon: 2.1, satalt: 870 },
        { satid: 43689, satname: "METOP-C", satlat: 49.3, satlon: 3.4, satalt: 817 },
        { satid: 28654, satname: "NOAA 18", satlat: 47.2, satlon: 1.5, satalt: 854 }
    ],
    all: [
        { satid: 25544, satname: "ISS", satlat: 48.5, satlon: 2.0, satalt: 418 },
        { satid: 32711, satname: "GPS BIIR-2", satlat: 50.2, satlon: 1.5, satalt: 20200 },
        { satid: 44713, satname: "STARLINK-1007", satlat: 49.2, satlon: 1.8, satalt: 550 },
        { satid: 33591, satname: "NOAA 19", satlat: 48.9, satlon: 2.1, satalt: 870 },
        { satid: 28474, satname: "GPS BIIR-7", satlat: 49.8, satlon: 3.2, satalt: 20180 },
        { satid: 45360, satname: "STARLINK-1235", satlat: 48.3, satlon: 2.9, satalt: 548 },
        { satid: 43689, satname: "METOP-C", satlat: 49.3, satlon: 3.4, satalt: 817 }
    ]
};

// Application state
const state = {
    userPosition: { lat: 48.8566, lng: 2.3522, alt: 0 },
    satellites: [],
    isTracking: false,
    trackingInterval: null,
    scene: null,
    camera: null,
    renderer: null,
    globe: null,
    radarCtx: null
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    initializeGlobe();
    initializeRadar();
    updateUserPosition('paris');
});

function initializeUI() {
    document.getElementById('demo-location').addEventListener('change', (e) => {
        updateUserPosition(e.target.value);
    });
    
    document.getElementById('start-demo').addEventListener('click', startDemo);
    document.getElementById('stop-demo').addEventListener('click', stopDemo);
}

function updateUserPosition(locationKey) {
    const location = demoLocations[locationKey];
    state.userPosition = { lat: location.lat, lng: location.lng, alt: 0 };
    updateStatus(`Position: ${location.name}`, 'active');
    updateGlobeUserPosition();
}

function startDemo() {
    const scenario = document.getElementById('demo-scenario').value;
    
    state.isTracking = true;
    document.getElementById('start-demo').disabled = true;
    document.getElementById('stop-demo').disabled = false;
    
    updateStatus(`Démo en cours: ${scenario}`, 'active');
    
    // Load simulated satellites
    loadSimulatedSatellites(scenario);
    
    // Simulate movement every 2 seconds
    state.trackingInterval = setInterval(() => {
        updateSatellitePositions();
    }, 2000);
}

function stopDemo() {
    state.isTracking = false;
    document.getElementById('start-demo').disabled = false;
    document.getElementById('stop-demo').disabled = true;
    
    if (state.trackingInterval) {
        clearInterval(state.trackingInterval);
    }
    
    updateStatus('Démo arrêtée', '');
}

function loadSimulatedSatellites(scenario) {
    // Get base satellites for scenario
    let satellites = JSON.parse(JSON.stringify(simulatedSatellites[scenario] || []));
    
    // Adjust positions relative to user position
    const userLat = state.userPosition.lat;
    const userLng = state.userPosition.lng;
    
    satellites = satellites.map(sat => ({
        ...sat,
        satlat: userLat + (sat.satlat - 48.8566),
        satlon: userLng + (sat.satlon - 2.3522)
    }));
    
    state.satellites = satellites;
    updateSatelliteList(satellites);
    updateRadar(satellites);
    updateGlobeSatellites(satellites);
    updateLastUpdate();
}

function updateSatellitePositions() {
    // Simulate orbital movement
    state.satellites = state.satellites.map(sat => {
        // Move satellites slightly (simulate orbit)
        const speed = 0.05; // degrees per update
        return {
            ...sat,
            satlon: sat.satlon + speed,
            satlat: sat.satlat + (Math.random() - 0.5) * 0.02
        };
    });
    
    updateSatelliteList(state.satellites);
    updateRadar(state.satellites);
    updateGlobeSatellites(state.satellites);
    updateLastUpdate();
}

function updateSatelliteList(satellites) {
    const listContainer = document.getElementById('satellite-list');
    const countElement = document.getElementById('satellite-count');
    
    countElement.textContent = `${satellites.length} satellite${satellites.length > 1 ? 's' : ''} simulé${satellites.length > 1 ? 's' : ''}`;
    
    if (satellites.length === 0) {
        listContainer.innerHTML = '<p class="no-data">Lancez une démo pour voir les satellites.</p>';
        return;
    }
    
    listContainer.innerHTML = satellites.map(sat => `
        <div class="satellite-card">
            <h3>${sat.satname}</h3>
            <div class="sat-info">
                <span><strong>ID:</strong> ${sat.satid}</span>
                <span><strong>Alt:</strong> ${sat.satalt.toFixed(0)} km</span>
                <span><strong>Lat:</strong> ${sat.satlat.toFixed(2)}°</span>
                <span><strong>Lng:</strong> ${sat.satlon.toFixed(2)}°</span>
            </div>
        </div>
    `).join('');
}

// 3D Globe (same as main app)
function initializeGlobe() {
    const canvas = document.getElementById('globe-canvas');
    const container = document.getElementById('globe-container');
    
    state.scene = new THREE.Scene();
    state.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    state.camera.position.z = 3;
    
    state.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    state.renderer.setSize(container.clientWidth, container.clientHeight);
    state.renderer.setPixelRatio(window.devicePixelRatio);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    state.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    state.scene.add(directionalLight);
    
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhongMaterial({
        color: 0x2233ff,
        emissive: 0x112244,
        shininess: 25
    });
    
    state.globe = new THREE.Mesh(geometry, material);
    state.scene.add(state.globe);
    
    const atmosphereGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ccff,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    state.scene.add(atmosphere);
    
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
    
    canvas.addEventListener('mouseup', () => { isDragging = false; });
    
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        state.camera.position.z += e.deltaY * 0.01;
        state.camera.position.z = Math.max(1.5, Math.min(5, state.camera.position.z));
    });
    
    function animate() {
        requestAnimationFrame(animate);
        if (!isDragging) state.globe.rotation.y += 0.001;
        state.renderer.render(state.scene, state.camera);
    }
    animate();
    
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        state.camera.aspect = width / height;
        state.camera.updateProjectionMatrix();
        state.renderer.setSize(width, height);
    });
}

function updateGlobeUserPosition() {
    const existingMarker = state.scene.getObjectByName('userMarker');
    if (existingMarker) state.scene.remove(existingMarker);
    
    const phi = (90 - state.userPosition.lat) * (Math.PI / 180);
    const theta = (state.userPosition.lng + 180) * (Math.PI / 180);
    
    const x = -(1.02 * Math.sin(phi) * Math.cos(theta));
    const y = 1.02 * Math.cos(phi);
    const z = 1.02 * Math.sin(phi) * Math.sin(theta);
    
    const markerGeometry = new THREE.SphereGeometry(0.02, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(x, y, z);
    marker.name = 'userMarker';
    state.scene.add(marker);
}

function updateGlobeSatellites(satellites) {
    const existingMarkers = state.scene.children.filter(child => child.name === 'satelliteMarker');
    existingMarkers.forEach(marker => state.scene.remove(marker));
    
    satellites.forEach(sat => {
        const phi = (90 - sat.satlat) * (Math.PI / 180);
        const theta = (sat.satlon + 180) * (Math.PI / 180);
        const altitude = 1 + sat.satalt / 6371;
        
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

// Radar (same as main app)
function initializeRadar() {
    const canvas = document.getElementById('radar-canvas');
    const container = document.getElementById('radar-container');
    
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    state.radarCtx = canvas.getContext('2d');
    
    drawRadar();
    
    window.addEventListener('resize', () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        drawRadar();
    });
}

function drawRadar() {
    const ctx = state.radarCtx;
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 50;
    
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#2a3555';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * (i / 4), 0, Math.PI * 2);
        ctx.stroke();
    }
    
    ctx.beginPath();
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX, centerY + radius);
    ctx.stroke();
    
    ctx.fillStyle = '#00ff88';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fill();
}

function updateRadar(satellites) {
    drawRadar();
    
    const ctx = state.radarCtx;
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 50;
    
    satellites.forEach(sat => {
        const latDiff = sat.satlat - state.userPosition.lat;
        const lngDiff = sat.satlon - state.userPosition.lng;
        const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
        const angle = Math.atan2(lngDiff, latDiff);
        
        const maxDistance = 10;
        const normalizedDistance = Math.min(distance / maxDistance, 1) * radius;
        
        const x = centerX + normalizedDistance * Math.sin(angle);
        const y = centerY - normalizedDistance * Math.cos(angle);
        
        ctx.fillStyle = '#ff4444';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
        gradient.addColorStop(0, 'rgba(255, 68, 68, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 68, 68, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateStatus(message, className) {
    const statusText = document.getElementById('status-text');
    statusText.textContent = message;
    statusText.className = className;
}

function updateLastUpdate() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR');
    document.getElementById('last-update').textContent = `Dernière mise à jour: ${timeString}`;
}
