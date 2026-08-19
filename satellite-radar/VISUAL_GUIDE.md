# 🎨 Guide Visuel - Radar Spatial

Guide illustré de l'interface et des fonctionnalités.

---

## 📱 Interface Globale

```
┌─────────────────────────────────────────────────────────────┐
│  🛰️ Radar Spatial                                           │
│  Suivi des satellites et engins spatiaux en temps réel      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🔧 PANNEAU DE CONTRÔLE                                       │
├─────────────────────────────────────────────────────────────┤
│ Clé API N2YO: [___________________________] [Enregistrer]   │
│ Position: 48.8566°, 2.3522° [Actualiser]                    │
│ Rayon: [━━━━━━●━━━] 1000 km                                  │
│ Catégorie: [Station Spatiale (ISS) ▼]                       │
│ [Démarrer le Suivi]  [Arrêter]                              │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────────────────┐
│  🌍 GLOBE 3D             │  📡 RADAR 2D                     │
│                          │                                  │
│       🌍                 │        ⊕                         │
│      /   \               │      /   \                       │
│     |  🟢 |              │     | 🟢 |                       │
│      \🔴🔴/               │      \🔴🔴/                       │
│                          │                                  │
│  Rotation: Clic+Glisser  │  Position: Centre               │
│  Zoom: Molette           │  Satellites: Points rouges      │
└──────────────────────────┴──────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📋 SATELLITES DÉTECTÉS                                       │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────┐ ┌───────────────┐ │
│ │ SPACE STATION   │ │ GPS BIIR-2      │ │ STARLINK-1007 │ │
│ │ ID: 25544       │ │ ID: 32711       │ │ ID: 44713     │ │
│ │ Alt: 418 km     │ │ Alt: 20200 km   │ │ Alt: 550 km   │ │
│ │ Lat: 48.5°      │ │ Lat: 50.2°      │ │ Lat: 49.2°    │ │
│ │ Lng: 2.0°       │ │ Lng: 1.5°       │ │ Lng: 1.8°     │ │
│ └─────────────────┘ └─────────────────┘ └───────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Suivi en cours...              Dernière MAJ: 14:35:42       │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Éléments de l'Interface

### 1. Header (En-tête)

```
┌─────────────────────────────────────────────────────┐
│  🛰️ Radar Spatial                                   │
│  Suivi des satellites et engins spatiaux en temps   │
│  réel                                               │
└─────────────────────────────────────────────────────┘
```

**Fonction**: Titre et description de l'application

### 2. Panneau de Contrôle

```
┌──────────────────────────────────────────────────┐
│ 🔑 Clé API N2YO                                  │
│ [XXXXXX-XXXXXX-XXXXXX-XXX] [Enregistrer]        │
│ 📍 Obtenir une clé API                           │
└──────────────────────────────────────────────────┘
```

**Fonction**: Entrez et sauvegardez votre clé API N2YO

---

```
┌──────────────────────────────────────────────────┐
│ 📍 Votre Position                                │
│ 48.8566°, 2.3522° [Actualiser]                   │
└──────────────────────────────────────────────────┘
```

**Fonction**: Affiche votre position GPS détectée

---

```
┌──────────────────────────────────────────────────┐
│ 📏 Rayon de recherche (km)                       │
│ [━━━━━━━━●━━━━━━━] 1000 km                       │
│  50                              5000            │
└──────────────────────────────────────────────────┘
```

**Fonction**: Ajustez le rayon de détection (50-5000 km)

---

```
┌──────────────────────────────────────────────────┐
│ 🛰️ Catégorie de satellites                      │
│ [Station Spatiale (ISS)        ▼]               │
└──────────────────────────────────────────────────┘
```

**Fonction**: Filtrez par type de satellites

---

```
┌──────────────────────────────────────────────────┐
│ [Démarrer le Suivi]  [Arrêter]                  │
└──────────────────────────────────────────────────┘
```

**Fonction**: Contrôlez le suivi en temps réel

### 3. Globe 3D

```
        🌍 VUE GLOBALE
        
         ☀️  (Soleil)
           \
            \
        ┌────●────┐
        │   🌍    │  ← Terre
        │  🟢     │  ← Vous (vert)
        │ 🔴 🔴   │  ← Satellites (rouge)
        └─────────┘
        
    🖱️ Clic+Glisser : Rotation
    🖱️ Molette : Zoom
