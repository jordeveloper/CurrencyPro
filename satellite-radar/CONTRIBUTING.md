# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer au projet Radar Spatial! 

## 🌟 Comment Contribuer

### 🐛 Signaler un Bug

1. Vérifiez que le bug n'a pas déjà été signalé dans les [Issues](https://github.com/yourusername/satellite-radar-webapp/issues)
2. Créez une nouvelle issue avec le template "Bug Report"
3. Incluez:
   - Description détaillée du problème
   - Steps pour reproduire
   - Comportement attendu vs actuel
   - Screenshots si possible
   - Navigateur et OS
   - Console logs (F12)

### 💡 Proposer une Fonctionnalité

1. Vérifiez que la fonctionnalité n'existe pas déjà
2. Créez une issue avec le template "Feature Request"
3. Décrivez:
   - Le problème que ça résout
   - La solution proposée
   - Des alternatives envisagées
   - Mockups/exemples si pertinent

### 🔧 Soumettre des Modifications

#### Fork & Clone

```bash
# Fork le repo sur GitHub, puis:
git clone https://github.com/votre-username/satellite-radar-webapp.git
cd satellite-radar-webapp
```

#### Créer une Branche

```bash
git checkout -b feature/ma-fonctionnalite
# ou
git checkout -b fix/mon-correctif
```

#### Faire vos Modifications

1. Éditez les fichiers
2. Testez localement
3. Suivez les conventions de code (voir ci-dessous)

#### Tester

```bash
# Lancez un serveur local
python3 -m http.server 8000
# Testez dans plusieurs navigateurs
```

#### Commit

```bash
git add .
git commit -m "feat: Ajout de la fonctionnalité X"
# ou
git commit -m "fix: Correction du bug Y"
```

**Format des commits**:
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, pas de changement de code
- `refactor:` Refactorisation
- `test:` Ajout de tests
- `chore:` Maintenance

#### Push & Pull Request

```bash
git push origin feature/ma-fonctionnalite
```

Puis créez une Pull Request sur GitHub avec:
- Titre clair et descriptif
- Description détaillée des changements
- Référence aux issues liées (#123)
- Screenshots si pertinent

## 📋 Conventions de Code

### HTML

- Indentation: 4 espaces
- Attributs entre guillemets doubles
- Structure sémantique
- Commentaires pour les sections

```html
<!-- Section principale -->
<div id="main-content">
    <div class="container">
        <!-- Contenu -->
    </div>
</div>
```

### CSS

- Indentation: 4 espaces
- Propriétés ordonnées (positioning, display, box model, visual)
- Variables CSS pour les couleurs
- Mobile-first responsive

```css
.satellite-card {
    /* Positioning */
    position: relative;
    
    /* Display & Box Model */
    display: flex;
    padding: 15px;
    margin: 10px;
    
    /* Visual */
    background: var(--card-bg);
    border-radius: 10px;
    
    /* Misc */
    transition: all 0.3s;
}
```

### JavaScript

- Indentation: 4 espaces
- camelCase pour variables et fonctions
- Commentaires clairs
- Fonctions pures quand possible
- Gestion des erreurs avec try/catch

```javascript
// Fonction documentée
function updateSatellitePosition(satellite) {
    try {
        // Logique ici
        return calculatedPosition;
    } catch (error) {
        console.error('Erreur:', error);
        return null;
    }
}
```

### Nommage

- Variables: `camelCase` (`userPosition`, `apiKey`)
- Constantes: `UPPER_SNAKE_CASE` (`MAX_RADIUS`, `API_URL`)
- Fonctions: `camelCase` verbes (`fetchSatellites`, `updateRadar`)
- Classes CSS: `kebab-case` (`satellite-card`, `main-content`)

## 🎯 Domaines de Contribution

### 🐛 Corrections de Bugs
- Problèmes de géolocalisation
- Erreurs d'API
- Bugs d'affichage
- Problèmes de performance

### ✨ Nouvelles Fonctionnalités
- Trajectoires satellites
- Notifications
- Nouvelles visualisations
- Export de données
- Filtres avancés

### 📚 Documentation
- Améliorer le README
- Ajouter des tutoriels
- Traduire en d'autres langues
- Commenter le code

### 🎨 Design
- Améliorer l'UI/UX
- Thèmes alternatifs
- Animations
- Responsive design

### ⚡ Performance
- Optimisations rendering
- Réduction requêtes API
- Cache intelligent
- Bundle size

### 🧪 Tests
- Tests unitaires
- Tests d'intégration
- Tests de performance
- Tests de compatibilité

## 🔍 Checklist PR

Avant de soumettre votre PR, vérifiez:

- [ ] Le code fonctionne localement
- [ ] Testé sur Chrome, Firefox, Safari
- [ ] Testé sur mobile
- [ ] Pas de console errors
- [ ] Code formaté et indenté correctement
- [ ] Commentaires ajoutés si nécessaire
- [ ] Documentation mise à jour si pertinent
- [ ] Commits bien nommés
- [ ] PR description complète

## 🚀 Configuration Développement

### Prérequis

- Navigateur moderne (Chrome recommandé)
- Éditeur de code (VS Code recommandé)
- Git
- Python 3 ou Node.js (pour serveur local)

### Extensions VS Code Recommandées

- Live Server
- ESLint
- Prettier
- HTML CSS Support
- JavaScript (ES6) code snippets

### Serveur de Développement

```bash
# Python
python3 -m http.server 8000

# Node
npx http-server -p 8000

# Live Server (VS Code)
# Clic droit sur index.html → Open with Live Server
```

## 📖 Resources

### APIs & Documentation
- [N2YO API Docs](https://www.n2yo.com/api/)
- [Three.js Documentation](https://threejs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Satellite Data
- [Space-Track.org](https://www.space-track.org/)
- [Celestrak](https://celestrak.com/)
- [N2YO Satellite Database](https://www.n2yo.com/)

### Outils de Développement
- [Can I Use](https://caniuse.com/) - Compatibilité navigateurs
- [WebGL Report](https://webglreport.com/) - Test WebGL
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance

## ❓ Questions

Si vous avez des questions:

1. Consultez le [README.md](README.md)
2. Lisez les [Issues](https://github.com/yourusername/satellite-radar-webapp/issues)
3. Créez une nouvelle issue "Question"

## 📜 Code de Conduite

- Soyez respectueux et constructif
- Accueillez les nouveaux contributeurs
- Acceptez les critiques constructives
- Concentrez-vous sur ce qui est mieux pour le projet

## 🎉 Contributeurs

Un grand merci à tous les contributeurs!

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- Sera rempli automatiquement -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## 📄 Licence

En contribuant, vous acceptez que vos contributions soient sous licence GPL-3.0.

---

**Merci de contribuer au Radar Spatial! 🛰️🚀**
