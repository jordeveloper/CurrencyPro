# ⚡ Guide de Démarrage Rapide - Radar Spatial

## 🚀 En 5 Minutes

### Étape 1️⃣ : Obtenir une Clé API (2 min)

1. Allez sur **[https://www.n2yo.com/login/register/](https://www.n2yo.com/login/register/)**
2. Créez un compte gratuit (email + mot de passe)
3. Vérifiez votre email
4. Connectez-vous
5. Allez sur **[https://www.n2yo.com/api/](https://www.n2yo.com/api/)**
6. **Copiez votre clé API** (format: `XXXXXX-XXXXXX-XXXXXX-XXX`)

💡 **Astuce** : Gardez cet onglet ouvert, vous aurez besoin de la clé.

---

### Étape 2️⃣ : Lancer l'Application (1 min)

#### Option A - Double-clic (Plus Rapide)
1. Téléchargez le dossier `satellite-radar`
2. **Double-cliquez** sur `index.html`
3. L'app s'ouvre dans votre navigateur

#### Option B - Serveur Local (Recommandé)
```bash
cd satellite-radar
python3 -m http.server 8000
```
Puis ouvrez **[http://localhost:8000](http://localhost:8000)**

---

### Étape 3️⃣ : Configuration (1 min)

1. **Collez votre clé API** dans le champ "Clé API N2YO"
2. Cliquez sur **"Enregistrer"**
3. **Autorisez la géolocalisation** quand le navigateur demande
4. ✅ Votre position s'affiche automatiquement

---

### Étape 4️⃣ : Suivre les Satellites (30 sec)

1. Choisissez une catégorie (commencez avec **"Station Spatiale ISS"**)
2. Ajustez le rayon si vous voulez (1000 km par défaut)
3. Cliquez sur **"Démarrer le Suivi"**
4. 🎉 **Regardez les satellites apparaître!**

---

## 🎮 Comment Utiliser l'Application

### 🌍 Globe 3D (à gauche)
- **Faire pivoter** : Clic gauche + glisser
- **Zoomer** : Molette de la souris
- **Point vert** = Vous
- **Points rouges** = Satellites

### 📡 Radar (à droite)
- **Centre vert** = Vous
- **Points rouges** = Satellites au-dessus de vous
- **Distance** = Plus c'est loin du centre, plus c'est éloigné

### 📋 Liste (en bas)
- **Cards** = Info détaillée de chaque satellite
- **Scroll** si beaucoup de satellites
- **Hover** pour effet visuel

---

## ✨ Premiers Tests

### 🛰️ Voir l'ISS (Station Spatiale)
1. Catégorie : **"Station Spatiale (ISS)"**
2. Rayon : **5000 km**
3. Démarrer le suivi
4. Si l'ISS est au-dessus de votre hémisphère, elle apparaît!

### 🌐 Voir tous les satellites GPS
1. Catégorie : **"GPS Opérationnel"**
2. Rayon : **1000 km**
3. Vous devriez voir plusieurs satellites GPS (ils sont nombreux)

### 🌍 Voir TOUS les satellites proches
1. Catégorie : **"Tous"**
2. Rayon : **500 km**
3. Vous verrez tous les objets spatiaux proches de vous

---

## 🔧 Résolution Rapide de Problèmes

### ❌ "Erreur API: 401"
➡️ **Solution** : Votre clé API est incorrecte
- Re-copiez la clé depuis N2YO.com
- Assurez-vous de cliquer sur "Enregistrer"

### ❌ "Impossible de détecter la position"
➡️ **Solution** : Géolocalisation bloquée
- Cliquez sur le cadenas 🔒 dans la barre d'adresse
- Autorisez la localisation
- Rafraîchissez la page

### ❌ "Aucun satellite détecté"
➡️ **Solutions** :
- Augmentez le rayon à 2000-5000 km
- Changez de catégorie (essayez "GPS Opérationnel")
- Certains satellites ne sont pas toujours visibles

### ❌ Globe noir / pas de 3D
➡️ **Solution** : WebGL désactivé
- Utilisez Chrome ou Firefox récent
- Vérifiez que WebGL est activé : [webglreport.com](https://webglreport.com/)

### ❌ "CORS Error"
➡️ **Solution** : Utilisez un serveur HTTP
- Ne pas ouvrir avec `file://`
- Utilisez Python, Node, ou Live Server

---

## 📱 Sur Mobile

L'application fonctionne aussi sur mobile!

1. **Ouvrez** l'application dans votre navigateur mobile
2. **Autorisez** la géolocalisation
3. **Touchez et glissez** pour pivoter le globe
4. **Pinch to zoom** sur le globe
5. Tout le reste fonctionne pareil

---

## 💡 Astuces Pro

### 🔍 Trouver l'ISS
L'ISS fait le tour de la Terre en ~90 minutes. Si vous ne la voyez pas:
- Revenez dans 45 minutes
- Ou augmentez le rayon à 5000 km

### 📊 Économiser les Requêtes API
- N2YO limite les transactions gratuites
- Ne laissez pas le suivi tourner inutilement
- Cliquez sur "Arrêter" quand vous avez fini

### 🌍 Tester avec d'autres positions
Pour tester une autre ville:
1. Ouvrez la console (F12)
2. Tapez:
```javascript
state.userPosition = { lat: 40.7128, lng: -74.0060, alt: 0 }; // New York
updateGlobeUserPosition();
```

### 🎨 Personnaliser les Couleurs
Dans `styles.css`, modifiez les variables `:root`:
```css
:root {
    --primary-color: #0066cc;    /* Changez cette couleur */
    --secondary-color: #00cc66;  /* Et celle-ci */
}
```

---

## 📊 Catégories Populaires

| Catégorie | Satellites Typiques | Rayon Recommandé |
|-----------|-------------------|------------------|
| ISS | 1 | 5000 km |
| GPS | 4-8 | 1000 km |
| Météo | 1-3 | 2000 km |
| Communication | 10+ | 1000 km |
| Tous | 50+ | 500 km |

---

## ⏱️ Quand Observer l'ISS

L'ISS est visible à l'œil nu! Pour savoir quand:
1. Lancez l'app avec catégorie "ISS"
2. Si l'ISS apparaît, notez sa position
3. Utilisez [spotthestation.nasa.gov](https://spotthestation.nasa.gov/) pour les horaires de passage visibles

---

## 🎓 Pour Aller Plus Loin

### 📚 Documentation Complète
- **README.md** : Vue d'ensemble
- **FEATURES.md** : Toutes les fonctionnalités
- **INSTALLATION.md** : Installation détaillée
- **CONTRIBUTING.md** : Pour contribuer

### 🔗 Ressources Externes
- [N2YO Satellite Database](https://www.n2yo.com/)
- [Heavens Above](https://www.heavens-above.com/)
- [Spot The Station (NASA)](https://spotthestation.nasa.gov/)
- [Celestrak](https://celestrak.com/)

---

## 🆘 Besoin d'Aide?

1. **Lisez la doc** : README.md et INSTALLATION.md
2. **Vérifiez les issues** GitHub
3. **Créez une issue** si problème persistant
4. **Ouvrez la console** (F12) pour voir les erreurs

---

## ✅ Checklist de Départ

- [ ] Clé API N2YO obtenue
- [ ] Application lancée
- [ ] Clé API enregistrée
- [ ] Géolocalisation autorisée
- [ ] Position détectée
- [ ] Catégorie sélectionnée
- [ ] Suivi démarré
- [ ] Satellites visibles!

---

**Félicitations! Vous êtes prêt à explorer l'espace! 🛰️🚀✨**

*Temps total : ~5 minutes*
*Difficulté : ⭐ Facile*
*Fun : ⭐⭐⭐⭐⭐*
