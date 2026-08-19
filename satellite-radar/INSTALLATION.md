# 📦 Guide d'Installation - Radar Spatial

## Installation Locale

### Option 1: Ouverture Directe (Plus Simple)

1. **Téléchargez** tous les fichiers du projet
2. **Double-cliquez** sur `index.html`
3. L'application s'ouvrira dans votre navigateur par défaut

⚠️ **Note**: Certaines fonctionnalités (géolocalisation) peuvent nécessiter un serveur HTTP.

### Option 2: Serveur HTTP Local (Recommandé)

#### Avec Python (préinstallé sur Mac/Linux)

```bash
cd satellite-radar
python3 -m http.server 8000
```

Puis ouvrez: `http://localhost:8000`

#### Avec Node.js

```bash
cd satellite-radar
npm install
npm start
```

Ou directement:

```bash
npx http-server satellite-radar -p 8000
```

#### Avec PHP

```bash
cd satellite-radar
php -S localhost:8000
```

#### Avec Live Server (VS Code)

1. Installez l'extension "Live Server" dans VS Code
2. Clic droit sur `index.html`
3. Sélectionnez "Open with Live Server"

## Configuration de l'API N2YO

### 1. Créer un compte N2YO

1. Allez sur [https://www.n2yo.com/login/register/](https://www.n2yo.com/login/register/)
2. Remplissez le formulaire d'inscription
3. Vérifiez votre email
4. Connectez-vous

### 2. Obtenir votre clé API

1. Une fois connecté, allez sur [https://www.n2yo.com/api/](https://www.n2yo.com/api/)
2. Votre clé API s'affiche en haut de la page
3. Copiez cette clé (format: `XXXXXX-XXXXXX-XXXXXX-XXX`)

### 3. Configurer l'application

1. Ouvrez l'application dans votre navigateur
2. Collez votre clé API dans le champ "Clé API N2YO"
3. Cliquez sur "Enregistrer"
4. La clé est maintenant sauvegardée localement

## Autorisations du Navigateur

### Géolocalisation

L'application demandera l'accès à votre position. Pour autoriser:

**Chrome/Edge:**
1. Cliquez sur l'icône de cadenas dans la barre d'adresse
2. Autorisez la localisation

**Firefox:**
1. Cliquez sur l'icône "i" dans la barre d'adresse
2. Permissions → Localisation → Autoriser

**Safari:**
1. Safari → Préférences → Sites Web → Localisation
2. Autorisez le site

## Déploiement en Production

### Netlify (Gratuit)

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Connectez votre dépôt GitHub
3. Définissez les paramètres:
   - Build command: (vide)
   - Publish directory: `satellite-radar`
4. Déployez

### Vercel (Gratuit)

1. Créez un compte sur [Vercel](https://vercel.com/)
2. Importez votre projet GitHub
3. Déployez automatiquement

### GitHub Pages (Gratuit)

1. Poussez votre code sur GitHub
2. Allez dans Settings → Pages
3. Source: Deploy from branch → `main`
4. Folder: `/satellite-radar` (ou root si les fichiers sont à la racine)
5. Sauvegardez

Votre site sera disponible à: `https://username.github.io/repo-name/`

### Hébergement Classique

1. Uploadez tous les fichiers via FTP vers votre hébergeur web
2. Assurez-vous que `index.html` est accessible
3. L'application est prête!

## Configuration HTTPS

⚠️ **Important**: La géolocalisation nécessite HTTPS en production.

La plupart des services d'hébergement modernes (Netlify, Vercel, GitHub Pages) fournissent HTTPS automatiquement.

Si vous hébergez vous-même:
1. Utilisez [Let's Encrypt](https://letsencrypt.org/) pour un certificat SSL gratuit
2. Ou utilisez Cloudflare pour un proxy HTTPS gratuit

## Dépannage de l'Installation

### "Impossible de charger Three.js"

- Vérifiez votre connexion Internet
- Le CDN Three.js doit être accessible
- Alternative: téléchargez Three.js localement

### "CORS Policy Error"

- Utilisez un serveur HTTP local (pas `file://`)
- Les navigateurs bloquent certaines requêtes en mode fichier local

### "Clé API invalide"

- Vérifiez que vous avez copié la clé complète
- Assurez-vous d'être connecté à N2YO.com
- Attendez quelques minutes après la création du compte

### Port déjà utilisé

Si le port 8000 est occupé:

```bash
# Essayez un autre port
python3 -m http.server 8080
# ou
npx http-server -p 8080
```

## Vérification de l'Installation

Une fois l'application lancée, vous devriez voir:

✅ L'interface du radar spatial  
✅ Un globe 3D interactif  
✅ Les champs de configuration  
✅ La demande de géolocalisation  

Si tout fonctionne, vous êtes prêt à suivre les satellites! 🛰️

## Support Technique

### Logs du navigateur

Ouvrez la console développeur (F12) pour voir les erreurs:
- Chrome/Edge: F12 ou Ctrl+Shift+I
- Firefox: F12 ou Ctrl+Shift+K
- Safari: Cmd+Option+I

### Problèmes courants

| Symptôme | Solution |
|----------|----------|
| Globe noir | Vérifiez la console, WebGL doit être supporté |
| Pas de satellites | Augmentez le rayon, changez la catégorie |
| Position incorrecte | Autorisez la géolocalisation, ou entrez manuellement |
| API errors | Vérifiez la clé API et les limites de requêtes |

## Mise à Jour

Pour mettre à jour l'application:

1. Téléchargez la nouvelle version
2. Remplacez les fichiers (sauf si vous avez fait des modifications)
3. Rafraîchissez le cache du navigateur (Ctrl+F5)
4. Votre clé API sera conservée (stockée dans localStorage)

---

**Installation réussie? Bon suivi spatial! 🚀**
