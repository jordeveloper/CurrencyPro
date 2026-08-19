# 📑 Index - Radar Spatial

Guide complet de navigation dans la documentation du projet.

---

## 🚀 Démarrage Rapide

### Pour Commencer (Choisissez votre parcours)

#### 🎮 Je veux tester rapidement (0 min)
➡️ Ouvrez **`demo-offline.html`** (pas de configuration)

#### ⚡ Je veux l'app réelle (5 min)
➡️ Lisez **[QUICKSTART.md](QUICKSTART.md)**

#### 📚 Je veux tout comprendre (15 min)
➡️ Lisez **[README.md](README.md)** puis **[FEATURES.md](FEATURES.md)**

#### 👨‍💻 Je suis développeur (20 min)
➡️ Lisez **[API_GUIDE.md](API_GUIDE.md)** puis **[CONTRIBUTING.md](CONTRIBUTING.md)**

---

## 📖 Documentation par Type

### 🎯 Pour les Utilisateurs

| Document | Objectif | Temps de lecture |
|----------|----------|------------------|
| **[README.md](README.md)** | Vue d'ensemble complète | 10 min |
| **[QUICKSTART.md](QUICKSTART.md)** | Démarrage en 5 minutes | 5 min |
| **[INSTALLATION.md](INSTALLATION.md)** | Installation détaillée | 8 min |
| **[FEATURES.md](FEATURES.md)** | Toutes les fonctionnalités | 12 min |
| **[DEMO.md](DEMO.md)** | Guide du mode démo | 6 min |

### 👨‍💻 Pour les Développeurs

| Document | Objectif | Temps de lecture |
|----------|----------|------------------|
| **[API_GUIDE.md](API_GUIDE.md)** | Documentation API N2YO | 15 min |
| **[CONTRIBUTING.md](CONTRIBUTING.md)** | Guide de contribution | 10 min |
| **[CHANGELOG.md](CHANGELOG.md)** | Historique des versions | 5 min |

### 📄 Fichiers Techniques

| Fichier | Description |
|---------|-------------|
| **[LICENSE](LICENSE)** | Licence MIT |
| **[package.json](package.json)** | Configuration npm |
| **[.gitignore](.gitignore)** | Fichiers ignorés par git |

---

## 🎯 Navigation par Objectif

### 🎮 Je veux TESTER l'application

1. **Sans configuration** (immédiat)
   - Ouvrir `demo-offline.html`
   - Voir [DEMO.md](DEMO.md) pour aide

2. **Avec vraies données** (5 min)
   - Suivre [QUICKSTART.md](QUICKSTART.md)
   - Obtenir clé API N2YO
   - Lancer `index.html`

### 📦 Je veux INSTALLER l'application

1. **Installation locale**
   - Voir [INSTALLATION.md](INSTALLATION.md) section "Installation Locale"

2. **Déploiement production**
   - Voir [INSTALLATION.md](INSTALLATION.md) section "Déploiement"

3. **Configuration API**
   - Voir [API_GUIDE.md](API_GUIDE.md) section "Obtention de la Clé"

### 🔍 Je veux COMPRENDRE comment ça fonctionne

1. **Architecture globale**
   - Lire [README.md](README.md) section "Technologies"
   - Lire [FEATURES.md](FEATURES.md) section "Fonctionnalités Techniques"

2. **API N2YO**
   - Lire [API_GUIDE.md](API_GUIDE.md) entier

3. **Interface utilisateur**
   - Lire [FEATURES.md](FEATURES.md) sections visualisation

### 🛠️ Je veux DÉVELOPPER/CONTRIBUER

1. **Setup développement**
   - Lire [CONTRIBUTING.md](CONTRIBUTING.md) section "Configuration"

2. **Comprendre le code**
   - Voir [FEATURES.md](FEATURES.md) section "Fonctionnalités Techniques"
   - Voir [API_GUIDE.md](API_GUIDE.md) section "Intégration"

3. **Soumettre une contribution**
   - Lire [CONTRIBUTING.md](CONTRIBUTING.md) entier
   - Voir [CHANGELOG.md](CHANGELOG.md) pour versions prévues

### 🐛 Je veux RÉSOUDRE un problème

