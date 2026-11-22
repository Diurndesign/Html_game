/* =====================================================================
   LA MAISON DE BIP · les données du jeu HTML
   Pour ajouter ou modifier une mission : édite le tableau `levels`.
   Chaque objectif (goals) a une fonction `test(c)` qui renvoie
   true (réussi), false (raté) ou un texte (raté, avec une explication).
   Outils disponibles dans les tests : q, qa, txt, cs, hasCode, noErrors…
   (voir engine.js, section « OUTILS POUR LES OBJECTIFS »)
   ===================================================================== */
const after = (c, a, b) => { const x = q(c, a), y = q(c, b); return !!(x && y && (x.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_FOLLOWING)); };
const hasTextIn = (c, sel, re) => qa(c, sel).some(e => re.test(e.textContent.replace(/\s+/g, " ")));
const imgLoaded = (c, sel) => { const i = q(c, sel); return !!(i && i.complete && i.naturalWidth > 0); };
/* indentation (nombre d’espaces au début) des lignes qui correspondent à `re` */
const indentOf = (c, re) => c.code.split("\n").filter(l => re.test(l)).map(l => l.match(/^ */)[0].length);
/* un commentaire HTML (au moins 3 caractères) directement dans cet élément */
const hasComment = el => Array.from(el ? el.childNodes : []).some(n => n.nodeType === 8 && n.textContent.trim().length >= 3);

