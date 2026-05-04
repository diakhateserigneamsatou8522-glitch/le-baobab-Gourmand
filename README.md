# Le Baobab Gourmand

Site vitrine d'un restaurant de cuisine africaine moderne situé à Touba, Sénégal.
Projet réalisé dans le cadre du module Développement Web Front-End.
Il vise à offrir une expérience utilisateur fluide avec une interface élégante et entièrement responsive.
---

## Aperçu du site
### Page d'accueil
![Capture de la page d'accueil](<img width="488" height="9107" alt="screenshot-accueil png" src="https://github.com/user-attachments/assets/088e1a21-3021-430d-bcc3-9a40b37e0d6f" />)

![Capture de la page d'accueil](<img width="488" height="1055" alt="screenshot-accueil png (2)" src="https://github.com/user-attachments/assets/fc9efb30-951d-45ba-ae7c-caa663d0c3b8" />)


### Page Menu
![Capture de la page Menu](<img width="960" height="1280" alt="screenshot-manu png" src="https://github.com/user-attachments/assets/9e7e6497-af19-46df-ba0b-f03273f67199" />)

![Capture de la page Menu](<img width="960" height="6235" alt="screenshot-manu png (3)" src="https://github.com/user-attachments/assets/bdcaa2be-bafe-4e45-9cd0-9498b8534272" />)


### Page À propos
![Capture de la page À propos](<img width="488" height="1055" alt="screenshot-about png" src="https://github.com/user-attachments/assets/fd31c1be-3d2f-403d-ac75-31a014d9bab0" />)

![Capture de la page À propos](<img width="488" height="8100" alt="screenshot-about png (2)" src="https://github.com/user-attachments/assets/cac54211-0454-4919-8cfe-97d39b39e8cf" />)


### Page Contact
![Capture de la page Contact](<img width="960" height="4565" alt="screenshot-contact png" src="https://github.com/user-attachments/assets/3165b579-86d5-48e4-8a4d-de596e72cc84" />)

![Capture de la page Contact](<img width="488" height="8100" alt="screenshot-about png (2)" src="https://github.com/user-attachments/assets/17232bb0-2556-4c0e-9850-83fdfebd3593" />)


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
