/* =====================================================================
   MISSION TAGO · les données du jeu HTML
   Pour ajouter ou modifier une mission : édite le tableau `levels`.
   Chaque objectif (goals) a une fonction `test(c)` qui renvoie
   true (réussi), false (raté) ou un texte (raté, avec une explication).
   Outils disponibles dans les tests : q, qa, txt, cs, hasCode, noErrors…
   (voir engine.js, section « OUTILS POUR LES OBJECTIFS »)
   ===================================================================== */
const after = (c, a, b) => { const x = q(c, a), y = q(c, b); return !!(x && y && (x.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_FOLLOWING)); };
const hasTextIn = (c, sel, re) => qa(c, sel).some(e => re.test(e.textContent.replace(/\s+/g, " ")));
const imgLoaded = (c, sel) => { const i = q(c, sel); return !!(i && i.complete && i.naturalWidth > 0); };

const GAME = {
  id: "mission-tago",
  name: "Mission Tago",
  title: ["Mission", "Tago"],
  kicker: "HTML · pour bien démarrer dans le web",
  lead: "Tago est un bernard-l’ermite qui n’a pas de maison. Ses pinces ont la forme de chevrons `<` `>`, comme les balises HTML. Écris du vrai HTML, regarde la page se construire en direct, et chaque atelier terminé ajoute une pièce à la maison de Tago. Aucune connaissance n’est nécessaire : on part de zéro.",
  mode: "html",
  lang: "html",
  rewardWord: "pièces de la maison",
  rewardLabel: "Pièce",
  rewardMsg: "Nouvelle pièce pour la maison de Tago :",
  chapterNote: "Chaque atelier terminé construit une pièce de la maison de Tago.",
  finaleTitle: "La maison de Tago est finie !",
  confetti: ["#FF8A3D", "#3D7BF7", "#9B5DE5", "#8FD3FF", "#1B2440"],
  links: { html: null, css: "https://diurndesign.github.io/Css_game/", js: "https://diurndesign.github.io/javascript_game/" },
  next: {
    name: "Mission Kami (CSS)",
    url: "https://diurndesign.github.io/Css_game/",
    title: "Mission Kami : on habille la page avec le CSS",
    text: "Tago a une maison, mais elle est toute grise. Son ami **Kami**, un caméléon, a perdu ses couleurs. Avec le **CSS**, tu vas les lui rendre : couleurs, polices, tailles, bordures… La suite logique du HTML !"
  },

  /* ------------------------------------------------------------------
     PAGE « DÉCOUVRIR » : c’est quoi, à quoi ça sert, pourquoi
     ------------------------------------------------------------------ */
  discover: {
    nav: "Découvrir",
    button: "C’est quoi le HTML ?",
    subject: "le HTML",
    cardTitle: "C’est quoi le HTML ? À quoi ça sert ? Pourquoi on l’utilise ?",
    cardText: "5 minutes pour comprendre avant de jouer, avec une démo à tester.",
    kicker: "Étape 0 · Découvrir",
    title: "C’est quoi, le **HTML** ?",
    lead: "Tu veux te lancer dans une formation web ? Tout commence ici. Avant d’écrire ta première balise, prends cinq minutes pour comprendre ce qu’est le HTML, à quoi il sert, et pourquoi tous les sites du monde l’utilisent.",
    say: "Le HTML, c’est la langue de mes pinces : `<` et `>` ! Je t’explique tout.",
    cards: [
      { title: "C’est quoi ?", text: ["HTML veut dire *HyperText Markup Language*, en français « langage de balisage hypertexte ». C’est le langage qui décrit **le contenu** d’une page web.", "Ce n’est pas un langage de programmation : il ne calcule rien et ne prend aucune décision. Il **étiquette** le contenu : « ceci est un titre », « ceci est une image », « ceci est un lien »."] },
      { title: "À quoi ça sert ?", text: "Le navigateur (Chrome, Firefox, Safari…) lit le fichier HTML et le transforme en page. Le HTML sert à :", list: ["afficher des titres, des textes, des images, des vidéos ;", "relier les pages entre elles avec des **liens** : c’est ça, l’*hypertexte* ;", "créer des formulaires : connexion, recherche, commande ;", "donner une structure que Google et les lecteurs d’écran comprennent."] },
      { title: "Pourquoi on l’utilise ?", text: ["C’est **le seul langage** que tous les navigateurs comprennent pour décrire une page. Chaque site que tu visites (YouTube, Wikipédia, ton réseau social préféré) envoie du HTML à ton navigateur.", "Il est **gratuit** et ouvert : un éditeur de texte et un navigateur suffisent. C’est la première brique à apprendre, car le CSS et le JavaScript viennent s’accrocher dessus."] }
    ],
    trioFocus: "html",
    trioHere: "Tu es ici",
    trioNote: "Dans ce jeu, tu construis **les murs** avec le HTML. Ensuite, Kami t’apprendra à les décorer avec le CSS, et Bip à les animer avec le JavaScript.",
    demo: {
      title: "Le même texte, avec et sans HTML",
      text: "Clique sur les boutons : le texte reste le même, seules les balises changent.",
      lang: "html",
      variants: [
        { label: "Texte brut", html: "La crique de Tago\nBienvenue sur ma plage !\nMes coquillages préférés :\nle bulot\nla coque\nle couteau", caption: "Sans balises, le navigateur colle tout sur une seule ligne : il ne sait pas ce qui est un titre, un paragraphe ou une liste." },
        { label: "Avec des balises", html: "<h1>La crique de Tago</h1>\n<p>Bienvenue sur ma plage !</p>\n<h2>Mes coquillages préférés :</h2>\n<ul>\n  <li>le bulot</li>\n  <li>la coque</li>\n  <li>le couteau</li>\n</ul>", caption: "Avec les balises, le navigateur sait ce qu’est chaque morceau et l’affiche à sa place : un grand titre, un paragraphe, une liste à puces." },
        { label: "+ image et lien", html: "<h1>La crique de Tago</h1>\n<img src=\"img/coquillage.svg\" alt=\"Un coquillage\" width=\"90\">\n<p>Bienvenue sur ma plage !</p>\n<p><a href=\"https://fr.wikipedia.org\">En savoir plus sur Wikipédia</a></p>", caption: "Une balise `<img>` affiche une image, une balise `<a>` crée un lien vers une autre page. C’est tout le principe du web." }
      ]
    },
    anatomy: {
      title: "Comment s’écrit un élément HTML",
      text: "Presque tout le HTML suit ce modèle.",
      code: "<a href=\"contact.html\">Écrire à Tago</a>",
      pieces: [
        ["<a", "le début de la balise ouvrante, avec le nom de la balise (`a` = lien)"],
        ["href=\"contact.html\"", "un **attribut** : une information en plus. Ici, l’adresse où mène le lien"],
        [">", "la fin de la balise ouvrante"],
        ["Écrire à Tago", "le **contenu**, visible dans la page"],
        ["</a>", "la balise fermante : le même nom, précédé d’une barre `/`"]
      ]
    },
    usesTitle: "Où on trouve du HTML dans la vraie vie",
    uses: [
      { title: "Sur chaque page web", text: "Ouvre n’importe quel site, fais un clic droit puis « Afficher le code source » : tu verras son HTML." },
      { title: "Dans tes e-mails", text: "Les newsletters avec images et boutons que tu reçois sont écrites en HTML." },
      { title: "Dans des applis", text: "Beaucoup d’applis (Discord, VS Code, Spotify sur ordinateur…) affichent leurs écrans avec du HTML." },
      { title: "Pour Google", text: "Les moteurs de recherche lisent le HTML pour comprendre de quoi parle une page et la classer." }
    ],
    jobs: {
      title: "Et dans les métiers du web ?",
      text: "Le HTML est la toute première chose qu’on apprend en formation, et on l’utilise tous les jours ensuite.",
      items: [
        { title: "Intégrateur·rice web", text: "Transforme les maquettes des designers en vraies pages : son premier travail est d’écrire un HTML propre et bien structuré." },
        { title: "Développeur·se front-end", text: "Construit les interfaces des sites et des applis. Même avec des outils modernes (React, Vue…), on écrit toujours du HTML." },
        { title: "Webdesigner / UI designer", text: "Dessine les pages. Connaître le HTML permet de proposer des maquettes réalisables et de parler le même langage que les développeurs." },
        { title: "Chargé·e de référencement (SEO)", text: "Vérifie que les titres, les `alt` et la structure du HTML aident Google à bien comprendre et bien classer les pages." }
      ]
    },
    words: [
      ["**Balise**", "un mot entre chevrons, comme `<p>`. Elle va souvent par deux : une ouvrante et une fermante."],
      ["**Élément**", "la balise ouvrante, le contenu et la balise fermante, ensemble."],
      ["**Attribut**", "une information en plus dans la balise ouvrante : `href`, `src`, `alt`…"],
      ["**Balise orpheline**", "une balise qui ne se ferme pas, comme `<img>` ou `<br>`."],
      ["**Imbrication**", "mettre des balises dans d’autres balises, comme des poupées russes."],
      ["**Navigateur**", "le logiciel qui lit le HTML et affiche la page : Chrome, Firefox, Safari, Edge."]
    ],
    traps: [
      "Oublier de fermer une balise : tout ce qui suit est touché.",
      "Fermer dans le désordre : `<p><strong>…</p></strong>`. On ferme toujours la dernière ouverte en premier.",
      "Choisir une balise pour son apparence (« `<h3>` parce que c’est plus petit »). La taille, c’est le travail du CSS.",
      "Oublier le texte `alt` des images : les personnes aveugles ne sauront pas ce qu’elles montrent."
    ],
    tools: [
      "Un éditeur de code gratuit : **VS Code**.",
      "Crée un fichier `index.html`, écris ton code, puis ouvre-le dans Chrome.",
      "Sur n’importe quel site : clic droit, puis **Inspecter**, pour voir son HTML."
    ],
    ctaTitle: "Prêt à construire ?",
    ctaText: "14 missions t’attendent. Chaque atelier terminé ajoute une pièce à la maison de Tago."
  },

  /* ------------------------------------------------------------------
     BAC À SABLE
     ------------------------------------------------------------------ */
  sandbox: {
    id: "bac-a-sable", sandbox: true, title: "Bac à sable",
    say: "Ici, pas de mission : la plage est à toi ! Teste toutes les balises que tu veux.",
    ideas: [
      "Écris un titre, un paragraphe et une liste, et regarde l’onglet **Arbre**.",
      "Oublie exprès une balise fermante et lis l’onglet **Remarques**.",
      "Ajoute une image : `img/coquillage.svg`, `img/tago.svg` ou `img/plage.svg`.",
      "Recopie un exemple du **Carnet** et modifie-le."
    ],
    starter: `<h1>Mon brouillon</h1>\n<p>Écris ce que tu veux ici.</p>\n`,
    hints: []
  },

  /* ------------------------------------------------------------------
     ATELIERS
     ------------------------------------------------------------------ */
  chapters: [
    { n: 1, title: "Les fondations", piece: "Les fondations", notions: ["balises", "<!DOCTYPE>", "head", "body"] },
    { n: 2, title: "Les murs", piece: "Les murs", notions: ["h1 à h6", "p", "strong", "em", "br"] },
    { n: 3, title: "La fenêtre", piece: "La fenêtre", notions: ["img", "src", "alt", "a", "href"] },
    { n: 4, title: "Les étagères", piece: "La cheminée", notions: ["ul", "ol", "li"] },
    { n: 5, title: "La porte", piece: "La porte", notions: ["form", "label", "input", "button"] },
    { n: 6, title: "Le toit", piece: "Le toit", notions: ["header", "nav", "main", "footer"] }
  ],

  levels: [
  /* ------------------------------ ATELIER 1 ------------------------------ */
  {
    id: "balise", ch: 1, title: "Ma première balise", notion: "les balises",
    say: "Salut, moi c’est Tago ! Je n’ai pas de maison… On m’a dit que sur le web, tout se construit avec des balises, comme mes pinces `<` `>`. On essaie ?",
    lesson: {
      what: "Le HTML décrit le contenu d’une page. On entoure chaque contenu d’une **balise** qui dit au navigateur ce que c’est : un titre, un paragraphe, une image…",
      why: "Sans balise, le navigateur reçoit du texte brut et ne sait pas ce qui est un titre ou un paragraphe. Les balises donnent du **sens** au contenu : pour le navigateur, pour Google et pour les lecteurs d’écran.",
      code: `<h1>Bonjour Tago</h1>`,
      pieces: [["<h1>", "la balise **ouvrante** : « ici commence un titre de niveau 1 »"], ["Bonjour Tago", "le contenu, ce que le visiteur voit"], ["</h1>", "la balise **fermante** : le même nom, avec une barre `/`"], ["<p> … </p>", "un **paragraphe** de texte"]],
      example: { code: `<h1>La crique de Tago</h1>\n<p>Bienvenue sur ma plage !</p>` },
      trap: "Oublier la barre `/` dans la balise fermante : `<h1>Bonjour<h1>` ouvre un deuxième titre au lieu de fermer le premier."
    },
    steps: ["Écris un titre `<h1>` qui contient le texte `Bonjour Tago`.", "En dessous, ajoute un paragraphe `<p>` avec une phrase de ton choix.", "Regarde la page se construire en direct, puis clique sur **Vérifier**."],
    starter: `<!-- Écris ton HTML sous cette ligne -->\n`,
    goals: [
      { label: "Un titre `<h1>` contient `Bonjour Tago`", test: c => /^bonjour tago\s*!?$/i.test(txt(c, "h1")) || (q(c, "h1") ? "Ton titre existe, mais il doit contenir exactement Bonjour Tago." : (/bonjour tago/i.test(c.doc.body.textContent) ? "Le texte est là, mais il n’est pas entouré de <h1> et </h1>." : false)) },
      { label: "Un paragraphe `<p>` contient une phrase", test: c => txt(c, "p").length > 2 || (q(c, "p") ? "Ton paragraphe est vide : écris une phrase entre <p> et </p>." : false) },
      { label: "Le titre est au-dessus du paragraphe", test: c => after(c, "h1", "p") },
      { label: "Toutes les balises sont bien fermées", test: noErrors }
    ],
    hints: ["Une balise ouvrante `<h1>`, le texte, puis la balise fermante `</h1>`.", "Pour le paragraphe, même principe avec `<p>` et `</p>`.", "Ligne 2 : `<h1>Bonjour Tago</h1>`, ligne 3 : `<p>Je cherche une maison.</p>`"],
    solution: `<!-- Écris ton HTML sous cette ligne -->\n<h1>Bonjour Tago</h1>\n<p>Je cherche une maison.</p>`,
    debrief: "Tu as écrit deux **éléments** : un titre et un paragraphe. Chacun a une balise ouvrante et une balise fermante. Remarque que tu n’as rien dit sur la taille ou la police : c’est le navigateur qui décide de l’apparence par défaut. L’apparence, ce sera le travail du CSS."
  },
  {
    id: "squelette", ch: 1, title: "Le squelette de la page", notion: "<!DOCTYPE>, head, body",
    say: "Une maison, ça commence par un plan. Une page web aussi ! Toutes les pages HTML ont le même squelette. Aide-moi à le compléter.",
    lesson: {
      what: "Un vrai fichier HTML a toujours la même structure. Le `<head>` contient les informations **invisibles** (le titre de l’onglet, l’encodage des lettres). Le `<body>` contient tout ce qui est **visible** dans la page.",
      why: "Ce squelette dit au navigateur : « voici une page HTML moderne, en français, avec des accents ». Sans lui, les accents peuvent s’afficher bizarrement, l’onglet n’a pas de nom et Google comprend mal la page.",
      code: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <title>Titre de l’onglet</title>\n  </head>\n  <body>\n    Ce qui s’affiche dans la page\n  </body>\n</html>`,
      pieces: [["<!DOCTYPE html>", "la première ligne : « ce fichier est du HTML moderne »"], ["<html lang=\"fr\">", "la balise qui contient tout, et la langue de la page"], ["<head>", "la tête : les infos pour le navigateur, invisibles dans la page"], ["<meta charset=\"utf-8\">", "pour que les accents (é, è, à) s’affichent bien"], ["<title>", "le texte écrit dans l’onglet du navigateur"], ["<body>", "le corps : tout le contenu visible"]],
      trap: "Mettre le contenu visible (titres, textes) dans le `<head>`. Le `<head>` est réservé aux informations sur la page, pas à la page elle-même."
    },
    steps: ["Dans le `<head>`, ajoute un `<title>` qui contient `La maison de Tago`.", "Après le `</head>`, ouvre un `<body>`.", "Dans le `<body>`, écris un titre `<h1>` : `La crique de Tago`.", "Ferme le `</body>` avant le `</html>`. Le titre de l’onglet s’affiche en haut de l’aperçu !"],
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    \n  </head>\n  \n</html>\n`,
    goals: [
      { label: "Le `<title>` contient `La maison de Tago`", test: c => c.doc.title.trim() === "La maison de Tago" || (c.doc.title ? "Le titre de l’onglet doit être exactement : La maison de Tago." : false) },
      { label: "Le `<title>` est dans le `<head>`", test: c => { const h = c.clean.match(/<head[^>]*>([\s\S]*?)<\/head>/i); return !!(h && /<title>/i.test(h[1])) || "Le <title> doit être écrit entre <head> et </head>."; } },
      { label: "Le `<body>` est ouvert et fermé", test: c => /<body[^>]*>[\s\S]*<\/body>/i.test(c.clean) || (/<body/i.test(c.clean) ? "Il manque la balise fermante </body>." : false) },
      { label: "Le `<h1>` `La crique de Tago` est dans le `<body>`", test: c => { const b = c.clean.match(/<body[^>]*>([\s\S]*?)<\/body>/i); return !!(b && /<h1[^>]*>\s*La crique de Tago\s*<\/h1>/i.test(b[1])) || "Écris <h1>La crique de Tago</h1> entre <body> et </body>."; } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Le titre de l’onglet : `<title>La maison de Tago</title>`, sur la ligne vide du `<head>`.", "Le corps s’écrit `<body>` … `</body>`, juste après `</head>`.", "Dans le body : `<h1>La crique de Tago</h1>`."],
    solution: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <title>La maison de Tago</title>\n  </head>\n  <body>\n    <h1>La crique de Tago</h1>\n  </body>\n</html>`,
    debrief: "Voilà le squelette que tu écriras au début de **chaque** fichier HTML. Dans VS Code, tape `!` puis Tab : l’éditeur l’écrit pour toi. Retiens : le `head` parle **au navigateur**, le `body` parle **au visiteur**. Remarque aussi les espaces au début des lignes (l’indentation) : ils ne changent rien à l’affichage, mais ils montrent qui est dans qui."
  },
  {
    id: "quiz1", ch: 1, quiz: true, title: "Contrôle des fondations", notion: "quiz",
    say: "Avant de monter les murs, on vérifie que les fondations sont solides. Tout juste, et je pose la première pierre !",
    questions: [
      { q: "Le HTML, c’est…", opts: ["un langage de programmation qui fait des calculs", "un langage de balisage qui décrit le contenu d’une page", "un logiciel pour dessiner des sites"], a: 1, why: "Le HTML étiquette le contenu (titre, paragraphe, image…). Il ne calcule rien : pour ça, il y a le JavaScript." },
      { q: "Quelle ligne est bien écrite ?", opts: ["`<p>Bonjour<p>`", "`<p>Bonjour</p>`", "`</p>Bonjour<p>`"], a: 1, why: "La balise ouvrante d’abord, la fermante ensuite, avec une barre `/`." },
      { q: "Où met-on le texte qui s’affiche dans l’onglet du navigateur ?", opts: ["Dans un `<h1>`, dans le body", "Dans un `<title>`, dans le head", "Dans un `<meta>`"], a: 1, why: "Le `<title>` va dans le `<head>`. Le `<h1>`, lui, est le grand titre visible dans la page." },
      { q: "Que contient le `<body>` ?", opts: ["Tout ce qui est visible dans la page", "Les informations invisibles comme l’encodage", "Uniquement les images"], a: 0, why: "Le corps contient tout le contenu visible : titres, textes, images, liens, formulaires…" }
    ],
    debrief: "Les fondations sont posées : tu sais ce qu’est une balise, et tu connais le squelette d’une page."
  },

  /* ------------------------------ ATELIER 2 ------------------------------ */
  {
    id: "titres", ch: 2, title: "Du plus grand au plus petit", notion: "h1 à h6, p",
    say: "J’ai écrit le journal de ma plage, mais tout est en vrac ! Tu peux mettre chaque ligne dans la bonne balise ?",
    lesson: {
      what: "Il existe six niveaux de titres, de `<h1>` (le plus important) à `<h6>`. Ils fonctionnent comme le **sommaire** d’un livre : un seul titre principal, des parties, des sous-parties.",
      why: "Les titres servent à organiser la page. Google s’en sert pour comprendre le sujet, et les personnes aveugles naviguent de titre en titre avec leur lecteur d’écran.",
      code: `<h1>Le titre de la page</h1>\n<h2>Une partie</h2>\n<p>Du texte.</p>\n<h3>Une sous-partie</h3>\n<p>Encore du texte.</p>`,
      pieces: [["<h1>", "le titre principal : **un seul** par page"], ["<h2>", "les grandes parties"], ["<h3>", "les sous-parties d’un h2 (et ainsi de suite jusqu’à h6)"], ["<p>", "un paragraphe : un bloc de texte"]],
      example: { code: `<h1>Ma plage</h1>\n<h2>Le sable</h2>\n<p>Il est chaud l’été.</p>` },
      trap: "Choisir `<h3>` « parce qu’il est plus petit ». On choisit le niveau selon l’**importance**, jamais selon la taille : la taille, on la changera avec le CSS."
    },
    steps: ["`Le journal de la plage` est le titre principal.", "`Les marées` et `Les coquillages` sont deux parties.", "`Les plus rares` est une sous-partie des coquillages.", "Les deux phrases sont des paragraphes."],
    starter: `<!-- Mets chaque ligne dans la bonne balise -->\nLe journal de la plage\n\nLes marées\nLa mer monte deux fois par jour.\n\nLes coquillages\nLes plus rares\nOn les trouve après les tempêtes.\n`,
    goals: [
      { label: "Un seul `<h1>` : `Le journal de la plage`", test: c => (qa(c, "h1").length === 1 && /le journal de la plage/i.test(txt(c, "h1"))) || (qa(c, "h1").length > 1 ? "Il ne faut qu’un seul h1 par page." : false) },
      { label: "Deux `<h2>` : `Les marées` et `Les coquillages`", test: c => qa(c, "h2").length === 2 && hasTextIn(c, "h2", /les marées/i) && hasTextIn(c, "h2", /les coquillages/i) },
      { label: "`Les plus rares` est un `<h3>`", test: c => hasTextIn(c, "h3", /les plus rares/i) || (hasTextIn(c, "h2", /les plus rares/i) ? "C’est une sous-partie des coquillages : un niveau en dessous du h2." : false) },
      { label: "Les deux phrases sont dans des `<p>`", test: c => hasTextIn(c, "p", /deux fois par jour/i) && hasTextIn(c, "p", /après les tempêtes/i) },
      { label: "Plus aucun texte en vrac, aucune erreur", test: c => { const loose = Array.from(c.doc.body.childNodes).some(n => n.nodeType === 3 && n.textContent.trim()); return loose ? "Il reste du texte qui n’est dans aucune balise." : noErrors(c); } }
    ],
    hints: ["Le titre principal est un `<h1>`, les deux parties sont des `<h2>`.", "« Les plus rares » est dans la partie « Les coquillages » : c’est un `<h3>`.", "Les phrases : `<p>La mer monte deux fois par jour.</p>`"],
    solution: `<h1>Le journal de la plage</h1>\n\n<h2>Les marées</h2>\n<p>La mer monte deux fois par jour.</p>\n\n<h2>Les coquillages</h2>\n<h3>Les plus rares</h3>\n<p>On les trouve après les tempêtes.</p>`,
    debrief: "Ta page a maintenant un **plan** clair : h1, puis h2, puis h3. Ouvre l’onglet **Arbre** : chaque balise est rangée dans le `body`. Et remarque que les lignes vides du code ne changent rien à la page : le navigateur les ignore."
  },
  {
    id: "texte", ch: 2, title: "Le panneau de la plage", notion: "strong, em, br",
    say: "Je veux poser un panneau d’avertissement sur ma plage. Il faut que les mots importants sautent aux yeux !",
    lesson: {
      what: "Dans un paragraphe, on peut mettre des mots en valeur. `<strong>` marque un texte **important** (affiché en gras), `<em>` une **insistance** (en italique). `<br>` force un retour à la ligne.",
      why: "Ces balises donnent du sens : un lecteur d’écran prononce un `<strong>` avec plus de force. Pour un simple effet visuel, on utilisera le CSS.",
      code: `<p><strong>Attention</strong> : c’est <em>très</em> glissant.</p>\n<p>Tago<br>La Crique</p>`,
      pieces: [["<strong>", "un passage important, en gras"], ["<em>", "une insistance, en italique (*emphasis*)"], ["<br>", "un retour à la ligne. Balise **orpheline** : elle n’a pas de fermante"], ["imbrication", "`<strong>` est **dans** le `<p>` : on le ferme avant de fermer le `</p>`"]],
      example: { code: `<p>La marée monte <strong>vite</strong>, <em>très</em> vite.</p>` },
      trap: "Utiliser `<br>` pour faire de l’espace entre deux paragraphes. Un nouveau paragraphe, c’est un nouveau `<p>` ; l’espace, c’est le CSS."
    },
    steps: ["Mets le mot `Attention` dans un `<strong>`.", "Mets le mot `vraiment` dans un `<em>`.", "Dans l’adresse, ajoute deux `<br>` pour avoir trois lignes : `Tago`, `3 rue du Sable`, `La Crique`."],
    starter: `<h1>Le panneau de la plage</h1>\n<p>Attention : la marée monte à 18 h !</p>\n<p>Ne laissez pas vos serviettes trop près de l’eau, elles seront vraiment mouillées.</p>\n<p>Tago, 3 rue du Sable, La Crique</p>\n`,
    goals: [
      { label: "`Attention` est dans un `<strong>`", test: c => /^attention$/i.test(txt(c, "strong")) || (q(c, "strong") ? "Seul le mot Attention doit être dans le strong." : false) },
      { label: "`vraiment` est dans un `<em>`", test: c => /^vraiment$/i.test(txt(c, "em")) },
      { label: "L’adresse tient sur trois lignes grâce à deux `<br>`", test: c => qa(c, "p").some(p => p.querySelectorAll("br").length >= 2 && /tago/i.test(p.textContent) && /crique/i.test(p.textContent)) },
      { label: "Les balises sont bien imbriquées", test: noErrors }
    ],
    hints: ["Remplace `Attention` par `<strong>Attention</strong>`.", "Même idée : `<em>vraiment</em>`.", "`<p>Tago<br>3 rue du Sable<br>La Crique</p>` : pas de fermante pour `<br>`, et plus besoin des virgules."],
    solution: `<h1>Le panneau de la plage</h1>\n<p><strong>Attention</strong> : la marée monte à 18 h !</p>\n<p>Ne laissez pas vos serviettes trop près de l’eau, elles seront <em>vraiment</em> mouillées.</p>\n<p>Tago<br>3 rue du Sable<br>La Crique</p>`,
    debrief: "Tu as placé des balises **à l’intérieur** d’autres balises : c’est l’imbrication. Règle d’or : on ferme d’abord la balise ouverte en dernier (`<p><strong>…</strong></p>`). Et `<br>` est ta première balise orpheline : elle ne contient rien, donc elle ne se ferme pas."
  },

  /* ------------------------------ ATELIER 3 ------------------------------ */
  {
    id: "image", ch: 3, title: "Une fenêtre sur la mer", notion: "<img>, src, alt",
    say: "Ma maison a besoin de fenêtres ! Et ma page, d’images. J’ai rangé mes photos dans le dossier `img`.",
    lesson: {
      what: "La balise `<img>` affiche une image. Elle n’a pas de contenu, donc pas de fermante : tout se passe dans ses **attributs**, des informations écrites dans la balise sous la forme `nom=\"valeur\"`.",
      why: "Les images rendent une page vivante. L’attribut `alt` décrit l’image pour ceux qui ne la voient pas : personnes aveugles, connexion lente, et aussi Google.",
      code: `<img src="img/tago.svg" alt="Tago le bernard-l’ermite" width="120">`,
      pieces: [["src", "*source* : le chemin du fichier image"], ["img/tago.svg", "un chemin **relatif** : le fichier `tago.svg` dans le dossier `img`"], ["alt", "le texte alternatif : décris ce que montre l’image"], ["width", "la largeur en pixels (facultatif)"]],
      example: { code: `<img src="img/coquillage.svg" alt="Un coquillage rose" width="80">` },
      trap: "Une faute dans le chemin (`img/coquilage.svg`, `Img/…`, `images/…`) et l’image ne s’affiche pas. Les noms de fichiers doivent être recopiés **exactement**, majuscules comprises."
    },
    steps: ["Sous le titre, ajoute l’image `img/coquillage.svg` avec un `alt` qui la décrit.", "Ajoute ensuite l’image `img/tago.svg`, avec un `alt` et une largeur (`width`) de `120`.", "Vérifie que les deux images s’affichent dans l’aperçu."],
    starter: `<h1>Ma galerie de la plage</h1>\n`,
    goals: [
      { label: "L’image `img/coquillage.svg` s’affiche", test: c => imgLoaded(c, 'img[src*="coquillage"]') || (q(c, "img") ? "Une image ne s’affiche pas : vérifie le chemin, lettre par lettre : img/coquillage.svg" : false) },
      { label: "L’image `img/tago.svg` s’affiche", test: c => imgLoaded(c, 'img[src*="tago"]') },
      { label: "Chaque image a un `alt` qui la décrit", test: c => qa(c, "img").length >= 2 && qa(c, "img").every(i => (i.getAttribute("alt") || "").trim().length >= 3) || (q(c, "img:not([alt])") ? "Il manque un attribut alt." : false) },
      { label: "L’image de Tago fait 120 pixels de large", test: c => { const i = q(c, 'img[src*="tago"]'); return !!(i && i.getAttribute("width") === "120") || (i && i.getAttribute("width") ? "La largeur s’écrit sans unité : width=\"120\"." : false); } }
    ],
    hints: ["Le modèle : `<img src=\"…\" alt=\"…\">`. Pas de balise fermante.", "Première image : `<img src=\"img/coquillage.svg\" alt=\"Un coquillage\">`", "Deuxième : `<img src=\"img/tago.svg\" alt=\"Tago\" width=\"120\">`"],
    solution: `<h1>Ma galerie de la plage</h1>\n<img src="img/coquillage.svg" alt="Un coquillage rose">\n<img src="img/tago.svg" alt="Tago le bernard-l’ermite" width="120">`,
    debrief: "Une image, c’est une balise orpheline avec des attributs. Le `src` dit **quoi** afficher, le `alt` dit **ce que c’est**. Remarque : les deux images se mettent côte à côte, alors que les titres et paragraphes se mettent les uns sous les autres. Ce n’est pas un hasard : tu le comprendras avec le CSS."
  },
  {
    id: "lien", ch: 3, title: "Des chemins vers ailleurs", notion: "<a href>",
    say: "Une plage sans chemin, personne n’y vient ! Les liens, ce sont les chemins du web : ils relient les pages entre elles.",
    lesson: {
      what: "La balise `<a>` (pour *anchor*, ancre) crée un lien. L’attribut `href` donne la destination, et le contenu de la balise est le texte sur lequel on clique.",
      why: "Les liens sont l’invention qui a créé le web : c’est le « H » de HTML (hypertexte). Sans eux, chaque page serait une île.",
      code: `<a href="https://fr.wikipedia.org">Wikipédia</a>\n<a href="contact.html">Me contacter</a>\n<a href="https://…" target="_blank">S’ouvre dans un nouvel onglet</a>`,
      pieces: [["href", "la destination du lien"], ["https://…", "une adresse **absolue** : un autre site, avec le `https://`"], ["contact.html", "une adresse **relative** : une page de ton propre site"], ["target=\"_blank\"", "ouvre le lien dans un nouvel onglet"]],
      example: { code: `<p>Va voir <a href="https://fr.wikipedia.org">Wikipédia</a> !</p>` },
      trap: "Écrire « cliquez ici » comme texte de lien. Le texte doit dire **où** mène le lien : c’est plus clair pour tout le monde, et Google s’en sert."
    },
    steps: ["Crée un lien vers `https://fr.wikipedia.org/wiki/Pagure` avec le texte `Qui sont les bernard-l’ermite ?`", "Fais-le s’ouvrir dans un nouvel onglet.", "Crée un deuxième lien vers la page `contact.html` avec le texte `Écrire à Tago`."],
    starter: `<h1>Les chemins de la crique</h1>\n<p>Envie d’en savoir plus sur moi ?</p>\n\n`,
    goals: [
      { label: "Un lien mène à `https://fr.wikipedia.org/wiki/Pagure`", test: c => !!q(c, 'a[href="https://fr.wikipedia.org/wiki/Pagure"]') || (q(c, 'a[href*="wikipedia"]') ? "Recopie l’adresse exactement, avec https:// au début." : (q(c, "a") ? false : false)) },
      { label: "Son texte est `Qui sont les bernard-l’ermite ?`", test: c => /qui sont les bernard.l.ermite/i.test(txt(c, 'a[href*="wikipedia"]')) },
      { label: "Il s’ouvre dans un nouvel onglet", test: c => { const a = q(c, 'a[href*="wikipedia"]'); return !!(a && a.getAttribute("target") === "_blank") || (a && a.getAttribute("target") ? "La valeur est _blank, avec le tiret bas." : false); } },
      { label: "Un lien `Écrire à Tago` mène à `contact.html`", test: c => { const a = q(c, 'a[href="contact.html"]'); return !!(a && /écrire à tago/i.test(a.textContent)); } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Le modèle : `<a href=\"adresse\">texte cliquable</a>`.", "Pour le nouvel onglet, ajoute `target=\"_blank\"` dans la balise ouvrante, après le `href`.", "Pour le second lien, l’adresse est simplement `contact.html`."],
    solution: `<h1>Les chemins de la crique</h1>\n<p>Envie d’en savoir plus sur moi ?</p>\n<p><a href="https://fr.wikipedia.org/wiki/Pagure" target="_blank">Qui sont les bernard-l’ermite ?</a></p>\n<p><a href="contact.html">Écrire à Tago</a></p>`,
    debrief: "Un lien vers un autre site utilise une adresse **absolue** (avec `https://`). Un lien vers une page de ton site utilise une adresse **relative** (juste le nom du fichier). Une balise peut avoir plusieurs attributs : on les sépare par un espace. (Dans le jeu, les liens sont désactivés pour que tu restes sur la plage.)"
  },

  /* ------------------------------ ATELIER 4 ------------------------------ */
  {
    id: "ul", ch: 4, title: "La liste de courses", notion: "<ul> et <li>",
    say: "Il me faut des provisions pour ma nouvelle maison. Je te dicte ma liste de courses ?",
    lesson: {
      what: "`<ul>` crée une liste **à puces** (*unordered list*, liste non ordonnée). Chaque élément de la liste est un `<li>` (*list item*).",
      why: "Les listes sont partout sur le web : menus de navigation, listes de produits, ingrédients, résultats de recherche…",
      code: `<ul>\n  <li>Premier élément</li>\n  <li>Deuxième élément</li>\n</ul>`,
      pieces: [["<ul>", "la liste à puces : elle contient **uniquement** des `<li>`"], ["<li>", "un élément de la liste"], ["indentation", "décaler les `<li>` de deux espaces montre qu’ils sont **dans** le `<ul>`"]],
      example: { code: `<ul>\n  <li>du sable</li>\n  <li>de l’eau</li>\n</ul>` },
      trap: "Écrire du texte directement dans le `<ul>`, ou des `<li>` sans `<ul>` autour. Les deux vont toujours ensemble."
    },
    steps: ["Sous le titre, crée une liste à puces `<ul>`.", "Mets-y au moins 4 éléments `<li>` : par exemple des algues, du plancton, une crevette, un caillou brillant."],
    starter: `<h2>Ma liste de courses</h2>\n`,
    goals: [
      { label: "Une liste `<ul>` existe", test: c => !!q(c, "ul") },
      { label: "Elle contient au moins 4 `<li>`", test: c => qa(c, "ul > li").length >= 4 || (q(c, "ul") ? `Il y a ${qa(c, "ul > li").length} élément(s) pour l’instant.` : false) },
      { label: "Chaque `<li>` contient un texte", test: c => qa(c, "li").length > 0 && qa(c, "li").every(li => li.textContent.trim().length > 0) },
      { label: "La liste est sous le titre, sans erreur", test: c => after(c, "h2", "ul") && noErrors(c) }
    ],
    hints: ["Ouvre `<ul>`, puis ferme-le avec `</ul>` quelques lignes plus bas.", "Entre les deux, une ligne par élément : `<li>des algues</li>`.", "Il en faut quatre."],
    solution: `<h2>Ma liste de courses</h2>\n<ul>\n  <li>des algues</li>\n  <li>du plancton</li>\n  <li>une crevette</li>\n  <li>un caillou brillant</li>\n</ul>`,
    debrief: "Le `<ul>` est le **parent**, les `<li>` sont ses **enfants**. Regarde l’onglet **Arbre** : c’est exactement ce qu’il montre. Le menu d’un site est presque toujours une liste `<ul>` de liens : tu le referas dans l’atelier 6."
  },
  {
    id: "ol", ch: 4, title: "La recette de la soupe", notion: "<ol>, listes imbriquées",
    say: "Avec mes courses, je prépare ma fameuse soupe d’algues. Mais l’ordre des étapes est très important !",
    lesson: {
      what: "`<ol>` crée une liste **numérotée** (*ordered list*). Le navigateur écrit les numéros tout seul. Et une liste peut en contenir une autre : on met le nouveau `<ul>` **dans** un `<li>`.",
      why: "On utilise `<ol>` quand l’ordre compte : une recette, un classement, les étapes d’une inscription.",
      code: `<ol>\n  <li>Première étape</li>\n  <li>Deuxième étape :\n    <ul>\n      <li>un détail</li>\n      <li>un autre détail</li>\n    </ul>\n  </li>\n</ol>`,
      pieces: [["<ol>", "une liste numérotée"], ["<li>", "toujours un `<li>` pour chaque élément"], ["<li> … <ul>", "une sous-liste se place **dans** le `<li>`, avant son `</li>`"]],
      example: { code: `<ol>\n  <li>Ramasser</li>\n  <li>Laver</li>\n  <li>Cuire</li>\n</ol>` },
      trap: "Écrire les numéros à la main (« 1. Ramasser ») : le `<ol>` les ajoute déjà. Et si on insère une étape, il renumérote tout seul."
    },
    steps: ["Crée une liste numérotée `<ol>` avec 4 étapes : ramasser les algues, les laver, les faire cuire, servir chaud.", "Dans la première étape, ajoute une sous-liste `<ul>` de 2 éléments : `des algues vertes` et `des algues rouges`."],
    starter: `<h2>La soupe d’algues de Tago</h2>\n`,
    goals: [
      { label: "Une liste numérotée `<ol>` de 4 étapes", test: c => qa(c, "ol > li").length >= 4 || (q(c, "ol") ? `${qa(c, "ol > li").length} étape(s) pour l’instant.` : (q(c, "ul > li") && !q(c, "ol") ? "Ta liste a des puces : il faut des numéros, donc <ol>." : false)) },
      { label: "Pas de numéros écrits à la main", test: c => !qa(c, "ol > li").some(li => /^\s*\d+\s*[.)-]/.test(li.textContent)) || "Le <ol> écrit déjà les numéros : enlève les tiens." },
      { label: "Une sous-liste `<ul>` de 2 éléments dans la première étape", test: c => { const li = q(c, "ol > li"); return !!(li && li.querySelectorAll(":scope > ul > li").length >= 2) || (q(c, "ol > ul") ? "La sous-liste doit être DANS le <li>, avant son </li>." : false); } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Même principe que `<ul>`, avec `<ol>` : `<ol><li>Ramasser les algues</li>…</ol>`.", "Pour la sous-liste, ne ferme pas tout de suite le premier `<li>` : écris le `<ul>` dedans, puis `</li>`.", "`<li>Ramasser les algues :\\n  <ul>\\n    <li>des algues vertes</li>\\n    <li>des algues rouges</li>\\n  </ul>\\n</li>`"],
    solution: `<h2>La soupe d’algues de Tago</h2>\n<ol>\n  <li>Ramasser les algues :\n    <ul>\n      <li>des algues vertes</li>\n      <li>des algues rouges</li>\n    </ul>\n  </li>\n  <li>Les laver</li>\n  <li>Les faire cuire</li>\n  <li>Servir chaud</li>\n</ol>`,
    debrief: "Tu as imbriqué une liste dans une liste. C’est le même principe que des poupées russes : `ol` contient `li`, qui contient `ul`, qui contient `li`. L’onglet **Arbre** le montre très bien. Les menus déroulants des sites sont construits exactement comme ça."
  },
  {
    id: "quiz2", ch: 4, quiz: true, title: "Contrôle des fenêtres et étagères", notion: "quiz",
    say: "Dernière vérification avant d’allumer la cheminée : images, liens et listes !",
    questions: [
      { q: "Pourquoi l’attribut `alt` est-il important ?", opts: ["Il change la taille de l’image", "Il décrit l’image pour ceux qui ne la voient pas", "Il rend l’image cliquable"], a: 1, why: "Le `alt` est lu par les lecteurs d’écran et s’affiche si l’image ne charge pas. Google s’en sert aussi." },
      { q: "Quelle balise crée un lien ?", opts: ["`<link>`", "`<a>`", "`<href>`"], a: 1, why: "C’est `<a>`, avec l’attribut `href`. `<link>` sert à relier un fichier CSS, dans le head." },
      { q: "Pour les étapes d’un tutoriel, on utilise…", opts: ["`<ul>`, une liste à puces", "`<ol>`, une liste numérotée", "des `<p>` avec des numéros écrits à la main"], a: 1, why: "L’ordre compte : `<ol>` numérote tout seul, et renumérote si on ajoute une étape." },
      { q: "Ce code est-il correct ?", code: `<ul>\n  <li>Sable</li>\n  Coquillage\n</ul>`, opts: ["Oui", "Non : tout le contenu d’un `<ul>` doit être dans des `<li>`"], a: 1, why: "Un `<ul>` ne contient que des `<li>`. « Coquillage » doit être dans son propre `<li>`." }
    ],
    debrief: "Images, liens, listes : ce sont les briques qu’on retrouve sur presque toutes les pages du web."
  },

  /* ------------------------------ ATELIER 5 ------------------------------ */
  {
    id: "champ", ch: 5, title: "La boîte aux lettres", notion: "<form>, <label>, <input>",
    say: "J’aimerais que mes voisins puissent s’inscrire à ma lettre d’infos de la plage. Il me faut un formulaire !",
    lesson: {
      what: "Un formulaire `<form>` regroupe des champs. Chaque champ `<input>` a un `type` (texte, e-mail, mot de passe…) et une étiquette `<label>`. Le `for` du label reprend l’`id` du champ : ils sont reliés.",
      why: "Les formulaires permettent aux visiteurs d’**envoyer** des informations : connexion, recherche, commande, inscription… Le `<label>` relié est indispensable : cliquer dessus active le champ, et les lecteurs d’écran le lisent.",
      code: `<form>\n  <label for="prenom">Ton prénom</label>\n  <input type="text" id="prenom">\n  <button>Envoyer</button>\n</form>`,
      pieces: [["<form>", "le formulaire, qui regroupe tous les champs"], ["<label for=\"prenom\">", "l’étiquette du champ dont l’`id` est `prenom`"], ["<input>", "un champ. Balise orpheline"], ["type=\"email\"", "le type de champ : `text`, `email`, `password`, `number`, `date`…"], ["id=\"prenom\"", "un nom **unique** dans la page"], ["<button>", "le bouton d’envoi"]],
      example: { code: `<label for="nom">Nom</label>\n<input type="text" id="nom">` },
      trap: "Un `for` et un `id` qui ne correspondent pas exactement (`for=\"prénom\"` et `id=\"prenom\"`) : le label n’est plus relié. Évite les accents et les espaces dans les `id`."
    },
    steps: ["Dans le `<form>`, ajoute un label `Ton prénom` relié à un champ texte d’id `prenom`.", "Ajoute un label `Ton e-mail` relié à un champ de type `email` d’id `email`.", "Termine par un bouton `S’inscrire`.", "Dans l’aperçu, clique sur un label : le champ s’active !"],
    starter: `<h2>La lettre d’infos de la plage</h2>\n<form>\n  \n</form>\n`,
    goals: [
      { label: "Un champ texte d’id `prenom`", test: c => { const i = q(c, "#prenom"); return !!(i && i.tagName === "INPUT" && i.type === "text"); } },
      { label: "Le label `Ton prénom` est relié au champ (`for=\"prenom\"`)", test: c => { const l = q(c, 'label[for="prenom"]'); return !!(l && /prénom/i.test(l.textContent)) || (q(c, "label") ? "Le for du label doit être exactement l’id du champ : prenom." : false); } },
      { label: "Un champ de type `email` d’id `email`, avec son label", test: c => { const i = q(c, "#email"); return !!(i && i.type === "email" && q(c, 'label[for="email"]')) || (i && i.type !== "email" ? "Le type de ce champ doit être email." : false); } },
      { label: "Un bouton `S’inscrire` dans le formulaire", test: c => hasTextIn(c, "form button", /s.inscrire/i) },
      { label: "Tout est dans le `<form>`, sans erreur", test: c => qa(c, "input").every(i => i.closest("form")) && noErrors(c) }
    ],
    hints: ["Le label d’abord : `<label for=\"prenom\">Ton prénom</label>`", "Puis son champ : `<input type=\"text\" id=\"prenom\">`. Même chose pour l’e-mail avec `type=\"email\"`.", "Le bouton : `<button>S’inscrire</button>`, avant le `</form>`."],
    solution: `<h2>La lettre d’infos de la plage</h2>\n<form>\n  <label for="prenom">Ton prénom</label>\n  <input type="text" id="prenom">\n\n  <label for="email">Ton e-mail</label>\n  <input type="email" id="email">\n\n  <button>S’inscrire</button>\n</form>`,
    debrief: "Un label, un champ, un `for` qui reprend l’`id` : c’est la base de tous les formulaires. Le type `email` n’est pas qu’un détail : sur téléphone, il affiche un clavier avec l’@, et le navigateur vérifie que l’adresse a la bonne forme. Les champs sont côte à côte : c’est le CSS qui les mettra en colonne."
  },
  {
    id: "formulaire", ch: 5, title: "Le livre d’or", notion: "textarea, required, placeholder",
    say: "Les visiteurs de ma plage veulent me laisser des petits mots. Construisons un livre d’or !",
    lesson: {
      what: "`<textarea>` est un grand champ pour un texte de plusieurs lignes. Les attributs `placeholder` et `required` améliorent les champs : un exemple grisé, et l’obligation de remplir.",
      why: "Un bon formulaire guide le visiteur : il montre quoi écrire (`placeholder`) et empêche d’envoyer un champ vide (`required`). Moins d’erreurs, moins de frustration.",
      code: `<input type="text" id="nom" placeholder="Ex. : Kami" required>\n<textarea id="message" rows="4"></textarea>`,
      pieces: [["<textarea>", "un champ de plusieurs lignes. Lui, il a une balise fermante !"], ["rows=\"4\"", "la hauteur du textarea, en lignes"], ["placeholder", "un texte d’exemple, grisé, qui disparaît quand on écrit"], ["required", "un attribut **sans valeur** : le champ est obligatoire"]],
      example: { code: `<textarea rows="3" placeholder="Ton message…"></textarea>` },
      trap: "Utiliser le `placeholder` à la place du `<label>`. Le placeholder disparaît dès qu’on tape : le visiteur ne sait plus ce qu’il devait écrire. Il faut **les deux**."
    },
    steps: ["Ajoute un label `Ton nom` relié à un champ texte d’id `nom`, **obligatoire**, avec un placeholder.", "Ajoute un label `Ton message` relié à un `<textarea>` d’id `message` de 4 lignes.", "Ajoute un bouton `Signer le livre d’or`."],
    starter: `<h2>Le livre d’or de Tago</h2>\n<form>\n  \n</form>\n`,
    goals: [
      { label: "Un champ `nom` obligatoire avec un placeholder", test: c => { const i = q(c, "input#nom"); return !!(i && i.required && (i.getAttribute("placeholder") || "").trim()) || (i && !i.required ? "Ajoute l’attribut required au champ." : (i ? "Il manque le placeholder." : false)); } },
      { label: "Le label `Ton nom` est relié au champ", test: c => !!q(c, 'label[for="nom"]') },
      { label: "Un `<textarea>` d’id `message` de 4 lignes, avec son label", test: c => { const t = q(c, "textarea#message"); return !!(t && t.getAttribute("rows") === "4" && q(c, 'label[for="message"]')) || (t && t.getAttribute("rows") !== "4" ? "Ajoute rows=\"4\" au textarea." : false); } },
      { label: "Un bouton `Signer le livre d’or`", test: c => hasTextIn(c, "form button", /signer/i) },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Le champ nom : `<input type=\"text\" id=\"nom\" placeholder=\"Ex. : Kami\" required>`, avec son label avant.", "Le textarea a une balise fermante : `<textarea id=\"message\" rows=\"4\"></textarea>`.", "Le label du message : `<label for=\"message\">Ton message</label>`."],
    solution: `<h2>Le livre d’or de Tago</h2>\n<form>\n  <label for="nom">Ton nom</label>\n  <input type="text" id="nom" placeholder="Ex. : Kami" required>\n\n  <label for="message">Ton message</label>\n  <textarea id="message" rows="4"></textarea>\n\n  <button>Signer le livre d’or</button>\n</form>`,
    debrief: "`required` est un attribut **booléen** : sa simple présence suffit, pas besoin de valeur. Le navigateur refusera d’envoyer le formulaire si le nom est vide. Attention : `<textarea>` a une fermante, contrairement à `<input>`."
  },

  /* ------------------------------ ATELIER 6 ------------------------------ */
  {
    id: "semantique", ch: 6, title: "Ranger la maison", notion: "header, nav, main, footer",
    say: "Ma page marche, mais elle est construite avec des `<div>` partout. On dirait des cartons sans étiquette ! Rangeons tout ça.",
    lesson: {
      what: "`<div>` est une boîte **sans signification**. Le HTML moderne a des balises **sémantiques** qui disent quel rôle joue chaque zone : l’en-tête, le menu, le contenu principal, le pied de page.",
      why: "Pour l’œil, rien ne change. Mais Google comprend mieux la page, les lecteurs d’écran proposent de « sauter au contenu principal », et le code est beaucoup plus lisible pour toi.",
      code: `<header>\n  <h1>Nom du site</h1>\n  <nav>…les liens du menu…</nav>\n</header>\n<main>…le contenu…</main>\n<footer>…le pied de page…</footer>`,
      pieces: [["<header>", "l’en-tête : le logo, le titre du site, souvent le menu"], ["<nav>", "la navigation : le menu de liens"], ["<main>", "le contenu principal, **unique** sur la page"], ["<footer>", "le pied de page : contact, mentions, copyright"], ["<section>", "une partie de la page, avec son propre titre"]],
      trap: "Croire que `<header>` est la même chose que `<head>`. Le `<head>` est invisible (infos pour le navigateur) ; le `<header>` est l’en-tête **visible** de la page, dans le `<body>`."
    },
    steps: ["Remplace la `div` « haut » par un `<header>`.", "Remplace la `div` « menu » par un `<nav>`.", "Remplace la `div` « contenu » par un `<main>`.", "Remplace la `div` « bas » par un `<footer>`. Pense aussi aux balises fermantes !"],
    starter: `<div class="haut">\n  <h1>La crique de Tago</h1>\n  <div class="menu">\n    <a href="#maison">La maison</a>\n    <a href="#plage">La plage</a>\n  </div>\n</div>\n<div class="contenu">\n  <h2>Bienvenue</h2>\n  <p>Ici, on construit une maison, balise par balise.</p>\n</div>\n<div class="bas">\n  <p>© Tago 2026</p>\n</div>\n`,
    goals: [
      { label: "Un `<header>` contient le `<h1>`", test: c => !!q(c, "header h1") },
      { label: "Un `<nav>` dans le header contient les 2 liens", test: c => qa(c, "header nav a").length >= 2 || (q(c, "nav") ? "Le nav doit être dans le header, avec les deux liens dedans." : false) },
      { label: "Un `<main>` contient le titre et le paragraphe", test: c => !!(q(c, "main h2") && q(c, "main p")) },
      { label: "Un `<footer>` contient le copyright", test: c => /©/.test(txt(c, "footer")) },
      { label: "Plus aucune `<div>`, et aucune erreur", test: c => qa(c, "div").length === 0 ? noErrors(c) : `Il reste ${qa(c, "div").length} div. Pense à changer aussi les </div> fermantes.` }
    ],
    hints: ["Change `<div class=\"haut\">` en `<header>`, et son `</div>` (ligne 7) en `</header>`.", "La div menu devient `<nav>` … `</nav>`. Tu peux supprimer les `class`, elles ne servent plus.", "Puis `<main>` … `</main>` et `<footer>` … `</footer>`."],
    solution: `<header>\n  <h1>La crique de Tago</h1>\n  <nav>\n    <a href="#maison">La maison</a>\n    <a href="#plage">La plage</a>\n  </nav>\n</header>\n<main>\n  <h2>Bienvenue</h2>\n  <p>Ici, on construit une maison, balise par balise.</p>\n</main>\n<footer>\n  <p>© Tago 2026</p>\n</footer>`,
    debrief: "La page a exactement la même apparence, mais maintenant **chaque zone dit ce qu’elle est**. C’est ça, le HTML sémantique. On garde `<div>` pour les boîtes qui servent seulement à la mise en page (tu en auras besoin en CSS)."
  },
  {
    id: "finale", ch: 6, boss: true, title: "La maison de Tago", notion: "mission finale",
    say: "Dernière mission ! Construis toute ma page d’accueil, du toit aux fondations. Tu as le modèle à droite, et tu connais toutes les balises.",
    lesson: {
      what: "Cette mission réunit tout ce que tu as appris. Avance zone par zone, et vérifie souvent : les **Objectifs** te disent ce qui manque, les **Remarques** te signalent les fautes.",
      why: "C’est exactement comme ça qu’on commence un vrai site : d’abord la structure en HTML, ensuite le style en CSS, enfin l’interactivité en JavaScript.",
      code: `<header>\n  <h1>…</h1>\n  <nav>…</nav>\n</header>\n<main>\n  <section>\n    <h2>…</h2>\n    …\n  </section>\n</main>\n<footer>…</footer>`,
      pieces: [["<section>", "une partie du contenu, qui commence par son titre `<h2>`"], ["ordre", "avance de haut en bas : header, main, footer"], ["Le modèle", "clique sur « Le modèle à reproduire » au-dessus de l’éditeur"]],
      trap: "Tout écrire d’un coup puis chercher les erreurs. Vérifie après chaque zone : c’est plus rapide."
    },
    steps: [
      "Un `<header>` avec un `<h1>` `La maison de Tago` et un `<nav>` de 3 liens.",
      "Un `<main>` avec deux `<section>`, chacune avec un `<h2>`.",
      "Dans la première section : un paragraphe et l’image `img/plage.svg` (avec un `alt`).",
      "Dans la deuxième : une liste `<ul>` d’au moins 3 éléments.",
      "Un `<footer>` avec un lien vers `contact.html`."
    ],
    starter: `<!-- La page d’accueil de Tago -->\n\n`,
    goals: [
      { label: "`<header>` : un `<h1>` `La maison de Tago` et un `<nav>` de 3 liens", test: c => /la maison de tago/i.test(txt(c, "header h1")) && qa(c, "header nav a").length >= 3 || (q(c, "header") ? `Le header a ${qa(c, "header nav a").length} lien(s) dans un nav, et son h1 doit être La maison de Tago.` : false) },
      { label: "`<main>` contient deux `<section>` avec chacune un `<h2>`", test: c => { const s = qa(c, "main section"); return (s.length >= 2 && s.every(x => x.querySelector("h2"))) || (s.length ? `${s.length} section(s), chacune doit commencer par un h2.` : false); } },
      { label: "La première section : un paragraphe et l’image `img/plage.svg` avec un `alt`", test: c => { const s = q(c, "main section"); return !!(s && s.querySelector("p") && s.querySelector('img[src*="plage"]') && (s.querySelector('img[src*="plage"]').getAttribute("alt") || "").trim()) && imgLoaded(c, 'img[src*="plage"]'); } },
      { label: "La deuxième section : une liste d’au moins 3 éléments", test: c => { const s = qa(c, "main section")[1]; return !!(s && s.querySelectorAll("ul > li").length >= 3); } },
      { label: "`<footer>` : un lien vers `contact.html`", test: c => !!q(c, 'footer a[href="contact.html"]') },
      { label: "Le HTML est propre : aucune erreur", test: noErrors }
    ],
    hints: ["Commence par les trois grandes zones vides : `<header></header>`, `<main></main>`, `<footer></footer>`.", "Le nav : `<nav><a href=\"#maison\">Maison</a> <a href=\"#plage\">Plage</a> <a href=\"#amis\">Amis</a></nav>`.", "Une section : `<section>\\n  <h2>Ma plage</h2>\\n  <p>…</p>\\n  <img src=\"img/plage.svg\" alt=\"…\">\\n</section>`"],
    solution: `<header>\n  <h1>La maison de Tago</h1>\n  <nav>\n    <a href="#plage">La plage</a>\n    <a href="#amis">Mes amis</a>\n    <a href="contact.html">Contact</a>\n  </nav>\n</header>\n\n<main>\n  <section>\n    <h2>Ma plage</h2>\n    <p>Une petite crique tranquille, avec du sable chaud et des vagues douces.</p>\n    <img src="img/plage.svg" alt="La crique de Tago au coucher du soleil">\n  </section>\n\n  <section>\n    <h2>Mes amis</h2>\n    <ul>\n      <li>Kami le caméléon</li>\n      <li>Bip le robot</li>\n      <li>Les mouettes</li>\n    </ul>\n  </section>\n</main>\n\n<footer>\n  <p><a href="contact.html">Écrire à Tago</a> · © 2026</p>\n</footer>`,
    debrief: "Tu as construit une vraie page, entièrement structurée et sémantique. C’est solide, mais tout gris… Le HTML a fait son travail : il dit **ce qu’il y a**. Pour décider **à quoi ça ressemble**, il te faut maintenant le CSS. Kami t’attend !"
  }
  ]
};
