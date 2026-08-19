# 📡 Guide API N2YO - Radar Spatial

## 🌐 Vue d'Ensemble de l'API N2YO

N2YO fournit une API REST gratuite pour le suivi des satellites en temps réel.

**Base URL** : `https://api.n2yo.com/rest/v1/satellite/`

---

## 🔑 Obtention de la Clé API

### Inscription
1. Allez sur [https://www.n2yo.com/login/register/](https://www.n2yo.com/login/register/)
2. Remplissez le formulaire :
   - Email
   - Mot de passe
   - Nom d'utilisateur
3. Validez l'email de confirmation

### Récupération de la Clé
1. Connectez-vous
2. Allez sur [https://www.n2yo.com/api/](https://www.n2yo.com/api/)
3. Votre clé API s'affiche en haut de page
4. Format : `XXXXXX-XXXXXX-XXXXXX-XXX`

### Limites Gratuites
- ✅ Accès gratuit
- ⚠️ **Limité en transactions**
- 📊 Compteur de transactions dans chaque réponse
- 🔄 Réinitialisation quotidienne

---

## 📡 Endpoint Utilisé : `/above`

### Description
Retourne tous les satellites au-dessus d'une position d'observation dans un rayon donné.

### URL Complète
```
GET /rest/v1/satellite/above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}/&apiKey={your_api_key}
```

### Paramètres

| Paramètre | Type | Description | Exemple |
|-----------|------|-------------|---------|
| `observer_lat` | float | Latitude observateur (degrés) | `48.8566` |
| `observer_lng` | float | Longitude observateur (degrés) | `2.3522` |
| `observer_alt` | integer | Altitude observateur (mètres) | `0` |
| `search_radius` | integer | Rayon de recherche (km, max 90°) | `1000` |
| `category_id` | integer | ID catégorie satellite | `52` |
| `apiKey` | string | Votre clé API N2YO | `XXXXXX-XXXXXX-XXXXXX-XXX` |

### Exemple de Requête

```javascript
const lat = 48.8566;  // Paris
const lng = 2.3522;
const alt = 0;
const radius = 1000;  // 1000 km
const category = 52;  // ISS
const apiKey = 'XXXXXX-XXXXXX-XXXXXX-XXX';

const url = `https://api.n2yo.com/rest/v1/satellite/above/${lat}/${lng}/${alt}/${radius}/${category}/&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
```

### Exemple de Réponse

```json
{
  "info": {
    "category": "Space Stations",
    "transactionscount": 15,
    "satcount": 1
  },
  "above": [
    {
      "satid": 25544,
      "satname": "SPACE STATION",
      "intDesignator": "1998-067A",
      "launchDate": "1998-11-20",
      "satlat": 45.234,
      "satlng": -12.456,
      "satalt": 418.5
    }
  ]
}
```

### Structure de Réponse

#### `info` Object
- `category` (string) : Nom de la catégorie
- `transactionscount` (integer) : Nombre de transactions utilisées
- `satcount` (integer) : Nombre de satellites détectés

#### `above` Array
Chaque élément contient :
- `satid` (integer) : ID NORAD du satellite
- `satname` (string) : Nom du satellite
- `intDesignator` (string) : Désignateur international
- `launchDate` (string) : Date de lancement (YYYY-MM-DD)
- `satlat` (float) : Latitude actuelle (degrés)
- `satlng` (float) : Longitude actuelle (degrés)
- `satalt` (float) : Altitude actuelle (km)

---

## 🗂️ Catégories de Satellites

| ID | Nom | Description |
|----|-----|-------------|
| `0` | Tous | Tous les satellites |
| `1` | GPS Operational | Constellation GPS américaine |
| `2` | GLONASS Operational | Système russe de navigation |
| `3` | Galileo | Système européen de navigation |
| `4` | Geostationary | Satellites géostationnaires (~36000 km) |
| `10` | Weather | Satellites météorologiques |
| `15` | Satellites | Satellites de communication |
| `18` | Earth Resources | Observation terrestre et imagerie |
| `20` | Amateur Radio | Satellites radioamateurs |
| `25` | GPS | Tous les satellites GPS |
| `28` | GLONASS | Tous les satellites GLONASS |
| `30` | Beidou | Système chinois de navigation |
| `35` | Space & Earth Science | Satellites scientifiques |
| `52` | Space Stations | Stations spatiales (ISS, Tiangong) |

---

## 🔍 Autres Endpoints Disponibles

### 1. `/positions` - Positions Futures

Récupère les positions futures d'un satellite spécifique.

```
GET /positions/{id}/{observer_lat}/{observer_lng}/{observer_alt}/{seconds}/
```

**Paramètres** :
- `id` : NORAD ID du satellite
- `seconds` : Nombre de secondes futures (max 300)

**Exemple** : Position de l'ISS dans les 60 prochaines secondes
```
https://api.n2yo.com/rest/v1/satellite/positions/25544/48.8566/2.3522/0/60/&apiKey=...
```

### 2. `/visualpasses` - Passages Visibles

Prédictions des passages optiquement visibles.

```
GET /visualpasses/{id}/{observer_lat}/{observer_lng}/{observer_alt}/{days}/{min_visibility}/
```

**Paramètres** :
- `id` : NORAD ID
- `days` : Nombre de jours (max 10)
- `min_visibility` : Durée minimum visible (secondes)

**Exemple** : Passages ISS visibles 300s minimum sur 2 jours
```
https://api.n2yo.com/rest/v1/satellite/visualpasses/25544/48.8566/2.3522/0/2/300/&apiKey=...
```

### 3. `/radiopasses` - Passages Radio

Prédictions pour communications radio.

```
GET /radiopasses/{id}/{observer_lat}/{observer_lng}/{observer_alt}/{days}/{min_elevation}/
```

**Paramètres** :
- `min_elevation` : Élévation minimum (degrés)

### 4. `/tle` - Two-Line Element

Récupère les données TLE d'un satellite.

```
GET /tle/{id}/
```

**Exemple** : TLE de l'ISS
```
https://api.n2yo.com/rest/v1/satellite/tle/25544/&apiKey=...
```

---

## 💡 Bonnes Pratiques

### ✅ À Faire

1. **Sauvegarder la clé API localement** (localStorage)
2. **Gérer les erreurs** (try/catch)
3. **Limiter les requêtes** (pas plus d'une par 5-10 secondes)
4. **Vérifier transactionscount** dans les réponses
5. **Utiliser HTTPS** obligatoire

### ❌ À Éviter

1. ❌ **Ne pas** exposer la clé dans le code source public
2. ❌ **Ne pas** faire de requêtes en boucle rapide
3. ❌ **Ne pas** dépasser 300 secondes pour `/positions`
4. ❌ **Ne pas** ignorer les erreurs API

---

## 🚨 Gestion des Erreurs

### Codes HTTP Courants

| Code | Signification | Solution |
|------|---------------|----------|
| `200` | Succès | ✅ OK |
| `400` | Mauvaise requête | Vérifiez les paramètres |
| `401` | Non autorisé | Clé API invalide |
| `403` | Interdit | Limite de transactions atteinte |
| `404` | Non trouvé | Satellite ID inexistant |
| `500` | Erreur serveur | Réessayez plus tard |

### Exemple de Gestion

```javascript
async function fetchSatellites() {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Clé API invalide');
            } else if (response.status === 403) {
                throw new Error('Limite de transactions atteinte');
            } else {
                throw new Error(`Erreur API: ${response.status}`);
            }
        }
        
        const data = await response.json();
        
        // Vérifier le compteur de transactions
        if (data.info && data.info.transactionscount > 900) {
            console.warn('Approche de la limite de transactions');
        }
        
        return data;
        
    } catch (error) {
        console.error('Erreur:', error.message);
        // Afficher à l'utilisateur
        updateStatus(error.message, 'error');
    }
}
```

---

## 📊 Optimisation des Transactions

### Stratégies d'Économie

1. **Caching Local**
```javascript
const cache = {
    data: null,
    timestamp: null,
    ttl: 10000 // 10 secondes
};