const GAME = {
  id: "maison-bip",
  name: "La maison de Bip",
  title: ["La maison de", "Bip"],
  kicker: "HTML · pour bien démarrer dans le web",
  lead: "Bip, le petit robot de Mission Bip, n’a pas encore de maison. Sur le web, tout se construit avec des balises entre chevrons `<` `>` : c’est le HTML. Écris du vrai HTML, regarde la page se construire en direct, et chaque atelier terminé ajoute une pièce à la maison de Bip. Aucune connaissance n’est nécessaire : on part de zéro.",
  mode: "html",
  lang: "html",
  rewardWord: "pièces de la maison",
  rewardLabel: "Pièce",
  rewardMsg: "Nouvelle pièce pour la maison de Bip :",
  chapterNote: "Chaque atelier terminé construit une pièce de la maison de Bip.",
  finaleTitle: "La maison de Bip est finie !",
  confetti: ["#FF8A3D", "#3D7BF7", "#9B5DE5", "#8FD3FF", "#1B2440"],
  links: { html: null, css: "https://diurndesign.github.io/Css_game/", js: "https://diurndesign.github.io/javascript_game/" },
  next: {
    name: "Mission Kami (CSS)",
    url: "https://diurndesign.github.io/Css_game/",
    title: "Mission Kami : on habille la page avec le CSS",
    text: "La maison de Bip est construite, mais toute grise. Son ami **Kami**, un caméléon, a perdu ses couleurs lui aussi. Avec le **CSS**, tu vas les lui rendre : couleurs, polices, tailles, bordures… Tu viseras les balises, les `class` et les `id` que tu as appris à écrire ici. La suite logique du HTML !"
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
    say: "Bzzt ! Le HTML, ce sont les murs de ma future maison. Je t’explique tout !",
    cards: [
      { title: "C’est quoi ?", text: ["HTML veut dire *HyperText Markup Language*, en français « langage de balisage hypertexte ». C’est le langage qui décrit **le contenu** d’une page web.", "Ce n’est pas un langage de programmation : il ne calcule rien et ne prend aucune décision. Il **étiquette** le contenu : « ceci est un titre », « ceci est une image », « ceci est un lien »."] },
      { title: "À quoi ça sert ?", text: "Le navigateur (Chrome, Firefox, Safari…) lit le fichier HTML et le transforme en page. Le HTML sert à :", list: ["afficher des titres, des textes, des images, des tableaux ;", "relier les pages entre elles avec des **liens** : c’est ça, l’*hypertexte* ;", "créer des formulaires : connexion, recherche, commande ;", "donner une structure que Google et les lecteurs d’écran comprennent."] },
      { title: "Pourquoi on l’utilise ?", text: ["C’est **le seul langage** que tous les navigateurs comprennent pour décrire une page. Chaque site que tu visites (YouTube, Wikipédia, ton réseau social préféré) envoie du HTML à ton navigateur.", "Il est **gratuit** et ouvert : un éditeur de texte et un navigateur suffisent. C’est la première brique à apprendre, car le CSS et le JavaScript viennent s’accrocher dessus."] }
    ],
    before: {
      title: "Ce qu’il te faut pour commencer",
      text: "Ce jeu est le tout premier pas : **aucune connaissance n’est nécessaire**, ni en code ni en informatique.",
      items: [
        "Un ordinateur avec un **navigateur** récent : Chrome, Firefox, Safari ou Edge. Sur téléphone, le jeu marche aussi, mais taper du code y est moins confortable.",
        "Rien à installer : tu écris ton code directement dans le jeu, et ta progression est enregistrée automatiquement.",
        "Repère sur ton clavier les touches `<`, `>`, `/`, `=` et `\"` : tu vas t’en servir tout le temps. Sur un clavier français, `<` et `>` sont souvent sur la touche à gauche du W.",
        "Plus tard, pour tes propres projets : un éditeur de code gratuit comme **VS Code**."
      ]
    },
    trioFocus: "html",
    trioHere: "Tu es ici",
    trioNote: "Dans ce jeu, tu construis **les murs** avec le HTML. Ensuite, Kami t’apprendra à les décorer avec le CSS, et tu retrouveras Bip dans Mission Bip pour les animer avec le JavaScript.",
    demo: {
      title: "Le même texte, avec et sans HTML",
      text: "Clique sur les boutons : le texte reste le même, seules les balises changent.",
      lang: "html",
      variants: [
        { label: "Texte brut", html: "La maison de Bip\nBienvenue chez moi !\nMes outils préférés :\nle marteau\nle tournevis\nla clé à molette", caption: "Sans balises, le navigateur colle tout sur une seule ligne : il ne sait pas ce qui est un titre, un paragraphe ou une liste." },
        { label: "Avec des balises", html: "<h1>La maison de Bip</h1>\n<p>Bienvenue chez moi !</p>\n<h2>Mes outils préférés :</h2>\n<ul>\n  <li>le marteau</li>\n  <li>le tournevis</li>\n  <li>la clé à molette</li>\n</ul>", caption: "Avec les balises, le navigateur sait ce qu’est chaque morceau et l’affiche à sa place : un grand titre, un paragraphe, une liste à puces." },
        { label: "+ image et lien", html: "<h1>La maison de Bip</h1>\n<img src=\"img/boulon.svg\" alt=\"Un boulon\" width=\"90\">\n<p>Bienvenue chez moi !</p>\n<p><a href=\"https://fr.wikipedia.org\">En savoir plus sur Wikipédia</a></p>", caption: "Une balise `<img>` affiche une image, une balise `<a>` crée un lien vers une autre page. C’est tout le principe du web." }
      ]
    },
    anatomy: {
      title: "Comment s’écrit un élément HTML",
      text: "Presque tout le HTML suit ce modèle.",
      code: "<a href=\"contact.html\">Écrire à Bip</a>",
      pieces: [
        ["<a", "le début de la **balise ouvrante**, avec le nom de la balise (`a` = lien)"],
        ["href=\"contact.html\"", "un **attribut** : une information en plus. `href` est son nom, `contact.html` sa **valeur** : l’adresse où mène le lien"],
        [">", "la fin de la balise ouvrante"],
        ["Écrire à Bip", "le **contenu**, visible dans la page"],
        ["</a>", "la **balise fermante** : le même nom, précédé d’une barre `/`. Le tout forme un **élément**"]
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
    ctaText: "24 missions t’attendent, en 6 ateliers. Chaque atelier terminé ajoute une pièce à la maison de Bip. À la fin, tu auras toutes les bases pour passer au CSS."
  },

  /* ------------------------------------------------------------------
     LEXIQUE, BONNES PRATIQUES, « PRÊT POUR LA SUITE ? »
     ------------------------------------------------------------------ */
  glossary: [
    ["**Accessibilité**", "le fait qu’une page soit utilisable par tout le monde, y compris les personnes aveugles, malvoyantes ou qui naviguent au clavier. Les `alt`, les `<label>` et les balises sémantiques y contribuent."],
    ["`alt`", "attribut d’une image : le texte alternatif qui décrit l’image pour ceux qui ne la voient pas. `alt=\"\"` (vide) pour une image purement décorative.", `<img src="img/bip.svg" alt="Bip le robot">`],
    ["`<a>`", "crée un **lien hypertexte** : un texte cliquable qui mène à une autre page, à un autre site ou à une ancre. La destination est dans `href`.", `<a href="contact.html">Écrire à Bip</a>`],
    ["**Ancre**", "un lien vers une partie précise de la page : `href=\"#nom\"` mène à l’élément qui a `id=\"nom\"`.", `<a href="#potager">Aller au potager</a>\n<h2 id="potager">Le potager</h2>`],
    ["**Arbre (DOM)**", "la façon dont le navigateur range les éléments, comme un arbre généalogique : chaque élément a un parent et parfois des enfants. Les développeurs l’appellent le **DOM** (*Document Object Model*)."],
    ["**Attribut**", "une information en plus, écrite dans la balise ouvrante sous la forme `nom=\"valeur\"`. On sépare plusieurs attributs par une espace.", `<img src="img/bip.svg" alt="Bip">`],
    ["**Attribut booléen**", "un attribut sans valeur : sa simple présence suffit, comme `required`, `checked` ou `defer`.", `<input type="text" id="nom" required>`],
    ["**Balise**", "un mot-clé entre chevrons `<` `>` qui dit au navigateur ce qu’est un contenu.", `<p>`],
    ["**Balise ouvrante / fermante**", "la balise **ouvrante** commence un élément ; la balise **fermante** le termine, avec le même nom précédé d’une barre `/`.", `<p>Bonjour</p>`],
    ["**Balise orpheline**", "une balise sans contenu, donc sans balise fermante : `<img>`, `<br>`, `<input>`, `<meta>`, `<link>`.", `<br>`],
    ["**Bloc (élément de type bloc)**", "un élément qui prend toute la largeur et passe à la ligne : `div`, `p`, `h1`, `ul`, `section`, `table`…"],
    ["`<body>`", "le corps du document : tout ce qui est **visible** dans la page. Il vient après le `<head>`."],
    ["**Bouton radio**", "un champ rond qui permet **un seul** choix parmi plusieurs. Les boutons d’une même question ont le même `name`.", `<input type="radio" id="m" name="taille" value="m">\n<label for="m">M</label>`],
    ["`<button>`", "un bouton. `type=\"submit\"` envoie le formulaire, `type=\"button\"` sert pour le JavaScript.", `<button type="submit">Envoyer</button>`],
    ["**Caractère spécial (entité)**", "un code qui commence par `&` et finit par `;` pour afficher un caractère réservé (`<`, `>`, `&`) ou absent du clavier.", `<p>La balise &lt;p&gt;</p>\n<p>Bip &amp; Kami, 18&nbsp;h</p>\n<p>&copy; 2026</p>`],
    ["**Case à cocher**", "un champ carré (`type=\"checkbox\"`) qu’on coche ou non, indépendamment des autres.", `<input type="checkbox" id="vernis" name="vernis">`],
    ["**Champ**", "une zone de formulaire où le visiteur écrit ou choisit : `<input>` (une ligne), `<textarea>` (plusieurs lignes), `<select>`. Dans un `<input>` ou un `<textarea>`, le `placeholder` affiche un exemple grisé.", `<input type="email" id="email" placeholder="bip@robot.fr">`],
    ["**Chemin absolu**", "l’adresse complète (l’**URL**) d’une ressource, avec `https://` : pour aller sur un autre site.", `<a href="https://fr.wikipedia.org/wiki/Robot">Les robots</a>`],
    ["**Chemin relatif**", "un chemin qui part du fichier où l’on est : `contact.html` (même dossier), `img/bip.svg` (dans le dossier `img`), `../index.html` (`..` = le **dossier parent**).", `<a href="../index.html">Accueil</a>`],
    ["`class`", "attribut qui range un élément dans un groupe. Plusieurs éléments peuvent avoir la même `class`, et un élément plusieurs classes. En CSS, on la vise avec `.nom`.", `<div class="carton lourd">`],
    ["**Commentaire**", "une note pour les humains qui lisent le code, entre `<!--` et `-->`. Le navigateur l’ignore.", `<!-- Le menu principal -->`],
    ["**Contenu**", "ce qui se trouve entre la balise ouvrante et la balise fermante : du texte et/ou d’autres éléments."],
    ["**CSS**", "le langage qui décide de l’**apparence** de la page : couleurs, polices, tailles, mise en page. C’est le jeu suivant !"],
    ["`<div>`", "une boîte de type **bloc**, **sans signification** : elle sert seulement à regrouper des éléments, souvent pour la mise en page.", `<div class="carton">\n  <h2>La cuisine</h2>\n</div>`],
    ["`<!DOCTYPE html>`", "la toute première ligne de chaque **document** HTML (le fichier entier) : « ce document est du HTML moderne »."],
    ["**Élément**", "l’ensemble balise ouvrante + contenu + balise fermante. C’est la brique de base d’une page.", `<h1>Bonjour Bip</h1>`],
    ["**En ligne (élément en ligne)**", "un élément qui reste dans la ligne de texte, sans passer à la ligne : `span`, `a`, `strong`, `em`, `img`."],
    ["**Enfant**", "un élément placé directement dans un autre, son **parent**. Les `<li>` sont les enfants du `<ul>`.", `<ul>\n  <li>un enfant du ul</li>\n</ul>`],
    ["`<figure>`", "regroupe une image (ou un schéma) et sa légende `<figcaption>`.", `<figure>\n  <img src="img/maison.svg" alt="La maison">\n  <figcaption>Ma maison</figcaption>\n</figure>`],
    ["`<form>`", "le **formulaire** : il regroupe les champs que le visiteur remplit puis envoie. `<fieldset>` et `<legend>` regroupent des champs liés sous une question.", `<form>\n  …les champs et le bouton…\n</form>`],
    ["**Frère**", "deux éléments qui ont le même parent sont **frères**. Les `<li>` d’une même liste sont frères."],
    ["`<h1>` à `<h6>`", "les six niveaux de titres, du plus important au moins important : un seul `<h1>` par page. Le texte courant va dans des paragraphes `<p>`.", `<h1>Le site</h1>\n<h2>Une partie</h2>\n<p>Du texte.</p>`],
    ["`<head>`", "la tête du document : les informations pour le navigateur (encodage, titre de l’onglet, liens vers le CSS et le JavaScript). Rien n’y est visible."],
    ["`<header>`, `<nav>`, `<main>`, `<footer>`", "les grandes zones d’une page : l’en-tête, le menu, le contenu principal (un seul par page) et le pied de page."],
    ["`href`", "attribut qui donne la destination d’un lien `<a>`, ou le chemin du fichier relié par un `<link>`."],
    ["**HTML**", "*HyperText Markup Language* : le langage de balisage qui décrit le **contenu** et la **structure** d’une page web."],
    ["`id`", "attribut qui donne un nom **unique** à un élément : pour une ancre, un `<label>`, le CSS (`#nom`) ou le JavaScript.", `<section id="amis">`],
    ["`<img>`", "balise orpheline qui affiche une image. `src` (*source*) donne le chemin du fichier, `alt` la description.", `<img src="img/boulon.svg" alt="Un boulon" width="80">`],
    ["**Imbrication**", "placer des éléments les uns dans les autres, comme des poupées russes. On ferme toujours le dernier ouvert en premier.", `<p><strong>Attention</strong> !</p>`],
    ["**Indentation**", "les espaces au début des lignes : chaque enfant est décalé de 2 espaces par rapport à son parent. Elle ne change rien à l’affichage, mais rend le code lisible."],
    ["**JavaScript**", "le langage qui rend la page **interactive** : réagir à un clic, calculer, modifier la page. Il se relie avec `<script>`."],
    ["`<label>`", "l’étiquette visible d’un champ. Son `for` reprend l’`id` du champ : cliquer dessus active le champ.", `<label for="email">Ton e-mail</label>\n<input type="email" id="email">`],
    ["**Lecteur d’écran**", "un logiciel qui lit la page à voix haute (ou en braille) pour les personnes aveugles ou malvoyantes. Il s’appuie sur les balises et les `alt`."],
    ["`<link>`", "balise orpheline du `<head>` qui relie un fichier externe, surtout la **feuille de style** CSS. À ne pas confondre avec `<a>`.", `<link rel="stylesheet" href="style.css">`],
    ["**Liste déroulante**", "un menu de choix créé avec `<select>` et ses `<option>`.", `<select id="piece" name="piece">\n  <option value="salon">Le salon</option>\n</select>`],
    ["`<meta>`", "balise orpheline du `<head>` qui donne une information sur la page : l’**encodage** (`charset=\"utf-8\"`, pour les accents), le `viewport`, la description.", `<meta charset="utf-8">\n<meta name="description" content="La maison de Bip.">`],
    ["`name` / `value`", "dans un formulaire, `name` est le nom de la donnée envoyée et `value` sa valeur : `couleur=vert`.", `<input type="radio" name="couleur" value="vert">`],
    ["**Navigateur**", "le logiciel qui lit le HTML et affiche la page : Chrome, Firefox, Safari, Edge."],
    ["**Parent**", "l’élément qui en contient directement un autre. `<html>` est le parent de `<head>` et de `<body>`."],
    ["**Référencement (SEO)**", "tout ce qui aide Google à comprendre et bien classer une page : le `<title>`, la description, les titres, les `alt`, les balises sémantiques."],
    ["`<script>`", "relie un fichier JavaScript. `defer` attend que tout le HTML soit lu. Il a **toujours** une balise fermante.", `<script src="script.js" defer></script>`],
    ["`<section>`, `<article>`, `<aside>`", "découpent le contenu : une **partie** avec un titre, un contenu **autonome** (article, fiche produit), un **à-côté** (encadré)."],
    ["**Sémantique**", "le **sens**. Écrire du HTML sémantique, c’est choisir chaque balise pour ce que le contenu **est**, jamais pour son apparence."],
    ["`<span>`", "une boîte **en ligne**, sans signification, pour isoler quelques mots dans un texte (souvent pour leur donner un style).", `<p>Un vase <span class="fragile">fragile</span>.</p>`],
    ["`<strong>`, `<em>`", "`<strong>` marque un passage **important** (gras), `<em>` une **insistance** (italique). `<br>` force un retour à la ligne.", `<p><strong>Attention</strong>, c’est <em>très</em> glissant.</p>`],
    ["**Tableau**", "des données rangées en lignes `<tr>` et en cases (`<th>` pour les titres, `<td>` pour les données), dans un `<table>` avec un `<caption>`.", `<tr>\n  <th>Jour</th>\n  <td>Lundi</td>\n</tr>`],
    ["`<title>`", "le titre du document, affiché dans l’onglet du navigateur et dans les résultats de Google. Il va dans le `<head>`.", `<title>La maison de Bip</title>`],
    ["`<ul>`, `<ol>`, `<li>`", "une liste à puces (*unordered list*), une liste numérotée (*ordered list*), et chacun de leurs éléments (*list item*).", `<ol>\n  <li>Mélanger</li>\n  <li>Cuire</li>\n</ol>`],
    ["**Valeur d’attribut**", "ce qu’on écrit après le `=` d’un attribut, entre guillemets doubles.", `<input type="email">`],
    ["`viewport`", "la zone d’affichage de l’écran. La balise `meta viewport` adapte la page à la largeur du téléphone.", `<meta name="viewport" content="width=device-width, initial-scale=1">`]
  ],

  practices: [
    "Commence chaque fichier par le squelette complet : `<!DOCTYPE html>`, `<html lang=\"fr\">`, `<meta charset=\"utf-8\">`, la `meta viewport` et un `<title>` qui décrit la page.",
    "Indente ton code de 2 espaces : chaque enfant est décalé d’un cran par rapport à son parent.",
    "Écris les balises et les attributs en minuscules, et les valeurs d’attributs entre guillemets doubles : `<img src=\"img/bip.svg\" alt=\"Bip\">`.",
    "Ferme chaque balise que tu ouvres, dans l’ordre inverse de l’ouverture, et lis l’onglet **Remarques** (ou le validateur gratuit du W3C, validator.w3.org) pour repérer les oublis.",
    "Choisis une balise pour son **sens**, jamais pour son apparence : l’apparence, c’est le travail du CSS.",
    "Mets un seul `<h1>` par page, puis des titres qui se suivent sans sauter de niveau.",
    "Donne à chaque image un `alt` qui dit ce qu’elle apporte, ou `alt=\"\"` si elle est purement décorative.",
    "Relie chaque champ de formulaire à son `<label>` avec `for` et `id`, et choisis le bon `type` (`email`, `tel`, `number`…).",
    "Préfère les balises sémantiques (`header`, `nav`, `main`, `section`, `article`, `footer`) ; garde `<div>` et `<span>` pour regrouper en vue du CSS.",
    "Nomme fichiers, dossiers, `class` et `id` en minuscules, sans accents ni espaces, avec des tirets, selon leur **rôle** : `page-contact.html`, `class=\"carte-produit\"`.",
    "Écris des liens dont le texte dit où ils mènent (« Lire la recette »), jamais « cliquez ici ».",
    "Sépare les rôles : la structure dans `index.html`, l’apparence dans `style.css` relié par `<link>`, le comportement dans `script.js` relié par `<script defer>`."
  ],

  checklist: [
    { text: "Je sais écrire le squelette complet d’une page : `<!DOCTYPE html>`, `<html lang=\"fr\">`, `<head>`, `<body>`.", mission: "squelette" },
    { text: "Je sais nommer les morceaux d’un élément : balise ouvrante, contenu, balise fermante, et reconnaître une balise orpheline.", mission: "balise" },
    { text: "Je sais imbriquer correctement des balises et dire qui est **parent**, **enfant** ou **frère**.", mission: "texte" },
    { text: "Je sais indenter mon code de 2 espaces et écrire un commentaire `<!-- -->`.", mission: "commentaires" },
    { text: "Je sais choisir le bon niveau de titre, de `<h1>` à `<h6>`, selon l’importance du contenu.", mission: "titres" },
    { text: "Je sais regrouper avec `<div>` (bloc) et `<span>` (en ligne), et nommer avec `class` (répétable) ou `id` (unique).", mission: "boites" },
    { text: "Je sais afficher une image avec `src` et un `alt` utile.", mission: "image" },
    { text: "Je sais écrire un chemin relatif (`img/…`, `../`), un chemin absolu (`https://…`) et une ancre (`#id`).", mission: "chemins" },
    { text: "Je sais créer des listes `<ul>` / `<ol>` et un tableau avec `<th>` et `<td>`.", mission: "tableau" },
    { text: "Je sais construire un formulaire accessible : chaque champ a son `<label>` relié.", mission: "champ" },
    { text: "Je sais structurer une page avec `<header>`, `<nav>`, `<main>` et `<footer>`.", mission: "semantique" },
    { text: "Je sais découper le contenu avec `<section>`, `<article>` et `<aside>`.", mission: "sections" },
    { text: "Je sais relier une feuille de style avec `<link rel=\"stylesheet\" href=\"style.css\">` dans le `<head>`.", mission: "relier" }
  ],

  /* ------------------------------------------------------------------
     BAC À SABLE
     ------------------------------------------------------------------ */
  sandbox: {
    id: "bac-a-sable", sandbox: true, title: "Bac à sable",
    say: "Ici, pas de mission : le chantier est à toi ! Teste toutes les balises que tu veux.",
    ideas: [
      "Écris un titre, un paragraphe et une liste, et regarde l’onglet **Arbre**.",
      "Oublie exprès une balise fermante et lis l’onglet **Remarques**.",
      "Ajoute une image : `img/bip.svg`, `img/boulon.svg` ou `img/maison.svg`.",
      "Construis un petit tableau ou un formulaire avec des boutons radio.",
      "Recopie un exemple du **Carnet** et modifie-le."
    ],
    starter: `<h1>Mon brouillon</h1>\n<p>Écris ce que tu veux ici.</p>\n`,
    hints: []
  },

  /* ------------------------------------------------------------------
     ATELIERS
     ------------------------------------------------------------------ */
  chapters: [
    { n: 1, title: "Les fondations", piece: "Les fondations", notions: ["balises", "<!DOCTYPE>", "head", "body", "<!-- -->"],
      skills: ["Je sais ce qu’est le HTML et le rôle du **navigateur**.", "Je sais écrire un **élément** : balise ouvrante, contenu, balise fermante.", "Je sais écrire le squelette complet d’une page : `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.", "Je sais dire qui est **parent**, **enfant** ou **frère**, et indenter mon code de 2 espaces.", "Je sais écrire un **commentaire** `<!-- -->`."] },
    { n: 2, title: "Les murs", piece: "Les murs", notions: ["h1 à h6", "p", "strong", "em", "br", "&lt; &amp;", "div", "span", "class", "id"],
      skills: ["Je sais organiser une page avec des titres `<h1>` à `<h6>` et des paragraphes `<p>`.", "Je sais mettre un mot en valeur avec `<strong>` et `<em>`, en imbriquant correctement.", "Je sais afficher `<`, `>`, `&` et © avec les **caractères spéciaux**.", "Je sais regrouper avec `<div>` (bloc) et `<span>` (en ligne).", "Je sais nommer un élément avec `class` (répétable) ou `id` (unique)."] },
    { n: 3, title: "La fenêtre", piece: "La fenêtre", notions: ["img", "src", "alt", "a", "href", "chemins", "#ancre", "figure"],
      skills: ["Je sais afficher une image avec `src` et un `alt` utile.", "Je sais créer un lien avec `<a href>`.", "Je sais écrire un **chemin relatif** (`img/…`, `../`) et un **chemin absolu** (`https://…`).", "Je sais créer une **ancre** vers une partie de la page avec `#id`.", "Je sais légender une image avec `<figure>` et `<figcaption>`."] },
    { n: 4, title: "Les étagères", piece: "La cheminée", notions: ["ul", "ol", "li", "table", "tr", "th", "td"],
      skills: ["Je sais créer une liste à puces `<ul>` et une liste numérotée `<ol>`.", "Je sais imbriquer une liste dans une autre.", "Je sais construire un **tableau** avec `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` et `<td>`.", "Je sais choisir entre une liste et un tableau selon les données."] },
    { n: 5, title: "La porte", piece: "La porte", notions: ["form", "label", "input", "textarea", "radio", "checkbox", "select", "button"],
      skills: ["Je sais créer un formulaire avec des champs `<input>` de différents `type`.", "Je sais relier chaque champ à son `<label>` avec `for` et `id`.", "Je sais guider avec `placeholder` et rendre un champ obligatoire avec `required`.", "Je sais proposer des choix avec des boutons radio, des cases à cocher et une liste `<select>`.", "Je sais écrire un bouton d’envoi `type=\"submit\"`."] },
    { n: 6, title: "Le toit", piece: "Le toit", notions: ["header", "nav", "main", "section", "article", "aside", "footer", "link", "meta"],
      skills: ["Je sais structurer une page avec `<header>`, `<nav>`, `<main>` et `<footer>`.", "Je sais découper le contenu avec `<section>`, `<article>` et `<aside>`.", "Je sais relier une feuille de style avec `<link>` et un script avec `<script defer>`.", "Je sais préparer une page pour le téléphone et pour Google avec les `<meta>` `viewport` et `description`.", "Je sais construire une page complète, propre et **sémantique**."] }
  ],

  levels: [
  /* ------------------------------ ATELIER 1 ------------------------------ */
  {
    id: "balise", ch: 1, title: "Ma première balise", notion: "les balises",
    say: "Bzzt ! Salut, moi c’est Bip. Je n’ai pas encore de maison… On m’a dit que sur le web, tout se construit avec des balises, entre chevrons `<` `>`. On pose la première ?",
    lesson: {
      what: ["Le HTML décrit le contenu d’une page. On entoure chaque morceau de contenu par des **balises** : des mots-clés entre chevrons `<` `>` qui disent au **navigateur** (Chrome, Firefox, Safari…) ce que c’est : un titre, un paragraphe, une image…", "Une balise va souvent par deux : la **balise ouvrante** `<h1>` et la **balise fermante** `</h1>`. Ce qu’il y a entre les deux, c’est le **contenu**. L’ensemble (ouvrante + contenu + fermante) s’appelle un **élément**."],
      why: "Sans balise, le navigateur reçoit du texte brut et ne sait pas ce qui est un titre ou un paragraphe. Les balises donnent du **sens** au contenu : pour le navigateur, pour Google et pour les lecteurs d’écran.",
      code: `<h1>Bonjour Bip</h1>`,
      pieces: [["<h1>", "la balise **ouvrante** : « ici commence un titre de niveau 1 »"], ["Bonjour Bip", "le **contenu**, ce que le visiteur voit"], ["</h1>", "la balise **fermante** : le même nom, avec une barre `/`"], ["<h1>Bonjour Bip</h1>", "l’**élément** complet : ouvrante, contenu, fermante"], ["<p> … </p>", "un **paragraphe** de texte"]],
      example: { code: `<h1>La maison de Bip</h1>\n<p>Bienvenue chez moi !</p>` },
      trap: "Oublier la barre `/` dans la balise fermante : `<h1>Bonjour<h1>` ouvre un deuxième titre au lieu de fermer le premier.",
      good: "Prends le réflexe d’écrire la balise fermante juste après l’ouvrante (`<p></p>`), puis d’écrire le contenu entre les deux : tu n’oublieras jamais de fermer."
    },
    steps: ["Écris un titre `<h1>` qui contient le texte `Bonjour Bip`.", "En dessous, ajoute un paragraphe `<p>` avec une phrase de ton choix.", "Regarde la page se construire en direct, puis clique sur **Vérifier**."],
    starter: `<!-- Écris ton HTML sous cette ligne -->\n`,
    goals: [
      { label: "Un titre `<h1>` contient `Bonjour Bip`", test: c => /^bonjour bip\s*!?$/i.test(txt(c, "h1")) || (q(c, "h1") ? "Ton titre existe, mais il doit contenir exactement Bonjour Bip." : (/bonjour bip/i.test(c.doc.body.textContent) ? "Le texte est là, mais il n’est pas entouré de <h1> et </h1>." : false)) },
      { label: "Un paragraphe `<p>` contient une phrase", test: c => txt(c, "p").length > 2 || (q(c, "p") ? "Ton paragraphe est vide : écris une phrase entre <p> et </p>." : false) },
      { label: "Le titre est au-dessus du paragraphe", test: c => after(c, "h1", "p") },
      { label: "Toutes les balises sont bien fermées", test: noErrors }
    ],
    hints: ["Une balise ouvrante `<h1>`, le texte, puis la balise fermante `</h1>`.", "Pour le paragraphe, même principe avec `<p>` et `</p>`.", "Ligne 2 : `<h1>Bonjour Bip</h1>`, ligne 3 : `<p>Je cherche une maison.</p>`"],
    solution: `<!-- Écris ton HTML sous cette ligne -->\n<h1>Bonjour Bip</h1>\n<p>Je cherche une maison.</p>`,
    debrief: "Tu as écrit deux **éléments** : un titre et un paragraphe. Chacun a une balise ouvrante et une balise fermante. Remarque que tu n’as rien dit sur la taille ou la police : c’est le navigateur qui décide de l’apparence par défaut. L’apparence, ce sera le travail du CSS."
  },
  {
    id: "squelette", ch: 1, title: "Le squelette de la page", notion: "<!DOCTYPE>, head, body",
    say: "Une maison, ça commence par un plan. Une page web aussi ! Toutes les pages HTML ont le même squelette. Aide-moi à le compléter.",
    lesson: {
      what: ["Un vrai fichier HTML, qu’on appelle un **document**, a toujours la même structure. Le `<head>` contient les informations **invisibles** (le titre de l’onglet, l’encodage des lettres). Le `<body>` contient tout ce qui est **visible** dans la page.", "Les éléments sont rangés les uns dans les autres : `<html>` contient `<head>` et `<body>`. On dit que `<html>` est leur **parent**, et qu’ils sont ses **enfants**. `<head>` et `<body>`, qui ont le même parent, sont **frères**."],
      why: "Ce squelette dit au navigateur : « voici une page HTML moderne, en français, avec des accents ». Sans lui, les accents peuvent s’afficher bizarrement, l’onglet n’a pas de nom et Google comprend mal la page.",
      code: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <title>Titre de l’onglet</title>\n  </head>\n  <body>\n    Ce qui s’affiche dans la page\n  </body>\n</html>`,
      pieces: [["<!DOCTYPE html>", "la première ligne : « ce document est du HTML moderne »"], ["<html lang=\"fr\">", "l’élément qui contient tout (le parent de tous les autres), et la langue de la page"], ["<head>", "la tête : les infos pour le navigateur, invisibles dans la page"], ["<meta charset=\"utf-8\">", "l’**encodage** : pour que les accents (é, è, à) s’affichent bien. C’est une balise **orpheline** : elle n’a pas de contenu, donc pas de balise fermante"], ["<title>", "le texte écrit dans l’onglet du navigateur"], ["<body>", "le corps : tout le contenu visible"]],
      trap: "Mettre le contenu visible (titres, textes) dans le `<head>`. Le `<head>` est réservé aux informations sur la page, pas à la page elle-même.",
      good: "Commence **chaque** fichier par ce squelette complet, avec `lang=\"fr\"` et un `<title>` qui décrit vraiment la page : c’est lui qui s’affiche dans l’onglet, dans les favoris et dans les résultats de Google."
    },
    steps: ["Dans le `<head>`, ajoute un `<title>` qui contient `La maison de Bip`.", "Après le `</head>`, ouvre un `<body>`.", "Dans le `<body>`, écris un titre `<h1>` : `Bienvenue chez Bip`.", "Ferme le `</body>` avant le `</html>`. Le titre de l’onglet s’affiche en haut de l’aperçu !"],
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    \n  </head>\n  \n</html>\n`,
    goals: [
      { label: "Le `<title>` contient `La maison de Bip`", test: c => c.doc.title.trim() === "La maison de Bip" || (c.doc.title ? "Le titre de l’onglet doit être exactement : La maison de Bip." : false) },
      { label: "Le `<title>` est dans le `<head>`", test: c => { const h = c.clean.match(/<head[^>]*>([\s\S]*?)<\/head>/i); return !!(h && /<title>/i.test(h[1])) || "Le <title> doit être écrit entre <head> et </head>."; } },
      { label: "Le `<body>` est ouvert et fermé", test: c => /<body[^>]*>[\s\S]*<\/body>/i.test(c.clean) || (/<body/i.test(c.clean) ? "Il manque la balise fermante </body>." : false) },
      { label: "Le `<h1>` `Bienvenue chez Bip` est dans le `<body>`", test: c => { const b = c.clean.match(/<body[^>]*>([\s\S]*?)<\/body>/i); return !!(b && /<h1[^>]*>\s*Bienvenue chez Bip(?:\s|&nbsp;)*!?\s*<\/h1>/i.test(b[1])) || "Écris <h1>Bienvenue chez Bip</h1> entre <body> et </body>."; } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Le titre de l’onglet : `<title>La maison de Bip</title>`, sur la ligne vide du `<head>`.", "Le corps s’écrit `<body>` … `</body>`, juste après `</head>`.", "Dans le body : `<h1>Bienvenue chez Bip</h1>`."],
    solution: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <title>La maison de Bip</title>\n  </head>\n  <body>\n    <h1>Bienvenue chez Bip</h1>\n  </body>\n</html>`,
    debrief: "Voilà le squelette que tu écriras au début de **chaque** fichier HTML. Dans VS Code, tape `!` puis Tab : l’éditeur l’écrit pour toi. Retiens : le `head` parle **au navigateur**, le `body` parle **au visiteur**. Remarque les espaces au début des lignes (l’**indentation**) : ils ne changent rien à l’affichage, mais ils montrent qui est l’enfant de qui. C’est la prochaine mission !"
  },
  {
    id: "commentaires", ch: 1, title: "Un chantier bien rangé", notion: "commentaires, indentation",
    say: "Bzzt… Mon voisin a écrit ce plan tout en vrac : des MAJUSCULES, rien de décalé, des guillemets bizarres. La page marche, mais le code est illisible ! On range ?",
    lesson: {
      what: ["Un **commentaire** est une note écrite entre `<!--` et `-->`. Le navigateur l’ignore complètement : il n’apparaît pas dans la page. Il sert aux humains qui lisent le code.", "L’**indentation**, ce sont les espaces au début des lignes. On décale chaque **enfant** de 2 espaces par rapport à son **parent** : d’un coup d’œil, on voit qui est dans qui. Enfin, par convention, on écrit les balises en **minuscules** et les **valeurs d’attributs** (ce qui suit le `=` dans la balise, comme `fr` dans `lang=\"fr\"`) entre **guillemets doubles** `\"`."],
      why: "Un code se lit bien plus souvent qu’il ne s’écrit : par toi dans six mois, par tes collègues, par ton formateur. Un code propre, c’est moins d’erreurs et une aide plus rapide. Le navigateur accepte le code en vrac, mais toutes les équipes professionnelles suivent ces conventions.",
      code: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <!-- Les infos pour le navigateur -->\n    <meta charset="utf-8">\n    <title>Mon plan</title>\n  </head>\n  <body>\n    <!-- Le contenu visible -->\n    <h1>Mon plan</h1>\n  </body>\n</html>`,
      pieces: [["<!-- … -->", "un **commentaire** : invisible dans la page, utile pour s’y retrouver"], ["2 espaces", "l’**indentation** : chaque enfant est décalé de 2 espaces par rapport à son parent (touche **Tab** dans l’éditeur du jeu)"], ["<head>, <meta>", "les noms des balises en **minuscules**"], ["lang=\"fr\"", "la **valeur d’attribut** entre **guillemets doubles**"]],
      example: { code: `<!-- Ce texte est invisible -->\n<p>Ce texte est visible.</p>` },
      trap: "Oublier de fermer le commentaire avec `-->` : tout ce qui suit devient invisible, et la page semble avoir disparu ! Autre piège : écrire un mot de passe ou une remarque gênante dans un commentaire. Il est invisible dans la page, mais n’importe qui peut le lire avec « Afficher le code source ».",
      good: ["Indente de **2 espaces**, écris les balises en **minuscules** et les valeurs d’attributs entre **guillemets doubles** : ce sont les conventions de presque toutes les équipes.", "Un bon commentaire annonce une **zone** (« le menu », « le pied de page ») ou explique un **pourquoi** ; il ne répète pas ce que le code dit déjà."]
    },
    steps: ["Écris toutes les balises en minuscules : `<HTML>` devient `<html>`, `</P>` devient `</p>`… (le `<!DOCTYPE html>` peut rester tel quel).", "Mets toutes les valeurs d’attributs entre guillemets doubles : `lang=\"fr\"`, `charset=\"utf-8\"`.", "Indente : `<head>`, `</head>`, `<body>` et `</body>` décalés de 2 espaces ; leur contenu (`meta`, `title`, `h1`, `p`) de 4 espaces.", "Ajoute un commentaire dans le `<head>` et un autre dans le `<body>`, par exemple `<!-- Le contenu visible -->`."],
    starter: `<!DOCTYPE html>\n<HTML lang=fr>\n<HEAD>\n<META charset='utf-8'>\n<TITLE>Le plan de Bip</TITLE>\n</HEAD>\n<BODY>\n<H1>Le plan de la maison</H1>\n<P>Chaque pièce aura sa place.</P>\n</BODY>\n</HTML>\n`,
    goals: [
      { label: "Toutes les balises sont en minuscules", test: c => { const up = (c.clean.match(/<\/?[a-zA-Z][\w-]*/g) || []).filter(t => /[A-Z]/.test(t)); return up.length === 0 || `Encore ${up.length} balise(s) en majuscules, par exemple ${up[0]}>.`; } },
      { label: "Les valeurs d’attributs sont entre guillemets doubles", test: c => { const bad = (c.clean.match(/<[a-zA-Z][^>]*>/g) || []).filter(t => /\s[\w-]+\s*=\s*(?!")/.test(t)); return bad.length === 0 || `Vérifie : ${bad[0]} (la valeur doit être entre " ").`; } },
      { label: "Le code est indenté de 2 espaces par niveau", test: c => { if (/^\t/m.test(c.code)) return "Utilise des espaces, pas de tabulation : la touche Tab de l’éditeur écrit 2 espaces."; const a = indentOf(c, /^\s*<\/?(head|body)\b/i), b = indentOf(c, /^\s*<(meta|title|h1|p)\b/i); return (a.length >= 4 && a.every(n => n === 2) && b.length >= 4 && b.every(n => n === 4)) || "head et body : 2 espaces au début de la ligne ; meta, title, h1 et p : 4 espaces."; } },
      { label: "Un commentaire dans le `<head>` et un dans le `<body>`", test: c => { const h = hasComment(c.doc.head), b = hasComment(c.doc.body); return (h && b) || (h || b ? `Il manque encore un commentaire dans le ${h ? "body" : "head"}.` : false); } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Commence par les minuscules et les guillemets : `<html lang=\"fr\">`, `<meta charset=\"utf-8\">`.", "Place le curseur au début d’une ligne et appuie sur **Tab** : l’éditeur ajoute 2 espaces. Deux fois Tab pour 4 espaces.", "Un commentaire : `<!-- Le contenu visible -->`, sur sa propre ligne, juste après `<body>`. Même chose après `<head>`."],
    solution: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <!-- Les informations pour le navigateur -->\n    <meta charset="utf-8">\n    <title>Le plan de Bip</title>\n  </head>\n  <body>\n    <!-- Le contenu visible de la page -->\n    <h1>Le plan de la maison</h1>\n    <p>Chaque pièce aura sa place.</p>\n  </body>\n</html>`,
    debrief: "La page s’affiche exactement pareil… mais ton code est maintenant **lisible**. Les commentaires et l’indentation ne changent rien pour le navigateur : ils sont là pour les humains. Dans VS Code, le raccourci **Maj + Alt + F** (Maj + Option + F sur Mac) indente tout le fichier automatiquement. À partir de maintenant, indente tout ce que tu écris !"
  },
  {
    id: "quiz1", ch: 1, quiz: true, title: "Contrôle des fondations", notion: "quiz",
    say: "Avant de monter les murs, on vérifie que les fondations sont solides. Tout juste, et je pose la première pierre !",
    questions: [
      { q: "Le HTML, c’est…", opts: ["un langage de programmation qui fait des calculs", "un langage de balisage qui décrit le contenu d’une page", "un logiciel pour dessiner des sites"], a: 1, why: "Le HTML étiquette le contenu (titre, paragraphe, image…). Il ne calcule rien : pour ça, il y a le JavaScript." },
      { q: "Quelle ligne est bien écrite ?", opts: ["`<p>Bonjour</p>`", "`<p>Bonjour<p>`", "`</p>Bonjour<p>`"], a: 0, why: "La balise ouvrante d’abord, la fermante ensuite, avec une barre `/`." },
      { q: "Où met-on le texte qui s’affiche dans l’onglet du navigateur ?", opts: ["Dans un `<h1>`, dans le body", "Dans un `<meta>`", "Dans un `<title>`, dans le head"], a: 2, why: "Le `<title>` va dans le `<head>`. Le `<h1>`, lui, est le grand titre visible dans la page." },
      { q: "Qu’affiche cette ligne dans la page ?", code: `<!-- Le menu du site -->`, opts: ["« Le menu du site », en petit", "Rien : c’est un commentaire, une note pour les humains qui lisent le code", "Un menu"], a: 1, why: "Le navigateur ignore les commentaires. Ils servent à annoncer les zones du code et à expliquer ses choix." }
    ],
    debrief: "Les fondations sont posées : tu sais ce qu’est une balise et un élément, tu connais le squelette d’une page, et tu sais écrire un code propre."
  },

  /* ------------------------------ ATELIER 2 ------------------------------ */
  {
    id: "titres", ch: 2, title: "Du plus grand au plus petit", notion: "h1 à h6, p",
    say: "J’ai écrit le journal de mon chantier, mais tout est en vrac ! Tu peux mettre chaque ligne dans la bonne balise ?",
    lesson: {
      what: ["Il existe six niveaux de titres, de `<h1>` (le plus important) à `<h6>`. Ils fonctionnent comme le **sommaire** d’un livre : un seul titre principal, des parties, des sous-parties. Le texte courant va dans des paragraphes `<p>`.", "Choisir une balise pour ce que le contenu **est** (un titre, un paragraphe), et non pour son apparence, c’est écrire du HTML **sémantique**."],
      why: "Les titres servent à organiser la page. Google s’en sert pour comprendre le sujet, et les personnes aveugles naviguent de titre en titre avec leur lecteur d’écran.",
      code: `<h1>Le titre de la page</h1>\n<h2>Une partie</h2>\n<p>Du texte.</p>\n<h3>Une sous-partie</h3>\n<p>Encore du texte.</p>`,
      pieces: [["<h1>", "le titre principal : **un seul** par page"], ["<h2>", "les grandes parties"], ["<h3>", "les sous-parties d’un h2 (et ainsi de suite jusqu’à h6)"], ["<p>", "un paragraphe : un bloc de texte"]],
      example: { code: `<h1>Mon chantier</h1>\n<h2>Les briques</h2>\n<p>Elles arrivent lundi.</p>` },
      trap: "Choisir `<h3>` « parce qu’il est plus petit ». On choisit le niveau selon l’**importance**, jamais selon la taille : la taille, on la changera avec le CSS.",
      good: "Les titres se suivent **sans sauter de niveau** : pas de `<h4>` juste après un `<h2>`. Test rapide : en lisant seulement tes titres, on doit comprendre le plan de la page."
    },
    steps: ["`Le journal du chantier` est le titre principal.", "`Les fondations` et `Les outils` sont deux parties.", "`Les plus utiles` est une sous-partie des outils.", "Les deux phrases sont des paragraphes."],
    starter: `<!-- Mets chaque ligne dans la bonne balise -->\nLe journal du chantier\n\nLes fondations\nOn creuse avant de construire.\n\nLes outils\nLes plus utiles\nLe marteau et le tournevis, bien sûr.\n`,
    goals: [
      { label: "Un seul `<h1>` : `Le journal du chantier`", test: c => (qa(c, "h1").length === 1 && /le journal du chantier/i.test(txt(c, "h1"))) || (qa(c, "h1").length > 1 ? "Il ne faut qu’un seul h1 par page." : false) },
      { label: "Deux `<h2>` : `Les fondations` et `Les outils`", test: c => qa(c, "h2").length === 2 && hasTextIn(c, "h2", /les fondations/i) && hasTextIn(c, "h2", /les outils/i) },
      { label: "`Les plus utiles` est un `<h3>`", test: c => hasTextIn(c, "h3", /les plus utiles/i) || (hasTextIn(c, "h2", /les plus utiles/i) ? "C’est une sous-partie des outils : un niveau en dessous du h2." : false) },
      { label: "Les deux phrases sont dans des `<p>`", test: c => hasTextIn(c, "p", /avant de construire/i) && hasTextIn(c, "p", /le marteau et le tournevis/i) },
      { label: "Plus aucun texte en vrac, aucune erreur", test: c => { const loose = Array.from(c.doc.body.childNodes).some(n => n.nodeType === 3 && n.textContent.trim()); return loose ? "Il reste du texte qui n’est dans aucune balise." : noErrors(c); } }
    ],
    hints: ["Le titre principal est un `<h1>`, les deux parties sont des `<h2>`.", "« Les plus utiles » est dans la partie « Les outils » : c’est un `<h3>`.", "Les phrases : `<p>On creuse avant de construire.</p>`"],
    solution: `<!-- Mets chaque ligne dans la bonne balise -->\n<h1>Le journal du chantier</h1>\n\n<h2>Les fondations</h2>\n<p>On creuse avant de construire.</p>\n\n<h2>Les outils</h2>\n<h3>Les plus utiles</h3>\n<p>Le marteau et le tournevis, bien sûr.</p>`,
    debrief: "Ta page a maintenant un **plan** clair : h1, puis h2, puis h3. Ouvre l’onglet **Arbre** : chaque élément est rangé dans le `body`, ce sont tous des frères. Et remarque que les lignes vides du code ne changent rien à la page : le navigateur les ignore."
  },
  {
    id: "texte", ch: 2, title: "Le panneau du chantier", notion: "strong, em, br",
    say: "Je veux poser un panneau d’avertissement sur mon chantier. Il faut que les mots importants sautent aux yeux !",
    lesson: {
      what: "Dans un paragraphe, on peut mettre des mots en valeur. `<strong>` marque un texte **important** (affiché en gras), `<em>` une **insistance** (en italique). `<br>` force un retour à la ligne.",
      why: "Ces balises donnent du sens : un lecteur d’écran prononce un `<strong>` avec plus de force. Pour un simple effet visuel, on utilisera le CSS.",
      code: `<p><strong>Attention</strong> : c’est <em>très</em> glissant.</p>\n<p>Bip<br>Robotville</p>`,
      pieces: [["<strong>", "un passage important, en gras"], ["<em>", "une insistance, en italique (*emphasis*)"], ["<br>", "un retour à la ligne. Balise **orpheline** : elle n’a pas de contenu, donc pas de fermante"], ["imbrication", "`<strong>` est **dans** le `<p>` : c’est son **enfant**. On le ferme avant de fermer le `</p>`"]],
      example: { code: `<p>Le chantier avance <strong>vite</strong>, <em>très</em> vite.</p>` },
      trap: "Utiliser `<br>` pour faire de l’espace entre deux paragraphes. Un nouveau paragraphe, c’est un nouveau `<p>` ; l’espace, c’est le CSS.",
      good: "Réserve `<strong>` et `<em>` aux mots qui ont vraiment besoin d’être mis en valeur pour le **sens**. Pour mettre du gras « pour faire joli », on attendra le CSS."
    },
    steps: ["Mets le mot `Attention` dans un `<strong>`.", "Mets le mot `vraiment` dans un `<em>`.", "Dans l’adresse, ajoute deux `<br>` pour avoir trois lignes : `Bip`, `3 rue des Boulons`, `Robotville`."],
    starter: `<h1>Le panneau du chantier</h1>\n<p>Attention : chantier fermé après 18 h !</p>\n<p>Ne laissez pas traîner vos outils, ils seront vraiment perdus.</p>\n<p>Bip, 3 rue des Boulons, Robotville</p>\n`,
    goals: [
      { label: "`Attention` est dans un `<strong>`", test: c => /^attention$/i.test(txt(c, "strong")) || (q(c, "strong") ? "Seul le mot Attention doit être dans le strong." : false) },
      { label: "`vraiment` est dans un `<em>`", test: c => /^vraiment$/i.test(txt(c, "em")) },
      { label: "L’adresse tient sur trois lignes grâce à deux `<br>`", test: c => qa(c, "p").some(p => p.querySelectorAll("br").length >= 2 && /bip/i.test(p.textContent) && /robotville/i.test(p.textContent)) },
      { label: "Les balises sont bien imbriquées", test: noErrors }
    ],
    hints: ["Remplace `Attention` par `<strong>Attention</strong>`.", "Même idée : `<em>vraiment</em>`.", "`<p>Bip<br>3 rue des Boulons<br>Robotville</p>` : pas de fermante pour `<br>`, et plus besoin des virgules."],
    solution: `<h1>Le panneau du chantier</h1>\n<p><strong>Attention</strong> : chantier fermé après 18 h !</p>\n<p>Ne laissez pas traîner vos outils, ils seront <em>vraiment</em> perdus.</p>\n<p>Bip<br>3 rue des Boulons<br>Robotville</p>`,
    debrief: "Tu as placé des éléments **à l’intérieur** d’autres éléments : c’est l’**imbrication**. Le `<p>` est le **parent**, le `<strong>` son **enfant**. Règle d’or : on ferme d’abord la balise ouverte en dernier (`<p><strong>…</strong></p>`). Et `<br>` est une balise **orpheline**, comme `<meta>` : elle ne contient rien, donc elle ne se ferme pas."
  },
  {
    id: "caracteres", ch: 2, title: "Les signes secrets", notion: "caractères spéciaux",
    say: "Je veux écrire « la balise <p> » sur le panneau du salon, mais elle disparaît ! Le navigateur croit que c’est une vraie balise…",
    lesson: {
      what: ["Certains caractères ont un rôle spécial en HTML : `<` et `>` entourent les balises, `&` commence un code. Pour les **afficher** dans la page, on écrit un **caractère spécial** (on dit aussi une **entité**) : un petit code qui commence par `&` et finit par `;`.", "Il existe aussi des entités pour des signes absents du clavier, comme `&copy;` (©), et pour l’**espace insécable** `&nbsp;` : une espace qui ne sera jamais coupée par un retour à la ligne."],
      why: "Sans entité, le navigateur prend `<p>` pour une vraie balise : le texte disparaît, ou la page se casse. Les tutoriels et les documentations de code utilisent `&lt;` partout. Et l’espace insécable évite qu’un `!` ou un `h` se retrouve tout seul au début d’une ligne : c’est la typographie française.",
      code: `<p>La balise &lt;p&gt; crée un paragraphe.</p>\n<p>Bip &amp; Kami</p>\n<p>Ouvert jusqu’à 18&nbsp;h&nbsp;!</p>\n<p>&copy; Bip 2026</p>`,
      pieces: [["&lt;", "affiche `<` (*less than*, plus petit que)"], ["&gt;", "affiche `>` (*greater than*, plus grand que)"], ["&amp;", "affiche `&` (*ampersand*, esperluette)"], ["&nbsp;", "une espace **insécable** (*non-breaking space*)"], ["&copy;", "affiche © (*copyright*)"]],
      example: { code: `<p>Écris &lt;h1&gt; pour un titre.</p>\n<p>&copy; Bip &amp; Kami</p>` },
      trap: "Oublier le point-virgule final : `&copy` sans `;` marche parfois, parfois non. Écris toujours l’entité en entier : `&`, le nom, puis `;`.",
      good: "Les entités indispensables sont `&lt;`, `&gt;` et `&amp;`, à utiliser dès que tu veux **montrer** du code. Grâce au `utf-8`, les accents (é, à, ç) se tapent directement : pas besoin d’entité pour eux. Mets un `&nbsp;` entre un nombre et son unité (`18&nbsp;h`, `5&nbsp;€`)."
    },
    steps: ["Ligne 3 : écris `&amp;` à la place du `&` dans `Bip & Kami`.", "Ligne 4 : remplace `<p>` (au milieu de la phrase) par `&lt;p&gt;`, pour qu’il s’affiche au lieu d’ouvrir un paragraphe.", "Ligne 5 : mets une espace insécable `&nbsp;` entre `18` et `h`.", "Ligne 6 : remplace `(c)` par le vrai symbole, avec `&copy;`."],
    starter: `<h1>Le panneau du salon</h1>\n<!-- Corrige les caractères spéciaux -->\n<p>Ici vivent Bip & Kami.</p>\n<p>Pour écrire un paragraphe, on utilise la balise <p>.</p>\n<p>Atelier ouvert jusqu’à 18 h.</p>\n<p>(c) Bip 2026</p>\n`,
    goals: [
      { label: "`Bip & Kami` s’écrit avec `&amp;`", test: c => /Bip &amp; Kami/.test(c.clean) || (/Bip & Kami/.test(c.clean) ? "Remplace le & par &amp; (avec le point-virgule)." : false) },
      { label: "La phrase affiche `<p>` grâce à `&lt;` et `&gt;`", test: c => (/&lt;p&gt;/.test(c.clean) && hasTextIn(c, "p", /la balise <p>/i)) || (/&lt;p>/.test(c.clean) ? "Remplace aussi le > par &gt;." : (/&lt/.test(c.clean) ? "Écris l’entité en entier : &lt;p&gt;" : false)) },
      { label: "Une espace insécable entre `18` et `h`", test: c => /18&nbsp;h/.test(c.clean) || (/&nbsp/.test(c.clean) ? "Écris 18&nbsp;h, collé, avec le point-virgule." : false) },
      { label: "Le symbole © s’écrit avec `&copy;`", test: c => (/&copy;/.test(c.clean) && hasTextIn(c, "p", /©\s?Bip/) && !/\(c\)/i.test(c.clean)) || (/&copy(?!;)/.test(c.clean) ? "N’oublie pas le point-virgule final : &copy;" : false) },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Une entité commence par `&` et finit par `;` : `&amp;` pour &.", "Pour afficher `<p>` : `&lt;p&gt;` (*lt* = plus petit, *gt* = plus grand).", "`18&nbsp;h` et `&copy; Bip 2026`."],
    solution: `<h1>Le panneau du salon</h1>\n<!-- Corrige les caractères spéciaux -->\n<p>Ici vivent Bip &amp; Kami.</p>\n<p>Pour écrire un paragraphe, on utilise la balise &lt;p&gt;.</p>\n<p>Atelier ouvert jusqu’à 18&nbsp;h.</p>\n<p>&copy; Bip 2026</p>`,
    debrief: "Tu sais maintenant écrire du code **dans** une page, sans que le navigateur le prenne pour une vraie balise : c’est ce que font tous les sites de tutoriels. Retiens surtout `&lt;`, `&gt;`, `&amp;` et `&nbsp;`. Et regarde le pied de page de tes sites préférés : il y a presque toujours un ©."
  },
  {
    id: "boites", ch: 2, title: "Les cartons du déménagement", notion: "div, span, class, id",
    say: "Je déménage dans ma nouvelle maison ! Il faut ranger mes affaires dans des cartons et coller une étiquette sur chacun. En HTML, les cartons s’appellent `<div>`.",
    lesson: {
      what: ["`<div>` et `<span>` sont des boîtes **sans signification** : elles ne disent pas ce qu’est le contenu, elles servent seulement à le **regrouper**. `<div>` est une boîte de type **bloc** : elle prend toute la largeur et passe à la ligne, comme un `<p>`. `<span>` est une boîte **en ligne** : elle entoure quelques mots au milieu d’un texte, sans couper la ligne, comme un `<strong>`.", "Pour reconnaître une boîte, on lui colle une étiquette avec un **attribut** : `class` (un nom de groupe, qu’on peut **répéter** sur plusieurs éléments) ou `id` (un nom **unique** dans toute la page)."],
      why: "À l’écran, rien ne change. Mais dès le prochain jeu, le CSS va viser ces étiquettes : « tous les éléments de class `carton` ont un fond beige », « l’élément d’id `cuisine` a une bordure ». Sans `class` ni `id`, impossible de styliser une zone précise.",
      code: `<div class="carton" id="cuisine">\n  <h2>La cuisine</h2>\n  <p>Des verres <span class="fragile">fragiles</span>.</p>\n</div>\n<div class="carton" id="atelier">\n  <h2>L’atelier</h2>\n</div>`,
      pieces: [["<div>", "une boîte de type **bloc**, pour regrouper plusieurs éléments"], ["<span>", "une boîte **en ligne**, pour quelques mots dans un texte"], ["class=\"carton\"", "un nom de groupe : plusieurs éléments peuvent avoir la même `class`"], ["id=\"cuisine\"", "un nom **unique** : un seul élément de la page peut s’appeler `cuisine`"], ["class=\"carton lourd\"", "plusieurs classes à la fois, séparées par une espace"]],
      trap: "Donner le même `id` à deux éléments. Le navigateur ne t’arrête pas, mais le CSS, les ancres et le JavaScript ne trouveront que le premier. Si le nom se répète, c’est une `class`.",
      good: ["Nomme tes `class` et tes `id` selon leur **rôle**, pas leur apparence : `class=\"alerte\"` plutôt que `class=\"rouge\"` (si l’alerte devient orange, le nom reste juste). En minuscules, sans accents ni espaces, avec des tirets : `carte-produit`.", "Avant de prendre une `<div>`, demande-toi s’il existe une balise qui a du sens : tu en découvriras plusieurs dans l’atelier 6."]
    },
    steps: ["Entoure le titre et le paragraphe du carton de la cuisine par `<div class=\"carton\">` … `</div>`.", "Fais pareil pour le carton de l’atelier, avec **la même** `class`.", "Donne aussi à chaque `div` un `id` unique : `cuisine` pour la première, `atelier` pour la seconde.", "Dans la cuisine, entoure le mot `fragile` par un `<span class=\"fragile\">`. Rien ne change à l’écran : c’est normal !"],
    starter: `<h1>Les cartons du déménagement</h1>\n\n<h2>Carton 1 : la cuisine</h2>\n<p>Des assiettes et des verres, attention : fragile !</p>\n\n<h2>Carton 2 : l’atelier</h2>\n<p>Le marteau, le tournevis et la clé à molette.</p>\n`,
    goals: [
      { label: "Deux `<div class=\"carton\">`", test: c => { const n = qa(c, "div.carton").length; return n === 2 || (n ? `${n} div avec la class carton pour l’instant, il en faut 2.` : (q(c, "div") ? "Ta div doit avoir l’attribut class=\"carton\"." : false)); } },
      { label: "Chaque carton contient son `<h2>` et son `<p>`", test: c => { const d = qa(c, "div.carton"); return (d.length === 2 && d.every(x => x.querySelector("h2") && x.querySelector("p"))) || (d.length ? "Le titre ET le paragraphe doivent être entre <div> et </div>." : false); } },
      { label: "Les `id` uniques `cuisine` et `atelier`", test: c => { if (q(c, '[id^="#"]')) return "Dans l’attribut, pas de # : id=\"cuisine\"."; if (qa(c, "#cuisine").length > 1 || qa(c, "#atelier").length > 1) return "Un id est unique : un seul élément peut porter ce nom."; const a = q(c, "div#cuisine"), b = q(c, "div#atelier"); return !!(a && b && /cuisine/i.test(a.textContent) && /atelier/i.test(b.textContent)) || (a || b ? "Il faut l’id cuisine sur le premier carton et atelier sur le second." : false); } },
      { label: "Le mot `fragile` est dans un `<span class=\"fragile\">`", test: c => (/^fragile$/i.test(txt(c, "span.fragile")) && !!q(c, "p span.fragile")) || (q(c, "span") ? "Le span doit avoir class=\"fragile\" et contenir seulement le mot fragile." : false) },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Une div s’ouvre avant le `<h2>` et se ferme après le `</p>` : `<div class=\"carton\">` … `</div>`. Indente ce qu’elle contient.", "Les deux attributs dans la même balise, séparés par une espace : `<div class=\"carton\" id=\"cuisine\">`.", "Le mot : `<span class=\"fragile\">fragile</span>`."],
    solution: `<h1>Les cartons du déménagement</h1>\n\n<div class="carton" id="cuisine">\n  <h2>Carton 1 : la cuisine</h2>\n  <p>Des assiettes et des verres, attention : <span class="fragile">fragile</span> !</p>\n</div>\n\n<div class="carton" id="atelier">\n  <h2>Carton 2 : l’atelier</h2>\n  <p>Le marteau, le tournevis et la clé à molette.</p>\n</div>`,
    debrief: "À l’écran, rien n’a changé, et c’est normal : `<div>` et `<span>` ne veulent rien dire. Mais ta page est maintenant **étiquetée**. Dans le jeu CSS, tu écriras `.carton { … }` pour viser une `class` et `#cuisine { … }` pour viser un `id`. Retiens : `class` = un groupe (répétable), `id` = un seul élément (unique)."
  },

  /* ------------------------------ ATELIER 3 ------------------------------ */
  {
    id: "image", ch: 3, title: "Une fenêtre sur le jardin", notion: "<img>, src, alt",
    say: "Ma maison a besoin de fenêtres ! Et ma page, d’images. J’ai rangé mes photos dans le dossier `img`.",
    lesson: {
      what: "La balise `<img>` affiche une image. Elle n’a pas de contenu, donc pas de fermante : c’est une balise **orpheline**. Tout se passe dans ses **attributs**, des informations écrites dans la balise sous la forme `nom=\"valeur\"`.",
      why: "Les images rendent une page vivante. L’attribut `alt` décrit l’image pour ceux qui ne la voient pas : personnes aveugles (leur lecteur d’écran le lit), connexion lente, et aussi Google.",
      code: `<img src="img/bip.svg" alt="Bip le robot" width="120">`,
      pieces: [["src", "*source* : le chemin du fichier image"], ["img/bip.svg", "un chemin **relatif** : le fichier `bip.svg` dans le dossier `img`"], ["alt", "le texte alternatif : décris ce que montre l’image"], ["width", "la largeur en pixels (facultatif), sans unité"], ["nom=\"valeur\"", "chaque attribut : son nom, `=`, puis sa **valeur** entre guillemets doubles"]],
      example: { code: `<img src="img/boulon.svg" alt="Un boulon" width="80">` },
      trap: "Une faute dans le chemin (`img/boulom.svg`, `Img/…`, `images/…`) et l’image ne s’affiche pas. Les noms de fichiers doivent être recopiés **exactement**, majuscules comprises.",
      good: "Écris un `alt` qui dit ce que l’image **apporte** (« Bip le robot qui fait coucou »), pas « image » ou « photo ». Si l’image est purement décorative, mets `alt=\"\"` (vide) : le lecteur d’écran la passe. Et nomme tes fichiers en minuscules, sans espaces ni accents : `maison-bip.svg`."
    },
    steps: ["Sous le titre, ajoute l’image `img/boulon.svg` avec un `alt` qui la décrit.", "Ajoute ensuite l’image `img/bip.svg`, avec un `alt` et une largeur (`width`) de `120`.", "Vérifie que les deux images s’affichent dans l’aperçu."],
    starter: `<h1>Ma galerie de l’atelier</h1>\n`,
    goals: [
      { label: "L’image `img/boulon.svg` s’affiche", test: c => imgLoaded(c, 'img[src*="boulon"]') || (q(c, "img") ? "Une image ne s’affiche pas : vérifie le chemin, lettre par lettre : img/boulon.svg" : false) },
      { label: "L’image `img/bip.svg` s’affiche", test: c => imgLoaded(c, 'img[src*="bip"]') },
      { label: "Chaque image a un `alt` qui la décrit", test: c => qa(c, "img").length >= 2 && qa(c, "img").every(i => (i.getAttribute("alt") || "").trim().length >= 3) || (q(c, "img:not([alt])") ? "Il manque un attribut alt." : false) },
      { label: "L’image de Bip fait 120 pixels de large", test: c => { const i = q(c, 'img[src*="bip"]'); return !!(i && i.getAttribute("width") === "120") || (i && i.getAttribute("width") ? "La largeur s’écrit sans unité : width=\"120\"." : false); } }
    ],
    hints: ["Le modèle : `<img src=\"…\" alt=\"…\">`. Pas de balise fermante.", "Première image : `<img src=\"img/boulon.svg\" alt=\"Un boulon\">`", "Deuxième : `<img src=\"img/bip.svg\" alt=\"Bip\" width=\"120\">`"],
    solution: `<h1>Ma galerie de l’atelier</h1>\n<img src="img/boulon.svg" alt="Un boulon">\n<img src="img/bip.svg" alt="Bip le robot" width="120">`,
    debrief: "Une image, c’est une balise orpheline avec des attributs. Le `src` dit **quoi** afficher, le `alt` dit **ce que c’est**. Remarque : les deux images se mettent côte à côte, alors que les titres et paragraphes se mettent les uns sous les autres. Les images sont des éléments **en ligne** (comme `<span>`), les titres et paragraphes des **blocs** (comme `<div>`). Le CSS saura changer ça."
  },
  {
    id: "lien", ch: 3, title: "Des chemins vers ailleurs", notion: "<a href>",
    say: "Une maison sans chemin, personne n’y vient ! Les liens, ce sont les chemins du web : ils relient les pages entre elles.",
    lesson: {
      what: "La balise `<a>` (pour *anchor*, ancre) crée un **lien hypertexte**. L’attribut `href` donne la destination, et le contenu de l’élément est le texte sur lequel on clique.",
      why: "Les liens sont l’invention qui a créé le web : c’est le « H » de HTML (hypertexte). Sans eux, chaque page serait une île.",
      code: `<a href="https://fr.wikipedia.org">Wikipédia</a>\n<a href="contact.html">Me contacter</a>\n<a href="https://…" target="_blank">S’ouvre dans un nouvel onglet</a>`,
      pieces: [["href", "la destination du lien"], ["https://…", "une adresse **absolue** : un autre site, avec le `https://`"], ["contact.html", "une adresse **relative** : une page de ton propre site (la mission suivante t’en dit plus)"], ["target=\"_blank\"", "ouvre le lien dans un nouvel onglet"]],
      example: { code: `<p>Va voir <a href="https://fr.wikipedia.org">Wikipédia</a> !</p>` },
      trap: "Écrire « cliquez ici » comme texte de lien. Le texte doit dire **où** mène le lien : c’est plus clair pour tout le monde, et Google s’en sert.",
      good: "Le texte d’un lien doit avoir du sens **tout seul** (« Lire la recette du gâteau ») : les lecteurs d’écran proposent la liste des liens de la page, sans le texte autour. Réserve `target=\"_blank\"` aux liens vers d’autres sites."
    },
    steps: ["Crée un lien vers `https://fr.wikipedia.org/wiki/Robot` avec le texte `C’est quoi, un robot ?`", "Fais-le s’ouvrir dans un nouvel onglet.", "Crée un deuxième lien vers la page `contact.html` avec le texte `Écrire à Bip`."],
    starter: `<h1>Les chemins de la maison</h1>\n<p>Envie d’en savoir plus sur moi ?</p>\n\n`,
    goals: [
      { label: "Un lien mène à `https://fr.wikipedia.org/wiki/Robot`", test: c => !!q(c, 'a[href="https://fr.wikipedia.org/wiki/Robot"]') || (q(c, 'a[href*="wikipedia"]') ? "Recopie l’adresse exactement, avec https:// au début." : false) },
      { label: "Son texte est `C’est quoi, un robot ?`", test: c => /c.est quoi, un robot/i.test(txt(c, 'a[href*="wikipedia"]')) },
      { label: "Il s’ouvre dans un nouvel onglet", test: c => { const a = q(c, 'a[href*="wikipedia"]'); return !!(a && a.getAttribute("target") === "_blank") || (a && a.getAttribute("target") ? "La valeur est _blank, avec le tiret bas." : false); } },
      { label: "Un lien `Écrire à Bip` mène à `contact.html`", test: c => { const a = q(c, 'a[href="contact.html"]'); return !!(a && /écrire à bip/i.test(a.textContent)); } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Le modèle : `<a href=\"adresse\">texte cliquable</a>`.", "Pour le nouvel onglet, ajoute `target=\"_blank\"` dans la balise ouvrante, après le `href`.", "Pour le second lien, l’adresse est simplement `contact.html`."],
    solution: `<h1>Les chemins de la maison</h1>\n<p>Envie d’en savoir plus sur moi ?</p>\n<p><a href="https://fr.wikipedia.org/wiki/Robot" target="_blank">C’est quoi, un robot ?</a></p>\n<p><a href="contact.html">Écrire à Bip</a></p>`,
    debrief: "Un lien vers un autre site utilise une adresse **absolue** (avec `https://`). Un lien vers une page de ton site utilise une adresse **relative** (juste le nom du fichier). Une balise peut avoir plusieurs attributs : on les sépare par une espace. (Dans le jeu, les liens sont désactivés pour que tu restes sur le chantier.)"
  },
  {
    id: "chemins", ch: 3, file: "pages/jardin.html", title: "Le plan du quartier", notion: "chemins relatifs et absolus, ancres",
    say: "Mon site grandit : j’ai rangé mes pages dans un dossier `pages`. Mais depuis la page du jardin, je ne retrouve plus le chemin de la maison !",
    lesson: {
      what: ["Un site, c’est un **dossier** qui contient des fichiers et d’autres dossiers. La page d’accueil `index.html` est à la **racine** du site (dans le dossier principal). Pour aller d’un fichier à un autre (lien, image), on écrit un **chemin**.", "Un **chemin relatif** part du fichier où tu es : `contact.html` (même dossier), `img/bip.svg` (on entre dans le dossier `img`), `../index.html` (`..` = on remonte dans le **dossier parent**). Un **chemin absolu** est l’adresse complète (l’**URL**) d’un autre site, avec `https://`. Enfin, une **ancre** `#nom` mène à l’élément qui a l’`id` `nom`, dans la même page."],
      why: "Les chemins relatifs continuent de marcher quand tu déplaces tout le dossier du site, par exemple de ton ordinateur vers internet. L’adresse absolue sert pour les autres sites. L’ancre sert dans les longues pages : sommaire, bouton « retour en haut ».",
      code: `<!-- Le dossier du site :\n  index.html\n  img/maison.svg\n  pages/jardin.html    (on est ici)\n  pages/contact.html\n-->\n<a href="contact.html">Contact</a>\n<a href="../index.html">Accueil</a>\n<img src="../img/maison.svg" alt="La maison">\n<a href="https://fr.wikipedia.org">Wikipédia</a>\n<a href="#potager">Aller au potager</a>\n<h2 id="potager">Le potager</h2>`,
      pieces: [["contact.html", "un fichier du **même dossier** que la page"], ["../index.html", "`..` remonte d’un dossier : de `pages/` vers la racine du site"], ["../img/maison.svg", "on remonte d’un dossier, puis on entre dans le dossier `img`"], ["https://…", "un chemin **absolu** : l’adresse complète d’un autre site"], ["#potager", "une **ancre** : l’élément de cette page qui a `id=\"potager\"`"]],
      trap: "Copier un chemin de ton ordinateur, comme `C:\\Users\\moi\\Bureau\\index.html` ou `file:///…`. Il marche chez toi, mais plus du tout une fois le site en ligne. Pour tes propres fichiers, utilise toujours des chemins relatifs.",
      good: "Organise ton site en dossiers clairs dès le début : `index.html` à la racine, puis `img/`, `pages/`, et bientôt `css/` et `js/`. Noms de fichiers en minuscules, sans espaces ni accents : `a-propos.html`, pas `À propos.html`."
    },
    steps: ["Tu es dans le fichier `pages/jardin.html` (regarde l’onglet de l’éditeur). Crée un lien `Accueil` vers `index.html`, qui est dans le dossier **parent**.", "Crée un lien `Contact` vers `contact.html`, qui est dans le **même** dossier que toi.", "Donne l’`id` `potager` au titre « Le potager », puis crée un lien `Aller au potager` vers cette ancre.", "Crée un lien absolu `Le potager sur Wikipédia` vers `https://fr.wikipedia.org/wiki/Potager`."],
    starter: `<!-- Tu es dans le fichier pages/jardin.html -->\n<h1>Le jardin de Bip</h1>\n<p>\n  <!-- Écris les liens ici -->\n\n</p>\n<h2>Les fleurs</h2>\n<p>Des tournesols et des boulons fleuris.</p>\n<h2>Le potager</h2>\n<p>Des tomates, des radis et des carottes.</p>\n`,
    goals: [
      { label: "Un lien `Accueil` vers `../index.html`", test: c => { const a = qa(c, "a").find(x => /accueil/i.test(x.textContent)); const h = a && a.getAttribute("href"); return h === "../index.html" || (h === "index.html" ? "index.html n’est pas dans le dossier pages : remonte d’un dossier avec ../" : (h ? "Le chemin vers l’accueil est ../index.html." : false)); } },
      { label: "Un lien `Contact` vers `contact.html`", test: c => { const a = qa(c, "a").find(x => /^\s*contact\s*$/i.test(x.textContent)); const h = a && a.getAttribute("href"); return h === "contact.html" || (h === "pages/contact.html" ? "Tu es déjà dans le dossier pages : écris seulement contact.html." : (h ? "contact.html est dans le même dossier : son nom suffit." : false)); } },
      { label: "Le titre « Le potager » a l’`id` `potager`", test: c => { const h = q(c, "#potager"); return !!(h && h.tagName === "H2" && /potager/i.test(h.textContent)) || (q(c, '[id="#potager"]') ? "Dans l’attribut id, pas de # : id=\"potager\"." : (h ? "L’id potager doit être sur le h2 Le potager." : false)); } },
      { label: "Un lien `Aller au potager` vers l’ancre `#potager`", test: c => { const a = q(c, 'a[href="#potager"]'); return !!(a && /aller au potager/i.test(a.textContent)) || (q(c, 'a[href="potager"]') ? "Une ancre commence par # : href=\"#potager\"." : false); } },
      { label: "Un lien absolu vers `https://fr.wikipedia.org/wiki/Potager`", test: c => !!q(c, 'a[href="https://fr.wikipedia.org/wiki/Potager"]') || (q(c, 'a[href*="wikipedia"]') ? "Recopie l’adresse complète, avec https:// au début." : false) },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Depuis `pages/`, `../` remonte d’un dossier : `<a href=\"../index.html\">Accueil</a>`.", "Même dossier = juste le nom : `<a href=\"contact.html\">Contact</a>`. Pour l’ancre : `<h2 id=\"potager\">` et `<a href=\"#potager\">Aller au potager</a>`.", "Le dernier : `<a href=\"https://fr.wikipedia.org/wiki/Potager\">`, puis le texte `Le potager sur Wikipédia`, puis `</a>`."],
    solution: `<!-- Tu es dans le fichier pages/jardin.html -->\n<h1>Le jardin de Bip</h1>\n<p>\n  <!-- Écris les liens ici -->\n  <a href="../index.html">Accueil</a>\n  <a href="contact.html">Contact</a>\n  <a href="#potager">Aller au potager</a>\n  <a href="https://fr.wikipedia.org/wiki/Potager">Le potager sur Wikipédia</a>\n</p>\n<h2>Les fleurs</h2>\n<p>Des tournesols et des boulons fleuris.</p>\n<h2 id="potager">Le potager</h2>\n<p>Des tomates, des radis et des carottes.</p>`,
    debrief: "Trois sortes de chemins : **relatif** pour tes propres fichiers (`contact.html`, `../index.html`, `img/bip.svg`), **absolu** pour les autres sites (`https://…`), **ancre** pour une partie de la page (`#potager`). Dans le jeu CSS, tu utiliseras un chemin relatif pour relier ton fichier `style.css` à ta page."
  },
  {
    id: "figure", ch: 3, title: "L’album du chantier", notion: "figure, figcaption",
    say: "J’ai pris des photos du chantier ! Je veux une légende sous chacune, mais une vraie légende, bien attachée à son image.",
    lesson: {
      what: "`<figure>` regroupe une image (ou un schéma, un graphique, un extrait de code…) avec sa **légende** `<figcaption>`. La légende est visible par tout le monde et reste attachée à son image.",
      why: "Avec un simple `<p>` sous l’image, rien ne dit que ce texte parle de l’image. Avec `<figure>`, le lien est clair pour le navigateur, pour Google et pour les lecteurs d’écran. On s’en sert pour les photos d’articles, les illustrations, les graphiques.",
      code: `<figure>\n  <img src="img/maison.svg" alt="Une petite maison au toit bleu">\n  <figcaption>Ma maison, le jour du toit.</figcaption>\n</figure>`,
      pieces: [["<figure>", "la boîte (de type bloc) qui réunit l’image et sa légende"], ["<img>", "l’image, toujours avec son `alt`"], ["<figcaption>", "la légende (*figure caption*), premier ou dernier enfant de la figure"]],
      example: { code: `<figure>\n  <img src="img/boulon.svg" alt="Un boulon" width="70">\n  <figcaption>Mon tout premier boulon.</figcaption>\n</figure>` },
      trap: "Croire que la légende remplace le `alt`. Le `alt` **décrit** l’image pour qui ne la voit pas (« une maison au toit bleu ») ; la légende **commente** l’image pour tout le monde (« le jour où le toit a été posé »). Il faut les deux.",
      good: "Utilise `<figure>` dès qu’une image a besoin d’un texte qui l’explique. Une seule `<figcaption>` par figure, placée en premier ou en dernier dans la figure."
    },
    steps: ["Entoure l’image de la maison et sa légende par `<figure>` … `</figure>`.", "Transforme le `<p>` de la légende en `<figcaption>`.", "Ajoute une deuxième figure : l’image `img/bip.svg` (avec un `alt` et `width=\"120\"`) et la légende `Bip, le propriétaire`."],
    starter: `<h1>L’album du chantier</h1>\n<img src="img/maison.svg" alt="Une petite maison au toit bleu, sous le soleil" width="220">\n<p>Ma maison, le jour où le toit a été posé.</p>\n`,
    goals: [
      { label: "Une `<figure>` contient l’image de la maison", test: c => imgLoaded(c, 'figure img[src*="maison"]') || (q(c, "figure") ? "L’image img/maison.svg doit être entre <figure> et </figure>." : false) },
      { label: "Sa légende est un `<figcaption>` dans la même figure", test: c => { const i = q(c, 'img[src*="maison"]'); const f = i && i.closest("figure"); const cap = f && f.querySelector("figcaption"); return !!(cap && /toit/i.test(cap.textContent)) || (f && f.querySelector("p") ? "La légende doit être un <figcaption>, pas un <p>." : (q(c, "figcaption") ? "Le figcaption doit être DANS la figure, avec l’image." : false)); } },
      { label: "Une deuxième figure : `img/bip.svg`, son `alt` et sa légende", test: c => { const i = q(c, 'figure img[src*="bip"]'); const f = i && i.closest("figure"); const cap = f && f.querySelector("figcaption"); return !!(i && imgLoaded(c, 'figure img[src*="bip"]') && (i.getAttribute("alt") || "").trim().length >= 3 && cap && /bip/i.test(cap.textContent)) || (i ? "Vérifie le alt de l’image et la légende Bip, le propriétaire." : false); } },
      { label: "Chaque figure a une image et une seule légende", test: c => { const f = qa(c, "figure"); return (f.length >= 2 && f.every(x => x.querySelectorAll("img").length === 1 && x.querySelectorAll("figcaption").length === 1)) || (f.length >= 2 ? "Une image et un figcaption par figure, pas plus." : false); } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["`<figure>` s’ouvre avant le `<img>` et se ferme après la légende.", "Remplace `<p>` … `</p>` par `<figcaption>` … `</figcaption>`.", "La deuxième : `<figure>`, puis `<img src=\"img/bip.svg\" alt=\"Bip le robot\" width=\"120\">`, puis `<figcaption>Bip, le propriétaire</figcaption>` et enfin `</figure>`."],
    solution: `<h1>L’album du chantier</h1>\n<figure>\n  <img src="img/maison.svg" alt="Une petite maison au toit bleu, sous le soleil" width="220">\n  <figcaption>Ma maison, le jour où le toit a été posé.</figcaption>\n</figure>\n<figure>\n  <img src="img/bip.svg" alt="Bip le robot, tout sourire" width="120">\n  <figcaption>Bip, le propriétaire</figcaption>\n</figure>`,
    debrief: "Comme une `<div>`, `<figure>` regroupe des éléments, mais elle dit en plus **ce qu’ils sont** : une illustration et sa légende. C’est une balise **sémantique**. Remarque le décalage à gauche des figures : c’est la marge par défaut du navigateur, que tu pourras changer en CSS."
  },

  /* ------------------------------ ATELIER 4 ------------------------------ */
  {
    id: "ul", ch: 4, title: "La liste de courses", notion: "<ul> et <li>",
    say: "Il me faut des provisions pour ma nouvelle maison. Je te dicte ma liste de courses ?",
    lesson: {
      what: "`<ul>` crée une liste **à puces** (*unordered list*, liste non ordonnée). Chaque élément de la liste est un `<li>` (*list item*).",
      why: "Les listes sont partout sur le web : menus de navigation, listes de produits, ingrédients, résultats de recherche…",
      code: `<ul>\n  <li>Premier élément</li>\n  <li>Deuxième élément</li>\n</ul>`,
      pieces: [["<ul>", "la liste à puces : elle contient **uniquement** des `<li>`"], ["<li>", "un élément de la liste"], ["indentation", "décaler les `<li>` de deux espaces montre qu’ils sont les **enfants** du `<ul>`"]],
      example: { code: `<ul>\n  <li>des vis</li>\n  <li>de l’huile</li>\n</ul>` },
      trap: "Écrire du texte directement dans le `<ul>`, ou des `<li>` sans `<ul>` autour. Les deux vont toujours ensemble.",
      good: "Dès que tu as une suite d’éléments du même genre (un menu, des produits, des étapes), pense « liste ». Un `<li>` par ligne, indenté de 2 espaces dans son `<ul>`."
    },
    steps: ["Sous le titre, crée une liste à puces `<ul>`.", "Mets-y au moins 4 éléments `<li>` : par exemple des boulons, de l’huile, une ampoule, une batterie."],
    starter: `<h2>Ma liste de courses</h2>\n`,
    goals: [
      { label: "Une liste `<ul>` existe", test: c => !!q(c, "ul") },
      { label: "Elle contient au moins 4 `<li>`", test: c => qa(c, "ul > li").length >= 4 || (q(c, "ul") ? `Il y a ${qa(c, "ul > li").length} élément(s) pour l’instant.` : false) },
      { label: "Chaque `<li>` contient un texte", test: c => qa(c, "li").length > 0 && qa(c, "li").every(li => li.textContent.trim().length > 0) },
      { label: "La liste est sous le titre, sans erreur", test: c => after(c, "h2", "ul") && noErrors(c) }
    ],
    hints: ["Ouvre `<ul>`, puis ferme-le avec `</ul>` quelques lignes plus bas.", "Entre les deux, une ligne par élément : `<li>des boulons</li>`.", "Il en faut quatre."],
    solution: `<h2>Ma liste de courses</h2>\n<ul>\n  <li>des boulons</li>\n  <li>de l’huile</li>\n  <li>une ampoule</li>\n  <li>une batterie</li>\n</ul>`,
    debrief: "Le `<ul>` est le **parent**, les `<li>` sont ses **enfants**, et les `<li>` entre eux sont **frères**. Regarde l’onglet **Arbre** : il montre l’**arbre** du document, que les développeurs appellent le **DOM**. Le menu d’un site est presque toujours une liste `<ul>` de liens : tu le feras dans la mission finale."
  },
  {
    id: "ol", ch: 4, title: "La recette du gâteau", notion: "<ol>, listes imbriquées",
    say: "Avec mes courses, je prépare mon fameux gâteau aux boulons (en chocolat !). Mais l’ordre des étapes est très important !",
    lesson: {
      what: "`<ol>` crée une liste **numérotée** (*ordered list*). Le navigateur écrit les numéros tout seul. Et une liste peut en contenir une autre : on met le nouveau `<ul>` **dans** un `<li>`.",
      why: "On utilise `<ol>` quand l’ordre compte : une recette, un classement, les étapes d’une inscription.",
      code: `<ol>\n  <li>Première étape</li>\n  <li>Deuxième étape :\n    <ul>\n      <li>un détail</li>\n      <li>un autre détail</li>\n    </ul>\n  </li>\n</ol>`,
      pieces: [["<ol>", "une liste numérotée"], ["<li>", "toujours un `<li>` pour chaque élément"], ["<li> … <ul>", "une sous-liste se place **dans** le `<li>`, avant son `</li>`"]],
      example: { code: `<ol>\n  <li>Ramasser</li>\n  <li>Laver</li>\n  <li>Cuire</li>\n</ol>` },
      trap: "Écrire les numéros à la main (« 1. Ramasser ») : le `<ol>` les ajoute déjà. Et si on insère une étape, il renumérote tout seul.",
      good: "Choisis `<ol>` quand l’ordre compte, `<ul>` sinon. Pour une sous-liste, ouvre-la **dans** le `<li>` parent et indente-la d’un cran de plus : l’indentation montre l’imbrication."
    },
    steps: ["Crée une liste numérotée `<ol>` avec 4 étapes : rassembler les ingrédients, mélanger, faire cuire, servir chaud.", "Dans la première étape, ajoute une sous-liste `<ul>` de 2 éléments : `de la farine` et `des boulons en chocolat`."],
    starter: `<h2>Le gâteau aux boulons de Bip</h2>\n`,
    goals: [
      { label: "Une liste numérotée `<ol>` de 4 étapes", test: c => qa(c, "ol > li").length >= 4 || (q(c, "ol") ? `${qa(c, "ol > li").length} étape(s) pour l’instant.` : (q(c, "ul > li") && !q(c, "ol") ? "Ta liste a des puces : il faut des numéros, donc <ol>." : false)) },
      { label: "Pas de numéros écrits à la main", test: c => !qa(c, "ol > li").some(li => /^\s*\d+\s*[.)-]/.test(li.textContent)) || "Le <ol> écrit déjà les numéros : enlève les tiens." },
      { label: "Une sous-liste `<ul>` de 2 éléments dans la première étape", test: c => { const li = q(c, "ol > li"); return !!(li && li.querySelectorAll(":scope > ul > li").length >= 2) || (q(c, "ol > ul") ? "La sous-liste doit être DANS le <li>, avant son </li>." : false); } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Même principe que `<ul>`, avec `<ol>` : `<ol><li>Rassembler les ingrédients</li>…</ol>`.", "Pour la sous-liste, ne ferme pas tout de suite le premier `<li>` : écris le `<ul>` dedans, puis `</li>`.", "Dans le premier `<li>`, après le texte : `<ul>`, `<li>de la farine</li>`, `<li>des boulons en chocolat</li>`, `</ul>`, et seulement ensuite le `</li>` de l’étape."],
    solution: `<h2>Le gâteau aux boulons de Bip</h2>\n<ol>\n  <li>Rassembler les ingrédients :\n    <ul>\n      <li>de la farine</li>\n      <li>des boulons en chocolat</li>\n    </ul>\n  </li>\n  <li>Mélanger</li>\n  <li>Faire cuire</li>\n  <li>Servir chaud</li>\n</ol>`,
    debrief: "Tu as imbriqué une liste dans une liste. C’est le même principe que des poupées russes : `ol` contient `li`, qui contient `ul`, qui contient `li`. L’onglet **Arbre** le montre très bien. Les menus déroulants des sites sont construits exactement comme ça."
  },
  {
    id: "tableau", ch: 4, title: "Le planning du chantier", notion: "table, tr, th, td",
    say: "Les copains viennent m’aider sur le chantier ! Pour savoir qui fait quoi et quel jour, il me faut un tableau bien rangé.",
    lesson: {
      what: ["Un tableau `<table>` range des **données** en lignes et en colonnes. On l’écrit **ligne par ligne** : chaque ligne est un `<tr>` (*table row*), et chaque case de la ligne est un `<td>` (*table data*) ou, pour une case de titre, un `<th>` (*table header*).", "On sépare l’en-tête `<thead>` (la ligne des titres de colonnes) du corps `<tbody>` (les données). Le titre du tableau va dans un `<caption>`."],
      why: "Un tableau sert à comparer des données : horaires, tarifs, résultats sportifs, caractéristiques de produits. Grâce aux `<th>`, un lecteur d’écran annonce le titre de la colonne avec chaque case (« Jour : Mardi »), et le `<caption>` dit de quoi parle le tableau : sans eux, un tableau n’est qu’une bouillie de cases.",
      code: `<table>\n  <caption>Le planning</caption>\n  <thead>\n    <tr>\n      <th>Jour</th>\n      <th>Travail</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Lundi</td>\n      <td>Les fondations</td>\n    </tr>\n  </tbody>\n</table>`,
      pieces: [["<table>", "le tableau entier"], ["<caption>", "le titre du tableau, juste après `<table>`"], ["<thead> / <tbody>", "l’en-tête (titres des colonnes) et le corps (les données)"], ["<tr>", "une ligne (*table row*)"], ["<th>", "une case de titre (*table header*), en gras et centrée par défaut"], ["<td>", "une case de données (*table data*)"]],
      example: { code: `<table>\n  <thead>\n    <tr><th>Outil</th><th>Prix</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Marteau</td><td>12&nbsp;€</td></tr>\n  </tbody>\n</table>` },
      trap: "Utiliser un tableau pour **mettre en page** un site (un menu à gauche, le contenu à droite). C’était courant dans les années 2000, c’est à proscrire : un tableau, c’est pour des **données**. La mise en page, c’est le CSS (Flexbox et Grid).",
      good: "Chaque ligne a le même nombre de cases. Donne toujours un `<caption>` et des `<th>` à tes tableaux, et indente chaque niveau (`table`, `tbody`, `tr`, `td`) : c’est la seule façon de s’y retrouver."
    },
    steps: ["Écris le titre `Le planning de la semaine` dans le `<caption>`.", "Dans le `<thead>`, la ligne contient les titres des colonnes : remplace ses trois `<td>` par des `<th>`.", "Dans le `<tbody>`, ajoute deux lignes `<tr>` de trois cases : `Mardi`, `Les murs`, `Kami`, puis `Mercredi`, `Le toit`, `Les lucioles`."],
    starter: `<h2>Le chantier de Bip</h2>\n<table>\n  <caption></caption>\n  <thead>\n    <tr>\n      <td>Jour</td>\n      <td>Travail</td>\n      <td>Qui&nbsp;?</td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Lundi</td>\n      <td>Les fondations</td>\n      <td>Bip</td>\n    </tr>\n    <!-- Ajoute les lignes de mardi et de mercredi -->\n\n  </tbody>\n</table>\n`,
    goals: [
      { label: "Le `<caption>` : `Le planning de la semaine`", test: c => { const t = txt(c, "table caption"); return /planning de la semaine/i.test(t) || (t ? "Le titre doit être : Le planning de la semaine." : false); } },
      { label: "Les titres de colonnes sont des `<th>`", test: c => (qa(c, "thead th").length === 3 && !q(c, "thead td")) || (q(c, "thead td") ? "Il reste des <td> dans l’en-tête : ce sont des titres de colonnes, donc des <th>." : false) },
      { label: "Le `<tbody>` contient 3 lignes `<tr>`", test: c => { const n = qa(c, "tbody tr").length; return n >= 3 || `${n} ligne(s) dans le tbody pour l’instant.`; } },
      { label: "Chaque ligne a 3 cases `<td>` : jour, travail, qui", test: c => { const r = qa(c, "tbody tr"); return (r.length >= 3 && r.every(tr => tr.querySelectorAll("td").length === 3) && hasTextIn(c, "td", /kami/i) && hasTextIn(c, "td", /lucioles/i)) || (r.length >= 3 ? "Chaque ligne a trois <td> : Mardi, Les murs, Kami… puis Mercredi, Le toit, Les lucioles." : false); } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["`<caption>Le planning de la semaine</caption>`, et dans le `<thead>` : `<th>Jour</th>`…", "Une nouvelle ligne s’ouvre avec `<tr>` et se ferme avec `</tr>`. Recopie la ligne de lundi et change les textes.", "Une ligne : `<tr>`, puis `<td>Mardi</td>`, `<td>Les murs</td>`, `<td>Kami</td>`, puis `</tr>`. Même chose pour mercredi."],
    solution: `<h2>Le chantier de Bip</h2>\n<table>\n  <caption>Le planning de la semaine</caption>\n  <thead>\n    <tr>\n      <th>Jour</th>\n      <th>Travail</th>\n      <th>Qui&nbsp;?</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Lundi</td>\n      <td>Les fondations</td>\n      <td>Bip</td>\n    </tr>\n    <!-- Ajoute les lignes de mardi et de mercredi -->\n    <tr>\n      <td>Mardi</td>\n      <td>Les murs</td>\n      <td>Kami</td>\n    </tr>\n    <tr>\n      <td>Mercredi</td>\n      <td>Le toit</td>\n      <td>Les lucioles</td>\n    </tr>\n  </tbody>\n</table>`,
    debrief: "Un tableau se lit **ligne par ligne** : `tr`, puis ses cases `th` ou `td`. Pas encore de bordures : c’est le CSS qui dessinera le quadrillage. Tu retrouveras des tableaux partout où il y a des données à comparer : horaires de train, tarifs, classements. Liste ou tableau ? Une seule information par élément : liste. Plusieurs informations à comparer : tableau."
  },
  {
    id: "quiz2", ch: 4, quiz: true, title: "Contrôle des fenêtres et étagères", notion: "quiz",
    say: "Dernière vérification avant d’allumer la cheminée : images, chemins, listes et tableaux !",
    questions: [
      { q: "Pourquoi l’attribut `alt` est-il important ?", opts: ["Il change la taille de l’image", "Il rend l’image cliquable", "Il décrit l’image pour ceux qui ne la voient pas"], a: 2, why: "Le `alt` est lu par les lecteurs d’écran et s’affiche si l’image ne charge pas. Google s’en sert aussi." },
      { q: "Tu es dans `pages/jardin.html`. Quel chemin mène à la page d’accueil `index.html`, à la racine du site ?", opts: ["`index.html`", "`../index.html`", "`pages/index.html`"], a: 1, why: "`..` remonte d’un dossier : de `pages/` vers la racine, où se trouve `index.html`." },
      { q: "Dans un tableau, quelle balise crée une **ligne** ?", opts: ["`<td>`", "`<th>`", "`<tr>`"], a: 2, why: "`<tr>` (*table row*) est une ligne. Elle contient des cases : `<th>` pour les titres, `<td>` pour les données." },
      { q: "Ce code est-il correct ?", code: `<ul>\n  <li>Marteau</li>\n  Tournevis\n</ul>`, opts: ["Oui", "Non : tout le contenu d’un `<ul>` doit être dans des `<li>`"], a: 1, why: "Un `<ul>` ne contient que des `<li>`. « Tournevis » doit être dans son propre `<li>`." }
    ],
    debrief: "Images, chemins, listes, tableaux : ce sont les briques qu’on retrouve sur presque toutes les pages du web."
  },

  /* ------------------------------ ATELIER 5 ------------------------------ */
  {
    id: "champ", ch: 5, title: "La boîte aux lettres", notion: "<form>, <label>, <input>",
    say: "J’aimerais que mes voisins puissent s’inscrire à ma lettre d’infos du quartier. Il me faut un formulaire !",
    lesson: {
      what: "Un **formulaire** `<form>` regroupe des **champs**. Chaque champ `<input>` a un `type` (texte, e-mail, mot de passe…) et une étiquette `<label>`. Le `for` du label reprend l’`id` du champ : ils sont reliés.",
      why: "Les formulaires permettent aux visiteurs d’**envoyer** des informations : connexion, recherche, commande, inscription… Le `<label>` relié est indispensable : cliquer dessus active le champ, et les lecteurs d’écran le lisent.",
      code: `<form>\n  <label for="prenom">Ton prénom</label>\n  <input type="text" id="prenom">\n  <button>Envoyer</button>\n</form>`,
      pieces: [["<form>", "le formulaire, qui regroupe tous les champs"], ["<label for=\"prenom\">", "l’étiquette du champ dont l’`id` est `prenom`"], ["<input>", "un champ d’une ligne. Balise orpheline"], ["type=\"email\"", "le type de champ : `text`, `email`, `password`, `number`, `date`…"], ["id=\"prenom\"", "un nom **unique** dans la page (tu connais déjà les `id` !)"], ["<button>", "le bouton d’envoi"]],
      example: { code: `<label for="nom">Nom</label>\n<input type="text" id="nom">` },
      trap: "Un `for` et un `id` qui ne correspondent pas exactement (`for=\"prénom\"` et `id=\"prenom\"`) : le label n’est plus relié. Évite les accents et les espaces dans les `id`.",
      good: "Chaque champ a **son** `<label>` visible, relié par `for` = `id`. Choisis le bon `type` (`email`, `tel`, `number`…) : sur téléphone, le clavier s’adapte tout seul."
    },
    steps: ["Dans le `<form>`, ajoute un label `Ton prénom` relié à un champ texte d’id `prenom`.", "Ajoute un label `Ton e-mail` relié à un champ de type `email` d’id `email`.", "Termine par un bouton `S’inscrire`.", "Dans l’aperçu, clique sur un label : le champ s’active !"],
    starter: `<h2>La lettre d’infos du quartier</h2>\n<form>\n  \n</form>\n`,
    goals: [
      { label: "Un champ texte d’id `prenom`", test: c => { const i = q(c, "#prenom"); return !!(i && i.tagName === "INPUT" && i.type === "text"); } },
      { label: "Le label `Ton prénom` est relié au champ (`for=\"prenom\"`)", test: c => { const l = q(c, 'label[for="prenom"]'); return !!(l && /prénom/i.test(l.textContent)) || (q(c, "label") ? "Le for du label doit être exactement l’id du champ : prenom." : false); } },
      { label: "Un champ de type `email` d’id `email`, avec son label", test: c => { const i = q(c, "#email"); return !!(i && i.type === "email" && q(c, 'label[for="email"]')) || (i && i.type !== "email" ? "Le type de ce champ doit être email." : false); } },
      { label: "Un bouton `S’inscrire` dans le formulaire", test: c => hasTextIn(c, "form button", /s.inscrire/i) },
      { label: "Tout est dans le `<form>`, sans erreur", test: c => qa(c, "input").every(i => i.closest("form")) && noErrors(c) }
    ],
    hints: ["Le label d’abord : `<label for=\"prenom\">Ton prénom</label>`", "Puis son champ : `<input type=\"text\" id=\"prenom\">`. Même chose pour l’e-mail avec `type=\"email\"`.", "Le bouton : `<button>S’inscrire</button>`, avant le `</form>`."],
    solution: `<h2>La lettre d’infos du quartier</h2>\n<form>\n  <label for="prenom">Ton prénom</label>\n  <input type="text" id="prenom">\n\n  <label for="email">Ton e-mail</label>\n  <input type="email" id="email">\n\n  <button>S’inscrire</button>\n</form>`,
    debrief: "Un label, un champ, un `for` qui reprend l’`id` : c’est la base de tous les formulaires. Le type `email` n’est pas qu’un détail : sur téléphone, il affiche un clavier avec l’@, et le navigateur vérifie que l’adresse a la bonne forme. Les champs sont côte à côte, car ce sont des éléments **en ligne** : c’est le CSS qui les mettra en colonne."
  },
  {
    id: "formulaire", ch: 5, title: "Le livre d’or", notion: "textarea, required, placeholder",
    say: "Les visiteurs de ma maison veulent me laisser des petits mots. Construisons un livre d’or !",
    lesson: {
      what: "`<textarea>` est un grand champ pour un texte de plusieurs lignes. Les attributs `placeholder` et `required` améliorent les champs : un exemple grisé, et l’obligation de remplir.",
      why: "Un bon formulaire guide le visiteur : il montre quoi écrire (`placeholder`) et empêche d’envoyer un champ vide (`required`). Moins d’erreurs, moins de frustration.",
      code: `<input type="text" id="nom" placeholder="Ex. : Kami" required>\n<textarea id="message" rows="4"></textarea>`,
      pieces: [["<textarea>", "un champ de plusieurs lignes. Lui, il a une balise fermante !"], ["rows=\"4\"", "la hauteur du textarea, en lignes"], ["placeholder", "un texte d’exemple, grisé, qui disparaît quand on écrit"], ["required", "un attribut **booléen**, sans valeur : le champ est obligatoire"]],
      example: { code: `<textarea rows="3" placeholder="Ton message…"></textarea>` },
      trap: "Utiliser le `placeholder` à la place du `<label>`. Le placeholder disparaît dès qu’on tape : le visiteur ne sait plus ce qu’il devait écrire. Il faut **les deux**.",
      good: "Le `<label>` donne la **consigne**, le `placeholder` seulement un **exemple** (« Ex. : Kami »). Mets `required` sur les champs vraiment indispensables, pas sur tous : un formulaire court est un formulaire rempli."
    },
    steps: ["Ajoute un label `Ton nom` relié à un champ texte d’id `nom`, **obligatoire**, avec un placeholder.", "Ajoute un label `Ton message` relié à un `<textarea>` d’id `message` de 4 lignes.", "Ajoute un bouton `Signer le livre d’or`."],
    starter: `<h2>Le livre d’or de Bip</h2>\n<form>\n  \n</form>\n`,
    goals: [
      { label: "Un champ `nom` obligatoire avec un placeholder", test: c => { const i = q(c, "input#nom"); return !!(i && i.required && (i.getAttribute("placeholder") || "").trim()) || (i && !i.required ? "Ajoute l’attribut required au champ." : (i ? "Il manque le placeholder." : false)); } },
      { label: "Le label `Ton nom` est relié au champ", test: c => !!q(c, 'label[for="nom"]') },
      { label: "Un `<textarea>` d’id `message` de 4 lignes, avec son label", test: c => { const t = q(c, "textarea#message"); return !!(t && t.getAttribute("rows") === "4" && q(c, 'label[for="message"]')) || (t && t.getAttribute("rows") !== "4" ? "Ajoute rows=\"4\" au textarea." : false); } },
      { label: "Un bouton `Signer le livre d’or`", test: c => hasTextIn(c, "form button", /signer/i) },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Le champ nom : `<input type=\"text\" id=\"nom\" required>`, avec en plus `placeholder=\"Ex. : Kami\"`, et son label juste avant.", "Le textarea a une balise fermante : `<textarea id=\"message\" rows=\"4\"></textarea>`.", "Le label du message : `<label for=\"message\">Ton message</label>`."],
    solution: `<h2>Le livre d’or de Bip</h2>\n<form>\n  <label for="nom">Ton nom</label>\n  <input type="text" id="nom" placeholder="Ex. : Kami" required>\n\n  <label for="message">Ton message</label>\n  <textarea id="message" rows="4"></textarea>\n\n  <button>Signer le livre d’or</button>\n</form>`,
    debrief: "`required` est un attribut **booléen** : sa simple présence suffit, pas besoin de valeur. Le navigateur refusera d’envoyer le formulaire si le nom est vide. Attention : `<textarea>` a une fermante, contrairement à `<input>`."
  },
  {
    id: "choix", ch: 5, title: "La commande de peinture", notion: "radio, checkbox, select",
    say: "Ma maison est prête à être peinte ! Je prépare un bon de commande pour le magasin : une couleur au choix, une option, et la pièce à peindre.",
    lesson: {
      what: ["Un formulaire ne contient pas que des champs de texte. Les **boutons radio** (`type=\"radio\"`) permettent de choisir **une seule** réponse parmi plusieurs. Les **cases à cocher** (`type=\"checkbox\"`) permettent d’en cocher **zéro, une ou plusieurs**. La **liste déroulante** `<select>` propose ses `<option>` dans un menu.", "Pour l’envoi, chaque champ a un `name` (le nom de la donnée) et une `value` (la valeur envoyée). Les boutons radio d’une même question partagent le **même** `name` : c’est ce qui les relie entre eux."],
      why: "Ces champs évitent les fautes de frappe et guident le visiteur : il clique au lieu d’écrire. Tu les vois partout : taille d’un vêtement, mode de livraison, « J’accepte les conditions », choix du pays…",
      code: `<fieldset>\n  <legend>Ta couleur</legend>\n  <input type="radio" id="bleu" name="couleur" value="bleu">\n  <label for="bleu">Bleu</label>\n  <input type="radio" id="vert" name="couleur" value="vert">\n  <label for="vert">Vert</label>\n</fieldset>\n\n<input type="checkbox" id="vernis" name="vernis">\n<label for="vernis">Avec du vernis</label>\n\n<select id="piece" name="piece">\n  <option value="salon">Le salon</option>\n</select>\n<button type="submit">Commander</button>`,
      pieces: [["type=\"radio\"", "un bouton rond : **un seul** choix possible dans le groupe"], ["name=\"couleur\"", "le **même** `name` pour tous les boutons radio d’une question"], ["value=\"bleu\"", "la valeur envoyée si ce choix est coché"], ["type=\"checkbox\"", "une case carrée : on coche autant de cases qu’on veut"], ["<select> / <option>", "la liste déroulante et ses choix"], ["<fieldset> / <legend>", "regroupe des champs liés, avec la question en titre"], ["type=\"submit\"", "le bouton qui **envoie** le formulaire"]],
      example: { code: `<input type="radio" id="s" name="taille" value="s">\n<label for="s">S</label>\n<input type="radio" id="m" name="taille" value="m">\n<label for="m">M</label>\n<input type="checkbox" id="cadeau" name="cadeau">\n<label for="cadeau">Emballage cadeau</label>` },
      trap: "Donner un `name` différent à chaque bouton radio : ils ne sont plus reliés, et on peut tous les cocher en même temps ! Les boutons radio d’une même question ont le **même** `name` et des `id` **différents**.",
      good: "Regroupe les boutons radio d’une question dans un `<fieldset>` avec une `<legend>` qui pose la question. Écris toujours le `type` de tes boutons : `type=\"submit\"` pour envoyer, `type=\"button\"` pour un bouton qui fera autre chose (avec du JavaScript)."
    },
    steps: ["Dans le `<fieldset>`, ajoute trois boutons radio `name=\"couleur\"` : `bleu`, `vert` et `orange`, chacun avec son `id`, sa `value` et son `<label>`.", "Sous le commentaire, ajoute une case à cocher d’id `vernis` avec le label `Ajouter du vernis`.", "Complète la liste déroulante `piece` avec trois `<option>` : `salon`, `cuisine`, `chambre`.", "Donne au bouton le type `submit`. Puis teste dans l’aperçu : peux-tu cocher deux couleurs à la fois ?"],
    starter: `<h2>La commande de peinture</h2>\n<form>\n  <fieldset>\n    <legend>Quelle couleur pour les murs&nbsp;?</legend>\n\n  </fieldset>\n\n  <!-- La case à cocher -->\n\n  <label for="piece">Pour quelle pièce&nbsp;?</label>\n  <select id="piece" name="piece">\n\n  </select>\n\n  <button>Commander</button>\n</form>\n`,
    goals: [
      { label: "Trois boutons radio avec le même `name=\"couleur\"`", test: c => { const r = qa(c, 'input[type="radio"]'); if (r.length < 3) return r.length ? `${r.length} bouton(s) radio pour l’instant, il en faut 3.` : false; return r.every(x => x.getAttribute("name") === "couleur") || "Tous les boutons radio doivent avoir name=\"couleur\" : sinon on peut tous les cocher."; } },
      { label: "Chaque bouton radio a sa `value` et son `<label>`", test: c => { const r = qa(c, 'input[type="radio"]'); if (!r.length) return false; const v = r.map(x => (x.getAttribute("value") || "").trim()); if (v.some(x => !x) || new Set(v).size !== v.length) return "Chaque bouton radio a sa propre value : bleu, vert, orange."; return r.every(x => x.id && q(c, `label[for="${x.id}"]`)) || "Chaque bouton radio a un id, et un label dont le for reprend cet id."; } },
      { label: "Une case à cocher `vernis` avec son label", test: c => { const i = q(c, "#vernis"); return !!(i && i.type === "checkbox" && q(c, 'label[for="vernis"]')) || (i && i.type !== "checkbox" ? "Ce champ doit être de type checkbox." : (i ? "Ajoute le label relié : for=\"vernis\"." : false)); } },
      { label: "La liste `piece` propose 3 `<option>` avec une `value`", test: c => { const o = qa(c, "select#piece option"); return (o.length >= 3 && o.every(x => (x.getAttribute("value") || "").trim())) || (o.length ? (o.length < 3 ? `${o.length} option(s) pour l’instant.` : "Chaque option a une value : <option value=\"salon\">Le salon</option>.") : false); } },
      { label: "Le bouton envoie le formulaire : `type=\"submit\"`", test: c => !!q(c, 'form button[type="submit"]') },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Un bouton radio : `<input type=\"radio\" id=\"bleu\" name=\"couleur\" value=\"bleu\">` puis `<label for=\"bleu\">Bleu</label>`. Recommence pour vert et orange.", "La case : `<input type=\"checkbox\" id=\"vernis\" name=\"vernis\">` et `<label for=\"vernis\">Ajouter du vernis</label>`.", "Les options : `<option value=\"salon\">Le salon</option>`… Et le bouton : `<button type=\"submit\">Commander</button>`."],
    solution: `<h2>La commande de peinture</h2>\n<form>\n  <fieldset>\n    <legend>Quelle couleur pour les murs&nbsp;?</legend>\n    <input type="radio" id="bleu" name="couleur" value="bleu">\n    <label for="bleu">Bleu</label>\n    <input type="radio" id="vert" name="couleur" value="vert">\n    <label for="vert">Vert</label>\n    <input type="radio" id="orange" name="couleur" value="orange">\n    <label for="orange">Orange</label>\n  </fieldset>\n\n  <!-- La case à cocher -->\n  <input type="checkbox" id="vernis" name="vernis">\n  <label for="vernis">Ajouter du vernis</label>\n\n  <label for="piece">Pour quelle pièce&nbsp;?</label>\n  <select id="piece" name="piece">\n    <option value="salon">Le salon</option>\n    <option value="cuisine">La cuisine</option>\n    <option value="chambre">La chambre</option>\n  </select>\n\n  <button type="submit">Commander</button>\n</form>`,
    debrief: "Radio = **un seul** choix (même `name`), case à cocher = **plusieurs** choix, liste déroulante = un choix dans un menu compact. Le `name` et la `value` sont ce qui part à l’envoi : `couleur=vert`, `piece=salon`. Pour l’instant, le formulaire ne va nulle part : le traiter, c’est le travail d’un serveur ou du JavaScript."
  },

  /* ------------------------------ ATELIER 6 ------------------------------ */
  {
    id: "semantique", ch: 6, title: "Ranger la maison", notion: "header, nav, main, footer",
    say: "Ma page marche, mais elle est construite avec des `<div>` partout. Des cartons qui ne disent pas ce qu’ils contiennent ! Rangeons tout ça.",
    lesson: {
      what: "Tu connais `<div>` : une boîte **sans signification**. Le HTML moderne a des **balises sémantiques** qui disent quel rôle joue chaque grande zone de la page : l’en-tête, le menu, le contenu principal, le pied de page.",
      why: "Pour l’œil, rien ne change. Mais Google comprend mieux la page, les lecteurs d’écran proposent de « sauter au contenu principal », et le code est beaucoup plus lisible pour toi.",
      code: `<header>\n  <h1>Nom du site</h1>\n  <nav>…les liens du menu…</nav>\n</header>\n<main>…le contenu…</main>\n<footer>…le pied de page…</footer>`,
      pieces: [["<header>", "l’en-tête : le logo, le titre du site, souvent le menu"], ["<nav>", "la navigation : le menu de liens principal"], ["<main>", "le contenu principal, **unique** sur la page"], ["<footer>", "le pied de page : contact, mentions, copyright"]],
      trap: "Croire que `<header>` est la même chose que `<head>`. Le `<head>` est invisible (infos pour le navigateur) ; le `<header>` est l’en-tête **visible** de la page, dans le `<body>`.",
      good: "Presque toutes les pages ont la même ossature : `<header>`, `<nav>`, un seul `<main>`, `<footer>`. Commence toujours par poser ces grandes zones vides, puis remplis-les. Garde `<div>` pour les boîtes qui servent seulement à la mise en page."
    },
    steps: ["Remplace la `div` « haut » par un `<header>`.", "Remplace la `div` « menu » par un `<nav>`.", "Remplace la `div` « contenu » par un `<main>`.", "Remplace la `div` « bas » par un `<footer>`. Pense aussi aux balises fermantes !"],
    starter: `<div class="haut">\n  <h1>La maison de Bip</h1>\n  <div class="menu">\n    <a href="#maison">La maison</a>\n    <a href="#jardin">Le jardin</a>\n  </div>\n</div>\n<div class="contenu">\n  <h2>Bienvenue</h2>\n  <p>Ici, on construit une maison, balise par balise.</p>\n</div>\n<div class="bas">\n  <p>&copy; Bip 2026</p>\n</div>\n`,
    goals: [
      { label: "Un `<header>` contient le `<h1>`", test: c => !!q(c, "header h1") },
      { label: "Un `<nav>` dans le header contient les 2 liens", test: c => qa(c, "header nav a").length >= 2 || (q(c, "nav") ? "Le nav doit être dans le header, avec les deux liens dedans." : false) },
      { label: "Un `<main>` contient le titre et le paragraphe", test: c => !!(q(c, "main h2") && q(c, "main p")) },
      { label: "Un `<footer>` contient le copyright", test: c => /©/.test(txt(c, "footer")) },
      { label: "Plus aucune `<div>`, et aucune erreur", test: c => qa(c, "div").length === 0 ? noErrors(c) : `Il reste ${qa(c, "div").length} div. Pense à changer aussi les </div> fermantes.` }
    ],
    hints: ["Change `<div class=\"haut\">` en `<header>`, et son `</div>` (ligne 7) en `</header>`.", "La div menu devient `<nav>` … `</nav>`. Tu peux supprimer les `class`, elles ne servent plus.", "Puis `<main>` … `</main>` et `<footer>` … `</footer>`."],
    solution: `<header>\n  <h1>La maison de Bip</h1>\n  <nav>\n    <a href="#maison">La maison</a>\n    <a href="#jardin">Le jardin</a>\n  </nav>\n</header>\n<main>\n  <h2>Bienvenue</h2>\n  <p>Ici, on construit une maison, balise par balise.</p>\n</main>\n<footer>\n  <p>&copy; Bip 2026</p>\n</footer>`,
    debrief: "La page a exactement la même apparence, mais maintenant **chaque zone dit ce qu’elle est**. C’est ça, le HTML sémantique. On garde `<div>` pour les boîtes qui servent seulement à la mise en page (tu en auras besoin en CSS)."
  },
  {
    id: "sections", ch: 6, title: "Le journal du quartier", notion: "section, article, aside",
    say: "Je publie le journal du quartier sur ma page ! Des nouvelles, des articles, un encadré… Chaque bloc doit dire ce qu’il est.",
    lesson: {
      what: "Dans le `<main>`, on découpe le contenu avec trois autres balises sémantiques. `<section>` : une **partie** de la page sur un même thème, qui commence par un titre. `<article>` : un contenu **autonome**, qui aurait du sens tout seul (un article de blog, une fiche produit, un commentaire). `<aside>` : un contenu **à côté** du sujet principal (un encadré, des liens utiles, une publicité).",
      why: "Comme pour `<header>` et `<footer>`, rien ne change à l’écran, mais la page devient **compréhensible** par les machines : un lecteur d’écran annonce « article », Google repère le contenu important, et les modes « lecture » des navigateurs savent quoi garder.",
      code: `<main>\n  <section>\n    <h2>Les nouvelles</h2>\n    <article>\n      <h3>Le toit est posé</h3>\n      <p>…</p>\n    </article>\n  </section>\n  <aside>\n    <h2>Le saviez-vous ?</h2>\n    <p>…</p>\n  </aside>\n</main>`,
      pieces: [["<section>", "une partie thématique, **avec un titre**"], ["<article>", "un contenu **autonome** : on pourrait le publier seul, ailleurs"], ["<aside>", "un contenu **complémentaire**, à côté du sujet principal"], ["<h2>, <h3>", "chaque section ou article commence par son titre"]],
      trap: "Mettre des `<section>` partout à la place des `<div>`. Une `<section>` a un titre et un thème. Si la boîte sert seulement à regrouper pour la mise en page, garde une `<div>`.",
      good: "Pour choisir, pose-toi les questions dans l’ordre : « Ce bloc pourrait-il être publié tout seul ? » → `<article>`. « Est-ce une partie avec un titre ? » → `<section>`. « Est-ce un à-côté ? » → `<aside>`. Sinon → `<div>`."
    },
    steps: ["La `div` qui regroupe les nouvelles devient une `<section>`.", "Chaque nouvelle (son `<h3>` et son paragraphe) devient un `<article>`.", "La `div` « Le saviez-vous ? » devient un `<aside>`.", "N’oublie pas les balises fermantes. Tu peux garder ou supprimer les `class`."],
    starter: `<main>\n  <h1>Le journal du quartier</h1>\n\n  <div class="nouvelles">\n    <h2>Les nouvelles</h2>\n    <div class="nouvelle">\n      <h3>Le toit est posé&nbsp;!</h3>\n      <p>Après trois semaines de travail, la maison de Bip a enfin un toit.</p>\n    </div>\n    <div class="nouvelle">\n      <h3>Kami a retrouvé ses couleurs</h3>\n      <p>Le caméléon du quartier brille à nouveau de mille feux.</p>\n    </div>\n  </div>\n\n  <div class="encadre">\n    <h2>Le saviez-vous&nbsp;?</h2>\n    <p>Un robot n’a jamais besoin de dormir, mais Bip fait quand même la sieste.</p>\n  </div>\n</main>\n`,
    goals: [
      { label: "Une `<section>` regroupe les nouvelles, avec son `<h2>`", test: c => { const s = q(c, "main section"); return !!(s && s.querySelector("h2") && /nouvelles/i.test(s.querySelector("h2").textContent)) || (s ? "La section commence par le h2 Les nouvelles." : false); } },
      { label: "Les deux nouvelles sont des `<article>` dans la section", test: c => { const a = qa(c, "section article"); return (a.length === 2 && a.every(x => x.querySelector("h3") && x.querySelector("p"))) || (qa(c, "article").length ? "Les deux article doivent être dans la section, chacun avec son h3 et son paragraphe." : false); } },
      { label: "L’encadré est un `<aside>`", test: c => (/saviez/i.test(txt(c, "aside")) && !q(c, "section aside")) || (q(c, "aside") ? "L’aside contient le titre Le saviez-vous et son paragraphe, en dehors de la section." : false) },
      { label: "Plus aucune `<div>`, et aucune erreur", test: c => qa(c, "div").length === 0 ? noErrors(c) : `Il reste ${qa(c, "div").length} div. Pense aussi aux </div> fermantes.` }
    ],
    hints: ["`<div class=\"nouvelles\">` devient `<section>`, et son `</div>` (le dernier avant la ligne vide) devient `</section>`.", "Chaque `<div class=\"nouvelle\">` devient `<article>` … `</article>`.", "`<div class=\"encadre\">` devient `<aside>` … `</aside>`."],
    solution: `<main>\n  <h1>Le journal du quartier</h1>\n\n  <section>\n    <h2>Les nouvelles</h2>\n    <article>\n      <h3>Le toit est posé&nbsp;!</h3>\n      <p>Après trois semaines de travail, la maison de Bip a enfin un toit.</p>\n    </article>\n    <article>\n      <h3>Kami a retrouvé ses couleurs</h3>\n      <p>Le caméléon du quartier brille à nouveau de mille feux.</p>\n    </article>\n  </section>\n\n  <aside>\n    <h2>Le saviez-vous&nbsp;?</h2>\n    <p>Un robot n’a jamais besoin de dormir, mais Bip fait quand même la sieste.</p>\n  </aside>\n</main>`,
    debrief: "Ta page parle maintenant le langage des balises sémantiques : `<section>` pour les parties, `<article>` pour les contenus autonomes, `<aside>` pour les à-côtés. Sur un site d’actualités, chaque carte de la page d’accueil est un `<article>`. En CSS, tu pourras placer l’`<aside>` sur le côté, comme une vraie colonne."
  },
  {
    id: "relier", ch: 6, title: "Brancher la maison", notion: "link, script, meta",
    say: "La maison est presque prête ! Il reste à la brancher : l’électricité du CSS, et plus tard le moteur du JavaScript. Tout se passe dans le `<head>`.",
    lesson: {
      what: ["Le HTML, le CSS et le JavaScript s’écrivent dans des **fichiers séparés** : `index.html`, `style.css`, `script.js`. Dans le `<head>` du HTML, on écrit les lignes qui les **relient** : `<link>` pour la **feuille de style** CSS, `<script>` pour le JavaScript.", "On y ajoute aussi deux `<meta>` indispensables : `viewport`, pour que la page s’affiche bien sur téléphone, et `description`, le petit résumé que Google affiche sous le titre dans ses résultats."],
      why: "Séparer les fichiers, c’est séparer les rôles : la structure (HTML), l’apparence (CSS), le comportement (JavaScript). Un seul fichier `style.css` peut habiller toutes les pages d’un site : on change une couleur à un seul endroit, et tout le site suit. Sans le `viewport`, un téléphone affiche la page en tout petit, comme un écran d’ordinateur vu de loin.",
      code: `<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>La maison de Bip</title>\n  <meta name="description" content="La maison de Bip, construite balise par balise.">\n  <link rel="stylesheet" href="style.css">\n  <script src="script.js" defer></script>\n</head>`,
      pieces: [["<meta name=\"viewport\" …>", "« adapte la largeur de la page à l’écran » : indispensable pour le téléphone"], ["<meta name=\"description\" …>", "le résumé de la page, affiché par Google dans ses résultats"], ["<link rel=\"stylesheet\" href=\"style.css\">", "relie la feuille de style. `rel` = la relation (« feuille de style »), `href` = le chemin du fichier"], ["<script src=\"script.js\" defer>", "relie le fichier JavaScript. `defer` : attendre que tout le HTML soit lu avant de lancer le script"], ["</script>", "contrairement à `<link>`, `<script>` a **toujours** une balise fermante, même vide"]],
      trap: "Confondre les balises : le CSS se relie avec `<link href>`, le JavaScript avec `<script src>`. Et `<link>` n’a rien à voir avec les liens cliquables `<a>`. Autre piège : une faute dans le chemin (`styles.css` au lieu de `style.css`) ; aucune erreur ne s’affiche, mais la page reste sans style.",
      good: ["Range tes fichiers dans des dossiers et relie-les avec des chemins relatifs : `href=\"css/style.css\"`, `src=\"js/script.js\"`.", "Chaque langage dans son fichier : pas de CSS ni de JavaScript écrit au milieu du HTML. Le `<script>` va dans le `<head>` avec `defer` (ou juste avant `</body>`)."]
    },
    steps: ["Sous le `<meta charset>`, ajoute la balise `viewport` : recopie-la depuis la leçon (`name=\"viewport\"` et `content=\"width=device-width, initial-scale=1\"`).", "Ajoute une `<meta name=\"description\">` dont le `content` résume la page en une phrase.", "Relie la feuille de style `style.css` avec une balise `<link>`. Ce fichier existe déjà dans le dossier du jeu : regarde la page changer d’apparence !", "Relie enfin le fichier `script.js` avec une balise `<script>` et l’attribut `defer`. Il est vide pour l’instant : tu y écriras du JavaScript dans Mission Bip."],
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <title>La maison de Bip</title>\n    <!-- Les balises meta et le lien vers le CSS -->\n\n  </head>\n  <body>\n    <header>\n      <h1>La maison de Bip</h1>\n    </header>\n    <main>\n      <p>Bientôt en couleurs, grâce à Kami&nbsp;!</p>\n    </main>\n  </body>\n</html>\n`,
    goals: [
      { label: "La balise `viewport` est dans le `<head>`", test: c => { const m = c.doc.head.querySelector('meta[name="viewport"]'); return !!(m && /width\s*=\s*device-width/.test(m.getAttribute("content") || "")) || (m ? "Son content doit contenir width=device-width." : (q(c, 'meta[name="viewport"]') ? "La balise meta doit être dans le head." : false)); } },
      { label: "Une `description` d’au moins 20 caractères", test: c => { const m = c.doc.head.querySelector('meta[name="description"]'); const t = m ? (m.getAttribute("content") || "").trim() : ""; return t.length >= 20 || (m ? "Écris une vraie phrase dans le content de la description." : false); } },
      { label: "La feuille de style `style.css` est reliée dans le `<head>`", test: c => { const l = c.doc.head.querySelector('link[href="style.css"]'); return !!(l && (l.getAttribute("rel") || "").trim().toLowerCase() === "stylesheet") || (l ? "Il manque rel=\"stylesheet\" : sans lui, le navigateur ne sait pas que c’est du CSS." : (q(c, 'link[href="style.css"]') ? "Le <link> se place dans le <head>." : (q(c, "link") ? "Vérifie le chemin : href=\"style.css\", exactement." : false))); } },
      { label: "Le fichier `script.js` est relié avec `defer`, dans le `<head>`", test: c => { const s = c.doc.head.querySelector('script[src="script.js"]'); return !!(s && s.hasAttribute("defer")) || (s ? "Ajoute l’attribut defer : le script attendra que tout le HTML soit lu." : (q(c, 'script[src="script.js"]') ? "La balise <script> se place dans le <head>." : (q(c, "script") ? "Vérifie le chemin : src=\"script.js\", exactement." : false))); } },
      { label: "Aucune erreur dans les remarques", test: noErrors }
    ],
    hints: ["Copie la ligne `viewport` de la leçon juste sous `<meta charset=\"utf-8\">`.", "`<meta name=\"description\" content=\"…\">`, avec une phrase dans le `content`, par exemple `La maison de Bip, construite balise par balise.`", "`<link rel=\"stylesheet\" href=\"style.css\">` : une balise orpheline, dans le `<head>`.", "Pour le JavaScript : `<script src=\"script.js\" defer></script>`, dans le `<head>`. Attention, `<script>` a toujours sa balise fermante."],
    solution: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <title>La maison de Bip</title>\n    <!-- Les balises meta et le lien vers le CSS -->\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="La maison de Bip, construite balise par balise.">\n    <link rel="stylesheet" href="style.css">\n    <script src="script.js" defer></script>\n  </head>\n  <body>\n    <header>\n      <h1>La maison de Bip</h1>\n    </header>\n    <main>\n      <p>Bientôt en couleurs, grâce à Kami&nbsp;!</p>\n    </main>\n  </body>\n</html>`,
    debrief: "Ta page est **branchée** : le navigateur a chargé `style.css` et l’a appliqué (le bandeau bleu, la police, la largeur et les couleurs ont changé, sans toucher au HTML). Ce fichier a été préparé pour toi ; dans Mission Kami, tu écriras **le tien**. Le `<script>` est relié lui aussi : il attend le JavaScript que tu écriras avec Bip. Retiens les trois fichiers d’un site : `index.html` (la structure), `style.css` (l’apparence) et `script.js` (le comportement), reliés dans le `<head>`."
  },
  {
    id: "quiz3", ch: 6, quiz: true, title: "Contrôle avant le CSS", notion: "quiz",
    say: "Avant de poser le toit, une dernière inspection. Tout juste, et tu es prêt pour le CSS !",
    questions: [
      { q: "Où place-t-on `<link rel=\"stylesheet\" href=\"style.css\">` ?", opts: ["Tout en bas du `<body>`", "Dans le `<head>`", "Avant le `<!DOCTYPE html>`"], a: 1, why: "Le `<link>` est une information pour le navigateur : il va dans le `<head>`. Ne le confonds pas avec `<a>`, qui crée un lien cliquable." },
      { q: "À quoi sert `defer` dans cette ligne ?", code: `<script src="script.js" defer></script>`, opts: ["À attendre que tout le HTML soit lu avant de lancer le script", "À désactiver le script", "À cacher le script aux visiteurs"], a: 0, why: "Avec `defer`, le navigateur lit toute la page, puis lance le script : le JavaScript trouve tous les éléments dont il a besoin." },
      { q: "Cinq cartes de produits auront le même style. Comment les étiqueter ?", opts: ["`id=\"carte\"` sur chacune", "Avec une balise inventée `<carte>`", "`class=\"carte\"` sur chacune"], a: 2, why: "Une `class` peut se répéter, un `id` est unique dans la page. En CSS, tu viseras les cinq cartes d’un coup avec `.carte`." },
      { q: "Un encadré « Articles similaires », à côté de l’article principal, c’est…", opts: ["un `<aside>`", "un `<header>`", "un deuxième `<main>`"], a: 0, why: "C’est un contenu complémentaire, à côté du sujet principal : un `<aside>`. Et il n’y a qu’un seul `<main>` par page." }
    ],
    debrief: "Tu sais structurer une page, l’étiqueter avec `class` et `id`, et la relier à une feuille de style : exactement ce qu’il faut pour commencer le CSS."
  },
  {
    id: "finale", ch: 6, boss: true, title: "La maison de Bip", notion: "mission finale",
    say: "Dernière mission ! Construis toute ma page d’accueil, des fondations jusqu’au toit. Tu as le modèle : clique sur « Le modèle à reproduire », au-dessus de l’éditeur, et tu connais toutes les balises.",
    lesson: {
      what: "Cette mission réunit l’essentiel de ce que tu as appris : le squelette, les zones sémantiques, les titres, une figure, une liste, des liens avec des chemins relatifs et une ancre, un caractère spécial. Avance zone par zone, et vérifie souvent : les **Objectifs** te disent ce qui manque, les **Remarques** te signalent les fautes.",
      why: "C’est exactement comme ça qu’on commence un vrai site : d’abord la structure en HTML, ensuite l’apparence en CSS, enfin l’interactivité en JavaScript.",
      code: `<!DOCTYPE html>\n<html lang="fr">\n  <head>…</head>\n  <body>\n    <header>\n      <h1>…</h1>\n      <nav>…</nav>\n    </header>\n    <main>\n      <section>…</section>\n      <section id="amis">…</section>\n    </main>\n    <footer>…</footer>\n  </body>\n</html>`,
      pieces: [["<head>", "le `viewport` et le `<title>`"], ["<nav>", "le menu : une liste `<ul>` de liens, dont un vers `#amis`"], ["<section>", "une partie du contenu, qui commence par son titre `<h2>`"], ["<figure>", "l’image de la maison et sa légende"], ["Le modèle", "clique sur « Le modèle à reproduire » au-dessus de l’éditeur"]],
      trap: "Tout écrire d’un coup puis chercher les erreurs. Vérifie après chaque zone : c’est plus rapide.",
      good: "Travaille comme un pro : d’abord les grandes zones vides (`<header></header>`, `<main></main>`, `<footer></footer>`), puis remplis-les une par une, en indentant au fur et à mesure et en annonçant chaque zone par un commentaire."
    },
    steps: [
      "Dans le `<head>` : la `meta viewport` et le `<title>` `La maison de Bip` (le `charset` est déjà là).",
      "Un `<header>` avec un `<h1>` `La maison de Bip` et un `<nav>` de 3 liens, dont un vers l’ancre `#amis`.",
      "Un `<main>` avec deux `<section>`, chacune avec un `<h2>`. La deuxième a l’`id` `amis`.",
      "Dans la première section : un paragraphe, puis une `<figure>` avec l’image `img/maison.svg` (et son `alt`) et une `<figcaption>`.",
      "Dans la deuxième : une liste `<ul>` d’au moins 3 amis.",
      "Un `<footer>` avec un lien vers `pages/contact.html` et le symbole `&copy;`."
    ],
    starter: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <!-- Le viewport et le titre de l’onglet -->\n\n  </head>\n  <body>\n    <!-- La page d’accueil de Bip : header, main, footer -->\n\n  </body>\n</html>\n`,
    goals: [
      { label: "Le `<head>` : la `meta viewport` et le `<title>` `La maison de Bip`", test: c => { const v = c.doc.head.querySelector('meta[name="viewport"]'), t = c.doc.title.trim(); return !!(v && t === "La maison de Bip") || (v ? "Le title doit être exactement : La maison de Bip." : (t ? "Il manque la balise meta viewport dans le head." : false)); } },
      { label: "`<header>` : un `<h1>` `La maison de Bip` et un `<nav>` de 3 liens", test: c => /la maison de bip/i.test(txt(c, "header h1")) && qa(c, "header nav a").length >= 3 || (q(c, "header") ? `Le header a ${qa(c, "header nav a").length} lien(s) dans un nav, et son h1 doit être La maison de Bip.` : false) },
      { label: "`<main>` contient deux `<section>` avec chacune un `<h2>`", test: c => { const s = qa(c, "main section"); return (s.length >= 2 && s.every(x => x.querySelector("h2"))) || (s.length ? `${s.length} section(s), chacune doit commencer par un h2.` : false); } },
      { label: "La 2ᵉ section a l’`id` `amis`, et un lien du menu y mène", test: c => { const s = qa(c, "main section")[1]; return !!(s && s.id === "amis" && q(c, 'nav a[href="#amis"]')) || (s && s.id === "amis" ? "Ajoute dans le nav un lien vers l’ancre #amis." : (q(c, 'nav a[href="#amis"]') ? "Donne l’id amis à la deuxième section." : false)); } },
      { label: "1ʳᵉ section : un paragraphe et une `<figure>` (image `img/maison.svg` + `<figcaption>`)", test: c => { const s = q(c, "main section"); const f = s && s.querySelector("figure"); const i = f && f.querySelector('img[src="img/maison.svg"]'); return !!(s && s.querySelector("p") && i && (i.getAttribute("alt") || "").trim() && f.querySelector("figcaption") && imgLoaded(c, 'figure img[src="img/maison.svg"]')) || (s && s.querySelector('img[src*="maison"]') && !f ? "L’image et sa légende doivent être dans une <figure>, avec un <figcaption>." : false); } },
      { label: "2ᵉ section : une liste d’au moins 3 éléments", test: c => { const s = qa(c, "main section")[1]; return !!(s && s.querySelectorAll("ul > li").length >= 3); } },
      { label: "`<footer>` : un lien vers `pages/contact.html` et le symbole ©", test: c => (!!q(c, 'footer a[href="pages/contact.html"]') && /©/.test(txt(c, "footer"))) || (q(c, 'footer a[href="contact.html"]') ? "La page contact est rangée dans le dossier pages : pages/contact.html." : (q(c, 'footer a[href="pages/contact.html"]') ? "Il manque le symbole © (&copy;) dans le footer." : false)) },
      { label: "Le HTML est propre : aucune erreur", test: noErrors }
    ],
    hints: ["Dans le head : la `meta viewport` (recopie-la de la mission « Brancher la maison ») et `<title>La maison de Bip</title>`. Dans le body, commence par les trois grandes zones vides.", "Le menu : `<nav>`, `<ul>`, puis un `<li>` par lien, par exemple `<li><a href=\"#amis\">Mes amis</a></li>`. La section correspondante : `<section id=\"amis\">`.", "La figure : `<figure>`, l’`<img src=\"img/maison.svg\" alt=\"…\">`, puis `<figcaption>…</figcaption>`. Le pied : `<a href=\"pages/contact.html\">Écrire à Bip</a>` et `&copy; 2026`."],
    solution: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="utf-8">\n    <!-- Le viewport et le titre de l’onglet -->\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>La maison de Bip</title>\n  </head>\n  <body>\n    <!-- La page d’accueil de Bip : header, main, footer -->\n    <header>\n      <h1>La maison de Bip</h1>\n      <nav>\n        <ul>\n          <li><a href="#maison">Ma maison</a></li>\n          <li><a href="#amis">Mes amis</a></li>\n          <li><a href="pages/contact.html">Contact</a></li>\n        </ul>\n      </nav>\n    </header>\n\n    <main>\n      <section id="maison">\n        <h2>Ma maison</h2>\n        <p>Une petite maison au bout de la rue, avec un jardin et un atelier pour bricoler.</p>\n        <figure>\n          <img src="img/maison.svg" alt="Une petite maison au toit bleu, sous le soleil">\n          <figcaption>Ma maison, enfin terminée.</figcaption>\n        </figure>\n      </section>\n\n      <section id="amis">\n        <h2>Mes amis</h2>\n        <ul>\n          <li>Kami le caméléon</li>\n          <li>Les lucioles</li>\n          <li>Le facteur</li>\n        </ul>\n      </section>\n    </main>\n\n    <footer>\n      <p><a href="pages/contact.html">Écrire à Bip</a> · &copy; 2026</p>\n    </footer>\n  </body>\n</html>`,
    debrief: "Tu as construit une vraie page, complète, propre et sémantique. C’est solide, mais tout gris… Le HTML a fait son travail : il dit **ce qu’il y a**. Pour décider **à quoi ça ressemble**, il te faut maintenant le CSS : tu viseras ces balises, ces `class` et ces `id` pour les habiller. Kami t’attend !"
  }
  ]
};