```

**Légende**:
- 🟢 Point vert = Votre position
- 🔴 Points rouges = Satellites détectés
- 🔵 Sphère bleue = Terre
- 💫 Halo bleu = Atmosphère

**Contrôles**:
- **Rotation**: Maintenez clic gauche et glissez
- **Zoom**: Utilisez la molette de la souris
- **Auto-rotation**: La Terre tourne automatiquement

### 4. Vue Radar

```
        📡 RADAR SPATIAL
        
         N (Nord)
         ↑
         │
    W ←──┼──→ E
         │
         ↓
         S (Sud)
         
    ┌─────────────┐
    │    ⊕ ⊕      │  ← Cercles concentriques
    │  ⊕   ⊕      │     (distances)
    │ ──🟢──      │  ← Réticule de visée
    │  ⊕ 🔴⊕      │  ← Vous (centre vert)
    │    🔴       │  ← Satellites (rouges)
    │    ⊕ ⊕      │
    └─────────────┘
```

**Interprétation**:
- **Centre (🟢)**: C'est vous
- **Distance du centre**: Éloignement du satellite
- **Angle**: Direction (N/S/E/O)
- **Cercles**: Distances relatives (25%, 50%, 75%, 100% du rayon)

**Exemple**:
```
🔴 en haut à droite du centre = Satellite au Nord-Est
🔴 près du bord = Satellite loin (proche limite rayon)
🔴 près du centre = Satellite proche de vous
```

### 5. Liste de Satellites

```
┌─────────────────────────────────────────────┐
│ 📋 SATELLITES DÉTECTÉS: 3                   │
├─────────────────────────────────────────────┤
│                                             │
│ ┌─────────────────────┐                    │
│ │ 🛰️ SPACE STATION    │ ← Card satellite   │
│ │                     │                    │
│ │ ID: 25544           │ ← ID NORAD        │
│ │ Altitude: 418 km    │ ← Hauteur         │
│ │ Latitude: 48.5°     │ ← Position        │
│ │ Longitude: 2.0°     │   géographique    │
│ └─────────────────────┘                    │
│                                             │
│ ┌─────────────────────┐                    │
│ │ 🛰️ GPS BIIR-2       │                    │
│ │ ...                 │                    │
│ └─────────────────────┘                    │
│                                             │
└─────────────────────────────────────────────┘
```

**Fonction**: Liste détaillée scrollable de tous les satellites

### 6. Barre d'État

```
┌──────────────────────────────────────────────────┐
│ ✅ Suivi en cours...  │  🕐 Dernière MAJ: 14:35  │
└──────────────────────────────────────────────────┘
```

**États possibles**:
- ✅ **Vert**: Suivi actif
- ⚠️ **Orange**: En cours de chargement
- ❌ **Rouge**: Erreur

---

## 🎨 Palette de Couleurs

### Couleurs Principales

```
🔵 Bleu Primaire (#0066cc)
├─ Boutons d'action
├─ Liens
└─ Éléments interactifs

🟢 Vert Succès (#00ff88)
├─ Position utilisateur
├─ État actif
└─ Confirmations

🔴 Rouge Satellites (#ff4444)
├─ Points satellites
├─ Erreurs
└─ Alertes

🌑 Fond Sombre (#0a0e27)
├─ Arrière-plan principal
├─ Cards
└─ Thème spatial
```

### Gradient Example

```
   Bleu foncé → Bleu clair
   ┌──────────────────────┐
   │▓▓▓▒▒▒░░░             │
   └──────────────────────┘
```

---

## 🖱️ Interactions Visuelles

### Hover Effects

```
État Normal:
┌─────────────┐
│  Satellite  │
│  Card       │
└─────────────┘

État Hover (survol):
┌═════════════┐  ← Bordure bleue
║  Satellite  ║  ← Légère élévation
║  Card       ║  ← Ombre portée
╚═════════════╝
```

### Boutons

```
État Normal:
[ Démarrer le Suivi ]

État Hover:
[  ▲ Démarrer le Suivi  ]  ← Décalage vers le haut
   ▓▓▓ (ombre plus forte)

État Actif (cliqué):
[  ▼ Démarrer le Suivi  ]  ← Enfoncé
```

### Slider

```
  50 km                    5000 km
  ├────────●──────────────────┤
           ↑
        1000 km (valeur actuelle)
        
  Cliquez et glissez ● pour ajuster
```

---

## 📐 Layouts Responsifs

### Desktop (> 1024px)

```
┌─────────────────────────────────────────┐
│           HEADER                        │
├─────────────────────────────────────────┤
│     PANNEAU DE CONTRÔLE (grille)        │
├──────────────────┬──────────────────────┤
│   GLOBE 3D       │    RADAR 2D          │
│   (50%)          │    (50%)             │
├──────────────────┴──────────────────────┤
│   LISTE SATELLITES (grille 3 colonnes)  │
├─────────────────────────────────────────┤
│           BARRE D'ÉTAT                   │
└─────────────────────────────────────────┘
```

### Tablet (768px - 1023px)

```
┌────────────────────────┐
│       HEADER           │
├────────────────────────┤
│  PANNEAU (2 colonnes)  │
├────────────────────────┤
│     GLOBE 3D           │
├────────────────────────┤
│     RADAR 2D           │
├────────────────────────┤
│  LISTE (2 colonnes)    │
├────────────────────────┤
│    BARRE D'ÉTAT        │
└────────────────────────┘
```

### Mobile (< 768px)

```
┌──────────────┐
│   HEADER     │
├──────────────┤
│   PANNEAU    │
│  (1 colonne) │
├──────────────┤
│   GLOBE 3D   │
├──────────────┤
│   RADAR 2D   │
├──────────────┤
│    LISTE     │
│ (1 colonne)  │
├──────────────┤
│ BARRE ÉTAT   │
└──────────────┘
```

---

## 🎭 États de l'Application

### 1. État Initial

```
┌────────────────────────────────────┐
│  Prêt                              │
│  Dernière mise à jour: Jamais      │
└────────────────────────────────────┘

Globe: 🌍 (vide)
Radar: ⊕ (vide)
Liste: "Aucun satellite détecté"
```

### 2. En Cours de Chargement

```
┌────────────────────────────────────┐
│  ⏳ Chargement...                  │
│  Dernière mise à jour: --:--       │
└────────────────────────────────────┘

Globe: 🌍 (avec spinner)
Radar: ⊕ (avec animation)
Liste: "Chargement..."
```

### 3. Suivi Actif

```
┌────────────────────────────────────┐
│  ✅ Suivi en cours...              │
│  🕐 Dernière MAJ: 14:35:42         │
└────────────────────────────────────┘

Globe: 🌍🟢🔴🔴 (avec satellites)
Radar: ⊕🟢🔴🔴 (avec points)
Liste: 3 satellites affichés
```

### 4. État d'Erreur

```
┌────────────────────────────────────┐
│  ❌ Erreur: Clé API invalide       │
│  Dernière mise à jour: 14:30       │
└────────────────────────────────────┘

Message d'erreur visible
Suggestions de résolution
```

---

## 📊 Visualisation des Données

### Altitude des Satellites

```
    Altitude (km)
         ↑
   35000 │     🔴 GPS (20200 km)
   30000 │     
   25000 │     
   20000 │─────●
   15000 │     
   10000 │     
    5000 │     
    1000 │   🔴 Starlink (550 km)
     500 │───●
       0 │─● Vous (niveau mer)
         └─────────→
```

### Distribution Angulaire (Radar)

```
        N (0°)
         │
    🔴   │   🔴
         │
W ───────●─────── E
   (270°)│(90°)
         │
     🔴  │
         │
        S (180°)
```

---

## 🔧 Indicateurs Visuels

### Compteur de Satellites

```
┌────────────────────┐
│  3 satellites      │  ← 0-5 : Peu
│  détectés          │
└────────────────────┘

┌────────────────────┐
│  15 satellites     │  ← 5-20 : Moyen
│  détectés          │
└────────────────────┘

┌────────────────────┐
│  50+ satellites    │  ← 20+ : Beaucoup
│  détectés          │
└────────────────────┘
```

### Progression API

```
Transactions utilisées:
[████████░░] 80%  ⚠️ Attention!
[████░░░░░░] 40%  ✅ OK
[█░░░░░░░░░] 10%  ✅ Excellent
```

---

## 🎬 Animations

### Globe Rotation

```
Frame 1:    Frame 2:    Frame 3:
   🌍          🌍          🌍
  /│\         /│\         /│\
   │           │           │
  (→)         (→)         (→)
```

**Vitesse**: 0.001 rad/frame (lente et fluide)

### Radar Pulse

```
Frame 1:    Frame 2:    Frame 3:
   🔴          ⭕          ⊙
   │           │           │
Satellite   Pulse 1     Pulse 2
```

**Effet**: Lueur pulsante autour des satellites

### Transition Cards

```
  ↓ Entrée (de bas en haut)
┌─────┐
│ SAT │
└─────┘
  ↑ 200ms fade-in
```

---

## 💡 Tips Visuels

### Meilleure Vue Globe

```
✅ Bon Zoom:           ❌ Trop Loin:
    🌍                    · (point)
   /│|\                     
  / │ | \                   
     ✓                      ✗
```

### Meilleure Vue Radar

```
✅ Satellites visibles:  ❌ Rayon trop grand:
  ⊕────────────⊕          ⊕──────────────⊕
  │  🔴  🔴    │          │     · ·       │
  │ 🟢   🔴    │          │  🟢           │
  ⊕────────────⊕          ⊕──────────────⊕
  (1000 km OK)            (5000 km = points minuscules)
```

---

## 📱 Interface Mobile

```
┌────────────┐
│ ☰  Radar   │ ← Menu burger (futur)
├────────────┤
│  Panneau   │
│  (Stack)   │
│  [Démarrer]│
├────────────┤
│            │
│    🌍      │ ← Globe (swipe pour tourner)
│            │
├────────────┤
│            │
│    ⊕       │ ← Radar (pinch to zoom)
│   🟢🔴     │
│            │
├────────────┤
│ ┌────────┐ │
│ │Sat 1   │ │ ← Liste (scroll vertical)
│ ├────────┤ │
│ │Sat 2   │ │
│ └────────┘ │
└────────────┘
```

**Gestes Mobile**:
- **Swipe**: Rotation globe
- **Pinch**: Zoom
- **Tap**: Sélection
- **Scroll**: Liste satellites

---

## 🎯 Points d'Attention Visuels

### ⚠️ Clé API Manquante

```
┌────────────────────────────────────┐
│  ⚠️ IMPORTANT                      │
│  Clé API N2YO requise              │
│  [Obtenir une clé]                 │
└────────────────────────────────────┘
```

### ✅ Configuration Complète

```
┌────────────────────────────────────┐
│  ✅ Configuration complète         │
│  Prêt à démarrer le suivi          │
│  [Démarrer]                        │
└────────────────────────────────────┘
```

### 📡 Données en Direct

```
┌────────────────────────────────────┐
│  🔄 Mise à jour en cours...        │
│  Prochaine dans 8 secondes         │
└────────────────────────────────────┘
```

---

**Ce guide visuel vous aide à comprendre chaque élément de l'interface! 🎨✨**

*Pour tester en direct, lancez l'application ou le mode démo.*
