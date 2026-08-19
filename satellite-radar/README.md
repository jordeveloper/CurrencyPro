# 🛰️ Radar Spatial - Suivi des Satellites en Temps Réel

Une application web interactive pour visualiser et suivre les satellites et engins spatiaux en temps réel au-dessus de votre position.

## 🌟 Fonctionnalités

- **Vue Globe 3D**: Visualisation interactive de la Terre avec Three.js
- **Radar Spatial**: Vue radar 2D montrant les satellites au-dessus de votre position
- **Suivi en Temps Réel**: Mise à jour automatique toutes les 10 secondes
- **Géolocalisation**: Détection automatique de votre position
- **Filtrage**: Filtrez par catégorie de satellites (ISS, GPS, météo, communication, etc.)
- **Rayon Configurable**: Ajustez le rayon de recherche de 50 à 5000 km
- **Liste Détaillée**: Informations complètes sur chaque satellite détecté

## 🚀 Démarrage Rapide

### Prérequis

1. **Clé API N2YO**: 
   - Inscrivez-vous sur [N2YO.com](https://www.n2yo.com/login/register/)
   - Obtenez votre clé API gratuite
   - L'API est gratuite avec des limites de transactions

### Installation

1. Clonez ou téléchargez ce dépôt
2. Ouvrez `index.html` dans un navigateur web moderne

**OU**

Servez les fichiers avec un serveur HTTP local:

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

### Utilisation

1. **Entrez votre clé API N2YO** dans le champ prévu et cliquez sur "Enregistrer"
2. **Autorisez la géolocalisation** lorsque votre navigateur le demande
3. **Sélectionnez une catégorie** de satellites (par défaut: Station Spatiale ISS)
4. **Ajustez le rayon de recherche** selon vos besoins
5. **Cliquez sur "Démarrer le Suivi"** pour commencer

## 🎮 Contrôles

### Vue Globe 3D
- **Clic gauche + Glisser**: Faire pivoter la Terre
- **Molette de la souris**: Zoom avant/arrière
- **Point vert**: Votre position
- **Points rouges**: Satellites détectés

### Vue Radar
- **Centre vert**: Votre position
- **Points rouges**: Satellites au-dessus de vous
- **Cercles concentriques**: Distances relatives

## 📡 Catégories de Satellites

- **Tous**: Tous les satellites visibles
- **Station Spatiale (ISS)**: Station Spatiale Internationale
- **GPS Opérationnel**: Satellites de navigation GPS
- **GLONASS**: Système de navigation russe
- **Galileo**: Système de navigation européen
- **Satellites Géostationnaires**: Satellites en orbite géostationnaire
- **Météo**: Satellites météorologiques
- **Communication**: Satellites de télécommunication
- **Observation Terrestre**: Satellites d'imagerie et observation
- **Amateur Radio**: Satellites radioamateurs

## 🔧 Technologies Utilisées

- **Three.js**: Rendu 3D de la Terre et visualisation spatiale
- **N2YO API**: Données de suivi des satellites en temps réel
- **Canvas API**: Visualisation radar 2D
- **Geolocation API**: Détection de la position de l'utilisateur
- **LocalStorage**: Sauvegarde de la clé API

## 📊 API N2YO

L'application utilise l'API REST N2YO pour récupérer les données satellites:

- **Endpoint utilisé**: `/above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}`
- **Limite**: 300 secondes de données futures maximum
- **Taux de rafraîchissement**: 10 secondes par défaut
- **Limitations**: L'API gratuite a des limites de transactions

## 🌐 Compatibilité

- Chrome/Edge (recommandé)
- Firefox
- Safari
- Opera

**Note**: La géolocalisation nécessite HTTPS en production (ou localhost pour le développement).

## 🔒 Sécurité et Confidentialité

- Votre clé API est stockée localement dans votre navigateur
- Aucune donnée n'est envoyée à des serveurs tiers (sauf N2YO pour les données satellites)
- La géolocalisation nécessite votre consentement explicite

## 📝 Développement

### Structure des fichiers

```
satellite-radar/
├── index.html      # Structure HTML de l'application
├── styles.css      # Styles et thème visuel
├── app.js          # Logique JavaScript principale
└── README.md       # Documentation
```

### Personnalisation

Vous pouvez personnaliser:
- Les couleurs dans `styles.css` (variables CSS dans `:root`)
- La fréquence de mise à jour dans `app.js` (variable `trackingInterval`)
- Les catégories de satellites dans le select HTML

## 🐛 Résolution de Problèmes

### "Erreur API: 401"
- Vérifiez que votre clé API est correcte
- Assurez-vous d'avoir cliqué sur "Enregistrer"

### "Impossible de détecter la position"
- Vérifiez les permissions de géolocalisation de votre navigateur
- L'application utilisera Paris comme position par défaut

### "Aucun satellite détecté"
- Augmentez le rayon de recherche
- Changez de catégorie de satellites
- Certaines catégories ont peu de satellites actifs

### CORS Errors
- Servez l'application via un serveur HTTP (pas `file://`)
- L'API N2YO supporte CORS pour les requêtes web

## 📄 Licence

Ce projet est sous licence GNU General Public License v3.0 - voir le fichier LICENSE pour plus de détails.

## 🙏 Crédits

- **N2YO.com**: Pour l'API de suivi des satellites
- **Three.js**: Pour le moteur de rendu 3D
- **Space-Track.org**: Source des données de surveillance spatiale

## 🚀 Améliorations Futures

- [ ] Trajectoires prédictives des satellites
- [ ] Notifications de passages visibles de l'ISS
- [ ] Mode nuit/jour pour le globe
- [ ] Textures réalistes de la Terre
- [ ] Export des données en CSV/JSON
- [ ] Historique des détections
- [ ] Mode réalité augmentée (AR)
- [ ] Support des constellations Starlink

## 📞 Support

Pour toute question ou problème:
- Consultez la [documentation N2YO API](https://www.n2yo.com/api/)
- Vérifiez les issues GitHub de ce projet

---

**Bon suivi spatial! 🛰️🌍✨**