1. **Problèmes courants**
   - [QUICKSTART.md](QUICKSTART.md) section "Résolution Rapide"
   - [INSTALLATION.md](INSTALLATION.md) section "Dépannage"
   - [DEMO.md](DEMO.md) section "Problèmes Courants"

2. **Erreurs API**
   - [API_GUIDE.md](API_GUIDE.md) section "Gestion des Erreurs"

3. **Questions fréquentes**
   - [README.md](README.md) section FAQ (si présente)
   - [API_GUIDE.md](API_GUIDE.md) section "FAQ"

---

## 📁 Structure des Fichiers

### Fichiers Principaux (Application)

```
satellite-radar/
│
├── 🌐 index.html              Application principale
├── 🎮 demo-offline.html       Mode démo (sans API)
├── 🎨 styles.css              Styles CSS
├── ⚙️ app.js                  Logique principale
├── 🎯 demo.js                 Logique démo
└── 📦 package.json            Configuration npm
```

### Documentation Utilisateur

```
📚 Documentation/
│
├── 📖 README.md               Documentation principale
├── ⚡ QUICKSTART.md           Démarrage rapide
├── 📦 INSTALLATION.md         Installation détaillée
├── 🌟 FEATURES.md             Fonctionnalités
└── 🎮 DEMO.md                 Guide mode démo
```

### Documentation Développeur

```
👨‍💻 Développement/
│
├── 📡 API_GUIDE.md            Documentation API
├── 🤝 CONTRIBUTING.md         Guide contribution
├── 📝 CHANGELOG.md            Historique versions
└── 📑 INDEX.md                Ce fichier
```

### Fichiers Système

```
⚙️ Configuration/
│
├── 📄 LICENSE                 Licence MIT
├── 🚫 .gitignore              Exclusions Git
└── 📦 package.json            NPM config
```

---

## 🔍 Index par Sujet

### API N2YO

