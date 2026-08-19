# 🎮 Mode Démo - Radar Spatial

## 🌟 Qu'est-ce que le Mode Démo?

Le mode démo vous permet de **tester l'application sans clé API N2YO**. Il utilise des données satellites simulées pour vous montrer comment fonctionne le radar spatial.

## ⚡ Démarrage Rapide

### Option 1 - Double-clic
1. Ouvrez le fichier **`demo-offline.html`**
2. C'est tout! Pas besoin de clé API.

### Option 2 - Serveur Local
```bash
cd satellite-radar
python3 -m http.server 8000
```
Puis ouvrez [http://localhost:8000/demo-offline.html](http://localhost:8000/demo-offline.html)

## 🎯 Fonctionnalités du Mode Démo

### ✅ Ce qui fonctionne
- ✅ Globe 3D interactif
- ✅ Vue radar 2D
- ✅ Affichage des satellites
- ✅ Contrôles de rotation/zoom
- ✅ Liste des satellites
- ✅ Simulation de mouvement orbital
- ✅ Changement de position
- ✅ Différents scénarios

### ❌ Limitations
- ❌ Pas de données réelles
- ❌ Pas de connexion API N2YO
- ❌ Positions satellites simulées
- ❌ Pas de mise à jour temps réel

## 🗺️ Positions Disponibles

Vous pouvez changer votre position de démonstration:

| Ville | Coordonnées |
|-------|-------------|
| **Paris** | 48.8566°N, 2.3522°E |
| **New York** | 40.7128°N, 74.0060°W |
| **Tokyo** | 35.6762°N, 139.6503°E |
| **Sydney** | 33.8688°S, 151.2093°E |
| **Londres** | 51.5074°N, 0.1278°W |

## 🛰️ Scénarios de Démo

### 1. ISS au-dessus de vous
**Catégorie**: Station Spatiale  
**Satellites**: 1 (ISS)  
**Altitude**: ~418 km  

Simule le passage de la Station Spatiale Internationale au-dessus de votre position.

### 2. Constellation GPS
**Catégorie**: Navigation GPS  
**Satellites**: 5  
**Altitude**: ~20,200 km  

Montre plusieurs satellites GPS de la constellation américaine.

### 3. Satellites Starlink
**Catégorie**: Communication  
**Satellites**: 7  
**Altitude**: ~550 km  

Simule une partie de la constellation Starlink de SpaceX.

### 4. Satellites Météo
**Catégorie**: Observation  
**Satellites**: 3  
**Altitude**: ~800-900 km  

Affiche des satellites météorologiques comme NOAA et METOP.

### 5. Tous Types
**Catégorie**: Mixte  
**Satellites**: 7  
**Altitudes**: Variables  

Mélange de différents types de satellites.

## 🎮 Comment Utiliser

### Étape 1 - Choisir une Position
1. Sélectionnez une ville dans le menu déroulant
2. Votre position est mise à jour sur le globe

### Étape 2 - Choisir un Scénario
1. Sélectionnez un type de satellites
2. Chaque scénario a des satellites différents

### Étape 3 - Lancer la Démo
1. Cliquez sur **"Lancer la Démo"**
2. Les satellites apparaissent
3. Ils se déplacent toutes les 2 secondes

### Étape 4 - Observer
- **Globe 3D**: Voyez les satellites orbiter
- **Radar**: Voyez leur position relative
- **Liste**: Consultez les détails

### Étape 5 - Arrêter
1. Cliquez sur **"Arrêter"**
2. Le mouvement s'arrête
3. Vous pouvez relancer une autre démo

## 🎨 Contrôles

### Globe 3D
- **Rotation**: Clic gauche + Glisser
- **Zoom**: Molette de la souris
- **Auto-rotation**: Automatique si pas de clic

### Radar
- **Vue fixe**: Pas d'interaction
- **Mise à jour**: Automatique pendant la démo

## 🔍 Différences avec l'Application Réelle

| Fonctionnalité | Mode Démo | Application Réelle |
|----------------|-----------|-------------------|
| Données | ⚠️ Simulées | ✅ Temps réel |
| Clé API | ❌ Pas nécessaire | ✅ Obligatoire |
| Satellites | 🔢 Fixes | 🔢 Variables |
| Positions | 📍 Simulées | 📍 Réelles |
| Mouvement | 🔄 Simplifié | 🔄 Orbital précis |
| Mise à jour | ⏱️ 2 secondes | ⏱️ 10 secondes |
| Géolocalisation | ❌ Manuelle | ✅ Automatique |

## 💡 Cas d'Usage du Mode Démo

### 🎓 Éducation
- **Présentation** sans connexion Internet
- **Démonstration** du concept
- **Formation** des utilisateurs

### 🧪 Tests
- **Tester l'interface** sans API
- **Vérifier** la compatibilité
- **Debug** du frontend

### 🎨 Développement
- **Développer** sans limite API
- **Tester** les modifications visuelles
- **Prototypage** rapide

### 🚀 Marketing
- **Démonstrations** commerciales
- **Captures d'écran** pour documentation
- **Vidéos** promotionnelles

## 🔄 Simulation du Mouvement

Les satellites simulés se déplacent de façon simplifiée:

```javascript
// Mouvement toutes les 2 secondes
- Longitude: +0.05° par update
- Latitude: ±0.02° aléatoire (oscillation)
- Altitude: Fixe
```

Ce n'est **pas** un modèle orbital réaliste, mais ça permet de voir le mouvement.

## 📊 Données Simulées

### Exemple de Satellite ISS
```json
{
  "satid": 25544,
  "satname": "SPACE STATION (ISS)",
  "satlat": 48.5,
  "satlon": 2.0,
  "satalt": 418.5
}
```

### Satellites Inclus

| ID | Nom | Type | Altitude |
|----|-----|------|----------|
| 25544 | ISS | Station | 418 km |
| 32711 | GPS BIIR-2 | Navigation | 20200 km |
| 44713 | STARLINK-1007 | Comm | 550 km |
| 33591 | NOAA 19 | Météo | 870 km |
| 28474 | GPS BIIR-7 | Navigation | 20180 km |
| ... | ... | ... | ... |

## 🚀 Passer au Mode Réel

Une fois que vous avez testé la démo:

1. **Obtenez une clé API** sur [N2YO.com](https://www.n2yo.com/login/register/)
2. **Ouvrez** `index.html` (au lieu de demo-offline.html)
3. **Entrez votre clé API**
4. **Profitez** des vraies données satellites!

## 🐛 Problèmes Courants

### Globe ne s'affiche pas
➡️ **Solution**: WebGL requis
- Testez sur [webglreport.com](https://webglreport.com/)
- Utilisez Chrome ou Firefox récent

### Satellites ne bougent pas
➡️ **Solution**: Cliquez sur "Lancer la Démo"
- Le mouvement commence après le clic
- Vérifiez la console (F12) pour erreurs

### Rien ne se passe
➡️ **Solution**: Ouvrez avec un serveur HTTP
- Pas directement avec `file://`
- Utilisez Python, Node, ou Live Server

## 📝 Notes Techniques

### Technologies
- **Three.js**: Globe 3D
- **Canvas API**: Radar 2D
- **Vanilla JavaScript**: Logique
- **Pas de backend**: Tout en frontend

### Performance
- **Léger**: Aucune requête réseau
- **Rapide**: Données en mémoire
- **Fluide**: 60 FPS pour le globe

### Compatibilité
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile (iOS/Android)

## 🎯 Améliorations Futures Possibles

- [ ] Plus de positions (toutes les capitales)
- [ ] Éditeur de satellites custom
- [ ] Enregistrement de scénarios
- [ ] Export des captures
- [ ] Mode replay
- [ ] Orbites réalistes

## 📚 Ressources

- **README.md**: Documentation principale
- **QUICKSTART.md**: Démarrage rapide mode réel
- **API_GUIDE.md**: Guide API N2YO
- **FEATURES.md**: Fonctionnalités complètes

## ❓ FAQ

**Q: Puis-je ajouter mes propres satellites?**  
A: Oui! Éditez `demo.js` → `simulatedSatellites`

**Q: Les données sont-elles précises?**  
A: Non, c'est une simulation pour démonstration

**Q: Puis-je utiliser ça en production?**  
A: Non, utilisez `index.html` avec l'API réelle

**Q: Ça fonctionne hors ligne?**  
A: Oui, sauf pour le CDN Three.js (téléchargez-le localement si besoin)

**Q: Puis-je changer les couleurs?**  
A: Oui, éditez `styles.css` → `:root` variables

---

**Profitez du mode démo! 🎮🛰️**

*Pas besoin de clé API • Données simulées • Test immédiat*
