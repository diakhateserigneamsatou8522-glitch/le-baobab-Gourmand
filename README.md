# Le Baobab Gourmand

Site vitrine d'un restaurant de cuisine africaine moderne situé à Touba, Sénégal.
Projet réalisé dans le cadre du module Développement Web Front-End.
Il vise à offrir une expérience utilisateur fluide avec une interface élégante et entièrement responsive.
---

## Aperçu du site
### Page d'accueil
![Capture de la page d'accueil](screenshot-accueil.png)
![Capture de la page d'accueil](screenshot-accueil.png2)

### Page Menu
![Capture de la page Menu](screenshot-manu.png)
![Capture de la page Menu](screenshot-manu.png2)

### Page À propos
![Capture de la page À propos](screenshot-about.png)
![Capture de la page À propos](screenshot-about.png2)

### Page Contact
![Capture de la page Contact](screenshot-contact.png)
![Capture de la page Contact](screenshot-contact.png2)

---

## Sujet choisi

**Sujet A** — Site vitrine de restaurant « Le Baobab Gourmand »

## Site en ligne

[Voir le site en ligne]( https://diakhateserigneamsatou8522-glitch.github.io/le-baobab-Gourmand/)

---

## Technologies utilisées

- HTML5 (structure sémantique)
- CSS3 (styles personnalisés, animations, responsive)
- Bootstrap 5 (grille responsive, composants)
- JavaScript vanilla (interactivité, validation, filtres)
- Bootstrap Icons (icônes)
- Google Fonts (Playfair Display, Lato)

---

## Pages du site

| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | index.html | Bannière hero, carousel 4 slides, cartes coups de cœur (5 plats), témoignages clients (4 avis) |
| Menu | manu.html | Carte complète avec filtre dynamique par catégorie (Tous, Entrées, Plats, Desserts, Boissons), bouton Commander sur chaque carte |
| À propos | about.html | Histoire du restaurant, équipe, valeurs, galerie photos |
| Contact | contact.html | Formulaire de contact validé en JS, formulaire de commande avec calcul du total en FCFA, carte Google Maps, coordonnées |

---

## Fonctionnalités JavaScript

- Validation en temps réel du formulaire de contact (champs obligatoires, email regex)
- Filtre dynamique du menu par catégorie (Tous / Entrées / Plats / Desserts / Boissons)
- Carousel Bootstrap des plats signature (4 slides, animation fade)
- Bouton retour en haut apparaissant au scroll (sur toutes les pages)
- Animation en cascade des témoignages (délai de 500ms)
- Animation des étoiles des témoignages (apparition une par une)
- Calcul automatique du total de la commande en FCFA
- Navbar qui change de couleur au scroll
- Effet hover sur les cartes plats (zoom image + ombre)
- Bouton Commander qui redirige vers le formulaire de commande

---

## Structure des fichiers

```
le-baobab-gourmand/
├── index.html
├── manu.html
├── about.html
├── contact.html
├── style.css
├── script.js
├── images/
│   ├── cuisine.png
│   ├── jen.png.jpg
│   ├── res.png.jpg
│   ├── ikong.png
│   ├── yassa.png
│   ├── mbaxal.png
│   ├── boudd.png
│   ├── boud.png
│   ├── jen4.png
│   ├── boisson.png
│   ├── dessert.png
│   ├── poulet.png
│   ├── vian.png
│   ├── Chicken.png
│   ├── mbaxale.png
│   ├── pastels.png
│   ├── accras.png
│   ├── nems.png
│   ├── salad.png
│   ├── domo.png
│   ├── soupe.png
│   ├── gâteau.png
│   ├── deser.png
│   ├── choco.png
│   ├── bissape.png
│   ├── bouy.png
│   ├── mang.png
│   ├── manth.png
│   └── nos-specialites.png
├── rapport-conception.pdf
└── README.md
```

---

## Polices

- **Playfair Display** — Titres h1 à h6 (serif, élégante, aspect gastronomique)
- **Lato** — Texte courant, boutons, navigation (sans-serif, moderne, lisible)

Chargées via Google Fonts (CDN).

---

## Composants Bootstrap utilisés

- Navbar responsive avec menu hamburger (vertical sur mobile)
- Carousel avec indicateurs, contrôles et animation fade
- Cards (plats, témoignages, valeurs, commande)
- Grille responsive (container, row, col-md-6, col-lg-4)
- Formulaires (form-control, form-select, form-check)
- Badges colorés par catégorie (Entrée vert, Plat jaune, Dessert bleu, Boisson rouge)
- Alertes de succès (formulaire et commande)
- Boutons (btn-brand, btn-outline-brand, btn-outline-light)

---

## Responsive

Le site est adapté à tous les écrans :

| Appareil | Largeur | Adaptations |
|----------|---------|-------------|
| Desktop | > 1200px | Affichage complet, navbar horizontale |
| Tablette | 768px | Grille 2 colonnes, carousel réduit |
| Mobile | < 576px | Grille 1 colonne, navbar hamburger verticale, tailles réduites |

---

## Équipe

<!-- Les lions de la tech -->

- Serigne Amsatou DIAKHATE
- Halimatou KOUROUMA
- Sokhena Maye DIONE
- Lotha DIOP

## Encadrant

- Dr LY

Le site sera disponible à :  https://diakhateserigneamsatou8522-glitch.github.io/le-baobab-Gourmand/

---

## Remerciements

Projet réalisé dans le cadre du module Développement Web Front-End.
Université Cheikh Ahmadoul Khadim — UFR des Métiers et Technologie — Département IT.
Année universitaire 2025-2026.https://diakhateserigneamsatou8522-glitch.github.io/le-baobab-gourmand/