- **Documentation complète** → [API_GUIDE.md](API_GUIDE.md)
- **Obtenir clé API** → [API_GUIDE.md](API_GUIDE.md#-obtention-de-la-clé-api)
- **Endpoints** → [API_GUIDE.md](API_GUIDE.md#-endpoint-utilisé--above)
- **Gestion erreurs** → [API_GUIDE.md](API_GUIDE.md#-gestion-des-erreurs)
- **Exemples code** → [API_GUIDE.md](API_GUIDE.md#exemple-de-requête)

### Installation

- **Installation locale** → [INSTALLATION.md](INSTALLATION.md#installation-locale)
- **Serveur HTTP** → [INSTALLATION.md](INSTALLATION.md#option-2-serveur-http-local-recommandé)
- **Configuration API** → [INSTALLATION.md](INSTALLATION.md#configuration-de-lapi-n2yo)
- **Déploiement** → [INSTALLATION.md](INSTALLATION.md#déploiement-en-production)
- **Dépannage** → [INSTALLATION.md](INSTALLATION.md#dépannage-de-linstallation)

### Fonctionnalités

- **Globe 3D** → [FEATURES.md](FEATURES.md#1--visualisation-globe-3d)
- **Radar 2D** → [FEATURES.md](FEATURES.md#2--vue-radar-2d)
- **Suivi temps réel** → [FEATURES.md](FEATURES.md#3--suivi-en-temps-réel)
- **Géolocalisation** → [FEATURES.md](FEATURES.md#4--géolocalisation)
- **Filtrage** → [FEATURES.md](FEATURES.md#5--filtrage-avancé)
- **Toutes les features** → [FEATURES.md](FEATURES.md#-fonctionnalités-principales)

### Mode Démo

- **Lancer la démo** → [DEMO.md](DEMO.md#-démarrage-rapide)
- **Scénarios** → [DEMO.md](DEMO.md#-scénarios-de-démo)
- **Positions** → [DEMO.md](DEMO.md#-positions-disponibles)
- **Utilisation** → [DEMO.md](DEMO.md#-comment-utiliser)
- **vs Mode réel** → [DEMO.md](DEMO.md#-différences-avec-lapplication-réelle)

### Contribution

- **Comment contribuer** → [CONTRIBUTING.md](CONTRIBUTING.md#-comment-contribuer)
- **Conventions code** → [CONTRIBUTING.md](CONTRIBUTING.md#-conventions-de-code)
- **Soumettre PR** → [CONTRIBUTING.md](CONTRIBUTING.md#-soumettre-des-modifications)
- **Checklist PR** → [CONTRIBUTING.md](CONTRIBUTING.md#-checklist-pr)

### Troubleshooting

- **Problèmes API** → [API_GUIDE.md](API_GUIDE.md#-gestion-des-erreurs)
- **Erreurs installation** → [INSTALLATION.md](INSTALLATION.md#dépannage-de-linstallation)
- **Bugs démo** → [DEMO.md](DEMO.md#-problèmes-courants)
- **Résolution rapide** → [QUICKSTART.md](QUICKSTART.md#-résolution-rapide-de-problèmes)

---

## 🎓 Parcours d'Apprentissage Recommandés

### 🟢 Niveau Débutant

**Objectif**: Utiliser l'application

1. 📖 [README.md](README.md) - Vue d'ensemble (10 min)
2. ⚡ [QUICKSTART.md](QUICKSTART.md) - Premier lancement (5 min)
3. 🎮 Tester `demo-offline.html` (5 min)
4. 🚀 Lancer l'app réelle avec API (5 min)

**Total**: ~25 minutes

### 🟡 Niveau Intermédiaire

**Objectif**: Comprendre et personnaliser

1. 🌟 [FEATURES.md](FEATURES.md) - Toutes les fonctionnalités (12 min)
2. 📡 [API_GUIDE.md](API_GUIDE.md) - API N2YO (15 min)
3. 📦 [INSTALLATION.md](INSTALLATION.md) - Déploiement (8 min)
4. 🎮 [DEMO.md](DEMO.md) - Mode démo avancé (6 min)

**Total**: ~40 minutes

### 🔴 Niveau Avancé

**Objectif**: Contribuer au projet

1. 👨‍💻 [CONTRIBUTING.md](CONTRIBUTING.md) - Guide complet (10 min)
2. 📝 [CHANGELOG.md](CHANGELOG.md) - Versions futures (5 min)
3. 📄 Lire le code source (`app.js`, `demo.js`) (20 min)
4. 🔧 Setup environnement de dev (15 min)

**Total**: ~50 minutes

---

## 📊 Statistiques de la Documentation

| Métrique | Valeur |
|----------|--------|
| **Nombre de docs** | 9 fichiers |
| **Pages totales** | ~80 pages A4 |
| **Mots totaux** | ~15,000 mots |
| **Temps lecture total** | ~90 minutes |
| **Langues** | Français |
| **Dernière MAJ** | 2026-08-19 |

---

## 🔗 Liens Externes Utiles

### Ressources API
- [N2YO API Officielle](https://www.n2yo.com/api/)
- [Inscription N2YO](https://www.n2yo.com/login/register/)
- [N2YO Database](https://www.n2yo.com/)

### Technologies
- [Three.js Documentation](https://threejs.org/docs/)
- [MDN Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Canvas API Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

### Données Satellites
- [Space-Track.org](https://www.space-track.org/)
- [Celestrak](https://celestrak.com/)
- [Spot The Station (NASA)](https://spotthestation.nasa.gov/)

### Hébergement
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 💡 Astuces de Navigation

### 🔍 Recherche Rapide

Pour trouver rapidement une information:
1. **Utilisez Ctrl+F** dans votre navigateur
2. **Cherchez par mot-clé** (API, installation, démo, etc.)
3. **Consultez la section** correspondante de cet index

### 📱 Navigation Mobile

Sur mobile:
- Tous les liens sont cliquables
- Tables scrollables horizontalement
- Code blocks avec syntax highlighting

### 🔖 Favoris Recommandés

Ajoutez à vos favoris:
- Ce fichier INDEX.md (navigation)
- QUICKSTART.md (référence rapide)
- API_GUIDE.md (si développeur)

---

## 📝 Mise à Jour de cet Index

Cet index est mis à jour à chaque:
- Ajout de documentation
- Modification de structure
- Nouvelle version majeure

**Dernière mise à jour**: 2026-08-19  
**Version**: 1.0.0

---

## ❓ Vous ne trouvez pas ce que vous cherchez?

1. **Consultez le README** → [README.md](README.md)
2. **Cherchez dans les docs** avec Ctrl+F
3. **Ouvrez une issue** sur GitHub
4. **Lisez les commentaires** dans le code source

---

**Bonne navigation dans la documentation! 📚🚀**
