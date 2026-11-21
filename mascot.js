/* Tago, le bernard-l'ermite du HTML : ses pinces sont des chevrons < >.
   Il n'a pas de maison : chaque atelier terminé lui rend une pièce de sa maison. */
const MASCOT = {
  name: "Tago",
  svg(done, mood) {
    done = done || new Set();
    const p = n => done.has(n) ? "part got" : "part ghost";
    const happy = mood === "happy";
    const eyes = happy
      ? `<path class="lid" d="M60 142 q6 -7 12 0"/><path class="lid" d="M88 142 q6 -7 12 0"/>`
      : mood === "think"
        ? `<circle class="eye" cx="66" cy="142" r="5.5"/><circle class="eye" cx="94" cy="142" r="5.5"/><circle class="glint" cx="68" cy="139.5" r="1.8"/><circle class="glint" cx="96" cy="139.5" r="1.8"/><path class="lid" d="M58 131 l14 3"/>`
        : `<circle class="eye" cx="66" cy="142" r="5.5"/><circle class="eye" cx="94" cy="142" r="5.5"/><circle class="glint" cx="68" cy="139.5" r="1.8"/><circle class="glint" cx="96" cy="139.5" r="1.8"/>`;
    const mouth = happy ? `<path class="mouth" d="M72 151 q8 9 16 0" style="fill:var(--ink)"/>` : `<path class="mouth" d="M74 152 q6 5 12 0"/>`;
    return `<svg class="mascot tago" viewBox="0 0 160 172" role="img" aria-label="Tago">
      <g class="${p(4)}"><rect x="94" y="46" width="13" height="26" rx="2"/><rect x="91" y="42" width="19" height="7" rx="2"/></g>
      <g class="${p(6)}"><path d="M38 82 L80 44 L122 82 Z" stroke-linejoin="round"/></g>
      <g class="legs"><path d="M44 152 l-12 12 M50 158 l-8 10 M116 152 l12 12 M110 158 l8 10"/></g>
      <g class="arms"><path d="M38 140 L24 136 M122 140 L136 136"/></g>
      <g class="claw"><path d="M22 120 L6 136 L22 152"/><path d="M138 120 L154 136 L138 152"/></g>
      <ellipse class="body" cx="80" cy="144" rx="46" ry="23"/>
      <g class="${p(2)}"><rect x="50" y="80" width="60" height="40" rx="3"/></g>
      <g class="${p(3)}"><rect class="win" x="57" y="88" width="19" height="17" rx="2"/><path d="M66.5 88 v17 M57 96.5 h19"/></g>
      <g class="${p(5)}"><path class="door" d="M86 120 v-20 a8 8 0 0 1 16 0 v20 Z"/><circle class="knob" cx="98" cy="111" r="1.6"/></g>
      <g class="${p(1)}"><rect x="42" y="117" width="76" height="9" rx="4"/></g>
      ${eyes}${mouth}
      <ellipse class="cheek" cx="54" cy="150" rx="6" ry="3.5"/><ellipse class="cheek" cx="106" cy="150" rx="6" ry="3.5"/>
    </svg>`;
  }
};