function getCachedData() {
    if (cache.data && Date.now() - cache.timestamp < cache.ttl) {
        return cache.data; // Utiliser le cache
    }
    return null; // Faire une nouvelle requête
}
```

2. **Debouncing des Requêtes**
```javascript
let timeout;
function debouncedFetch() {
    clearTimeout(timeout);
    timeout = setTimeout(fetchSatellites, 500);
}
```

3. **Mode "Snapshot"**
- Plutôt que suivi continu
- Requête unique sur demande
- Économise beaucoup de transactions

---

## 🔐 Sécurité

### ⚠️ Important

La clé API est **sensible** mais pas critique (pas d'opérations destructives).

### Protection de Base

1. **localStorage** : OK pour une app web simple
2. **Variables d'environnement** : Pour un backend
3. **Proxy Backend** : Pour production sécurisée

### Exemple avec Proxy Backend

```javascript
// Frontend appelle votre backend
const response = await fetch('/api/satellites', {
    method: 'POST',
    body: JSON.stringify({ lat, lng, alt, radius, category })
});

// Backend fait la requête à N2YO (Node.js exemple)
app.post('/api/satellites', async (req, res) => {
    const apiKey = process.env.N2YO_API_KEY;
    const { lat, lng, alt, radius, category } = req.body;
    
    const url = `https://api.n2yo.com/rest/v1/satellite/above/${lat}/${lng}/${alt}/${radius}/${category}/&apiKey=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    res.json(data);
});
```

---

## 📚 Ressources Supplémentaires

### Documentation Officielle
- [N2YO API Docs](https://www.n2yo.com/api/)
- [N2YO Satellite Database](https://www.n2yo.com/satellites/)

### Bases de Données Satellites
- [Space-Track.org](https://www.space-track.org/) - Source des données
- [Celestrak](https://celestrak.com/) - TLE et données orbitales
- [SatNOGS](https://network.satnogs.org/) - Réseau de suivi satellites

### Outils de Test
- [Postman](https://www.postman.com/) - Tester les requêtes API
- [N2YO Website](https://www.n2yo.com/) - Visualiser les satellites en ligne

---

## 🛠️ Debugging

### Vérifier une Requête

1. **Ouvrir la console** (F12)
2. **Onglet Network**
3. **Démarrer le suivi**
4. **Voir la requête** à N2YO
5. **Cliquer** dessus pour voir :
   - Request URL
   - Response
   - Status Code

### Logs Utiles

```javascript
// Dans app.js
console.log('Request URL:', url);
console.log('Response data:', data);
console.log('Transactions used:', data.info.transactionscount);
console.log('Satellites found:', data.info.satcount);
```

---

## ❓ FAQ API

**Q : Combien de transactions gratuites?**  
A : Variable, généralement ~1000/jour. Vérifiez dans vos réponses API.

**Q : Puis-je utiliser sans clé API?**  
A : Non, la clé est obligatoire pour toutes les requêtes.

**Q : Les données sont en temps réel?**  
A : Quasi temps-réel, mises à jour fréquemment depuis Space-Track.

**Q : Puis-je tracker n'importe quel satellite?**  
A : Oui, si vous avez son NORAD ID.

**Q : Quelle est la précision?**  
A : Très bonne (~1 km) pour satellites actifs.

**Q : Puis-je revendre ces données?**  
A : Non, consultez les [Terms of Service](https://www.n2yo.com/about/?a=tos).

---

**Bon développement avec l'API N2YO! 📡🛰️**
