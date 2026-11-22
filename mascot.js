/* La maison de Bip (jeu HTML) : pas de personnage, seulement la maison.
   Chaque atelier terminé construit une pièce : 1 fondations, 2 murs, 3 fenêtre,
   4 cheminée, 5 porte, 6 toit. Les pièces manquantes sont en pointillés. */
const MASCOT = {
  name: "Bip",
  see: "Voir la maison sur la carte",
  svg(done, mood) {
    done = done || new Set();
    const p = n => done.has(n) ? "part got" : "part ghost";
    const happy = mood === "happy";
    const smoke = done.has(4) || happy
      ? `<g class="smoke"><circle cx="108" cy="22" r="5"/><circle cx="116" cy="12" r="6.5"/><circle cx="127" cy="5" r="8"/></g>` : "";
    const sparkles = happy
      ? `<g class="sparkle"><path d="M22 40 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z"/><path d="M146 66 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z"/><path d="M28 104 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 l6 -2.5 Z"/></g>` : "";
    return `<svg class="mascot maison" viewBox="0 0 160 150" role="img" aria-label="La maison de Bip">
      ${smoke}${sparkles}
      <g class="${p(4)}"><rect x="96" y="30" width="15" height="30" rx="2"/><rect x="92" y="25" width="23" height="8" rx="2"/></g>
      <g class="${p(6)}"><path class="roof" d="M24 74 L80 26 L136 74 Z"/></g>
      <g class="${p(2)}"><rect x="34" y="72" width="92" height="56" rx="3"/></g>
      <g class="${p(3)}"><rect class="win" x="44" y="84" width="26" height="22" rx="2"/><path class="bars" d="M57 84 v22 M44 95 h26"/></g>
      <g class="${p(5)}"><path class="door" d="M88 128 v-28 a11 11 0 0 1 22 0 v28 Z"/><circle class="knob" cx="104" cy="115" r="2"/></g>
      <g class="${p(1)}"><rect x="22" y="126" width="116" height="12" rx="5"/></g>
    </svg>`;
  }
};
