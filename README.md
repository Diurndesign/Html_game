# Mission Tago · Html_game

Un jeu pour apprendre les bases du HTML en écrivant du vrai code.

Tago est un bernard-l’ermite qui n’a pas de maison. Ses pinces ont la forme de chevrons `<` `>`, comme les balises HTML. Chaque mission réussie construit sa page web, et chaque atelier terminé ajoute une pièce à sa maison (les fondations, les murs, la fenêtre…).

## Jouer

- **En ligne** : active GitHub Pages (Settings › Pages › *Deploy from a branch*, choisis la branche du jeu et le dossier `/ (root)`). Le jeu sera disponible à l’adresse `https://diurndesign.github.io/Html_game/`.
- **En local** : ouvre le dossier avec l’extension Live Server de VS Code (ou n’importe quel petit serveur web). Ouvrir `index.html` directement en double-cliquant peut bloquer l’aperçu dans certains navigateurs.

La progression est enregistrée dans le navigateur de chaque joueur (localStorage).

## Comment ça marche

- **Découvrir** : une page qui explique ce qu’est le HTML, à quoi il sert et pourquoi on l’utilise, avec une démo (le même texte avec et sans balises), l’anatomie d’un élément, des exemples de la vraie vie, le vocabulaire et les pièges du débutant.
- **Les missions** : la page se construit **en direct** pendant que l’élève tape. Le bouton **Vérifier** (ou Ctrl + Entrée) contrôle chaque objectif.

| Onglet | Ce qu’on y voit |
|---|---|
| Ton résultat / Le modèle | La page de l’élève, et la page à reproduire |
| Objectifs | Chaque critère réussi ou raté, avec une explication quand c’est faux |
| Remarques | Le vérificateur : balises non fermées, mal imbriquées, inconnues, `alt` manquant, attributs mal orthographiés… en français, avec la ligne surlignée dans l’éditeur |
| Arbre | Le DOM, pour voir quelle balise contient quelle autre |

Étoiles : 3 sans indice, 2 avec un indice, 1 avec la solution.

## Les 14 missions

| Atelier | Pièce de la maison | Notions |
|---|---|---|
| 1. Les fondations | Les fondations | balises, squelette `<!DOCTYPE>` / `head` / `body`, quiz |
| 2. Les murs | Les murs | `h1` à `h6`, `p`, `strong`, `em`, `br` |
| 3. La fenêtre | La fenêtre | `img`, `src`, `alt`, `a`, `href`, `target` |
| 4. Les étagères | La cheminée | `ul`, `ol`, `li`, listes imbriquées, quiz |
| 5. La porte | La porte | `form`, `label`, `input`, `textarea`, `required`, `placeholder` |
| 6. Le toit | Le toit | `header`, `nav`, `main`, `footer`, `section`, mission finale |

En plus : un **Carnet** (antisèche des notions débloquées) et un **Bac à sable** pour tester librement. Dans le Carnet, l’option « Débloquer toutes les missions » permet au formateur d’ouvrir toutes les missions.

## Fichiers

```
index.html   la structure de la page
style.css    le design commun aux 4 jeux
theme.css    les couleurs de ce jeu (variables CSS dans :root)
engine.js    le moteur commun : éditeur, aperçu, vérificateur, objectifs, carte, carnet
mascot.js    Tago, en SVG
game.js      les données du jeu : page Découvrir, ateliers et missions (tableau levels)
img/         les images utilisées dans les missions
```

Pour ajouter ou modifier une mission, édite le tableau `levels` dans `game.js`. Chaque mission contient : le texte de Tago, la leçon (quoi, pourquoi, code, morceaux, exemple, piège), les étapes, le code de départ, les objectifs (`goals`, avec une fonction `test`), les indices et la solution.

## La série

| Jeu | Langage | Mascotte |
|---|---|---|
| [Mission Tago](https://diurndesign.github.io/Html_game/) | HTML | Tago, le bernard-l’ermite |
| [Mission Kami](https://diurndesign.github.io/Css_game/) | CSS | Kami, le caméléon |
| [Kami et les lucioles](https://diurndesign.github.io/Flexbox-game/) | CSS Flexbox | Kami |
| [Le potager de Kami](https://diurndesign.github.io/Grid-game/) | CSS Grid | Kami |
| [Mission Bip](https://diurndesign.github.io/javascript_game/) | JavaScript | Bip, le robot |

---

Créé par Diurn Studio.
