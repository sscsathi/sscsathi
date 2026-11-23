import { MockTest, Question } from '../../types/exam';

function svgUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

/* ============================================================================
 * Crisp watermark-free inline SVGs for Reasoning visual questions (Q1–Q25)
 * ========================================================================== */

// Q5 (PDF 1005): Mirror Image of "5 y r 7 4 h" on right-side vertical mirror MN
const Q5_MIRROR_MAIN = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120" width="280" height="120">
  <rect width="280" height="120" fill="#FFFFFF"/>
  <g font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600" fill="#0F172A" text-anchor="middle" dominant-baseline="central">
    <text x="34" y="64">5</text>
    <text x="68" y="64">y</text>
    <text x="98" y="64">r</text>
    <text x="128" y="64">7</text>
    <text x="160" y="64">4</text>
    <text x="192" y="64">h</text>
  </g>
  <line x1="224" y1="22" x2="224" y2="98" stroke="#0F172A" stroke-width="2.6"/>
  <g stroke="#0F172A" stroke-width="1.6">
    <line x1="224" y1="26" x2="236" y2="33"/>
    <line x1="224" y1="34" x2="236" y2="41"/>
    <line x1="224" y1="42" x2="236" y2="49"/>
    <line x1="224" y1="50" x2="236" y2="57"/>
    <line x1="224" y1="58" x2="236" y2="65"/>
    <line x1="224" y1="66" x2="236" y2="73"/>
    <line x1="224" y1="74" x2="236" y2="81"/>
    <line x1="224" y1="82" x2="236" y2="89"/>
    <line x1="224" y1="90" x2="236" y2="97"/>
  </g>
  <text x="224" y="14" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="#0F172A" text-anchor="middle">M</text>
  <text x="224" y="114" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="#0F172A" text-anchor="middle">N</text>
</svg>
`);

function makeMirrorOptionSvg(
  chars: Array<{ ch: string; sx: number; sy: number }>
): string {
  const xs = [26, 56, 86, 114, 144, 174];
  const nodes = chars
    .map(
      (c, i) =>
        `<g transform="translate(${xs[i]}, 32) scale(${c.sx}, ${c.sy})"><text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600" fill="#0F172A" text-anchor="middle" dominant-baseline="central">${c.ch}</text></g>`
    )
    .join('');
  return svgUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 64" width="200" height="64"><rect width="200" height="64" fill="#FFFFFF"/>${nodes}</svg>`
  );
}

const Q5_OPT_A = makeMirrorOptionSvg([
  { ch: 'n', sx: 1, sy: 1 },
  { ch: '4', sx: 1, sy: 1 },
  { ch: '7', sx: -1, sy: 1 },
  { ch: 'r', sx: -1, sy: -1 },
  { ch: 'y', sx: 1, sy: 1 },
  { ch: '5', sx: -1, sy: 1 },
]);
const Q5_OPT_B = makeMirrorOptionSvg([
  { ch: 'h', sx: -1, sy: 1 },
  { ch: '4', sx: -1, sy: 1 },
  { ch: '7', sx: 1, sy: -1 },
  { ch: 'r', sx: 1, sy: 1 },
  { ch: 'y', sx: -1, sy: 1 },
  { ch: '5', sx: -1, sy: 1 },
]);
const Q5_OPT_C = makeMirrorOptionSvg([
  { ch: 'h', sx: -1, sy: 1 },
  { ch: '4', sx: -1, sy: 1 },
  { ch: '7', sx: -1, sy: 1 },
  { ch: 'r', sx: -1, sy: 1 },
  { ch: 'y', sx: -1, sy: 1 },
  { ch: '5', sx: -1, sy: 1 },
]);
const Q5_OPT_D = makeMirrorOptionSvg([
  { ch: 'h', sx: -1, sy: -1 },
  { ch: '4', sx: -1, sy: 1 },
  { ch: '7', sx: -1, sy: 1 },
  { ch: 'r', sx: -1, sy: 1 },
  { ch: 'y', sx: -1, sy: 1 },
  { ch: '5', sx: -1, sy: 1 },
]);

// Q7 (PDF 1007): Figure Analogy (T-bar with circle → 180° rotation + doubled bar & circles)
const Q7_ANALOGY_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 220" width="460" height="220">
  <rect width="460" height="220" fill="#FFFFFF"/>
  <text x="10" y="16" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A">Question Figures:</text>
  <rect x="30" y="24" width="400" height="76" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.6"/>
  <!-- Fig 1: vertical bar right, horiz stem left, 1 circle above stem -->
  <g stroke="#0F172A" stroke-width="2" fill="none">
    <line x1="92" y1="36" x2="92" y2="88"/>
    <line x1="48" y1="62" x2="92" y2="62"/>
    <circle cx="80" cy="51" r="4.5" fill="#FFFFFF"/>
  </g>
  <!-- Colon -->
  <circle cx="122" cy="53" r="3" fill="#0F172A"/>
  <circle cx="122" cy="71" r="3" fill="#0F172A"/>
  <!-- Fig 2: double vertical bar left, horiz stem right, 2 circles below stem -->
  <g stroke="#0F172A" stroke-width="2" fill="none">
    <line x1="150" y1="36" x2="150" y2="88"/>
    <line x1="156" y1="36" x2="156" y2="88"/>
    <line x1="156" y1="62" x2="202" y2="62"/>
    <circle cx="168" cy="73" r="4.5" fill="#FFFFFF"/>
    <circle cx="182" cy="73" r="4.5" fill="#FFFFFF"/>
  </g>
  <!-- Double Colon -->
  <circle cx="224" cy="53" r="3" fill="#0F172A"/>
  <circle cx="224" cy="71" r="3" fill="#0F172A"/>
  <circle cx="236" cy="53" r="3" fill="#0F172A"/>
  <circle cx="236" cy="71" r="3" fill="#0F172A"/>
  <!-- Fig 3: horiz bar top, vert stem down, 1 circle right of stem -->
  <g stroke="#0F172A" stroke-width="2" fill="none">
    <line x1="262" y1="40" x2="314" y2="40"/>
    <line x1="288" y1="40" x2="288" y2="86"/>
    <circle cx="300" cy="51" r="4.5" fill="#FFFFFF"/>
  </g>
  <!-- Colon -->
  <circle cx="338" cy="53" r="3" fill="#0F172A"/>
  <circle cx="338" cy="71" r="3" fill="#0F172A"/>
  <!-- Question Mark -->
  <text x="386" y="65" font-family="Arial, sans-serif" font-size="38" font-weight="700" fill="#0F172A" text-anchor="middle" dominant-baseline="central">?</text>

  <text x="10" y="120" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A">Answer Figures:</text>
  <!-- Answer Boxes (1)-(4) -->
  <g stroke="#0F172A" stroke-width="1.5" fill="#FFFFFF">
    <rect x="46" y="128" width="90" height="68"/>
    <rect x="136" y="128" width="90" height="68"/>
    <rect x="226" y="128" width="90" height="68"/>
    <rect x="316" y="128" width="90" height="68"/>
  </g>
  <!-- (1): double top bar, stem down, 2 circles on LEFT -->
  <g stroke="#0F172A" stroke-width="2" fill="none">
    <line x1="65" y1="140" x2="117" y2="140"/>
    <line x1="65" y1="146" x2="117" y2="146"/>
    <line x1="91" y1="146" x2="91" y2="186"/>
    <circle cx="71" cy="157" r="4" fill="#FFFFFF"/>
    <circle cx="82" cy="157" r="4" fill="#FFFFFF"/>
  </g>
  <!-- (2): double bottom bar, stem up, 2 circles on RIGHT -->
  <g stroke="#0F172A" stroke-width="2" fill="none">
    <line x1="155" y1="178" x2="207" y2="178"/>
    <line x1="155" y1="184" x2="207" y2="184"/>
    <line x1="181" y1="138" x2="181" y2="178"/>
    <circle cx="191" cy="168" r="4" fill="#FFFFFF"/>
    <circle cx="202" cy="168" r="4" fill="#FFFFFF"/>
  </g>
  <!-- (3): double bottom bar, stem up, 2 circles on LEFT [CORRECT] -->
  <g stroke="#0F172A" stroke-width="2" fill="none">
    <line x1="245" y1="178" x2="297" y2="178"/>
    <line x1="245" y1="184" x2="297" y2="184"/>
    <line x1="271" y1="138" x2="271" y2="178"/>
    <circle cx="251" cy="168" r="4" fill="#FFFFFF"/>
    <circle cx="262" cy="168" r="4" fill="#FFFFFF"/>
  </g>
  <!-- (4): double top bar, stem down, 2 circles on RIGHT -->
  <g stroke="#0F172A" stroke-width="2" fill="none">
    <line x1="335" y1="140" x2="387" y2="140"/>
    <line x1="335" y1="146" x2="387" y2="146"/>
    <line x1="361" y1="146" x2="361" y2="186"/>
    <circle cx="371" cy="157" r="4" fill="#FFFFFF"/>
    <circle cx="382" cy="157" r="4" fill="#FFFFFF"/>
  </g>
  <g font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="middle">
    <text x="91" y="213">(1)</text>
    <text x="181" y="213">(2)</text>
    <text x="271" y="213">(3)</text>
    <text x="361" y="213">(4)</text>
  </g>
</svg>
`);

// Q8 (PDF 1008): Figure Analogy (Vertical 180° flip of geometric letter/shape)
const Q8_ANALOGY_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 226" width="460" height="226">
  <rect width="460" height="226" fill="#FFFFFF"/>
  <text x="10" y="16" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A">Question Figures:</text>
  <!-- 4 Question Boxes -->
  <g stroke="#0F172A" stroke-width="1.5" fill="#FFFFFF">
    <rect x="36" y="24" width="76" height="76"/>
    <rect x="134" y="24" width="76" height="76"/>
    <rect x="242" y="24" width="76" height="76"/>
    <rect x="340" y="24" width="76" height="76"/>
  </g>
  <!-- Fig 1: Inner rectangle with X diagonals + upright triangle (apex at top-center) -->
  <g stroke="#0F172A" stroke-width="1.8" fill="none">
    <rect x="48" y="34" width="52" height="56"/>
    <line x1="48" y1="34" x2="100" y2="90"/>
    <line x1="100" y1="34" x2="48" y2="90"/>
    <polyline points="48,90 74,34 100,90"/>
  </g>
  <!-- Colon -->
  <circle cx="123" cy="52" r="3" fill="#0F172A"/>
  <circle cx="123" cy="72" r="3" fill="#0F172A"/>
  <!-- Fig 2: Vertical flip of Fig 1 (downward triangle, apex at bottom-center) -->
  <g stroke="#0F172A" stroke-width="1.8" fill="none">
    <rect x="146" y="34" width="52" height="56"/>
    <line x1="146" y1="34" x2="198" y2="90"/>
    <line x1="198" y1="34" x2="146" y2="90"/>
    <polyline points="146,34 172,90 198,34"/>
  </g>
  <!-- Double Colon -->
  <circle cx="222" cy="52" r="3" fill="#0F172A"/>
  <circle cx="222" cy="72" r="3" fill="#0F172A"/>
  <circle cx="231" cy="52" r="3" fill="#0F172A"/>
  <circle cx="231" cy="72" r="3" fill="#0F172A"/>
  <!-- Fig 3: Inverted A (∀) open at top -->
  <g stroke="#0F172A" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <polyline points="256,36 280,88 304,36"/>
    <line x1="264" y1="56" x2="296" y2="56"/>
  </g>
  <!-- Colon -->
  <circle cx="329" cy="52" r="3" fill="#0F172A"/>
  <circle cx="329" cy="72" r="3" fill="#0F172A"/>
  <text x="378" y="64" font-family="Arial, sans-serif" font-size="38" font-weight="700" fill="#0F172A" text-anchor="middle" dominant-baseline="central">?</text>

  <text x="10" y="122" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A">Answer Figures:</text>
  <g stroke="#0F172A" stroke-width="1.5" fill="#FFFFFF">
    <rect x="64" y="130" width="82" height="72"/>
    <rect x="146" y="130" width="82" height="72"/>
    <rect x="228" y="130" width="82" height="72"/>
    <rect x="310" y="130" width="82" height="72"/>
  </g>
  <!-- (1): Upright A with closed bottom bar -->
  <g stroke="#0F172A" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <polygon points="105,140 80,192 130,192"/>
    <line x1="89" y1="173" x2="121" y2="173"/>
  </g>
  <!-- (2): Upright A open at bottom [CORRECT] -->
  <g stroke="#0F172A" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <polyline points="162,192 187,140 212,192"/>
    <line x1="171" y1="173" x2="203" y2="173"/>
  </g>
  <!-- (3): Inverted A with closed top bar -->
  <g stroke="#0F172A" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <polygon points="244,140 294,140 269,192"/>
    <line x1="253" y1="159" x2="285" y2="159"/>
  </g>
  <!-- (4): Upright A with closed bottom bar + double crossbar -->
  <g stroke="#0F172A" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <polygon points="351,140 326,192 376,192"/>
    <line x1="337" y1="168" x2="365" y2="168"/>
    <line x1="333" y1="178" x2="369" y2="178"/>
  </g>
  <g font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="middle">
    <text x="105" y="219">(1)</text>
    <text x="187" y="219">(2)</text>
    <text x="269" y="219">(3)</text>
    <text x="351" y="219">(4)</text>
  </g>
</svg>
`);

// Q9 (PDF 1009): Embedded Figure (Circle with upper-right sector cut from 12:00 to ~1:30)
const Q9_EMBED_MAIN = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 92" width="110" height="92">
  <rect width="110" height="92" fill="#FFFFFF"/>
  <rect x="10" y="6" width="90" height="80" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.6"/>
  <!-- Pac-Man-like circle missing upper-right wedge from 12:00 (55,16) to ~2:00 (81,31) -->
  <path d="M 55 16 L 55 46 L 81 31 A 30 30 0 1 1 55 16 Z" fill="none" stroke="#0F172A" stroke-width="2.4" stroke-linejoin="round"/>
</svg>
`);

const Q9_OPT_A = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <rect width="96" height="96" fill="#FFFFFF"/>
  <rect x="6" y="6" width="84" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
  <circle cx="48" cy="48" r="32" fill="none" stroke="#0F172A" stroke-width="2.2"/>
  <line x1="48" y1="16" x2="48" y2="80" stroke="#0F172A" stroke-width="2.2"/>
  <line x1="18" y1="36" x2="78" y2="36" stroke="#0F172A" stroke-width="2.2"/>
</svg>
`);

const Q9_OPT_B = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <rect width="96" height="96" fill="#FFFFFF"/>
  <rect x="6" y="6" width="84" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
  <circle cx="48" cy="48" r="32" fill="none" stroke="#0F172A" stroke-width="2.2"/>
  <line x1="25.4" y1="25.4" x2="70.6" y2="70.6" stroke="#0F172A" stroke-width="2.2"/>
  <line x1="70.6" y1="25.4" x2="25.4" y2="70.6" stroke="#0F172A" stroke-width="2.2"/>
</svg>
`);

const Q9_OPT_C = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <rect width="96" height="96" fill="#FFFFFF"/>
  <rect x="6" y="6" width="84" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
  <circle cx="48" cy="48" r="32" fill="none" stroke="#0F172A" stroke-width="2.2"/>
  <line x1="48" y1="16" x2="48" y2="80" stroke="#0F172A" stroke-width="2.2"/>
  <line x1="16" y1="48" x2="80" y2="48" stroke="#0F172A" stroke-width="2.2"/>
</svg>
`);

const Q9_OPT_D = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <rect width="96" height="96" fill="#FFFFFF"/>
  <rect x="6" y="6" width="84" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
  <circle cx="48" cy="48" r="32" fill="none" stroke="#0F172A" stroke-width="2.2"/>
  <!-- Vertical radius to 12 o'clock + diameter from ~2 o'clock to ~8 o'clock + radius to ~10:30 -->
  <line x1="48" y1="16" x2="48" y2="48" stroke="#0F172A" stroke-width="2.2"/>
  <line x1="75.7" y1="32" x2="20.3" y2="64" stroke="#0F172A" stroke-width="2.2"/>
  <line x1="48" y1="48" x2="24" y2="27" stroke="#0F172A" stroke-width="2.2"/>
</svg>
`);

// Q10 (PDF 1010): Venn Diagram for Educated, Employed, Urban
const Q10_OPT_A = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 92" width="110" height="92">
  <rect width="110" height="92" fill="#FFFFFF"/>
  <rect x="5" y="4" width="100" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
  <circle cx="55" cy="46" r="34" fill="none" stroke="#0F172A" stroke-width="2"/>
  <circle cx="44" cy="46" r="16" fill="none" stroke="#0F172A" stroke-width="2"/>
  <circle cx="66" cy="46" r="16" fill="none" stroke="#0F172A" stroke-width="2"/>
</svg>
`);

const Q10_OPT_B = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 92" width="110" height="92">
  <rect width="110" height="92" fill="#FFFFFF"/>
  <rect x="5" y="4" width="100" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
  <circle cx="31" cy="46" r="17" fill="none" stroke="#0F172A" stroke-width="2"/>
  <circle cx="55" cy="46" r="17" fill="none" stroke="#0F172A" stroke-width="2"/>
  <circle cx="79" cy="46" r="17" fill="none" stroke="#0F172A" stroke-width="2"/>
</svg>
`);

const Q10_OPT_C = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 92" width="110" height="92">
  <rect width="110" height="92" fill="#FFFFFF"/>
  <rect x="5" y="4" width="100" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
  <circle cx="43" cy="36" r="20" fill="none" stroke="#0F172A" stroke-width="2"/>
  <circle cx="67" cy="36" r="20" fill="none" stroke="#0F172A" stroke-width="2"/>
  <circle cx="55" cy="56" r="20" fill="none" stroke="#0F172A" stroke-width="2"/>
</svg>
`);

const Q10_OPT_D = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 92" width="110" height="92">
  <rect width="110" height="92" fill="#FFFFFF"/>
  <rect x="5" y="4" width="100" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
  <circle cx="55" cy="46" r="32" fill="none" stroke="#0F172A" stroke-width="2"/>
  <circle cx="55" cy="46" r="21" fill="none" stroke="#0F172A" stroke-width="2"/>
  <circle cx="55" cy="46" r="10" fill="none" stroke="#0F172A" stroke-width="2"/>
</svg>
`);

// Q11 (PDF 1011): Odd One Out — 5 squares with black dot (corners vs edge midpoint in d)
const Q11_ODD_DOTS_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 112" width="460" height="112">
  <rect width="460" height="112" fill="#FFFFFF"/>
  <g stroke="#0F172A" stroke-width="1.5" fill="#FFFFFF">
    <rect x="10" y="8" width="88" height="82"/>
    <rect x="98" y="8" width="88" height="82"/>
    <rect x="186" y="8" width="88" height="82"/>
    <rect x="274" y="8" width="88" height="82"/>
    <rect x="362" y="8" width="88" height="82"/>
  </g>
  <!-- Inner squares -->
  <g stroke="#0F172A" stroke-width="2" fill="none">
    <rect x="30" y="25" width="48" height="48"/>
    <rect x="118" y="25" width="48" height="48"/>
    <rect x="206" y="25" width="48" height="48"/>
    <rect x="294" y="25" width="48" height="48"/>
    <rect x="382" y="25" width="48" height="48"/>
  </g>
  <!-- Dots: (a) TL corner, (b) TR corner, (c) BR corner, (d) Left edge midpoint, (e) BL corner -->
  <g fill="#0F172A">
    <circle cx="30" cy="25" r="5.5"/>
    <circle cx="166" cy="25" r="5.5"/>
    <circle cx="254" cy="73" r="5.5"/>
    <circle cx="294" cy="49" r="5.5"/>
    <circle cx="382" cy="73" r="5.5"/>
  </g>
  <g font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="middle">
    <text x="54" y="106">(a)</text>
    <text x="142" y="106">(b)</text>
    <text x="230" y="106">(c)</text>
    <text x="318" y="106">(d)</text>
    <text x="406" y="106">(e)</text>
  </g>
</svg>
`);

// Q14 (PDF 1014): 4 positions of the same dice
function diceCubeSvg(x: number, top: string, left: string, right: string): string {
  return `
  <g transform="translate(${x}, 10)">
    <!-- Top face -->
    <polygon points="50,6 94,30 50,54 6,30" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8" stroke-linejoin="round"/>
    <!-- Left face -->
    <polygon points="6,30 50,54 50,104 6,80" fill="#F8FAFC" stroke="#0F172A" stroke-width="1.8" stroke-linejoin="round"/>
    <!-- Right face -->
    <polygon points="50,54 94,30 94,80 50,104" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8" stroke-linejoin="round"/>
    <text x="50" y="31" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#0F172A" text-anchor="middle" dominant-baseline="central">${top}</text>
    <text x="28" y="68" font-family="Arial, sans-serif" font-size="21" font-weight="700" fill="#0F172A" text-anchor="middle" dominant-baseline="central">${left}</text>
    <text x="72" y="68" font-family="Arial, sans-serif" font-size="21" font-weight="700" fill="#0F172A" text-anchor="middle" dominant-baseline="central">${right}</text>
  </g>`;
}

const Q14_DICE_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 124" width="460" height="124">
  <rect width="460" height="124" fill="#FFFFFF"/>
  ${diceCubeSvg(12, '1', '3', '5')}
  ${diceCubeSvg(124, '2', '5', '3')}
  ${diceCubeSvg(236, '4', '3', '1')}
  ${diceCubeSvg(348, '3', '4', '2')}
</svg>
`);

// Q15 (PDF 1015): Odd One Out — 5 squares split into 8 triangles with 2 shaded black
// Slice numbering CW from 12 o'clock:
// 1: TC->TR, 2: TR->MR, 3: MR->BR, 4: BR->BC, 5: BC->BL, 6: BL->ML, 7: ML->TL, 8: TL->TC
function octantSquareSvg(x: number, shaded: number[], label: string): string {
  const s = 54;
  const x0 = x + 17;
  const y0 = 19;
  const cx = x0 + s / 2;
  const cy = y0 + s / 2;
  const pts: Record<number, string> = {
    1: `${cx},${cy} ${cx},${y0} ${x0 + s},${y0}`,
    2: `${cx},${cy} ${x0 + s},${y0} ${x0 + s},${cy}`,
    3: `${cx},${cy} ${x0 + s},${cy} ${x0 + s},${y0 + s}`,
    4: `${cx},${cy} ${x0 + s},${y0 + s} ${cx},${y0 + s}`,
    5: `${cx},${cy} ${cx},${y0 + s} ${x0},${y0 + s}`,
    6: `${cx},${cy} ${x0},${y0 + s} ${x0},${cy}`,
    7: `${cx},${cy} ${x0},${cy} ${x0},${y0}`,
    8: `${cx},${cy} ${x0},${y0} ${cx},${y0}`,
  };
  const fills = shaded
    .map((idx) => `<polygon points="${pts[idx]}" fill="#0F172A"/>`)
    .join('');
  return `
  <g>
    <rect x="${x}" y="8" width="88" height="80" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
    <rect x="${x0}" y="${y0}" width="${s}" height="${s}" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>
    ${fills}
    <g stroke="#0F172A" stroke-width="1.5">
      <line x1="${cx}" y1="${y0}" x2="${cx}" y2="${y0 + s}"/>
      <line x1="${x0}" y1="${cy}" x2="${x0 + s}" y2="${cy}"/>
      <line x1="${x0}" y1="${y0}" x2="${x0 + s}" y2="${y0 + s}"/>
      <line x1="${x0 + s}" y1="${y0}" x2="${x0}" y2="${y0 + s}"/>
      <rect x="${x0}" y="${y0}" width="${s}" height="${s}" fill="none" stroke="#0F172A" stroke-width="1.8"/>
    </g>
    <text x="${x + 44}" y="105" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#0F172A" text-anchor="middle">${label}</text>
  </g>`;
}

const Q15_ODD_TRIANGLES_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 114" width="460" height="114">
  <rect width="460" height="114" fill="#FFFFFF"/>
  ${octantSquareSvg(10, [8, 6], '(a)')}
  ${octantSquareSvg(98, [6, 4], '(b)')}
  ${octantSquareSvg(186, [4, 2], '(c)')}
  ${octantSquareSvg(274, [8, 5], '(d)')}
  ${octantSquareSvg(362, [2, 8], '(e)')}
</svg>
`);

// Q18 (PDF 1018): Figure Series — Circle-bracket rotates 90° CCW; Arrow-bracket rotates 90° CW
const Q18_SERIES_MAIN = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 106" width="400" height="106">
  <rect width="400" height="106" fill="#FFFFFF"/>
  <g stroke="#0F172A" stroke-width="1.8" fill="#FFFFFF">
    <rect x="8" y="8" width="96" height="90"/>
    <rect x="104" y="8" width="96" height="90"/>
    <rect x="200" y="8" width="96" height="90"/>
    <rect x="296" y="8" width="96" height="90"/>
  </g>
  <!-- Box 1: Top ⊔ (circle top-right), Bottom ⊓ (down arrow bottom-right) -->
  <g stroke="#0F172A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="26,22 26,44 82,44 82,28"/>
    <circle cx="82" cy="22" r="6" fill="#FFFFFF"/>
    <polyline points="26,84 26,62 82,62 82,84"/>
    <polyline points="75,76 82,85 89,76"/>
  </g>
  <!-- Box 2: Left コ (left arrow bottom-left), Right コ (circle top-left) -->
  <g stroke="#0F172A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="122,26 142,26 142,78 122,78"/>
    <polyline points="130,71 121,78 130,85"/>
    <polyline points="164,78 184,78 184,26 168,26"/>
    <circle cx="162" cy="26" r="6" fill="#FFFFFF"/>
  </g>
  <!-- Box 3: Top ⊔ (up arrow top-left), Bottom ⊓ (circle bottom-left) -->
  <g stroke="#0F172A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="222,22 222,44 276,44 276,22"/>
    <polyline points="215,30 222,21 229,30"/>
    <polyline points="276,84 276,62 222,62 222,78"/>
    <circle cx="222" cy="84" r="6" fill="#FFFFFF"/>
  </g>
  <!-- Box 4: ? -->
  <text x="344" y="56" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#0F172A" text-anchor="middle" dominant-baseline="central">?</text>
</svg>
`);

const Q18_OPT_A = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <rect width="96" height="96" fill="#FFFFFF"/>
  <rect x="6" y="6" width="84" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>
  <g stroke="#0F172A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="24,74 42,74 42,24 22,24"/>
    <polyline points="30,17 21,24 30,31"/>
    <polyline points="62,24 76,24 76,74 62,74"/>
    <circle cx="56" cy="74" r="6" fill="#FFFFFF"/>
  </g>
</svg>
`);

const Q18_OPT_B = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <rect width="96" height="96" fill="#FFFFFF"/>
  <rect x="6" y="6" width="84" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>
  <g stroke="#0F172A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="24,42 24,22 72,22 72,42"/>
    <polyline points="65,34 72,43 79,34"/>
    <polyline points="72,74 72,56 24,56 24,70"/>
    <circle cx="24" cy="76" r="6" fill="#FFFFFF"/>
  </g>
</svg>
`);

const Q18_OPT_C = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <rect width="96" height="96" fill="#FFFFFF"/>
  <rect x="6" y="6" width="84" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>
  <g stroke="#0F172A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="34,76 20,76 20,34 32,34 36,22"/>
    <polyline points="62,76 76,76 76,26 62,26"/>
    <circle cx="56" cy="26" r="6" fill="#FFFFFF"/>
  </g>
</svg>
`);

const Q18_OPT_D = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <rect width="96" height="96" fill="#FFFFFF"/>
  <rect x="6" y="6" width="84" height="84" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.8"/>
  <g stroke="#0F172A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <!-- Left ⊏: plain top arm right, bottom arm right with circle -->
    <polyline points="34,24 20,24 20,74 34,74"/>
    <circle cx="40" cy="74" r="6" fill="#FFFFFF"/>
    <!-- Right ⊏: top arm right with arrow, plain bottom arm right -->
    <polyline points="72,74 58,74 58,24 76,24"/>
    <polyline points="68,17 77,24 68,31"/>
  </g>
</svg>
`);

// Q21 (PDF 1021): Counting Triangles (13 triangles)
const Q21_TRIANGLES_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 156" width="320" height="156">
  <rect width="320" height="156" fill="#FFFFFF"/>
  <g stroke="#0F172A" stroke-width="2.2" fill="none" stroke-linejoin="round">
    <!-- Left triangle L(36,78) - A(140,22) - B(140,134) -->
    <polygon points="36,78 140,22 140,134"/>
    <!-- Right rectangle A(140,22) - D(284,22) - C(284,134) - B(140,134) -->
    <rect x="140" y="22" width="144" height="112"/>
    <!-- Horizontal midline L(36,78) to N(284,78) -->
    <line x1="36" y1="78" x2="284" y2="78"/>
    <!-- Diagonal B(140,134) to D(284,22) -->
    <line x1="140" y1="134" x2="284" y2="22"/>
    <!-- Line A(140,22) to N(284,78) -->
    <line x1="140" y1="22" x2="284" y2="78"/>
  </g>
</svg>
`);

// Q24 (PDF 1024): Pattern Completion — Diamond with concentric alternating white/black squares
const Q24_PATTERN_MAIN = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" width="210" height="210">
  <defs>
    <clipPath id="q24-diamond">
      <polygon points="105,12 198,105 105,198 12,105"/>
    </clipPath>
  </defs>
  <rect width="210" height="210" fill="#FFFFFF"/>
  <g clip-path="url(#q24-diamond)">
    <!-- Outermost to innermost alternating bands (3 black bands per axis) -->
    <rect x="12" y="12" width="186" height="186" fill="#0F172A"/>
    <rect x="27" y="27" width="156" height="156" fill="#FFFFFF"/>
    <rect x="43" y="43" width="124" height="124" fill="#0F172A"/>
    <rect x="59" y="59" width="92" height="92" fill="#FFFFFF"/>
    <rect x="75" y="75" width="60" height="60" fill="#0F172A"/>
    <rect x="90" y="90" width="30" height="30" fill="#FFFFFF"/>
    <!-- Mask bottom-left quadrant -->
    <polygon points="12,105 105,105 105,198" fill="#FFFFFF"/>
  </g>
  <!-- Crisp diamond border & center axes -->
  <polygon points="105,12 198,105 105,198 12,105" fill="none" stroke="#0F172A" stroke-width="2"/>
  <line x1="105" y1="12" x2="105" y2="198" stroke="#0F172A" stroke-width="1.6"/>
  <line x1="12" y1="105" x2="198" y2="105" stroke="#0F172A" stroke-width="1.6"/>
  <text x="74" y="140" font-family="Arial, sans-serif" font-size="38" font-weight="800" fill="#0F172A" text-anchor="middle" dominant-baseline="central">?</text>
</svg>
`);

// Option A: Inverted colors (black inner corner)
const Q24_OPT_A = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="112" height="112">
  <defs>
    <clipPath id="q24a"><polygon points="10,10 102,10 102,102"/></clipPath>
  </defs>
  <rect width="112" height="112" fill="#FFFFFF"/>
  <g clip-path="url(#q24a)">
    <rect x="10" y="10" width="92" height="92" fill="#0F172A"/>
    <rect x="26" y="10" width="76" height="76" fill="#FFFFFF"/>
    <rect x="42" y="10" width="60" height="60" fill="#0F172A"/>
    <rect x="58" y="10" width="44" height="44" fill="#FFFFFF"/>
    <rect x="74" y="10" width="28" height="28" fill="#0F172A"/>
  </g>
  <polygon points="10,10 102,10 102,102" fill="none" stroke="#0F172A" stroke-width="1.8"/>
</svg>
`);

// Option B: Bisected with mismatched diagonal line
const Q24_OPT_B = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="112" height="112">
  <defs>
    <clipPath id="q24b"><polygon points="10,10 102,10 102,102"/></clipPath>
  </defs>
  <rect width="112" height="112" fill="#FFFFFF"/>
  <g clip-path="url(#q24b)">
    <rect x="10" y="10" width="92" height="92" fill="#0F172A"/>
    <rect x="25" y="10" width="77" height="77" fill="#FFFFFF"/>
    <rect x="41" y="10" width="61" height="61" fill="#0F172A"/>
    <rect x="57" y="10" width="45" height="45" fill="#FFFFFF"/>
    <rect x="73" y="10" width="29" height="29" fill="#0F172A"/>
    <rect x="87" y="10" width="15" height="15" fill="#FFFFFF"/>
    <!-- Diagonal bisecting line from top-right to hypotenuse midpoint -->
    <line x1="102" y1="10" x2="56" y2="56" stroke="#0F172A" stroke-width="2.6"/>
  </g>
  <polygon points="10,10 102,10 102,102" fill="none" stroke="#0F172A" stroke-width="1.8"/>
</svg>
`);

// Option C [CORRECT]: Exact bottom-left quadrant matching Figure X (3 black bands + white inner corner)
const Q24_OPT_C = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="112" height="112">
  <defs>
    <clipPath id="q24c"><polygon points="10,10 102,10 102,102"/></clipPath>
  </defs>
  <rect width="112" height="112" fill="#FFFFFF"/>
  <g clip-path="url(#q24c)">
    <rect x="10" y="10" width="92" height="92" fill="#0F172A"/>
    <rect x="25" y="10" width="77" height="77" fill="#FFFFFF"/>
    <rect x="41" y="10" width="61" height="61" fill="#0F172A"/>
    <rect x="57" y="10" width="45" height="45" fill="#FFFFFF"/>
    <rect x="73" y="10" width="29" height="29" fill="#0F172A"/>
    <rect x="87" y="10" width="15" height="15" fill="#FFFFFF"/>
  </g>
  <polygon points="10,10 102,10 102,102" fill="none" stroke="#0F172A" stroke-width="1.8"/>
</svg>
`);

// Option D: 4 compressed black bands (extra band / tiny inner white corner)
const Q24_OPT_D = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="112" height="112">
  <defs>
    <clipPath id="q24d"><polygon points="10,10 102,10 102,102"/></clipPath>
  </defs>
  <rect width="112" height="112" fill="#FFFFFF"/>
  <g clip-path="url(#q24d)">
    <rect x="10" y="10" width="92" height="92" fill="#0F172A"/>
    <rect x="21" y="10" width="81" height="81" fill="#FFFFFF"/>
    <rect x="33" y="10" width="69" height="69" fill="#0F172A"/>
    <rect x="45" y="10" width="57" height="57" fill="#FFFFFF"/>
    <rect x="57" y="10" width="45" height="45" fill="#0F172A"/>
    <rect x="69" y="10" width="33" height="33" fill="#FFFFFF"/>
    <rect x="81" y="10" width="21" height="21" fill="#0F172A"/>
    <rect x="92" y="10" width="10" height="10" fill="#FFFFFF"/>
  </g>
  <polygon points="10,10 102,10 102,102" fill="none" stroke="#0F172A" stroke-width="1.8"/>
</svg>
`);

/* ============================================================================
 * SECTION 1: General Intelligence & Reasoning (Q1–Q25)
 * ========================================================================== */

const SECTION_1_REASONING_06S3: Question[] = [
  {
    id: 'cgl26_06o3_q1',
    topic: 'Address Matching',
    questionEn:
      'Address A: 5th Cross, 10th Main, Indiranagar, Chennai – 600020\nAddress B: 10th Cross, 5th Main, Indiranagar, Chennai – 600020\nAre these addresses likely to be the same?',
    questionHi:
      'पता A: 5th Cross, 10th Main, Indiranagar, Chennai – 600020\nपता B: 10th Cross, 5th Main, Indiranagar, Chennai – 600020\nक्या ये पते समान होने की संभावना रखते हैं?',
    optionsEn: [
      'Yes',
      'No, city differs',
      'No, cross and main street differs',
      'No, pin code differs',
    ],
    optionsHi: [
      'हाँ',
      'नहीं, शहर अलग है',
      'नहीं, क्रॉस और मुख्य सड़क अलग हैं',
      'नहीं, पिन कोड अलग है',
    ],
    correctIndex: 2,
    explanationEn:
      'Comparing both addresses:\n• Locality, City, and PIN code are identical (Indiranagar, Chennai – 600020).\n• However, Address A specifies "5th Cross, 10th Main" whereas Address B specifies "10th Cross, 5th Main".\nHence, the cross street and main street numbers are swapped/different (Option C).',
    explanationHi:
      'दोनों पतों की तुलना करने पर:\n• क्षेत्र, शहर और पिन कोड (Indiranagar, Chennai – 600020) समान हैं।\n• लेकिन पता A में "5th Cross, 10th Main" है जबकि पता B में "10th Cross, 5th Main" है।\nअतः क्रॉस और मुख्य सड़क (Cross and Main Street) अलग हैं (विकल्प C)।',
  },
  {
    id: 'cgl26_06o3_q2',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "STONE" is written as "RSNMD." How will "CHAIR" be written in the same code language?',
    questionHi:
      'एक निश्चित कूट भाषा में, “STONE” को “RSNMD” लिखा जाता है। उसी कूट भाषा में “CHAIR” को कैसे लिखा जाएगा?',
    optionsEn: ['BGBHQ', 'BGZHO', 'BGZHQ', 'BGBHO'],
    optionsHi: ['BGBHQ', 'BGZHO', 'BGZHQ', 'BGBHO'],
    correctIndex: 2,
    explanationEn:
      'Pattern: Each letter is shifted backward by 1 place (−1) in the English alphabet:\n• S(19) − 1 = R(18), T(20) − 1 = S(19), O(15) − 1 = N(14), N(14) − 1 = M(13), E(5) − 1 = D(4).\nApplying −1 to CHAIR:\n• C − 1 = B, H − 1 = G, A − 1 = Z, I − 1 = H, R − 1 = Q ⇒ BGZHQ.',
    explanationHi:
      'नियम: प्रत्येक अक्षर को अंग्रेजी वर्णमाला में 1 स्थान पीछे (−1) खिसकाया गया है:\n• S→R, T→S, O→N, N→M, E→D।\nइसी प्रकार CHAIR पर (−1) लगाने पर:\n• C→B, H→G, A→Z, I→H, R→Q ⇒ BGZHQ।',
  },
  {
    id: 'cgl26_06o3_q3',
    topic: 'Mathematical Operations',
    questionEn:
      'If 12 × 3 means 4, 15 − 5 means 75, and 4 ÷ 2 means 6, then what is the value of 20 − 10 × 5 ÷ 2?',
    questionHi:
      'यदि 12 × 3 का अर्थ 4 है, 15 − 5 का अर्थ 75 है, और 4 ÷ 2 का अर्थ 6 है, तो 20 − 10 × 5 ÷ 2 का मान क्या है?',
    optionsEn: ['38', '42', '56', '62'],
    optionsHi: ['38', '42', '56', '62'],
    correctIndex: 1,
    explanationEn:
      'Decoding the hidden operators:\n• 12 × 3 = 4 ⇒ "×" stands for "÷" (12 ÷ 3 = 4)\n• 15 − 5 = 75 ⇒ "−" stands for "×" (15 × 5 = 75)\n• 4 ÷ 2 = 6 ⇒ "÷" stands for "+" (4 + 2 = 6)\nSubstituting into 20 − 10 × 5 ÷ 2:\n= 20 × 10 ÷ 5 + 2\nApplying BODMAS:\n= 20 × 2 + 2 = 40 + 2 = 42.',
    explanationHi:
      'चिह्नों का वास्तविक अर्थ पहचानने पर:\n• 12 × 3 = 4 ⇒ ‘×’ का अर्थ ‘÷’ है\n• 15 − 5 = 75 ⇒ ‘−’ का अर्थ ‘×’ है\n• 4 ÷ 2 = 6 ⇒ ‘÷’ का अर्थ ‘+’ है\nदिए गए व्यंजक में मान रखने पर:\n20 × 10 ÷ 5 + 2\nBODMAS के नियम से:\n= 20 × 2 + 2 = 40 + 2 = 42।',
  },
  {
    id: 'cgl26_06o3_q4',
    topic: 'Statement & Inferences',
    questionEn:
      'In the following question, one statement is given, followed by certain inferences. Consider the statement to be true even if it seems to contradict commonly known facts. Read the inferences carefully and decide which of them logically follow from the given statement.\nStatement:\nPedestrians crossing busy roads without using designated zebra crossings often disrupt traffic movement and increase the chances of accidents during peak hours.\nInferences:\nI. Improper road crossing can create safety hazards.\nII. Only pedestrians are responsible for road accidents.',
    questionHi:
      'निम्नलिखित प्रश्न में एक कथन दिया गया है, जिसके बाद कुछ निष्कर्ष दिए गए हैं। कथन को सत्य मानिए, भले ही वह सामान्यतः ज्ञात तथ्यों का विरोध करता हुआ प्रतीत होता हो। निष्कर्षों को ध्यानपूर्वक पढ़िए और निर्धारित कीजिए कि उनमें से कौन-सा/कौन-से दिए गए कथन से तार्किक रूप से अनुसरण करते हैं।\nकथन:\nनिर्धारित ज़ेब्रा क्रॉसिंग का उपयोग किए बिना व्यस्त सड़कों को पार करना अक्सर यातायात की आवाजाही में बाधा उत्पन्न करता है तथा व्यस्त समय (पीक आवर्स) के दौरान दुर्घटनाओं की संभावना बढ़ा देता है।\nनिष्कर्ष:\nI. सड़क को अनुचित तरीके से पार करना सुरक्षा संबंधी जोखिम उत्पन्न कर सकता है।\nII. सड़क दुर्घटनाओं के लिए केवल पैदल यात्री ही जिम्मेदार होते हैं।',
    optionsEn: [
      'Only Inference I follows.',
      'Only Inference II follows.',
      'Both Inferences I and II follow.',
      'Neither Inference I nor Inference II follows.',
    ],
    optionsHi: [
      'केवल निष्कर्ष I अनुसरण करता है।',
      'केवल निष्कर्ष II अनुसरण करता है।',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं।',
      'न तो निष्कर्ष I और न ही निष्कर्ष II अनुसरण करता है।',
    ],
    correctIndex: 0,
    explanationEn:
      '• Inference I follows directly: crossing without designated zebra crossings increases the chances of accidents, which means improper crossing creates safety hazards.\n• Inference II does NOT follow: the extreme word "Only" is unsupported — the statement never claims pedestrians are the sole cause of all road accidents.\nHence, only Inference I follows.',
    explanationHi:
      '• निष्कर्ष I अनुसरण करता है: ज़ेब्रा क्रॉसिंग के बिना सड़क पार करने से दुर्घटनाओं की संभावना बढ़ती है, अर्थात् अनुचित तरीके से सड़क पार करना सुरक्षा जोखिम पैदा करता है।\n• निष्कर्ष II अनुसरण नहीं करता: "केवल" (Only) एक चरम शब्द है; कथन यह नहीं कहता कि दुर्घटनाओं के लिए केवल पैदल यात्री ही जिम्मेदार हैं।\nअतः केवल निष्कर्ष I अनुसरण करता है।',
  },
  {
    id: 'cgl26_06o3_q5',
    topic: 'Mirror Image',
    questionEn:
      'If a mirror is placed on the line MN, which figure will be the mirror image of the question figure?',
    questionHi:
      'यदि दर्पण को रेखा MN पर रखा जाता है, तो प्रश्न आकृति का दर्पण प्रतिबिंब कौन सी आकृति होगी?',
    imageUrl: Q5_MIRROR_MAIN,
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [Q5_OPT_A, Q5_OPT_B, Q5_OPT_C, Q5_OPT_D],
    correctIndex: 2,
    explanationEn:
      'When a vertical mirror is placed to the right (on line MN), the string "5 y r 7 4 h" reverses order left-to-right to "h 4 7 r y 5" and every character is laterally inverted (left↔right) while top and bottom remain unchanged:\n• (A) has un-mirrored 4 and vertically flipped r.\n• (B) has upside-down 7 and un-mirrored r.\n• (D) has upside-down h.\n• (C) shows the exact lateral mirror image of all six characters.',
    explanationHi:
      'जब दर्पण दाईं ओर ऊर्ध्वाधर रेखा MN पर रखा जाता है, तो "5 y r 7 4 h" का क्रम उलटकर "h 4 7 r y 5" हो जाता है और प्रत्येक अक्षर/अंक पार्श्व रूप से (बायाँ↔दायाँ) पलट जाता है, जबकि ऊपर-नीचे का भाग अपरिवर्तित रहता है।\n• विकल्प (A), (B) और (D) में कुछ अक्षर उल्टे या अपरिवर्तित हैं।\n• केवल विकल्प (C) में सभी छह वर्णों का सटीक दर्पण प्रतिबिंब दर्शाया गया है।',
  },
  {
    id: 'cgl26_06o3_q6',
    topic: 'Situational Judgement',
    questionEn:
      'A client requests a specific feature for their software project that is outside the original project scope. Your manager is away, and the client is pressuring you to commit to the deadline today. What should you do?',
    questionHi:
      'एक ग्राहक अपने सॉफ़्टवेयर प्रोजेक्ट के लिए एक विशेष सुविधा (Feature) जोड़ने का अनुरोध करता है, जो मूल परियोजना-परिधि (Project Scope) से बाहर है। आपका प्रबंधक अनुपस्थित है और ग्राहक आप पर आज ही समय-सीमा (Deadline) निर्धारित करने का दबाव डाल रहा है। आपको क्या करना चाहिए?',
    optionsEn: [
      'Agree to the request immediately to keep the client happy.',
      'Refuse the request flatly to avoid extra work.',
      'Acknowledge the request, consult your manager, and provide an update by day end.',
      'Do the work in secret so that it does not show on the official project logs.',
    ],
    optionsHi: [
      'ग्राहक को संतुष्ट रखने के लिए अनुरोध को तुरंत स्वीकार कर लें।',
      'अतिरिक्त कार्य से बचने के लिए अनुरोध को पूरी तरह अस्वीकार कर दें।',
      'अनुरोध की प्राप्ति स्वीकार करें, अपने प्रबंधक से परामर्श करें और दिन के अंत तक स्थिति की जानकारी प्रदान करें।',
      'कार्य को गुप्त रूप से कर दें ताकि वह आधिकारिक परियोजना अभिलेखों में दर्ज न हो।',
    ],
    correctIndex: 2,
    explanationEn:
      'Committing to out-of-scope work without authorization causes scope creep and delivery risk (A), flat refusal harms client relations (B), and secret work violates transparency and ethics (D). Professionally acknowledging the request, consulting your manager, and giving a timely update by day end (C) is the balanced and responsible response.',
    explanationHi:
      'बिना अनुमति के परियोजना-परिधि (scope) से बाहर के कार्य की समय-सीमा तय करना जोखिम भरा है (A), सीधा मना करना ग्राहक संबंध बिगाड़ता है (B), और गुप्त रूप से कार्य करना अनैतिक है (D)। अतः अनुरोध स्वीकार कर प्रबंधक से परामर्श करने के बाद दिन के अंत तक अद्यतन देना (C) सबसे पेशेवर कदम है।',
  },
  {
    id: 'cgl26_06o3_q7',
    topic: 'Figure Analogy',
    questionEn:
      'In the following question, there is a specific relationship between the first two figures. Establish a similar relationship between the third and fourth figures by selecting a suitable figure from the given Answer Figures to replace the question mark (?).',
    questionHi:
      'निम्नलिखित प्रश्न में, पहली दो आकृतियों के बीच एक विशिष्ट संबंध दिया गया है। उसी संबंध के आधार पर तीसरी और चौथी आकृतियों के बीच संबंध स्थापित कीजिए तथा प्रश्नवाचक चिह्न (?) के स्थान पर आने वाली उपयुक्त आकृति का चयन दिए गए उत्तर विकल्पों में से कीजिए।',
    imageUrl: Q7_ANALOGY_SVG,
    optionsEn: ['1', '4', '3', '2'],
    optionsHi: ['1', '4', '3', '2'],
    correctIndex: 2,
    explanationEn:
      'Transformation from Figure 1 to Figure 2:\n1. The entire shape rotates by 180°.\n2. The single cross-bar doubles into two parallel bars.\n3. The single hollow circle doubles into two hollow circles on the rotated side.\nApplying the exact same rule to Figure 3 (upright T with 1 circle on top-right):\n• Rotating 180° produces an inverted T (⊥) with circles moving to the bottom-left.\n• Doubling the bottom bar and the circle yields Answer Figure (3), which is Option C.',
    explanationHi:
      'पहली से दूसरी आकृति का नियम:\n1. पूरी आकृति 180° घूम जाती है।\n2. एकल रेखा दो समानांतर रेखाओं में बदल जाती है।\n3. एक वृत्त बढ़कर दो वृत्त हो जाता है।\nतीसरी आकृति (सीधा T और दाईं ओर 1 वृत्त) पर यही नियम लगाने पर:\n• 180° घूमने पर उल्टा T (⊥) बनेगा तथा दोनों वृत्त बाईं ओर नीचे आ जाएँगे और आधार रेखा दोहरी हो जाएगी।\n• यह उत्तर आकृति (3) से मेल खाता है, जो विकल्प C है।',
  },
  {
    id: 'cgl26_06o3_q8',
    topic: 'Figure Analogy',
    questionEn:
      'In the following question, there is a specific relationship between the first two figures. Establish a similar relationship between the third and fourth figures by selecting a suitable figure from the given Answer Figures to replace the question mark (?).',
    questionHi:
      'निम्नलिखित प्रश्न में, पहली दो आकृतियों के बीच एक विशिष्ट संबंध दिया गया है। उसी संबंध के आधार पर तीसरी और चौथी आकृतियों के बीच संबंध स्थापित कीजिए तथा प्रश्नवाचक चिह्न (?) के स्थान पर आने वाली उपयुक्त आकृति का चयन दिए गए उत्तर विकल्पों में से कीजिए।',
    imageUrl: Q8_ANALOGY_SVG,
    optionsEn: ['1', '2', '3', '4'],
    optionsHi: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanationEn:
      'Figure 2 is the exact vertical inversion (180° flip / water image) of Figure 1 — the upright inner triangle flips upside down without adding any extra lines.\nApplying the same vertical inversion to Figure 3 (an inverted "A" open at the top) yields an upright "A" open at the bottom with a single crossbar, which is Answer Figure (2) — Option B.',
    explanationHi:
      'दूसरी आकृति, पहली आकृति का सटीक ऊर्ध्वाधर उलटाव (180° घूर्णन / जल प्रतिबिंब) है जिसमें कोई अतिरिक्त रेखा नहीं जोड़ी गई है।\nइसी नियम को तीसरी आकृति (उल्टा "A", ऊपर से खुला) पर लागू करने पर सीधा "A" (नीचे से खुला और एक क्षैतिज रेखा सहित) प्राप्त होता है, जो उत्तर आकृति (2) अर्थात् विकल्प B है।',
  },
  {
    id: 'cgl26_06o3_q9',
    topic: 'Embedded Figure',
    questionEn:
      'Carefully observe Figure (X) and identify the option figure in which Figure (X) is embedded exactly as shown.',
    questionHi:
      'आकृति (X) का ध्यानपूर्वक अवलोकन कीजिए और उस विकल्प आकृति की पहचान कीजिए जिसमें आकृति (X) ठीक उसी रूप में अंतर्निहित है जैसा कि दर्शाया गया है।',
    imageUrl: Q9_EMBED_MAIN,
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [Q9_OPT_A, Q9_OPT_B, Q9_OPT_C, Q9_OPT_D],
    correctIndex: 3,
    explanationEn:
      'Figure (X) consists of a circular arc combined with a vertical radius pointing to 12 o’clock and a slanting upper-right radius pointing towards ~2 o’clock.\n• Options (A) and (C) lack any slanting diagonal radius.\n• Option (B) lacks a vertical radius to 12 o’clock.\n• Only Option (D) contains the outer circle, the vertical radius to 12 o’clock, and the upper-right slanting radius together, embedding Figure (X) exactly.',
    explanationHi:
      'आकृति (X) में एक वृत्त के साथ केंद्र से ठीक ऊपर (12 बजे की दिशा में) एक ऊर्ध्वाधर त्रिज्या तथा ऊपर-दाईं ओर (~2 बजे की दिशा में) एक तिरछी त्रिज्या जुड़ी है।\n• विकल्प (A) व (C) में तिरछी रेखा नहीं है और (B) में ऊर्ध्वाधर रेखा नहीं है।\n• केवल विकल्प (D) में ये तीनों भाग ठीक उसी रूप में अंतर्निहित हैं।',
  },
  {
    id: 'cgl26_06o3_q10',
    topic: 'Venn Diagram',
    questionEn:
      'Which of the following Venn diagram represents the relationship between “Educated”, “Employed” and “Urban”?',
    questionHi:
      'शिक्षित (Educated), नियोजित/रोज़गारयुक्त (Employed) तथा शहरी (Urban) के बीच संबंध को प्रदर्शित करने वाले वेन आरेख की पहचान कीजिए।',
    optionsEn: ['Diagram A', 'Diagram B', 'Diagram C', 'Diagram D'],
    optionsHi: ['आरेख A', 'आरेख B', 'आरेख C', 'आरेख D'],
    optionImages: [Q10_OPT_A, Q10_OPT_B, Q10_OPT_C, Q10_OPT_D],
    correctIndex: 2,
    explanationEn:
      '• Some Educated people are Employed, some are Urban, and some are both Employed and Urban.\n• Similarly, some Employed people are neither Educated nor Urban, and some Urban residents are neither Educated nor Employed.\nBecause all three sets partially intersect with one another, the correct representation is three mutually overlapping circles (Option C).',
    explanationHi:
      '• कुछ शिक्षित लोग नियोजित (Employed) हैं, कुछ शहरी (Urban) हैं और कुछ तीनों वर्गों में आते हैं।\n• इसी तरह प्रत्येक वर्ग में ऐसे लोग भी हैं जो अन्य दो वर्गों में नहीं आते।\nअतः तीनों श्रेणियों के बीच आंशिक संबंध को दर्शाने वाले तीन परस्पर प्रतिच्छेदी वृत्त (विकल्प C) सही वेन आरेख है।',
  },
  {
    id: 'cgl26_06o3_q11',
    topic: 'Figure Classification (Odd One Out)',
    questionEn:
      'In the following question, out of the five figures marked (a), (b), (c), (d), and (e), four are similar in a certain manner. However, one figure is not like the other four. Choose the figure which is different from the rest.',
    questionHi:
      'निम्नलिखित प्रश्न में, (a), (b), (c), (d) तथा (e) से चिह्नित पाँच आकृतियों में से चार एक निश्चित प्रकार से समान हैं। जबकि एक आकृति अन्य चार से भिन्न है। शेष से भिन्न आकृति का चयन कीजिए।',
    imageUrl: Q11_ODD_DOTS_SVG,
    optionsEn: ['a', 'c', 'd', 'e'],
    optionsHi: ['a', 'c', 'd', 'e'],
    correctIndex: 2,
    explanationEn:
      'Observe the position of the solid black dot on each square:\n• (a) Top-left corner\n• (b) Top-right corner\n• (c) Bottom-right corner\n• (e) Bottom-left corner\n• (d) Midpoint of the left side (NOT a corner).\nHence, figure (d) is the odd one out (Option C).',
    explanationHi:
      'प्रत्येक वर्ग पर काले बिंदु की स्थिति देखने पर:\n• आकृति (a), (b), (c) और (e) में काला बिंदु वर्ग के किसी कोने (शीर्ष) पर स्थित है।\n• जबकि आकृति (d) में बिंदु बाईं भुजा के मध्य में स्थित है।\nअतः आकृति (d) अन्य चारों से भिन्न है (विकल्प C)।',
  },
  {
    id: 'cgl26_06o3_q12',
    topic: 'Statement & Assumptions',
    questionEn:
      'Read the given statement carefully and the following assumptions based on it. Decide which of the assumptions are implicit in the statement.\nStatement:\nThe government is considering a complete ban on single-use plastic bags in all retail outlets to protect the local environment.\nAssumptions:\nI. Retail outlets are the largest source of plastic waste in the region.\nII. Eliminating plastic bags will lead to a cleaner and healthier local environment.',
    questionHi:
      'दिए गए कथन को ध्यानपूर्वक पढ़िए तथा उसके आधार पर दी गई निम्नलिखित मान्यताओं पर विचार कीजिए। निर्धारित कीजिए कि कथन में कौन-सी मान्यता/मान्यताएँ निहित हैं।\nकथन:\nस्थानीय पर्यावरण की रक्षा के लिए सरकार सभी खुदरा दुकानों में एकल-उपयोग (सिंगल-यूज़) प्लास्टिक बैगों पर पूर्ण प्रतिबंध लगाने पर विचार कर रही है।\nमान्यताएँ:\nI. क्षेत्र में प्लास्टिक कचरे का सबसे बड़ा स्रोत खुदरा दुकानें हैं।\nII. प्लास्टिक बैगों को समाप्त करने से स्थानीय पर्यावरण अधिक स्वच्छ और स्वस्थ बनेगा।',
    optionsEn: [
      'Only Assumption I is implicit',
      'Both Assumptions I and II are implicit',
      'Only Assumption II is implicit',
      'Neither Assumption I nor II is implicit',
    ],
    optionsHi: [
      'केवल मान्यता I निहित है।',
      'मान्यता I और II दोनों निहित हैं।',
      'केवल मान्यता II निहित है।',
      'न तो मान्यता I न ही II निहित है।',
    ],
    correctIndex: 2,
    explanationEn:
      '• Assumption I is NOT implicit: the statement does not claim that retail outlets are the "largest" source of plastic waste (superlative comparison is not assumed).\n• Assumption II IS implicit: the government is considering banning plastic bags specifically "to protect the local environment," which directly assumes that eliminating them will make the local environment cleaner and healthier.\nHence, only Assumption II is implicit.',
    explanationHi:
      '• मान्यता I निहित नहीं है: कथन में यह नहीं माना गया कि खुदरा दुकानें प्लास्टिक कचरे का "सबसे बड़ा" स्रोत हैं।\n• मान्यता II निहित है: सरकार स्थानीय पर्यावरण की रक्षा के उद्देश्य से प्रतिबंध पर विचार कर रही है, जिसका सीधा अर्थ है कि प्लास्टिक बैग समाप्त करने से पर्यावरण स्वच्छ और स्वस्थ बनेगा।\nअतः केवल मान्यता II निहित है।',
  },
  {
    id: 'cgl26_06o3_q13',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "COMMUNICATION" is written as "DONMVNJCBTJOO". How will "EDUCATIONALLY" be written?',
    questionHi:
      'एक खास कोड भाषा में, "COMMUNICATION" को "DONMVNJCBTJOO" लिखा जाता है। तो "EDUCATIONALLY" को कैसे लिखा जाएगा?',
    optionsEn: [
      'FDVCBTJOOAMLZ',
      'FDCBVTJOOAMLZ',
      'FDVCBTJOAOMLZ',
      'FDVCBTOIOAMLZ',
    ],
    optionsHi: [
      'FDVCBTJOOAMLZ',
      'FDCBVTJOOAMLZ',
      'FDVCBTJOAOMLZ',
      'FDVCBTOIOAMLZ',
    ],
    correctIndex: 0,
    explanationEn:
      'Pattern: Letters at odd positions (1st, 3rd, 5th, ..., 13th) shift by +1, while letters at even positions (2nd, 4th, ..., 12th) remain unchanged (+0):\n• C(+1)D, O(0)O, M(+1)N, M(0)M, U(+1)V, N(0)N, I(+1)J, C(0)C, A(+1)B, T(0)T, I(+1)J, O(0)O, N(+1)O → DONMVNJCBTJOO.\nApplying the same (+1, 0) alternating rule to EDUCATIONALLY:\n• E→F, D→D, U→V, C→C, A→B, T→T, I→J, O→O, N→O, A→A, L→M, L→L, Y→Z ⇒ FDVCBTJOOAMLZ.',
    explanationHi:
      'नियम: विषम स्थानों (1, 3, 5, ..., 13) के अक्षरों में +1 जोड़ा गया है तथा सम स्थानों (2, 4, ..., 12) के अक्षर अपरिवर्तित (+0) रहते हैं:\n• COMMUNICATION → DONMVNJCBTJOO।\nइसी एकांतर (+1, 0) नियम को EDUCATIONALLY पर लगाने पर:\n• E(+1)=F, D=D, U(+1)=V, C=C, A(+1)=B, T=T, I(+1)=J, O=O, N(+1)=O, A=A, L(+1)=M, L=L, Y(+1)=Z ⇒ FDVCBTJOOAMLZ।',
  },
  {
    id: 'cgl26_06o3_q14',
    topic: 'Dice & Cubes',
    questionEn:
      'Four different positions of the same dice are shown. Select the number that will be on the face opposite to the one showing ‘3’.',
    questionHi:
      'एक ही पासे की चार अलग-अलग स्थितियाँ दिखाई गई हैं। ‘3’ अंक वाले भाग के विपरीत आने वाली संख्या का चयन कीजिए।',
    imageUrl: Q14_DICE_SVG,
    optionsEn: ['6', '4', '2', '1'],
    optionsHi: ['6', '4', '2', '1'],
    correctIndex: 0,
    explanationEn:
      'Adjacent-face elimination trick:\n• From Dice 1: faces 1 and 5 are adjacent to 3.\n• From Dice 2: faces 2 and 5 are adjacent to 3.\n• From Dice 3: faces 4 and 1 are adjacent to 3.\n• From Dice 4: faces 4 and 2 are adjacent to 3.\nThus 1, 2, 4, and 5 are all adjacent to 3 and cannot be opposite it. The only remaining number on a 1–6 dice is 6. Hence, 6 is opposite 3.',
    explanationHi:
      'संलग्न फलक उन्मूलन विधि (Adjacent-Face Trick):\n• चारों स्थितियों में अंक ‘3’ के संलग्न (बगल में) आने वाले अंक हैं: 1, 5, 2 और 4।\n• चूँकि संलग्न फलक कभी विपरीत नहीं हो सकते, अतः शेष बचा एकमात्र अंक ‘6’ ही ‘3’ के विपरीत होगा।',
  },
  {
    id: 'cgl26_06o3_q15',
    topic: 'Figure Classification (Odd One Out)',
    questionEn:
      'In the following question, out of the five figures marked (a), (b), (c), (d), and (e), four are similar in a certain manner. However, one figure is not like the other four. Choose the figure which is different from the rest.',
    questionHi:
      'निम्नलिखित प्रश्न में, (a), (b), (c), (d) तथा (e) से चिह्नित पाँच आकृतियों में से चार एक निश्चित प्रकार से समान हैं। जबकि एक आकृति अन्य चार से भिन्न है। शेष से भिन्न आकृति का चयन कीजिए।',
    imageUrl: Q15_ODD_TRIANGLES_SVG,
    optionsEn: ['c', 'd', 'a', 'e'],
    optionsHi: ['c', 'd', 'a', 'e'],
    correctIndex: 1,
    explanationEn:
      'Each square is split into 8 equal triangular sectors with 2 shaded black:\n• In (a), (b), (c), and (e), the two shaded triangles are separated by exactly ONE unshaded triangle (90° apart) — rotating (a) repeatedly by 90° counter-clockwise produces (b), (c), and (e).\n• In (d), the two shaded triangles are separated by TWO unshaded triangles on the left side (reflection across the horizontal midline), so it cannot be obtained by rotation.\nHence, figure (d) is different (Option B).',
    explanationHi:
      'प्रत्येक वर्ग 8 समान त्रिभुजाकार भागों में बँटा है जिनमें 2 भाग काले हैं:\n• आकृति (a), (b), (c) और (e) में दोनों काले त्रिभुजों के बीच ठीक एक सफेद त्रिभुज का अंतर है (एक-दूसरे के 90° वामावर्त घूर्णन से प्राप्त होती हैं)।\n• आकृति (d) में दोनों काले त्रिभुजों के बीच बाईं ओर दो सफेद त्रिभुज हैं।\nअतः आकृति (d) अन्य चारों से भिन्न है (विकल्प B)।',
  },
  {
    id: 'cgl26_06o3_q16',
    topic: 'Number Matrix / Column Relation',
    questionEn:
      'Which of the following rows/columns are connected/related with each other in some way?',
    questionHi:
      'निम्नलिखित में से कौन-सी पंक्तियाँ/स्तंभ किसी न किसी प्रकार से आपस में संबंधित हैं?',
    matrix: [
      ['Rows \\ Cols', 'I', 'II', 'III', 'IV', 'V'],
      ['I', '4', '7', '11', '9', '9'],
      ['II', '8', '11', '15', '13', '13'],
      ['III', '6', '9', '13', '11', '16'],
      ['IV', '12', '15', '20', '17', '14'],
      ['V', '10', '13', '17', '15', '11'],
    ],
    optionsEn: [
      'Columns I, II and IV',
      'Columns I, III and IV',
      'Columns I, II and III',
      'Columns I, III and V',
    ],
    optionsHi: [
      'स्तंभ I, II और IV',
      'स्तंभ I, III और IV',
      'स्तंभ I, II और III',
      'स्तंभ I, III और V',
    ],
    correctIndex: 0,
    explanationEn:
      'Checking constant arithmetic relationships across all 5 rows:\n• Column II = Column I + 3 in every row: 4+3=7, 8+3=11, 6+3=9, 12+3=15, 10+3=13.\n• Column IV = Column I + 5 (and Column II + 2) in every row: 4+5=9, 8+5=13, 6+5=11, 12+5=17, 10+5=15.\n• Column III breaks the +7 pattern in Row IV (12 + 7 = 19 ≠ 20), and Column V has no constant difference.\nHence, Columns I, II and IV are consistently connected (Option A).',
    explanationHi:
      'सभी 5 पंक्तियों में स्तंभों के बीच संबंध की जाँच करने पर:\n• स्तंभ II = स्तंभ I + 3 (प्रत्येक पंक्ति में: 4+3=7, 8+3=11, 6+3=9, 12+3=15, 10+3=13)।\n• स्तंभ IV = स्तंभ I + 5 या स्तंभ II + 2 (प्रत्येक पंक्ति में: 4+5=9, 8+5=13, 6+5=11, 12+5=17, 10+5=15)।\n• स्तंभ III पंक्ति IV में (12+7=19 ≠ 20) नियम तोड़ता है।\nअतः स्तंभ I, II और IV आपस में संबंधित हैं (विकल्प A)।',
  },
  {
    id: 'cgl26_06o3_q17',
    topic: 'Repeated Letter Series',
    questionEn:
      'Fill in the blanks (_) using one of the following four options such that the series follows a specific order.\nc _ b d c a _ d c a b _ _ a b d',
    questionHi:
      'रिक्त स्थानों (_) को निम्नलिखित चार विकल्पों में से किसी एक का प्रयोग करके भरिए, ताकि श्रेणी दिए गए क्रम में एक विशिष्ट प्रतिरूप का अनुसरण करे।\nc _ b d c a _ d c a b _ _ a b d',
    optionsEn: ['adbc', 'cbad', 'abdc', 'abcd'],
    optionsHi: ['adbc', 'cbad', 'abdc', 'abcd'],
    correctIndex: 2,
    explanationEn:
      'Total length = 16 letters, which splits neatly into 4 repeating groups of 4 letters ("c a b d"):\nc [a] b d | c a [b] d | c a b [d] | [c] a b d\nThe letters filling the blanks in order are: a, b, d, c ⇒ "abdc" (Option C).',
    explanationHi:
      'कुल 16 अक्षरों को 4-4 के चार समूहों में बाँटने पर "c a b d" की पुनरावृत्ति होती है:\nc [a] b d | c a [b] d | c a b [d] | [c] a b d\nअतः रिक्त स्थानों में क्रमशः a, b, d, c अर्थात् "abdc" (विकल्प C) आएगा।',
  },
  {
    id: 'cgl26_06o3_q18',
    topic: 'Figure Series',
    questionEn:
      'Select a figure from among the alternatives that will continue the same series established by the Problem Figures.',
    questionHi:
      'दिए गए विकल्पों में से उस आकृति का चयन कीजिए जो प्रश्न आकृतियों द्वारा स्थापित श्रृंखला को आगे बढ़ाती हो।',
    imageUrl: Q18_SERIES_MAIN,
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [Q18_OPT_A, Q18_OPT_B, Q18_OPT_C, Q18_OPT_D],
    correctIndex: 3,
    explanationEn:
      'Track each of the two bracket elements independently across steps:\n1. Circle-bracket rotates 90° counter-clockwise at every step:\n   Top opening UP (circle top-right) → Right opening LEFT (circle top-left) → Bottom opening DOWN (circle bottom-left) → Left opening RIGHT (circle bottom-right).\n2. Arrow-bracket rotates 90° clockwise at every step:\n   Bottom opening DOWN (arrow down) → Left opening LEFT (arrow left) → Top opening UP (arrow up) → Right opening RIGHT (arrow right).\nOption (D) matches both final orientations exactly.',
    explanationHi:
      'दोनों आकृति-भागों के घूर्णन को अलग-अलग देखने पर:\n1. वृत्त वाला भाग प्रत्येक चरण में 90° वामावर्त (counter-clockwise) घूमता है → चौथे चरण में यह बाईं ओर दाएँ खुलता हुआ (वृत्त नीचे-दाएँ) होगा।\n2. तीर वाला भाग प्रत्येक चरण में 90° दक्षिणावर्त (clockwise) घूमता है → चौथे चरण में यह दाईं ओर दाएँ खुलता हुआ (तीर ऊपर-दाएँ दिशा में) होगा।\nयह सटीक स्थिति केवल विकल्प (D) में दर्शाई गई है।',
  },
  {
    id: 'cgl26_06o3_q19',
    topic: 'Ranking & Order',
    questionEn:
      'In a row of players, Mohan is 6th from the left, and Sohan is 20th from the right. After swapping their places, Mohan becomes 18th from the left. Find the total number of players.',
    questionHi:
      'खिलाड़ियों की एक पंक्ति में, मोहन बाएँ से 6वें स्थान पर है और सोहन दाएँ से 20वें स्थान पर है। उनके स्थान आपस में बदलने के बाद, मोहन बाएँ से 18वें स्थान पर हो जाता है। खिलाड़ियों की कुल संख्या ज्ञात कीजिए।',
    optionsEn: ['33', '35', '37', '39'],
    optionsHi: ['33', '35', '37', '39'],
    correctIndex: 2,
    explanationEn:
      'After interchanging positions, Mohan occupies Sohan’s original seat.\nSo that same seat is:\n• 18th from the left (Mohan’s new rank)\n• 20th from the right (Sohan’s original rank)\nShort Trick Formula:\nTotal players = (Left rank + Right rank) − 1 = (18 + 20) − 1 = 37.',
    explanationHi:
      'स्थान बदलने के बाद मोहन, सोहन के मूल स्थान पर बैठ जाता है। अतः उसी एक स्थान की स्थिति:\n• बाएँ से = 18वाँ\n• दाएँ से = 20वाँ\nसूत्र: कुल खिलाड़ी = (बाएँ से स्थान + दाएँ से स्थान) − 1 = (18 + 20) − 1 = 37।',
  },
  {
    id: 'cgl26_06o3_q20',
    topic: 'Emotional Intelligence & Leadership',
    questionEn:
      'A newly appointed department head reports to a senior director who is highly anxious about an upcoming internal audit and tends to micro-manage minor tasks, affecting team efficiency. How should the department head apply empathy and adaptive leadership to handle this situation effectively?',
    questionHi:
      'एक नए नियुक्त डिपार्टमेंट हेड को एक सीनियर डायरेक्टर को रिपोर्ट करना होता है, जो आने वाले इंटरनल ऑडिट को लेकर बहुत परेशान रहते हैं और छोटे-छोटे कामों में भी बहुत ज़्यादा दखल देते हैं, जिससे टीम की कार्यक्षमता पर असर पड़ता है। इस स्थिति को प्रभावी ढंग से संभालने के लिए डिपार्टमेंट हेड को सहानुभूति और अनुकूलनशील नेतृत्व (adaptive leadership) का इस्तेमाल कैसे करना चाहिए?',
    optionsEn: [
      "Ignore the director's micro-management tactics and instruct the team to follow only the head’s direct commands.",
      "File a formal complaint with higher management requesting the senior director's transfer due to interference.",
      "Match the director's anxiety by introducing stricter daily monitoring systems for all staff members.",
      'Schedule a private meeting to provide structured audit updates and ease the director’s underlying anxiety.',
    ],
    optionsHi: [
      'डायरेक्टर के हर छोटी बात पर दखल देने के तरीकों को नज़रअंदाज़ करें और टीम को सिर्फ़ हेड के सीधे आदेशों का पालन करने के लिए कहें।',
      'काम में दखलअंदाज़ी के कारण सीनियर डायरेक्टर का ट्रांसफ़र करने की मांग करते हुए उच्च प्रबंधन के पास औपचारिक शिकायत दर्ज करें।',
      'सभी स्टाफ़ सदस्यों के लिए रोज़ाना की सख़्त निगरानी प्रणाली लागू करके डायरेक्टर की चिंता का समाधान करें।',
      'ऑडिट से जुड़ी व्यवस्थित जानकारी देने और डायरेक्टर की छिपी हुई चिंता को कम करने के लिए एक प्राइवेट मीटिंग तय करें।',
    ],
    correctIndex: 3,
    explanationEn:
      'Empathy identifies the root cause of micromanagement (the director’s anxiety over the upcoming audit), while adaptive leadership addresses it constructively without escalating conflict or passing stress down to the team. Scheduling a private meeting with structured audit updates (D) builds trust and restores team autonomy.',
    explanationHi:
      'सहानुभूति (Empathy) से यह समझ आता है कि डायरेक्टर का अत्यधिक दखल ऑडिट को लेकर उनकी चिंता के कारण है। एक प्राइवेट मीटिंग तय करके उन्हें ऑडिट की व्यवस्थित जानकारी देना (विकल्प D) बिना टकराव के उनकी चिंता कम करता है और टीम की कार्यक्षमता बहाल करता है।',
  },
  {
    id: 'cgl26_06o3_q21',
    topic: 'Counting Figures',
    questionEn: 'How many triangles are there in the given figure?',
    questionHi: 'दी गई आकृति में कितने त्रिभुज हैं?',
    imageUrl: Q21_TRIANGLES_SVG,
    optionsEn: ['9', '11', '12', '13'],
    optionsHi: ['9', '11', '12', '13'],
    correctIndex: 3,
    explanationEn:
      'Let the left tip be L, rectangle vertices be A (top-left), B (bottom-left), C (bottom-right), D (top-right), midline M–N (midpoints of AB and CD), P = intersection of BD & MN, and Q = intersection of BD & AN.\n• Left triangle section (left of AB): △LAM, △LBM, △LAB → 3 triangles.\n• Upper rectangle half (AMND): △AQD, △PQN, △QDN, △ADN, △PDN, △AMN → 6 triangles.\n• Lower rectangle half (MBCN): △MBP → 1 triangle.\n• Spanning across midline MN: △ABD, △BCD, △ABQ → 3 triangles.\nTotal = 3 + 6 + 1 + 3 = 13 triangles.',
    explanationHi:
      'आकृति को भागों में गिनने पर:\n• बाएँ त्रिभुजाकार भाग में: 2 छोटे त्रिभुज + 1 बड़ा त्रिभुज = 3 त्रिभुज।\n• आयत के ऊपरी आधे भाग में: 3 छोटे + 3 संयुक्त (△ADN, △PDN, △AMN) = 6 त्रिभुज।\n• आयत के निचले आधे भाग में: 1 त्रिभुज (△MBP)।\n• पूरे आयत में मध्य रेखा के आर-पार: 2 बड़े विकर्ण त्रिभुज (△ABD, △BCD) + 1 मध्य त्रिभुज (△ABQ) = 3 त्रिभुज।\nकुल त्रिभुज = 3 + 6 + 1 + 3 = 13।',
  },
  {
    id: 'cgl26_06o3_q22',
    topic: 'Emotional Intelligence',
    questionEn:
      'During a meeting, a junior colleague proposes an idea that lacks clear articulation but holds significant potential, only to be quickly dismissed by the manager. Observing the employee’s visible discouragement, what is the most professional and constructive action you should take?',
    questionHi:
      'बैठक के दौरान, एक कनिष्ठ सहकर्मी ऐसा विचार प्रस्तुत करता/करती है जिसे स्पष्ट रूप से व्यक्त नहीं किया गया है, लेकिन उसमें महत्वपूर्ण संभावनाएँ मौजूद हैं। प्रबंधक द्वारा उस विचार को शीघ्रता से खारिज कर दिया जाता है। कर्मचारी के स्पष्ट रूप से निरुत्साहित होने को देखते हुए, आपके द्वारा उठाया जाने वाला सबसे पेशेवर और रचनात्मक कदम क्या होना चाहिए?',
    optionsEn: [
      "Remain entirely silent because challenging the manager's decision in the moment might be unwise.",
      'Arrange to meet the employee later to tell them that they really need to speak more clearly.',
      'Make a lighthearted joke about the situation in order to help lighten the overall team mood.',
      'Reframe their idea using better terminology during the meeting and suggest revisiting the proposal.',
    ],
    optionsHi: [
      'पूरी तरह मौन रहना, क्योंकि उस समय प्रबंधक के निर्णय को चुनौती देना अनुचित हो सकता है।',
      'बाद में कर्मचारी से मिलने की व्यवस्था करना और उन्हें बताना कि उन्हें वास्तव में अपनी बात अधिक स्पष्टता से रखनी चाहिए।',
      'स्थिति के बारे में हल्के-फुल्के अंदाज़ में मज़ाक करना, ताकि टीम का समग्र माहौल कुछ हल्का हो सके।',
      'बैठक के दौरान उनके विचार को बेहतर शब्दावली का उपयोग करते हुए पुनः प्रस्तुत करना तथा प्रस्ताव पर पुनर्विचार करने का सुझाव देना।',
    ],
    correctIndex: 3,
    explanationEn:
      'Constructively reframing the junior colleague’s idea using clearer terminology during the meeting (D) both supports the discouraged colleague respectfully and helps the manager see the real value of the proposal without directly undermining authority.',
    explanationHi:
      'बैठक के दौरान ही कनिष्ठ सहकर्मी के विचार को स्पष्ट और बेहतर शब्दावली में पुनः प्रस्तुत करके पुनर्विचार का सुझाव देना (विकल्प D) सहकर्मी का मनोबल बढ़ाता है और प्रबंधक को भी उस विचार की उपयोगिता समझने में सहायता करता है।',
  },
  {
    id: 'cgl26_06o3_q23',
    topic: 'Emotional Intelligence',
    questionEn:
      'During dinner, your longtime childhood friend and colleague admits that they accidentally erased an important client backup file due to carelessness and intends to attribute the mistake to a recent software glitch the next day. As a peer exercising emotional intelligence, how should you respond to this situation?',
    questionHi:
      'डिनर के दौरान, आपके बचपन के दोस्त और साथी ने माना कि लापरवाही की वजह से उनसे गलती से एक ज़रूरी क्लाइंट बैकअप फ़ाइल डिलीट हो गई है और वे अगले दिन इस गलती का कारण हाल ही में आई सॉफ़्टवेयर की गड़बड़ी को बताने वाले हैं। एक साथी के तौर पर, इमोशनल इंटेलिजेंस का इस्तेमाल करते हुए, आपको इस स्थिति में क्या करना चाहिए?',
    optionsEn: [
      'Out of fierce loyalty to your childhood friendship, promise to back up their story and validate the software glitch theory to management.',
      'Validate their concerns while emphasising honesty and jointly review the data to prepare a transparent remediation report.',
      'Immediately report them to HR via an anonymous email tonight to protect your own career track from any contamination.',
      'Tell them they are incredibly foolish, mock their carelessness, and refuse to sit next to them in the office until the matter clears up.',
    ],
    optionsHi: [
      'अपनी बचपन की दोस्ती के प्रति गहरी निष्ठा दिखाते हुए, उनकी कहानी का समर्थन करने और प्रबंधन के लिए सॉफ़्टवेयर गड़बड़ी सिद्धांत को मान्य करने का वादा करें।',
      'ईमानदारी पर ज़ोर देते हुए उनकी चिंताओं को समझें और एक पारदर्शी सुधार रिपोर्ट तैयार करने के लिए मिलकर डेटा की समीक्षा करें।',
      'अपने करियर को किसी भी तरह के नुकसान से बचाने के लिए, आज रात ही एक गुमनाम ईमेल के ज़रिए HR को इनकी रिपोर्ट करें।',
      'उन्हें बताएं कि वे बहुत बेवकूफ़ हैं, उनकी लापरवाही का मज़ाक उड़ाएं और जब तक मामला सुलझ न जाए, तब तक ऑफ़िस में उनके बगल में बैठने से मना कर दें।',
    ],
    correctIndex: 1,
    explanationEn:
      'Emotional intelligence combines empathy with ethical integrity. Supporting dishonesty (A) is unethical, secret betrayal (C) breaks trust prematurely, and mocking (D) is destructive. Validating their stress while advocating honesty and collaborating on a transparent remediation plan (B) protects both professional ethics and the relationship.',
    explanationHi:
      'इमोशनल इंटेलिजेंस में सहानुभूति और नैतिक ईमानदारी का संतुलन होता है। दोस्त की चिंता को समझते हुए ईमानदारी पर ज़ोर देना तथा पारदर्शी सुधार रिपोर्ट तैयार करने में उनकी मदद करना (विकल्प B) सबसे परिपक्व और नैतिक प्रतिक्रिया है।',
  },
  {
    id: 'cgl26_06o3_q24',
    topic: 'Pattern Completion',
    questionEn:
      'Complete the pattern in fig. (X) by selecting one of the figures from the four alternatives:',
    questionHi:
      'आकृति (X) में दिए गए पैटर्न को पूर्ण कीजिए। इसके लिए चार विकल्पों में से एक आकृति का चयन कीजिए:',
    imageUrl: Q24_PATTERN_MAIN,
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [Q24_OPT_A, Q24_OPT_B, Q24_OPT_C, Q24_OPT_D],
    correctIndex: 2,
    explanationEn:
      'The diamond is symmetrically filled with alternating concentric squares around the center: White (innermost) → Black → White → Black → White → Black (outermost tips) — exactly 3 black bands along every half-axis.\n• (A) starts with a black inner corner (color-inverted).\n• (B) contains an extraneous diagonal cut.\n• (D) has 4 compressed black bands instead of 3.\n• (C) seamlessly completes the symmetric pattern.',
    explanationHi:
      'समचतुर्भुज के केंद्र से बाहर की ओर एकांतर सफेद और काले संकेंद्रित वर्ग हैं (प्रत्येक अक्ष पर ठीक 3 काली पट्टियाँ तथा केंद्र में सफेद वर्ग)।\n• विकल्प (A) में केंद्र काला है, (B) में अतिरिक्त विकर्ण रेखा है, तथा (D) में 4 काली पट्टियाँ हैं।\n• केवल विकल्प (C) आकृति (X) के पैटर्न को पूर्णतः सममित रूप से पूरा करता है।',
  },
  {
    id: 'cgl26_06o3_q25',
    topic: 'Symbolic Operations',
    questionEn:
      'If X % Y means X is added to Y, and X π Y means X is multiplied by Y, find the expression for “the sum of A and B multiplied by the value of C.”',
    questionHi:
      'यदि X % Y का अर्थ है X को Y में जोड़ा जाता है, और X π Y का अर्थ है X को Y से गुणा किया जाता है, तो “A और B के योग को C के मान से गुणा किया जाता है” के लिए व्यंजक ज्ञात कीजिए।',
    optionsEn: ['(A % B) π C', 'A % (B π C)', '(A π B) % C', 'A π B π C'],
    optionsHi: ['(A % B) π C', 'A % (B π C)', '(A π B) % C', 'A π B π C'],
    correctIndex: 0,
    explanationEn:
      'Given:\n• "%" denotes addition (+)\n• "π" denotes multiplication (×)\nPhrase: “the sum of A and B multiplied by the value of C” = (A + B) × C.\nReplacing + with % and × with π gives: (A % B) π C (Option A).',
    explanationHi:
      'दिया गया है:\n• "%" का अर्थ जोड़ (+) है\n• "π" का अर्थ गुणा (×) है\n“A और B के योग को C के मान से गुणा किया जाता है” = (A + B) × C।\nप्रतीक रखने पर व्यंजक = (A % B) π C (विकल्प A)।',
  },
];

/* ============================================================================
 * SECTION 2: General Awareness (Q1–Q25)
 * ========================================================================== */

const SECTION_2_GA_06S3: Question[] = [
  {
    id: 'cgl26_06o3_q26',
    topic: 'Indian Polity',
    questionEn:
      'The Finance Commission of India is constituted by the President under which Article?',
    questionHi:
      'भारत के वित्त आयोग का गठन राष्ट्रपति द्वारा किस अनुच्छेद के अंतर्गत किया जाता है?',
    optionsEn: ['Article 280', 'Article 148', 'Article 324', 'Article 315'],
    optionsHi: ['अनुच्छेद 280', 'अनुच्छेद 148', 'अनुच्छेद 324', 'अनुच्छेद 315'],
    correctIndex: 0,
    explanationEn:
      'Under Article 280 of the Indian Constitution, the President constitutes a Finance Commission every five years (or earlier) to recommend the distribution of tax revenues between the Union and the States.\n• Article 148: Comptroller and Auditor General (CAG)\n• Article 315: Public Service Commissions\n• Article 324: Election Commission of India.',
    explanationHi:
      'भारतीय संविधान के अनुच्छेद 280 के अंतर्गत राष्ट्रपति प्रत्येक 5 वर्ष में (या आवश्यकतानुसार पहले) वित्त आयोग का गठन करते हैं, जो केंद्र और राज्यों के बीच करों के वितरण की सिफारिश करता है।\n• अनुच्छेद 148: नियंत्रक एवं महालेखा परीक्षक (CAG)\n• अनुच्छेद 315: लोक सेवा आयोग\n• अनुच्छेद 324: भारत निर्वाचन आयोग।',
  },
  {
    id: 'cgl26_06o3_q27',
    topic: 'Indian Polity',
    questionEn:
      'Which Article provides for the establishment of the Union Public Service Commission?',
    questionHi:
      'कौन-सा अनुच्छेद संघ लोक सेवा आयोग की स्थापना का प्रावधान करता है?',
    optionsEn: [
      'Article 315 of the Indian Constitution',
      'Article 320 of the Indian Constitution',
      'Article 323 of the Indian Constitution',
      'Article 324 of the Indian Constitution',
    ],
    optionsHi: [
      'भारतीय संविधान का अनुच्छेद 315',
      'भारतीय संविधान का अनुच्छेद 320',
      'भारतीय संविधान का अनुच्छेद 323',
      'भारतीय संविधान का अनुच्छेद 324',
    ],
    correctIndex: 0,
    explanationEn:
      'Article 315 (Part XIV) provides for a Public Service Commission for the Union (UPSC) and a Public Service Commission for each State (SPSC).\n• Article 320: Functions of Public Service Commissions\n• Article 323: Reports of Public Service Commissions\n• Article 324: Election Commission of India.',
    explanationHi:
      'भारतीय संविधान के भाग XIV के अनुच्छेद 315 में संघ के लिए संघ लोक सेवा आयोग (UPSC) और राज्यों के लिए राज्य लोक सेवा आयोगों की स्थापना का प्रावधान है।\n• अनुच्छेद 320: लोक सेवा आयोग के कार्य\n• अनुच्छेद 323: आयोग की रिपोर्ट\n• अनुच्छेद 324: निर्वाचन आयोग।',
  },
  {
    id: 'cgl26_06o3_q28',
    topic: 'Indian Geography',
    questionEn:
      'How much time difference exists between the westernmost village of Gujarat and Walong in Arunachal Pradesh?',
    questionHi:
      'गुजरात के सबसे पश्चिमी गाँव और अरुणाचल प्रदेश के वालोंग के बीच समय का कितना अंतर है?',
    optionsEn: ['1 hour', '2 hours', '3 hours', '½ hour'],
    optionsHi: ['1 घंटे', '2 घंटे', '3 घंटे', '½ घंटे'],
    correctIndex: 1,
    explanationEn:
      'India’s longitudinal extent spans nearly 30° — from 68°7′E (Guhar Moti in Gujarat) to 97°25′E (Kibithu/Walong in Arunachal Pradesh).\nSince the Earth rotates 15° of longitude per hour (4 minutes per degree), a ~30° difference produces a local time difference of approximately 2 hours.',
    explanationHi:
      'भारत का देशांतरीय विस्तार लगभग 30° है (68°7′ पूर्व गुजरात से 97°25′ पूर्व अरुणाचल प्रदेश तक)।\nचूँकि पृथ्वी 1° घूमने में 4 मिनट (15° = 1 घंटा) लेती है, अतः 30° देशांतर का अंतर लगभग 2 घंटे के स्थानीय समय के अंतर के बराबर होता है।',
  },
  {
    id: 'cgl26_06o3_q29',
    topic: 'Indian Polity',
    questionEn:
      'What is the subject matter of Article 126 of the Indian Constitution?',
    questionHi:
      'भारतीय संविधान के अनुच्छेद 126 का विषय-वस्तु क्या है?',
    optionsEn: [
      'Appointment of Supreme Court judges',
      'Powers of the Chief Justice of India',
      'Appointment of Acting Chief Justice',
      'Retirement of judges of the Supreme Court',
    ],
    optionsHi: [
      'सर्वोच्च न्यायालय के न्यायाधीशों की नियुक्ति',
      'भारत के मुख्य न्यायाधीश की शक्तियाँ',
      'कार्यवाहक मुख्य न्यायाधीश की नियुक्ति',
      'सर्वोच्च न्यायालय के न्यायाधीशों का सेवानिवृत्ति',
    ],
    correctIndex: 2,
    explanationEn:
      'Article 126 empowers the President of India to appoint a Judge of the Supreme Court as an Acting Chief Justice of India when the office of the CJI is vacant or the CJI is unable to perform the duties of office due to absence or otherwise.\n(Related: Article 124 — Establishment & appointment of SC judges; Article 127 — Ad hoc judges.)',
    explanationHi:
      'अनुच्छेद 126 के अंतर्गत जब भारत के मुख्य न्यायाधीश (CJI) का पद रिक्त हो या वे अनुपस्थिति अथवा अन्य कारण से अपने कर्तव्यों का निर्वहन करने में असमर्थ हों, तो राष्ट्रपति सर्वोच्च न्यायालय के किसी अन्य न्यायाधीश को कार्यवाहक मुख्य न्यायाधीश (Acting Chief Justice) नियुक्त कर सकते हैं।',
  },
  {
    id: 'cgl26_06o3_q30',
    topic: 'Indian Polity',
    questionEn:
      'Which article of the Constitution of India empowers a High Court to issue writs?',
    questionHi:
      'भारतीय संविधान का कौन-सा अनुच्छेद उच्च न्यायालय को रिट्स जारी करने का अधिकार प्रदान करता है?',
    optionsEn: ['Article 226', 'Article 32', 'Article 132', 'Article 270'],
    optionsHi: ['अनुच्छेद 226', 'अनुच्छेद 32', 'अनुच्छेद 132', 'अनुच्छेद 270'],
    correctIndex: 0,
    explanationEn:
      'Article 226 empowers High Courts to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari) for the enforcement of Fundamental Rights as well as for "any other purpose" (ordinary legal rights).\n• Article 32 grants writ jurisdiction to the Supreme Court specifically for Fundamental Rights.',
    explanationHi:
      'अनुच्छेद 226 उच्च न्यायालयों को मौलिक अधिकारों के प्रवर्तन तथा किसी अन्य कानूनी उद्देश्य के लिए 5 प्रकार की रिट (बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, अधिकार पृच्छा, उत्प्रेषण) जारी करने का अधिकार देता है।\n• अनुच्छेद 32 के अंतर्गत सर्वोच्च न्यायालय रिट जारी करता है।',
  },
  {
    id: 'cgl26_06o3_q31',
    topic: 'Physics (Units & Measurements)',
    questionEn:
      'For which of the following physical quantities is the SI unit the candela?',
    questionHi:
      'निम्नलिखित भौतिक राशियों में से किसकी SI इकाई ‘कैंडेला’ है?',
    optionsEn: [
      'Impulse',
      'Velocity',
      'Magnetic permeability',
      'Luminous intensity',
    ],
    optionsHi: ['आवेग', 'वेग', 'चुंबकीय पारगम्यता', 'ज्योति तीव्रता'],
    correctIndex: 3,
    explanationEn:
      'The candela (cd) is one of the seven base SI units and measures luminous intensity.\n• Impulse: N·s (or kg·m/s)\n• Velocity: m/s\n• Magnetic permeability: H/m (henry per metre).',
    explanationHi:
      'कैंडेला (cd) सात मूल SI मात्रकों में से एक है, जो ज्योति तीव्रता (Luminous intensity) का मात्रक है।\n• आवेग: N·s | वेग: m/s | चुंबकीय पारगम्यता: H/m।',
  },
  {
    id: 'cgl26_06o3_q32',
    topic: 'Physical Geography',
    questionEn:
      "Fill in the blank:\nThe point on the Earth's surface vertically above the 'Focus' (Hypocentre) where an earthquake originates is called the __________.",
    questionHi:
      'रिक्त स्थान की पूर्ति कीजिए:\nपृथ्वी की सतह पर वह बिंदु, जो भूकंप के उद्गम केंद्र या हाइपोसेंटर के ठीक ऊर्ध्वाधर ऊपर स्थित होता है, उसे ______ कहा जाता है।',
    optionsEn: ['Isocentre', 'Epicenter', 'Seismic Core', 'Fault Plane'],
    optionsHi: ['समकेंद्र', 'अधिकेंद्र', 'भूकंपीय केंद्रक', 'भ्रंश तल'],
    correctIndex: 1,
    explanationEn:
      '• Focus (Hypocentre): The exact point beneath the Earth’s crust where seismic energy is first released.\n• Epicenter: The point on the Earth’s surface directly (vertically) above the focus, where earthquake waves are usually felt first and most strongly.',
    explanationHi:
      '• उद्गम केंद्र / हाइपोसेंटर (Focus): पृथ्वी के अंदर वह स्थान जहाँ भूकंप की ऊर्जा उत्पन्न होती है।\n• अधिकेंद्र (Epicenter): पृथ्वी की सतह पर हाइपोसेंटर के ठीक लंबवत ऊपर स्थित बिंदु, जहाँ भूकंपीय तरंगें सबसे पहले पहुँचती हैं।',
  },
  {
    id: 'cgl26_06o3_q33',
    topic: 'Indian Geography (Minerals)',
    questionEn:
      'Which mineral is associated with Gangpur and Sundergarh in Odisha?',
    questionHi: 'ओडिशा में गंगपुर और सुंदरगढ़ किस खनिज से जुड़े हैं?',
    optionsEn: ['Coal', 'Petroleum', 'Manganese', 'Bauxite'],
    optionsHi: ['कोयला', 'पेट्रोलियम', 'मैंगनीज', 'बाक्साइट'],
    correctIndex: 2,
    explanationEn:
      'Odisha is one of India’s leading producers of Manganese, with major deposits located in the Bonai–Keonjhar–Sundergarh (Gangpur), Koraput, Kalahandi, and Bolangir belts.',
    explanationHi:
      'ओडिशा भारत के प्रमुख मैंगनीज उत्पादक राज्यों में से एक है। सुंदरगढ़ (गंगपुर क्षेत्र), क्योंझर, कोरापुट, कालाहांडी और बोलांगीर यहाँ की प्रमुख मैंगनीज पट्टियाँ हैं।',
  },
  {
    id: 'cgl26_06o3_q34',
    topic: 'Art & Culture',
    questionEn:
      'Consider the following pairs of folk music traditions and their corresponding states:\n1. Malushahi – Uttarakhand\n2. Manganiyar – Rajasthan\nWhich of the pairs given above is/are correctly matched?',
    questionHi:
      'निम्नलिखित लोक संगीत परंपराओं तथा उनके संबंधित राज्यों के युग्मों पर विचार कीजिए:\n1. मालुशाही — उत्तराखंड\n2. मंगणियार — राजस्थान\nउपरोक्त में से कौन-सा/से युग्म सही रूप से मेल खाते हैं?',
    optionsEn: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    optionsHi: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'न तो 1 और न ही 2'],
    correctIndex: 2,
    explanationEn:
      'Both pairs are correctly matched:\n1. Malushahi is a famous Kumaoni romantic folk ballad tradition of Uttarakhand celebrating the legend of Rajula and Malushahi.\n2. Manganiyars are hereditary folk musicians of western Rajasthan (Thar Desert) famed for instruments like the Kamaicha and Khartal.',
    explanationHi:
      'दोनों युग्म सही सुमेलित हैं:\n1. मालुशाही: उत्तराखंड (कुमाऊँ क्षेत्र) की प्रसिद्ध लोक गाथा और संगीत परंपरा (राजुला-मालुशाही की प्रेम कथा पर आधारित)।\n2. मंगणियार: राजस्थान के थार मरुस्थल क्षेत्र के प्रसिद्ध पारंपरिक लोक संगीतकार समुदाय (कमायचा व खड़ताल वाद्ययंत्रों के लिए प्रसिद्ध)।',
  },
  {
    id: 'cgl26_06o3_q35',
    topic: 'Government Schemes',
    questionEn:
      "The PM SHRI (Prime Minister's Schools for Rising India) scheme is primarily designed to achieve which of the following objectives?",
    questionHi:
      'पीएम श्री (प्रधानमंत्री स्कूल्स फॉर राइजिंग इंडिया) योजना मुख्य रूप से निम्नलिखित में से किस उद्देश्य को प्राप्त करने के लिए तैयार की गई है?',
    optionsEn: [
      'To provide free laptops to all school students in rural areas',
      'To develop and upgrade selected schools as model institutions showcasing NEP 2020',
      'To privatize government schools through public-private partnerships',
      'To focus only on higher education and university reforms',
    ],
    optionsHi: [
      'ग्रामीण क्षेत्रों में सभी स्कूली छात्रों को मुफ्त लैपटॉप प्रदान करना',
      'राष्ट्रीय शिक्षा नीति (एनईपी) 2020 को प्रदर्शित करने वाले मॉडल संस्थानों के रूप में चयनित स्कूलों का विकास और उन्नयन करना',
      'सार्वजनिक-निजी भागीदारी के माध्यम से सरकारी स्कूलों का निजीकरण करना',
      'केवल उच्च शिक्षा और विश्वविद्यालय सुधारों पर ध्यान केंद्रित करना',
    ],
    correctIndex: 1,
    explanationEn:
      'Launched in September 2022 as a Centrally Sponsored Scheme, PM SHRI aims to upgrade over 14,500 existing government schools (Centre, State, UT, KVS, NVS) into exemplar/model institutions showcasing all components of the National Education Policy (NEP) 2020 and mentoring nearby schools.',
    explanationHi:
      'सितंबर 2022 में शुरू की गई केंद्र प्रायोजित PM SHRI योजना का मुख्य उद्देश्य 14,500 से अधिक चयनित सरकारी स्कूलों को मॉडल संस्थानों के रूप में विकसित व उन्नत करना है, जो राष्ट्रीय शिक्षा नीति (NEP) 2020 के सभी प्रावधानों का उत्कृष्ट प्रदर्शन करें।',
  },
  {
    id: 'cgl26_06o3_q36',
    topic: 'International Organizations',
    questionEn:
      'Which factor most differentiates BRICS (Brazil, Russia, India, China, and South Africa) from the Non-Aligned Movement (NAM)?',
    questionHi:
      'ब्रिक्स (BRICS - ब्राज़ील, रूस, भारत, चीन और दक्षिण अफ्रीका) को गुटनिरपेक्ष आंदोलन (NAM) से अलग करने वाला सबसे महत्वपूर्ण कारक क्या है?',
    optionsEn: [
      'Representation of developing countries',
      'Focus on economic cooperation among major emerging economies',
      'Opposition to colonialism',
      'Demand for sovereignty',
    ],
    optionsHi: [
      'विकासशील देशों का प्रतिनिधित्व',
      'प्रमुख उभरती अर्थव्यवस्थाओं के बीच आर्थिक सहयोग पर ध्यान केंद्रित करना',
      'उपनिवेशवाद का विरोध',
      'संप्रभुता की मांग',
    ],
    correctIndex: 1,
    explanationEn:
      'While NAM originated during the Cold War primarily as a political movement emphasizing non-alignment, anti-colonialism, and national sovereignty, BRICS was formed specifically to foster economic cooperation, trade, financial architecture reform (e.g., New Development Bank), and growth among major emerging economies.',
    explanationHi:
      'गुटनिरपेक्ष आंदोलन (NAM) शीत युद्ध के दौरान राजनीतिक तटस्थता, उपनिवेशवाद-विरोध और संप्रभुता के लिए उभरा था, जबकि BRICS का मुख्य उद्देश्य प्रमुख उभरती अर्थव्यवस्थाओं के बीच आर्थिक सहयोग, व्यापार और वित्तीय संस्थानों (जैसे न्यू डेवलपमेंट बैंक) को सुदृढ़ करना है।',
  },
  {
    id: 'cgl26_06o3_q37',
    topic: 'International Relations & Geography',
    questionEn:
      'The Chabahar project strengthens India’s ability to access Afghanistan primarily through:',
    questionHi:
      'चाबहार परियोजना मुख्यत: किस मार्ग के माध्यम से अफ़गानिस्तान तक पहुँचने की भारत की क्षमता को मज़बूत करती है।',
    optionsEn: [
      'Arabian Sea–Iran–Afghanistan route',
      'Indian Ocean–Oman–Afghanistan route',
      'Caspian Sea–Iran–Afghanistan route',
      'Persian Gulf–Iran–Afghanistan route',
    ],
    optionsHi: [
      'अरब सागर–ईरान–अफगानिस्तान मार्ग',
      'हिंद महासागर–ओमान–अफगानिस्तान मार्ग',
      'कैस्पियन सागर–ईरान–अफगानिस्तान मार्ग',
      'फारस की खाड़ी–ईरान–अफगानिस्तान मार्ग',
    ],
    correctIndex: 0,
    explanationEn:
      'Chabahar Port is located on Iran’s southeastern Makran coast opening directly onto the Gulf of Oman / Arabian Sea. It provides India a direct sea-land transit corridor (Arabian Sea → Chabahar Port in Iran → Zaranj–Delaram highway into Afghanistan and Central Asia) bypassing Pakistan.',
    explanationHi:
      'ईरान के दक्षिण-पूर्वी तट पर स्थित चाबहार बंदरगाह भारत को पाकिस्तान को बाईपास करते हुए सीधे अरब सागर–ईरान–अफ़गानिस्तान मार्ग से अफ़गानिस्तान और मध्य एशिया तक व्यापारिक पहुँच प्रदान करता है।',
  },
  {
    id: 'cgl26_06o3_q38',
    topic: 'Polity & Law (BNSS 2023)',
    questionEn:
      'The state government creates a special court of judicial magistrates first class for cyber fraud cases in a city. Later, a regular judicial magistrate first class in the same area takes cognizance of a cyber fraud case and begins trial proceedings. Which of the following is legally correct under the Bharatiya Nagarik Suraksha Sanhita, 2023 in India?',
    questionHi:
      'राज्य सरकार एक शहर में साइबर धोखाधड़ी के मामलों के लिए प्रथम श्रेणी न्यायिक मजिस्ट्रेटों की एक विशेष अदालत का गठन करती है। बाद में, उसी क्षेत्र का एक नियमित प्रथम श्रेणी न्यायिक मजिस्ट्रेट साइबर धोखाधड़ी के एक मामले का संज्ञान लेता है और विचारण की कार्यवाही शुरू कर देता है। भारत में भारतीय नागरिक सुरक्षा संहिता, 2023 (BNSS) के तहत निम्नलिखित में से कौन-सा कथन कानूनी रूप से सही है?',
    optionsEn: [
      'The regular magistrate can proceed because all judicial magistrates have concurrent jurisdiction.',
      'The regular magistrate can proceed only with sessions judge approval.',
      'The regular magistrate lacks jurisdiction if the case falls within the class assigned to the special court.',
      'The Special Court can hear only appeals, not trials.',
    ],
    optionsHi: [
      'नियमित मजिस्ट्रेट आगे बढ़ सकता है क्योंकि सभी न्यायिक मजिस्ट्रेटों के पास समवर्ती क्षेत्राधिकार होता है।',
      'नियमित मजिस्ट्रेट केवल सत्र न्यायाधीश की स्वीकृति से ही आगे बढ़ सकता है।',
      'यदि मामला विशेष अदालत को सौंपे गए वर्ग के अंतर्गत आता है, तो नियमित मजिस्ट्रेट के पास क्षेत्राधिकार का अभाव होता है।',
      'विशेष अदालत केवल अपीलों की सुनवाई कर सकती है, विचारणों (trials) की नहीं।',
    ],
    correctIndex: 2,
    explanationEn:
      'Under Section 9(1) proviso of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (corresponding to Section 11(1) CrPC), when a State Government establishes a Special Court of Judicial Magistrates to try a particular case or class of cases in a local area, no other Court of Magistrate in that local area has jurisdiction to try any case or class of cases for which such Special Court has been established.',
    explanationHi:
      'भारतीय नागरिक सुरक्षा संहिता (BNSS), 2023 की धारा 9(1) के परंतुक के अनुसार, जब राज्य सरकार किसी स्थानीय क्षेत्र में किसी विशेष वर्ग के मामलों के विचारण हेतु विशेष न्यायालय गठित करती है, तो उस क्षेत्र के अन्य नियमित मजिस्ट्रेट न्यायालयों को उन मामलों की सुनवाई का क्षेत्राधिकार नहीं रहता।',
  },
  {
    id: 'cgl26_06o3_q39',
    topic: 'Current Affairs (Appointments)',
    questionEn:
      'Who has been appointed as the new Managing Director (MD) of Indraprastha Gas Limited (IGL) in June 2026?',
    questionHi:
      'जून 2026 में इंद्रप्रस्थ गैस लिमिटेड (IGL) के नए प्रबंध निदेशक के रूप में किसे नियुक्त किया गया है?',
    optionsEn: ['Sanjay Kumar', 'Kumar Shanker', 'Neelkanth Mishra', 'Ajay Rajan'],
    optionsHi: ['संजय कुमार', 'कुमार शंकर', 'नीलकांत मिश्रा', 'अजय राजन'],
    correctIndex: 1,
    explanationEn:
      'Kumar Shanker was appointed as the new Managing Director (MD) of Indraprastha Gas Limited (IGL) in June 2026. IGL is a leading city gas distribution joint venture of GAIL (India) Ltd., BPCL, and the Government of NCT of Delhi.',
    explanationHi:
      'जून 2026 में कुमार शंकर को इंद्रप्रस्थ गैस लिमिटेड (IGL) का नया प्रबंध निदेशक (MD) नियुक्त किया गया। IGL, गेल (GAIL), बीपीसीएल (BPCL) और दिल्ली सरकार का संयुक्त उपक्रम है।',
  },
  {
    id: 'cgl26_06o3_q40',
    topic: 'Sports & Olympics',
    questionEn:
      'Which Indian wrestler became the youngest-ever Olympic medallist from India by winning Bronze in the 57kg category at the Paris 2024 Olympics?',
    questionHi:
      'पेरिस 2024 ओलंपिक में 57 किलोग्राम वर्ग में कांस्य पदक जीतकर, भारत के सबसे युवा ओलंपिक पदक विजेता बनने वाले पहलवान कौन हैं?',
    optionsEn: [
      'Bajrang Punia',
      'Ravi Kumar Dahiya',
      'Aman Sehrawat',
      'Antim Panghal',
    ],
    optionsHi: [
      'बजरंग पुनिया',
      'रवि कुमार दहिया',
      'अमन सहरावत',
      'अंतिम पंघाल',
    ],
    correctIndex: 2,
    explanationEn:
      'Aman Sehrawat won the Bronze medal in men’s 57 kg freestyle wrestling at the Paris 2024 Olympics (defeating Puerto Rico’s Darian Cruz) at age 21 years and 24 days, surpassing P. V. Sindhu’s record to become India’s youngest-ever individual Olympic medallist.',
    explanationHi:
      'अमन सहरावत ने पेरिस 2024 ओलंपिक में पुरुषों के 57 किग्रा फ्रीस्टाइल कुश्ती वर्ग में कांस्य पदक जीता। 21 वर्ष 24 दिन की उम्र में पदक जीतकर वे भारत के सबसे युवा व्यक्तिगत ओलंपिक पदक विजेता बने।',
  },
  {
    id: 'cgl26_06o3_q41',
    topic: 'Environment & Ramsar Sites',
    questionEn:
      'Which Ramsar site in Uttar Pradesh was highlighted during World Wetlands Day 2026 for ecological and cultural significance?',
    questionHi:
      'विश्व आर्द्रभूमि दिवस 2026 के दौरान पारिस्थितिक एवं सांस्कृतिक महत्त्व के लिए उत्तर प्रदेश के किस रामसर स्थल को प्रमुखता से रेखांकित किया गया था?',
    optionsEn: [
      'Nawabganj Bird Sanctuary',
      'Parvati Arga Bird Sanctuary',
      'Samaspur Bird Sanctuary',
      'Sandi Bird Sanctuary',
    ],
    optionsHi: [
      'नवाबगंज पक्षी विहार',
      'पार्वती अरगा पक्षी विहार',
      'समसपुर पक्षी विहार',
      'सांडी पक्षी विहार',
    ],
    correctIndex: 1,
    explanationEn:
      'Parvati Arga Bird Sanctuary (located in Gonda district, Uttar Pradesh) — comprising two permanent freshwater oxbow lakes (Parvati and Arga) — was highlighted on World Wetlands Day (2 February) 2026 for its rich migratory bird habitat, ecological value, and cultural heritage.',
    explanationHi:
      'उत्तर प्रदेश के गोंडा जिले में स्थित पार्वती अरगा पक्षी विहार (दो स्थायी गोखुर झीलों पार्वती और अरगा से निर्मित रामसर स्थल) को विश्व आर्द्रभूमि दिवस (2 फरवरी) 2026 के अवसर पर इसके पारिस्थितिक एवं सांस्कृतिक महत्त्व के लिए प्रमुखता से रेखांकित किया गया।',
  },
  {
    id: 'cgl26_06o3_q42',
    topic: 'Economics (National Income)',
    questionEn:
      'Which of the following statement regarding nominal and real GDP (Gross Domestic Product) is correct?',
    questionHi:
      'सांकेतिक GDP (Gross Domestic Product) और वास्तविक GDP (Gross Domestic Product) के संबंध में निम्नलिखित में से कौन-सा कथन सही है?',
    optionsEn: [
      'Real GDP is calculated using current-year prices whereas nominal GDP uses base-year prices.',
      'Real GDP and nominal GDP always remain equal in every accounting year.',
      'Real GDP removes the effect of price changes through constant-base-year prices.',
      'Real GDP excludes services while nominal GDP includes both goods and services.',
    ],
    optionsHi: [
      'वास्तविक GDP की गणना चालू वर्ष की कीमतों का उपयोग करके की जाती है, जबकि सांकेतिक GDP आधार वर्ष की कीमतों का उपयोग करता है।',
      'वास्तविक GDP और सांकेतिक GDP प्रत्येक लेखा वर्ष में सदैव समान रहते हैं।',
      'वास्तविक GDP, स्थिर आधार वर्ष की कीमतों के माध्यम से मूल्य परिवर्तनों के प्रभाव को हटाता है।',
      'वास्तविक GDP में सेवाएँ शामिल नहीं होतीं, जबकि सांकेतिक GDP में वस्तुएँ और सेवाएँ दोनों शामिल होती हैं।',
    ],
    correctIndex: 2,
    explanationEn:
      '• Nominal GDP measures output at current market prices (includes inflation/price changes).\n• Real GDP measures output at constant base-year prices, thereby removing the distortion of inflation/price changes and reflecting true growth in physical production.\n• GDP Deflator = (Nominal GDP / Real GDP) × 100.',
    explanationHi:
      '• सांकेतिक (Nominal) GDP की गणना चालू वर्ष की बाजार कीमतों पर होती है, जिसमें मुद्रास्फीति का प्रभाव शामिल रहता है।\n• वास्तविक (Real) GDP की गणना स्थिर आधार वर्ष (base year) की कीमतों पर की जाती है, जिससे मूल्य परिवर्तनों (महँगाई) का प्रभाव हट जाता है और उत्पादन की वास्तविक वृद्धि का पता चलता है।',
  },
  {
    id: 'cgl26_06o3_q43',
    topic: 'Indian Economy (CPSEs)',
    questionEn:
      'Which of the following is a Maharatna Central Public Sector Enterprise?',
    questionHi: 'इनमें से कौन-सी महारत्न केंद्रीय सार्वजनिक क्षेत्र की कंपनी है?',
    optionsEn: [
      'Hindustan Aeronautics Limited',
      'Mahanagar Telephone Nigam Limited',
      'Indian Oil Corporation Limited',
      'Bharat Sanchar Nigam Limited',
    ],
    optionsHi: [
      'हिंदुस्तान एयरोनॉटिक्स लिमिटेड',
      'महानगर टेलीफोन निगम लिमिटेड',
      'इंडियन ऑयल कॉर्पोरेशन लिमिटेड',
      'भारत संचार निगम लिमिटेड',
    ],
    correctIndex: 2,
    explanationEn:
      'Indian Oil Corporation Limited (IOCL) is one of India’s premier Maharatna Central Public Sector Enterprises (CPSEs), accorded Maharatna status in 2010. (MTNL and BSNL are not Maharatna companies.) Per the official answer key, Option (C) is correct.',
    explanationHi:
      'इंडियन ऑयल कॉर्पोरेशन लिमिटेड (IOCL) भारत की प्रमुख महारत्न केंद्रीय सार्वजनिक क्षेत्र की कंपनी (CPSE) है, जिसे 2010 में महारत्न का दर्जा दिया गया था। (आधिकारिक उत्तर कुंजी के अनुसार विकल्प C सही है।)',
  },
  {
    id: 'cgl26_06o3_q44',
    topic: 'Demography & Geography',
    questionEn:
      'Which of the following population trends is most likely to occur in a region with a high birth rate and a rapidly declining death rate?',
    questionHi:
      'उच्च जन्म दर और तेजी से घटती मृत्यु दर वाले क्षेत्र में निम्नलिखित में से कौन-सी जनसंख्या प्रवृत्ति होने की सबसे अधिक संभावना है?',
    optionsEn: [
      'Population stagnation',
      'Negative growth',
      'Population explosion',
      'Zero growth',
    ],
    optionsHi: ['जनसंख्या स्थिरता', 'नकारात्मक वृद्धि', 'जनसंख्या विस्फोट', 'शून्य वृद्धि'],
    correctIndex: 2,
    explanationEn:
      'In Stage 2 of the Demographic Transition Model, improved healthcare and sanitation cause the death rate to decline sharply while the birth rate remains high. The resulting wide gap (Natural Growth Rate = Birth Rate − Death Rate) leads to rapid population growth known as a "Population explosion."',
    explanationHi:
      'जनसांख्यिकीय संक्रमण मॉडल के द्वितीय चरण में बेहतर स्वास्थ्य सेवाओं से मृत्यु दर तेजी से घटती है जबकि जन्म दर उच्च बनी रहती है। जन्म दर और मृत्यु दर के बीच इस बड़े अंतर के कारण जनसंख्या में तीव्र वृद्धि होती है, जिसे "जनसंख्या विस्फोट" (Population explosion) कहा जाता है।',
  },
  {
    id: 'cgl26_06o3_q45',
    topic: 'Indian Economy (Five-Year Plans)',
    questionEn:
      'Which of the following is the primary cause of the major breakdown and eventual failure of the Third Five-Year Plan to reach its targets?',
    questionHi:
      'इनमें से कौन-सी बात तीसरी पंचवर्षीय योजना के लक्ष्यों को प्राप्त करने में आई बड़ी रुकावट और अंततः उसकी विफलता का मुख्य कारण है?',
    optionsEn: [
      'Runaway international crude oil price spikes',
      'External conflicts and severe droughts',
      'Political instability at the central government',
      'Implementation of massive pay commission awards',
    ],
    optionsHi: [
      'अंतरराष्ट्रीय कच्चे तेल की कीमतों में बेतहाशा उछाल',
      'बाहरी संघर्ष और गंभीर सूखा',
      'केंद्र सरकार में राजनीतिक अस्थिरता',
      'बड़े पैमाने पर वेतन आयोग की सिफारिशों को लागू करना',
    ],
    correctIndex: 1,
    explanationEn:
      'The Third Five-Year Plan (1961–1966, Gadgil Yojana) failed to achieve its 5.6% growth target (achieving only ~2.4%) primarily due to two major external wars — the Sino-Indian War (1962) and the Indo-Pakistani War (1965) — compounded by severe nationwide droughts in 1965–66, which led to the Plan Holiday (1966–69).',
    explanationHi:
      'तीसरी पंचवर्षीय योजना (1961–1966) मुख्य रूप से दो बाहरी युद्धों — 1962 के भारत-चीन युद्ध और 1965 के भारत-पाकिस्तान युद्ध — तथा 1965–66 के भीषण सूखे के कारण अपने लक्ष्यों को प्राप्त करने में विफल रही, जिसके बाद 1966–69 के बीच ‘योजना अवकाश’ (Plan Holiday) लागू करना पड़ा।',
  },
  {
    id: 'cgl26_06o3_q46',
    topic: 'Science & Technology (ISRO)',
    questionEn:
      'Which biological experiment was successfully demonstrated aboard the PSLV Orbital Experimental Module-04 (POEM-4)?',
    questionHi:
      'पीएसएलवी (PSLV) ऑर्बिटल प्रायोगिक मॉड्यूल-04 (POEM-4) पर निम्नलिखित में से किस जैविक प्रयोग का सफलतापूर्वक प्रदर्शन किया गया था?',
    optionsEn: [
      'Animal tissue regeneration',
      'Seed germination in microgravity',
      'Human cell culture growth',
      'Plant pollination in orbit',
    ],
    optionsHi: [
      'पशु ऊतक पुनर्जनन',
      'सूक्ष्म-गुरुत्वाकर्षण में बीज अंकुरण',
      'मानव कोशिका संवर्धन की वृद्धि',
      'कक्षा में पौधों का परागण',
    ],
    correctIndex: 1,
    explanationEn:
      'Aboard ISRO’s POEM-4 (launched on PSLV-C60 SpaDeX mission in December 2024), the CROPS (Compact Research Module for Orbital Plant Studies) payload built by VSSC successfully demonstrated cowpea (lobia) seed germination and leaf sprouting in microgravity within four days.',
    explanationHi:
      'इसरो (ISRO) के PSLV-C60 (SpaDeX मिशन) के POEM-4 मॉड्यूल पर स्थित CROPS (Compact Research Module for Orbital Plant Studies) पेलोड ने सूक्ष्म-गुरुत्वाकर्षण (microgravity) में लोबिया (cowpea) के बीजों के सफल अंकुरण का प्रदर्शन किया।',
  },
  {
    id: 'cgl26_06o3_q47',
    topic: 'Ecology & Biology',
    questionEn:
      'A prey population increases from 400 individuals to 600 individuals over one year. What is the percentage growth in the population during this period?',
    questionHi:
      'एक समष्टि में शिकार की संख्या एक वर्ष में 400 व्यष्टियों से बढ़कर 600 व्यष्टियाँ हो जाती है। इस अवधि के दौरान समष्टि में प्रतिशत वृद्धि क्या है?',
    optionsEn: ['25%', '33%', '60%', '50%'],
    optionsHi: ['25%', '33%', '60%', '50%'],
    correctIndex: 3,
    explanationEn:
      'Formula: Percentage Growth = [(Final Population − Initial Population) / Initial Population] × 100\n= [(600 − 400) / 400] × 100\n= (200 / 400) × 100 = 50%.',
    explanationHi:
      'सूत्र: प्रतिशत वृद्धि = [(अंतिम संख्या − प्रारंभिक संख्या) / प्रारंभिक संख्या] × 100\n= [(600 − 400) / 400] × 100\n= (200 / 400) × 100 = 50%।',
  },
  {
    id: 'cgl26_06o3_q48',
    topic: 'Biology (Immunology)',
    questionEn:
      'An antibody titre increases from 1:20 before vaccination to 1:320 after vaccination. By what factor has the antibody titre increased?',
    questionHi:
      'एक प्रतिरक्षी अनुमापांक टीकाकरण से पहले 1:20 से बढ़कर टीकाकरण के बाद 1:320 हो जाता है। प्रतिरक्षी अनुमापांक कितने गुना बढ़ गया है?',
    optionsEn: ['16-fold', '12-fold', '19-fold', '20-fold'],
    optionsHi: ['16 गुना', '12 गुना', '19 गुना', '20 गुना'],
    correctIndex: 0,
    explanationEn:
      'Antibody titre is expressed as the highest serum dilution factor that still gives a positive reaction. Higher dilution denominator means higher antibody concentration:\nFold increase = Final titre / Initial titre = 320 / 20 = 16-fold.',
    explanationHi:
      'प्रतिरक्षी अनुमापांक (Antibody titre) अधिकतम तनुकरण (dilution) को दर्शाता है जिस पर प्रतिरक्षी सक्रिय रहते हैं।\nवृद्धि गुणांक = अंतिम अनुमापांक / प्रारंभिक अनुमापांक = 320 / 20 = 16 गुना (16-fold)।',
  },
  {
    id: 'cgl26_06o3_q49',
    topic: 'Modern Indian History',
    questionEn:
      'Who chaired the Punjab and Bengal Boundary Commissions that demarcated the borders between India and Pakistan?',
    questionHi:
      'भारत और पाकिस्तान के बीच सीमा निर्धारण के लिए गठित पंजाब तथा बंगाल सीमा आयोगों के अध्यक्ष कौन थे?',
    optionsEn: [
      'Lord Wavell',
      'Sir Stafford Cripps',
      'Lord Mountbatten',
      'Sir Cyril Radcliffe',
    ],
    optionsHi: [
      'लॉर्ड वेवेल',
      'सर स्टैफर्ड क्रिप्स',
      'लॉर्ड माउंटबेटन',
      'सर सिरिल रैडक्लिफ',
    ],
    correctIndex: 3,
    explanationEn:
      'Sir Cyril Radcliffe, a British lawyer, chaired both the Punjab and Bengal Boundary Commissions in 1947. The demarcated international border between India and Pakistan (and erstwhile East Pakistan/Bangladesh) is known as the Radcliffe Line, published on 17 August 1947.',
    explanationHi:
      'ब्रिटिश विधिवेत्ता सर सिरिल रैडक्लिफ ने 1947 में पंजाब और बंगाल दोनों सीमा आयोगों की अध्यक्षता की थी। उनके द्वारा निर्धारित सीमा रेखा को ‘रैडक्लिफ रेखा’ (Radcliffe Line) के नाम से जाना जाता है।',
  },
  {
    id: 'cgl26_06o3_q50',
    topic: 'Modern Indian History',
    questionEn:
      'Which of the following plans formed the immediate basis of the Indian Independence Act, 1947?',
    questionHi:
      'निम्नलिखित में से किस योजना ने भारतीय स्वतंत्रता अधिनियम, 1947 का तात्कालिक आधार बनाया था?',
    optionsEn: [
      'Wavell Plan',
      'Cripps Proposal',
      'Mountbatten Plan',
      'August Offer',
    ],
    optionsHi: ['वेवल योजना', 'क्रिप्स प्रस्ताव', 'माउंटबेटन योजना', 'अगस्त प्रस्ताव'],
    correctIndex: 2,
    explanationEn:
      'The Mountbatten Plan (also known as the 3rd June Plan, 1947), announced by Viceroy Lord Mountbatten, laid out the partition of British India into two independent dominions (India and Pakistan) and formed the immediate basis for the Indian Independence Act, 1947 passed by the British Parliament.',
    explanationHi:
      'वायसराय लॉर्ड माउंटबेटन द्वारा 3 जून 1947 को घोषित ‘माउंटबेटन योजना’ (3 जून योजना) ने ब्रिटिश भारत के विभाजन और सत्ता हस्तांतरण की रूपरेखा तय की, जो भारतीय स्वतंत्रता अधिनियम, 1947 का तात्कालिक आधार बनी।',
  },
];

// ============================================================================
// PART 2 INLINE SVG CHARTS (SECTION 3: QUANTITATIVE APTITUDE — Q68, Q71, Q72, Q75)
// ============================================================================

const Q68_FREQ_POLYGON_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="560" height="320">
  <rect width="560" height="320" fill="#ffffff"/>
  <text x="295" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Daily Website Visitors (Hundreds)</text>

  <!-- Horizontal gridlines & Y ticks (0..120, plot y=45..255, height=210) -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="72" y1="45" x2="522" y2="45"/>
    <line x1="72" y1="80" x2="522" y2="80"/>
    <line x1="72" y1="115" x2="522" y2="115"/>
    <line x1="72" y1="150" x2="522" y2="150"/>
    <line x1="72" y1="185" x2="522" y2="185"/>
    <line x1="72" y1="220" x2="522" y2="220"/>
  </g>
  <!-- Axes -->
  <line x1="72" y1="45" x2="72" y2="255" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="72" y1="255" x2="522" y2="255" stroke="#64748b" stroke-width="1.5"/>

  <g font-family="Arial, sans-serif" font-size="11.5" fill="#334155" text-anchor="end">
    <text x="64" y="49">120</text>
    <text x="64" y="84">100</text>
    <text x="64" y="119">80</text>
    <text x="64" y="154">60</text>
    <text x="64" y="189">40</text>
    <text x="64" y="224">20</text>
    <text x="64" y="259">0</text>
  </g>

  <!-- Frequency Polygon -->
  <polyline points="104,255 168,185 232,62.5 296,129 360,202.5 424,228.75 488,255"
            fill="none" stroke="#334155" stroke-width="2.6" stroke-linejoin="round"/>
  <g fill="#0f172a">
    <circle cx="104" cy="255" r="3.5"/>
    <circle cx="168" cy="185" r="3.5"/>
    <circle cx="232" cy="62.5" r="3.5"/>
    <circle cx="296" cy="129" r="3.5"/>
    <circle cx="360" cy="202.5" r="3.5"/>
    <circle cx="424" cy="228.75" r="3.5"/>
    <circle cx="488" cy="255" r="3.5"/>
  </g>

  <!-- Data value labels with subtle leader ticks -->
  <g stroke="#94a3b8" stroke-width="1">
    <line x1="168" y1="185" x2="155" y2="164"/>
    <line x1="232" y1="62.5" x2="246" y2="54"/>
    <line x1="296" y1="129" x2="306" y2="112"/>
    <line x1="360" y1="202.5" x2="368" y2="177"/>
    <line x1="424" y1="228.75" x2="432" y2="205"/>
  </g>
  <g font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a">
    <text x="104" y="244" text-anchor="middle">0</text>
    <text x="150" y="160" text-anchor="middle">40</text>
    <text x="260" y="57" text-anchor="middle">110</text>
    <text x="311" y="108" text-anchor="middle">72</text>
    <text x="371" y="173" text-anchor="middle">30</text>
    <text x="435" y="201" text-anchor="middle">15</text>
    <text x="488" y="244" text-anchor="middle">0</text>
  </g>

  <!-- X-axis labels -->
  <g font-family="Arial, sans-serif" font-size="11.5" fill="#334155" text-anchor="middle">
    <text x="104" y="274">30-50</text>
    <text x="168" y="274">50-70</text>
    <text x="232" y="274">70-90</text>
    <text x="296" y="274">90-110</text>
    <text x="360" y="274">110-130</text>
    <text x="424" y="274">130-150</text>
    <text x="488" y="274">150-170</text>
  </g>

  <!-- Axis titles -->
  <text x="295" y="302" text-anchor="middle" font-family="Arial, sans-serif" font-size="12.5" font-weight="600" fill="#1e293b">Axis Daily Traffic Volume (Hundreds of Unique Users)</text>
  <text x="22" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="12.5" font-weight="600" fill="#1e293b" transform="rotate(-90 22 150)">Number of Days</text>
</svg>
`);

const Q71_HISTOGRAM_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="560" height="320">
  <rect width="560" height="320" fill="#ffffff"/>
  <text x="295" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="15.5" font-weight="700" fill="#0f172a">Number of Workers</text>

  <!-- Horizontal gridlines (0..160, y=48..256, 1.3px/unit) -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="74" y1="48" x2="526" y2="48"/>
    <line x1="74" y1="74" x2="526" y2="74"/>
    <line x1="74" y1="100" x2="526" y2="100"/>
    <line x1="74" y1="126" x2="526" y2="126"/>
    <line x1="74" y1="152" x2="526" y2="152"/>
    <line x1="74" y1="178" x2="526" y2="178"/>
    <line x1="74" y1="204" x2="526" y2="204"/>
    <line x1="74" y1="230" x2="526" y2="230"/>
  </g>
  <line x1="74" y1="48" x2="74" y2="256" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="74" y1="256" x2="526" y2="256" stroke="#64748b" stroke-width="1.5"/>

  <g font-family="Arial, sans-serif" font-size="11" fill="#334155" text-anchor="end">
    <text x="66" y="52">160</text>
    <text x="66" y="78">140</text>
    <text x="66" y="104">120</text>
    <text x="66" y="130">100</text>
    <text x="66" y="156">80</text>
    <text x="66" y="182">60</text>
    <text x="66" y="208">40</text>
    <text x="66" y="234">20</text>
    <text x="66" y="260">0</text>
  </g>

  <!-- Contiguous Histogram Bars (width 64px each, starting x=76) -->
  <g fill="#475569" stroke="#ffffff" stroke-width="1.5">
    <rect x="76" y="184.5" width="64" height="71.5"/>
    <rect x="140" y="152" width="64" height="104"/>
    <rect x="204" y="115.6" width="64" height="140.4"/>
    <rect x="268" y="103.9" width="64" height="152.1"/>
    <rect x="332" y="61" width="64" height="195"/>
    <rect x="396" y="119.5" width="64" height="136.5"/>
    <rect x="460" y="165" width="64" height="91"/>
  </g>

  <!-- Value labels above bars -->
  <g font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">
    <text x="108" y="178">55</text>
    <text x="172" y="145">80</text>
    <text x="236" y="109">108</text>
    <text x="300" y="97">117</text>
    <text x="364" y="55">150</text>
    <text x="428" y="113">105</text>
    <text x="492" y="158">70</text>
  </g>

  <!-- X-axis class intervals -->
  <g font-family="Arial, sans-serif" font-size="11" fill="#334155" text-anchor="middle">
    <text x="108" y="274">150–160</text>
    <text x="172" y="274">160–170</text>
    <text x="236" y="274">170–180</text>
    <text x="300" y="274">180–190</text>
    <text x="364" y="274">190–200</text>
    <text x="428" y="274">200–210</text>
    <text x="492" y="274">210–220</text>
  </g>

  <!-- Axis titles -->
  <text x="300" y="302" text-anchor="middle" font-family="Arial, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">Wages (in ₹)</text>
  <text x="20" y="154" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a" transform="rotate(-90 20 154)">Number of workers (Frequency)</text>
</svg>
`);

const Q72_PIE_CHART_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 310" width="540" height="310">
  <rect width="540" height="310" fill="#ffffff"/>
  <text x="270" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Share (%)</text>

  <!-- Pie slices centered at (270, 165), r = 98 -->
  <g stroke="#ffffff" stroke-width="2" stroke-linejoin="round">
    <!-- Tropical Evergreen: 30% (-90° to 18°) -->
    <path d="M 270 165 L 270 67 A 98 98 0 0 1 363.2 195.3 Z" fill="#1e3a8a"/>
    <!-- Deciduous: 35% (18° to 144°) -->
    <path d="M 270 165 L 363.2 195.3 A 98 98 0 0 1 190.7 222.6 Z" fill="#0f766e"/>
    <!-- Mangrove: 10% (144° to 180°) -->
    <path d="M 270 165 L 190.7 222.6 A 98 98 0 0 1 172 165 Z" fill="#d97706"/>
    <!-- Alpine: 15% (180° to 234°) -->
    <path d="M 270 165 L 172 165 A 98 98 0 0 1 212.4 85.7 Z" fill="#64748b"/>
    <!-- Scrub: 10% (234° to 270°) -->
    <path d="M 270 165 L 212.4 85.7 A 98 98 0 0 1 270 67 Z" fill="#334155"/>
  </g>

  <!-- Crisp leader lines -->
  <g fill="none" stroke="#64748b" stroke-width="1.3">
    <!-- Tropical Evergreen -->
    <polyline points="349,108 378,94 398,94"/>
    <!-- Deciduous -->
    <polyline points="286,262 315,280 374,280"/>
    <!-- Mangrove -->
    <polyline points="177,195 148,214 134,214"/>
    <!-- Alpine -->
    <polyline points="183,121 148,121 134,121"/>
    <!-- Scrub -->
    <polyline points="240,72 214,50 198,50"/>
  </g>

  <!-- Labels -->
  <g font-family="Arial, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">
    <text x="404" y="88">Tropical</text>
    <text x="404" y="104">Evergreen</text>
    <text x="404" y="120" fill="#1e3a8a">30%</text>

    <text x="380" y="276">Deciduous</text>
    <text x="380" y="292" fill="#0f766e">35%</text>

    <text x="128" y="210" text-anchor="end">Mangrove</text>
    <text x="128" y="226" text-anchor="end" fill="#b45309">10%</text>

    <text x="128" y="118" text-anchor="end">Alpine</text>
    <text x="128" y="134" text-anchor="end" fill="#475569">15%</text>

    <text x="192" y="47" text-anchor="end">Scrub</text>
    <text x="192" y="63" text-anchor="end" fill="#334155">10%</text>
  </g>
</svg>
`);

const Q75_BAR_GRAPH_SVG = svgUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 310" width="540" height="310">
  <rect width="540" height="310" fill="#ffffff"/>
  <text x="288" y="26" text-anchor="middle" font-family="Arial, sans-serif" font-size="14.5" font-weight="700" fill="#0f172a">Number of Cases by Resolution Attempts</text>

  <!-- Gridlines (0..40, y=48..248, 5px/unit) -->
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="68" y1="48" x2="508" y2="48"/>
    <line x1="68" y1="73" x2="508" y2="73"/>
    <line x1="68" y1="98" x2="508" y2="98"/>
    <line x1="68" y1="123" x2="508" y2="123"/>
    <line x1="68" y1="148" x2="508" y2="148"/>
    <line x1="68" y1="173" x2="508" y2="173"/>
    <line x1="68" y1="198" x2="508" y2="198"/>
    <line x1="68" y1="223" x2="508" y2="223"/>
  </g>
  <line x1="68" y1="48" x2="68" y2="248" stroke="#334155" stroke-width="1.5"/>
  <line x1="68" y1="248" x2="508" y2="248" stroke="#334155" stroke-width="1.5"/>

  <g font-family="Arial, sans-serif" font-size="11" fill="#334155" text-anchor="end">
    <text x="60" y="52">40</text>
    <text x="60" y="77">35</text>
    <text x="60" y="102">30</text>
    <text x="60" y="127">25</text>
    <text x="60" y="152">20</text>
    <text x="60" y="177">15</text>
    <text x="60" y="202">10</text>
    <text x="60" y="227">5</text>
    <text x="60" y="252">0</text>
  </g>

  <!-- Bars -->
  <g fill="#0f172a">
    <rect x="88" y="178" width="34" height="70"/>
    <rect x="161" y="118" width="34" height="130"/>
    <rect x="234" y="73" width="34" height="175"/>
    <rect x="307" y="173" width="34" height="75"/>
    <rect x="380" y="213" width="34" height="35"/>
    <rect x="453" y="233" width="34" height="15"/>
  </g>

  <!-- Data labels -->
  <g font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">
    <text x="105" y="171">14</text>
    <text x="178" y="111">26</text>
    <text x="251" y="66">35</text>
    <text x="324" y="166">15</text>
    <text x="397" y="206">7</text>
    <text x="470" y="226">3</text>
  </g>

  <!-- X-axis labels -->
  <g font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="#334155" text-anchor="middle">
    <text x="105" y="268">1</text>
    <text x="178" y="268">2</text>
    <text x="251" y="268">3</text>
    <text x="324" y="268">4</text>
    <text x="397" y="268">5</text>
    <text x="470" y="268">6</text>
  </g>

  <!-- Axis titles -->
  <text x="288" y="294" text-anchor="middle" font-family="Arial, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">Resolution Attempts</text>
  <text x="20" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a" transform="rotate(-90 20 148)">Number of Cases</text>
</svg>
`);

// ============================================================================
// SECTION 3: QUANTITATIVE APTITUDE (Q1–Q25 / PDF 1051–1075)
// ============================================================================

const SECTION_3_QUANT_06S3: Question[] = [
  {
    id: 'cgl26_06o3_q51',
    topic: 'Simplification & Surds',
    questionEn: 'If √(1 + x/256) = 17/16, find the value of x.',
    questionHi: 'यदि √(1 + x/256) = 17/16 है, तो x का मान ज्ञात कीजिए।',
    optionsEn: ['24', '45', '52', '33'],
    optionsHi: ['24', '45', '52', '33'],
    correctIndex: 3,
    explanationEn:
      'Squaring both sides:\n1 + x/256 = (17/16)² = 289/256\n⇒ x/256 = 289/256 − 1 = 33/256\n⇒ x = 33.\n\nShort Trick: When √(1 + x/a²) = b/a, x = b² − a² = (b + a)(b − a) = (17 + 16)(17 − 16) = 33 × 1 = 33.',
    explanationHi:
      'दोनों पक्षों का वर्ग करने पर:\n1 + x/256 = 289/256\n⇒ x/256 = 289/256 − 1 = 33/256\n⇒ x = 33।\n\nशॉर्ट ट्रिक: x = 17² − 16² = (17 + 16)(17 − 16) = 33 × 1 = 33।',
  },
  {
    id: 'cgl26_06o3_q52',
    topic: 'Algebraic Identities & Simplification',
    questionEn: 'Simplify: [(0.6)⁴ − (0.5)⁴] ÷ [(0.6)² + (0.5)²].',
    questionHi: 'सरल कीजिए: [(0.6)⁴ − (0.5)⁴] ÷ [(0.6)² + (0.5)²].',
    optionsEn: ['0.15', '0.11', '0.18', '0.19'],
    optionsHi: ['0.15', '0.11', '0.18', '0.19'],
    correctIndex: 1,
    explanationEn:
      'Using the identity a⁴ − b⁴ = (a² − b²)(a² + b²):\n[(0.6)⁴ − (0.5)⁴] ÷ [(0.6)² + (0.5)²]\n= [(0.6)² − (0.5)²]\n= 0.36 − 0.25 = 0.11.',
    explanationHi:
      'सर्वसमिका a⁴ − b⁴ = (a² − b²)(a² + b²) का प्रयोग करने पर:\n[(0.6)⁴ − (0.5)⁴] ÷ [(0.6)² + (0.5)²]\n= (0.6)² − (0.5)²\n= 0.36 − 0.25 = 0.11।',
  },
  {
    id: 'cgl26_06o3_q53',
    topic: 'Ratio & Proportion',
    questionEn: 'If A : B = 5 : 6 and B : C = 10 : 9, find A : B : C.',
    questionHi: 'यदि A : B = 5 : 6 और B : C = 10 : 9 है, तो A : B : C ज्ञात कीजिए।',
    optionsEn: ['25:30:27', '15:20:9', '10:15:17', '25:40:19'],
    optionsHi: ['25:30:27', '15:20:9', '10:15:17', '25:40:19'],
    correctIndex: 0,
    explanationEn:
      'Make the common term B equal using LCM(6, 10) = 30:\n• A : B = 5 : 6 = (5 × 5) : (6 × 5) = 25 : 30\n• B : C = 10 : 9 = (10 × 3) : (9 × 3) = 30 : 27\nTherefore, A : B : C = 25 : 30 : 27.',
    explanationHi:
      'उभयनिष्ठ पद B को समान करने के लिए LCM(6, 10) = 30 लें:\n• A : B = 5 : 6 = 25 : 30\n• B : C = 10 : 9 = 30 : 27\nअतः A : B : C = 25 : 30 : 27।',
  },
  {
    id: 'cgl26_06o3_q54',
    topic: 'Time & Work (Wages)',
    questionEn:
      'A alone completes a work in 12 days. With the help of an assistant, the work is completed in 8 days. If total wages are ₹600, find the assistant’s share.',
    questionHi:
      'A अकेले एक काम को 12 दिनों में पूरा करता है। एक सहायक की मदद से, वह काम 8 दिनों में पूरा हो जाता है। यदि कुल मज़दूरी ₹600 है, तो सहायक का हिस्सा ज्ञात कीजिए।',
    optionsEn: ['₹260', '₹140', '₹160', '₹200'],
    optionsHi: ['₹260', '₹140', '₹160', '₹200'],
    correctIndex: 3,
    explanationEn:
      'Let Total Work = LCM(12, 8) = 24 units.\n• Efficiency of A = 24 / 12 = 2 units/day\n• Combined efficiency of (A + Assistant) = 24 / 8 = 3 units/day\n• Efficiency of Assistant = 3 − 2 = 1 unit/day\nSince both worked together for the entire 8 days, wages divide in the ratio of efficiencies = 2 : 1.\nAssistant’s share = (1 / 3) × ₹600 = ₹200.',
    explanationHi:
      'माना कुल कार्य = LCM(12, 8) = 24 इकाई।\n• A की कार्यक्षमता = 24 / 12 = 2 इकाई/दिन\n• (A + सहायक) की कार्यक्षमता = 24 / 8 = 3 इकाई/दिन\n• सहायक की कार्यक्षमता = 3 − 2 = 1 इकाई/दिन\nमज़दूरी कार्यक्षमता के अनुपात (2 : 1) में बँटेगी।\nसहायक का हिस्सा = (1/3) × 600 = ₹200।',
  },
  {
    id: 'cgl26_06o3_q55',
    topic: 'Algebra',
    questionEn: 'If x + 1/x = 4√2, then find the value of x⁴ + 1/x⁴.',
    questionHi: 'यदि x + 1/x = 4√2, तो x⁴ + 1/x⁴ का मान ज्ञात कीजिए।',
    optionsEn: ['884', '878', '898', '866'],
    optionsHi: ['884', '878', '898', '866'],
    correctIndex: 2,
    explanationEn:
      'Formula: If x + 1/x = k, then x² + 1/x² = k² − 2.\nStep 1: x² + 1/x² = (4√2)² − 2 = 32 − 2 = 30.\nStep 2: x⁴ + 1/x⁴ = (30)² − 2 = 900 − 2 = 898.',
    explanationHi:
      'सूत्र: यदि x + 1/x = k हो, तो x² + 1/x² = k² − 2।\nचरण 1: x² + 1/x² = (4√2)² − 2 = 32 − 2 = 30।\nचरण 2: x⁴ + 1/x⁴ = 30² − 2 = 900 − 2 = 898।',
  },
  {
    id: 'cgl26_06o3_q56',
    topic: 'Simple Interest',
    questionEn:
      'A person divided a sum of ₹17,200 into two parts and invested them at 8% and 10% per annum simple interest respectively. If the total interest received after 2 years is ₹3,008, what is the difference between the two parts?',
    questionHi:
      'एक व्यक्ति ₹17,200 की एक धनराशि को दो भागों में विभाजित करता है और उन्हें क्रमशः 8% तथा 10% प्रति वर्ष की दर से साधारण ब्याज पर निवेश करता है। यदि 2 वर्षों के बाद प्राप्त कुल ब्याज ₹3,008 है, तो दोनों भागों के बीच का अंतर क्या है?',
    optionsEn: ['₹4,000', '₹4,400', '₹5,200', '₹3,600'],
    optionsHi: ['₹4,000', '₹4,400', '₹5,200', '₹3,600'],
    correctIndex: 1,
    explanationEn:
      'Short Trick (Splitting Rate Method):\n• Total interest for 1 year = ₹3,008 ÷ 2 = ₹1,504.\n• If the entire ₹17,200 were invested at 8%, 1-year interest = 8% of 17,200 = ₹1,376.\n• Extra interest = 1,504 − 1,376 = ₹128, which comes from the extra 2% on the second part.\n⇒ 2% of Part 2 = ₹128 ⇒ Part 2 = ₹6,400.\n⇒ Part 1 = 17,200 − 6,400 = ₹10,800.\n• Difference between the two parts = 10,800 − 6,400 = ₹4,400.',
    explanationHi:
      'शॉर्ट ट्रिक (दर विभाजन विधि):\n• 1 वर्ष का कुल ब्याज = 3,008 ÷ 2 = ₹1,504।\n• यदि पूरी राशि (₹17,200) 8% पर निवेश होती, तो 1 वर्ष का ब्याज = 17,200 × 8% = ₹1,376।\n• अतिरिक्त ब्याज = 1,504 − 1,376 = ₹128 (जो दूसरे भाग पर अतिरिक्त 2% दर से मिला)।\n⇒ दूसरे भाग का 2% = ₹128 ⇒ दूसरा भाग = ₹6,400।\n⇒ पहला भाग = 17,200 − 6,400 = ₹10,800।\n• दोनों भागों का अंतर = 10,800 − 6,400 = ₹4,400।',
  },
  {
    id: 'cgl26_06o3_q57',
    topic: 'Coordinate Geometry (Linear Equations)',
    questionEn: 'The graph of the equation 2x + 0y = 10 represents a:',
    questionHi: 'समीकरण 2x + 0y = 10 का ग्राफ क्या निरूपित करता है:',
    optionsEn: [
      'Horizontal line at y = 5',
      'Vertical line at x = 5',
      'Line passing through the origin',
      'Oblique line',
    ],
    optionsHi: [
      'y = 5 पर क्षैतिज रेखा',
      'x = 5 पर ऊर्ध्वाधर रेखा',
      'मूल बिंदु से गुजरने वाली रेखा',
      'तिरछी रेखा',
    ],
    correctIndex: 1,
    explanationEn:
      'Simplifying 2x + 0y = 10 gives 2x = 10 ⇒ x = 5.\nSince x is always constant (5) for every real value of y, its graph is a vertical straight line parallel to the y-axis passing through (5, 0) — i.e., a vertical line at x = 5.',
    explanationHi:
      'समीकरण 2x + 0y = 10 को सरल करने पर 2x = 10 ⇒ x = 5 प्राप्त होता है।\ny के प्रत्येक मान के लिए x = 5 नियत रहता है, अतः इसका ग्राफ y-अक्ष के समानांतर x = 5 पर एक ऊर्ध्वाधर रेखा (Vertical line) है।',
  },
  {
    id: 'cgl26_06o3_q58',
    topic: 'Compound Interest',
    questionEn:
      "A man deposits ₹2,00,000 at 10% p.a. compound interest. After the first year's interest is credited, he withdraws 40% of the interest earned. Find the balance at the end of the second year.",
    questionHi:
      'एक व्यक्ति ₹2,00,000 को 10% वार्षिक चक्रवृद्धि ब्याज पर जमा करता है। पहले वर्ष का ब्याज जुड़ने के बाद, वह अर्जित किए गए ब्याज का 40% निकाल लेता है। दूसरे वर्ष के अंत में शेष राशि ज्ञात करें।',
    optionsEn: ['₹2,93,200', '₹2,63,200', '₹2,33,200', '₹2,03,200'],
    optionsHi: ['₹2,93,200', '₹2,63,200', '₹2,33,200', '₹2,03,200'],
    correctIndex: 2,
    explanationEn:
      '• Principal (P) = ₹2,00,000, Rate (R) = 10% p.a.\n• Interest earned in Year 1 = 10% of 2,00,000 = ₹20,000.\n• Amount withdrawn = 40% of ₹20,000 = ₹8,000 (so 60% = ₹12,000 stays in the account).\n• New Principal for Year 2 = 2,00,000 + 12,000 = ₹2,12,000.\n• Balance at end of Year 2 = 2,12,000 × (1 + 10/100) = 2,12,000 × 1.1 = ₹2,33,200.',
    explanationHi:
      '• मूलधन = ₹2,00,000, दर = 10% वार्षिक।\n• पहले वर्ष का ब्याज = 2,00,000 का 10% = ₹20,000।\n• निकाली गई राशि = 20,000 का 40% = ₹8,000 (अतः शेष ब्याज = ₹12,000 खाते में रहा)।\n• दूसरे वर्ष के लिए नया मूलधन = 2,00,000 + 12,000 = ₹2,12,000।\n• दूसरे वर्ष के अंत में शेष राशि = 2,12,000 × 110/100 = ₹2,33,200।',
  },
  {
    id: 'cgl26_06o3_q59',
    topic: 'Mensuration 3D (Cuboid & Cubes)',
    questionEn:
      'A box is 80 cm × 64 cm × 48 cm. Find how many cubes of side 8 cm can be arranged inside without gaps.',
    questionHi:
      'एक बक्सा 80 cm × 64 cm × 48 cm का है। पता लगाइए कि इसके अंदर 8 cm भुजा वाले कितने घन बिना किसी खाली जगह के रखे जा सकते हैं।',
    optionsEn: ['480', '370', '530', '250'],
    optionsHi: ['480', '370', '530', '250'],
    correctIndex: 0,
    explanationEn:
      'Since every dimension of the box (80, 64, 48) is exactly divisible by the cube side (8 cm):\nNumber of cubes = (80 / 8) × (64 / 8) × (48 / 8) = 10 × 8 × 6 = 480.',
    explanationHi:
      'चूँकि बक्से की तीनों विमाएँ (80, 64, 48) घन की भुजा 8 cm से पूर्णतः विभाज्य हैं:\nघनों की संख्या = (80/8) × (64/8) × (48/8) = 10 × 8 × 6 = 480।',
  },
  {
    id: 'cgl26_06o3_q60',
    topic: 'Geometry (Circles)',
    questionEn: 'A chord of a circle is 25.4 cm long. Determine the radius of the circle.',
    questionHi: 'एक वृत्त की जीवा 25.4 cm लंबी है। वृत्त की त्रिज्या ज्ञात कीजिए।',
    optionsEn: ['r ≥ 12.7 cm', 'r ≤ 12.7 cm', 'r > 12.7 cm', 'r = 12.7 cm'],
    optionsHi: ['r ≥ 12.7 cm', 'r ≤ 12.7 cm', 'r > 12.7 cm', 'r = 12.7 cm'],
    correctIndex: 0,
    explanationEn:
      'Property: The longest possible chord of a circle is its diameter (2r). Any chord of length L must satisfy:\nL ≤ 2r ⇒ 25.4 ≤ 2r ⇒ r ≥ 12.7 cm.\n(Equality holds when the chord itself is a diameter; otherwise r > 12.7 cm.)',
    explanationHi:
      'गुणधर्म: किसी वृत्त की सबसे लंबी जीवा उसका व्यास (2r) होती है। अतः किसी भी जीवा की लंबाई L सदैव व्यास से छोटी या बराबर होती है:\n25.4 ≤ 2r ⇒ r ≥ 12.7 cm।',
  },
  {
    id: 'cgl26_06o3_q61',
    topic: 'Mensuration 2D (Rhombus)',
    questionEn:
      'The area of a rhombus is 150 cm². If the ratio of its diagonals is 3:4, find its perimeter.',
    questionHi:
      'एक समचतुर्भुज का क्षेत्रफल 150 cm² है। यदि उसके विकर्णों का अनुपात 3 : 4 है, तो उसकी परिमाप ज्ञात कीजिए।',
    optionsEn: ['40 cm', '50 cm', '60 cm', '80 cm'],
    optionsHi: ['40 cm', '50 cm', '60 cm', '80 cm'],
    correctIndex: 1,
    explanationEn:
      'Let diagonals be d₁ = 3k and d₂ = 4k.\nArea = (1/2) × d₁ × d₂ = (1/2) × 3k × 4k = 6k² = 150\n⇒ k² = 25 ⇒ k = 5.\nSo d₁ = 15 cm and d₂ = 20 cm.\nDiagonals of a rhombus bisect at 90°, forming right triangles with legs d₁/2 = 7.5 cm and d₂/2 = 10 cm (3–4–5 triplet scaled by 2.5):\nSide a = √(7.5² + 10²) = 12.5 cm.\nPerimeter = 4a = 4 × 12.5 = 50 cm.',
    explanationHi:
      'माना विकर्ण d₁ = 3k तथा d₂ = 4k हैं।\nक्षेत्रफल = (1/2) × d₁ × d₂ = 6k² = 150 ⇒ k² = 25 ⇒ k = 5।\nअतः d₁ = 15 cm और d₂ = 20 cm।\nअर्ध-विकर्ण = 7.5 cm तथा 10 cm।\nसमचतुर्भुज की भुजा = √(7.5² + 10²) = 12.5 cm।\nपरिमाप = 4 × 12.5 = 50 cm।',
  },
  {
    id: 'cgl26_06o3_q62',
    topic: 'Trigonometry',
    questionEn:
      'In a triangle ABC, right-angled at B, if tan A = 5/2, find the value of [sin A (cos C + cos A)] / [cos C (sin C − sin A)].',
    questionHi:
      'एक त्रिभुज ABC में, जिसका कोण B समकोण है, यदि tan A = 5/2 है, तो [sin A (cos C + cos A)] / [cos C (sin C − sin A)] का मान ज्ञात कीजिए।',
    optionsEn: ['7/3', '5/2', '−7/3', '−5/2'],
    optionsHi: ['7/3', '5/2', '−7/3', '−5/2'],
    correctIndex: 2,
    explanationEn:
      'Since ∠B = 90°, angles A and C are complementary (A + C = 90°):\n⇒ cos C = sin A and sin C = cos A.\nSubstituting into the expression:\n[sin A (sin A + cos A)] / [sin A (cos A − sin A)]\n= (sin A + cos A) / (cos A − sin A)\nDivide numerator & denominator by cos A:\n= (tan A + 1) / (1 − tan A) = (5/2 + 1) / (1 − 5/2) = (7/2) / (−3/2) = −7/3.',
    explanationHi:
      'चूँकि ∠B = 90°, अतः A + C = 90° ⇒ cos C = sin A तथा sin C = cos A।\nदिए गए व्यंजक में मान रखने पर:\n[sin A (sin A + cos A)] / [sin A (cos A − sin A)] = (sin A + cos A) / (cos A − sin A)\nअंश और हर को cos A से भाग देने पर:\n= (tan A + 1) / (1 − tan A) = (5/2 + 1) / (1 − 5/2) = (7/2) / (−3/2) = −7/3।',
  },
  {
    id: 'cgl26_06o3_q63',
    topic: 'Mensuration 3D (Prism)',
    questionEn:
      'The base of a prism is a right-angled isosceles triangle whose hypotenuse is 4√2 cm. If the height of the prism is 15 cm, find the volume of the prism.',
    questionHi:
      'एक प्रिज्म का आधार एक समद्विबाहु समकोण त्रिभुज है, जिसकी कर्ण की लंबाई 4√2 cm है। यदि प्रिज्म की ऊँचाई 15 cm है, तो प्रिज्म का आयतन ज्ञात कीजिए।',
    optionsEn: ['120 cm³', '144 cm³', '96 cm³', '112 cm³'],
    optionsHi: ['120 cm³', '144 cm³', '96 cm³', '112 cm³'],
    correctIndex: 0,
    explanationEn:
      'For a right-angled isosceles triangle with equal legs a, hypotenuse = a√2.\nGiven a√2 = 4√2 ⇒ a = 4 cm.\n• Area of base = (1/2) × a × a = (1/2) × 4 × 4 = 8 cm².\n• Volume of prism = Base Area × Height = 8 × 15 = 120 cm³.',
    explanationHi:
      'समद्विबाहु समकोण त्रिभुज में यदि समान भुजाएँ a हों, तो कर्ण = a√2।\nदिया है: a√2 = 4√2 ⇒ a = 4 cm।\n• आधार का क्षेत्रफल = (1/2) × 4 × 4 = 8 cm²।\n• प्रिज्म का आयतन = आधार का क्षेत्रफल × ऊँचाई = 8 × 15 = 120 cm³।',
  },
  {
    id: 'cgl26_06o3_q64',
    topic: 'Algebra & Surds',
    questionEn: 'If x = √[(6 + √35) / (6 − √35)], then what is the value of x² + 1/x²?',
    questionHi: 'यदि x = √[(6 + √35) / (6 − √35)], तो x² + 1/x² का मान क्या है?',
    optionsEn: ['75', '86', '121', '142'],
    optionsHi: ['75', '86', '121', '142'],
    correctIndex: 3,
    explanationEn:
      'Rationalize the denominator inside the square root by multiplying numerator and denominator by (6 + √35):\nx = √[(6 + √35)² / (6² − (√35)²)] = √[(6 + √35)² / (36 − 35)] = 6 + √35.\nTherefore, 1/x = 6 − √35.\n⇒ x + 1/x = (6 + √35) + (6 − √35) = 12.\n⇒ x² + 1/x² = (x + 1/x)² − 2 = 12² − 2 = 144 − 2 = 142.',
    explanationHi:
      'हर का परिमेयकरण करने पर:\nx = √[(6 + √35)² / (36 − 35)] = 6 + √35।\nअतः 1/x = 6 − √35।\n⇒ x + 1/x = 6 + √35 + 6 − √35 = 12।\n⇒ x² + 1/x² = 12² − 2 = 144 − 2 = 142।',
  },
  {
    id: 'cgl26_06o3_q65',
    topic: 'Geometry (Congruent Triangles)',
    questionEn:
      'Two triangles, ABC and PQR, are congruent right-angled triangles where angle A and angle P are each 90°. If the hypotenuse BC measures 13 cm and side PR measures 5 cm, determine the length of side AB.',
    questionHi:
      'दो त्रिभुज, ABC और PQR, सर्वांगसम समकोण त्रिभुज हैं, जिनमें कोण A और कोण P दोनों 90° के हैं। यदि कर्ण BC की लंबाई 13 cm और भुजा PR की लंबाई 5 cm है, तो भुजा AB की लंबाई ज्ञात कीजिए।',
    optionsEn: ['8 cm', '6 cm', '12 cm', '10 cm'],
    optionsHi: ['8 cm', '6 cm', '12 cm', '10 cm'],
    correctIndex: 2,
    explanationEn:
      'Since △ABC ≅ △PQR with ∠A = ∠P = 90°, corresponding sides are equal:\n• AC = PR = 5 cm\n• Hypotenuse BC = QR = 13 cm\nApplying Pythagoras theorem in right △ABC (5–12–13 triplet):\nAB = √(BC² − AC²) = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.',
    explanationHi:
      'चूँकि △ABC ≅ △PQR तथा ∠A = ∠P = 90°, अतः संगत भुजाएँ समान होंगी:\n• AC = PR = 5 cm, कर्ण BC = 13 cm।\nसमकोण △ABC में पाइथागोरस प्रमेय से (5–12–13 त्रिक):\nAB = √(13² − 5²) = √(169 − 25) = √144 = 12 cm।',
  },
  {
    id: 'cgl26_06o3_q66',
    topic: 'Geometry (Circles — Chords)',
    questionEn:
      'A chord of a circle measures 40 cm and is 15 cm away from the centre. What will be the length of another chord of the same circle that is 20 cm away from the centre?',
    questionHi:
      'एक वृत्त की जीवा की लंबाई 40 cm है और वह केंद्र से 15 cm दूर है। उसी वृत्त की दूसरी जीवा की लंबाई क्या होगी जो केंद्र से 20 cm दूर है?',
    optionsEn: ['15 cm', '30 cm', '45 cm', '60 cm'],
    optionsHi: ['15 cm', '30 cm', '45 cm', '60 cm'],
    correctIndex: 1,
    explanationEn:
      'The perpendicular from the centre bisects any chord.\n• For 1st chord: half-length = 40/2 = 20 cm, distance d₁ = 15 cm.\n  Radius r = √(20² + 15²) = √(400 + 225) = √625 = 25 cm (15–20–25 triplet).\n• For 2nd chord at distance d₂ = 20 cm:\n  Half-length = √(r² − d₂²) = √(25² − 20²) = √225 = 15 cm.\n• Full length of 2nd chord = 2 × 15 = 30 cm.',
    explanationHi:
      'केंद्र से जीवा पर डाला गया लंब जीवा को समद्विभाजित करता है।\n• पहली जीवा का आधा = 40/2 = 20 cm, दूरी = 15 cm।\n  वृत्त की त्रिज्या r = √(20² + 15²) = √625 = 25 cm।\n• दूसरी जीवा (दूरी = 20 cm) का आधा = √(25² − 20²) = √225 = 15 cm।\n• दूसरी जीवा की कुल लंबाई = 2 × 15 = 30 cm।',
  },
  {
    id: 'cgl26_06o3_q67',
    topic: 'Mixture & Alligation',
    questionEn:
      'An alloy contains 35% copper, 25% zinc and 40% nickel. How much copper (in kg) should be added to 20 kg of the alloy so that the new alloy contains 50% copper?',
    questionHi:
      'एक मिश्रधातु में 35% ताँबा, 25% जस्ता और 40% निकेल है। इस मिश्रधातु के 20 kg में कितना ताँबा (kg में) मिलाया जाए ताकि नई मिश्रधातु में ताँबे की मात्रा 50% हो जाए?',
    optionsEn: ['8 kg', '6 kg', '12 kg', '16 kg'],
    optionsHi: ['8 kg', '6 kg', '12 kg', '16 kg'],
    correctIndex: 1,
    explanationEn:
      'Short Trick (Constant Component Method):\nOnly copper is added, so the weight of other metals (zinc + nickel = 65%) stays constant:\n• Other metals = 65% of 20 kg = 13 kg.\n• In the new alloy, copper is 50%, so other metals = 50%.\n⇒ 50% of New Total Weight = 13 kg ⇒ New Total Weight = 26 kg.\n• Copper added = 26 − 20 = 6 kg.',
    explanationHi:
      'शॉर्ट ट्रिक (स्थिर घटक विधि):\nकेवल ताँबा मिलाया जाता है, अतः शेष धातुएँ (जस्ता + निकेल = 65%) अपरिवर्तित रहेंगी।\n• शेष धातुओं की मात्रा = 20 kg का 65% = 13 kg।\n• नई मिश्रधातु में ताँबा 50% है, अतः शेष धातुएँ भी 50% होंगी।\n⇒ नई कुल मात्रा का 50% = 13 kg ⇒ नई कुल मात्रा = 26 kg।\n• मिलाया गया ताँबा = 26 − 20 = 6 kg।',
  },
  {
    id: 'cgl26_06o3_q68',
    topic: 'Data Interpretation (Frequency Polygon)',
    questionEn:
      'Read the following frequency polygon which represents class interval (Axis Daily Traffic Volume (Hundreds of Unique Users)) on the x-axis and frequency (Number of Days) on the y-axis, and answer the following question:\nWhich interval shows the sharpest decline in number of days compared to the previous interval?',
    questionHi:
      'निम्नलिखित आवृत्ति बहुभुज का अध्ययन कीजिए, जो x-अक्ष पर वर्गांतराल (एक्सिस दैनिक यातायात आयतन (सैकड़ों अद्वितीय उपयोगकर्ता)) तथा y-अक्ष पर आवृत्ति (दिनों की संख्या) को दर्शाता है, और नीचे दिए गए प्रश्न का उत्तर दीजिए:\nकौन-सा अंतराल पिछले अंतराल की तुलना में दिनों की संख्या में सबसे ज़्यादा गिरावट दिखाता है?',
    imageUrl: Q68_FREQ_POLYGON_SVG,
    optionsEn: [
      '70–90 to 90–110',
      '110–130 to 130–150',
      '90–110 to 110–130',
      '130–150 to 150–170',
    ],
    optionsHi: [
      '70–90 से 90–110',
      '110–130 से 130–150',
      '90–110 से 110–130',
      '130–150 से 150–170',
    ],
    correctIndex: 2,
    explanationEn:
      'Calculate the drop in Number of Days for each consecutive declining interval:\n• 70–90 to 90–110: 110 → 72 ⇒ Decline = 38 days\n• 90–110 to 110–130: 72 → 30 ⇒ Decline = 42 days (Sharpest!)\n• 110–130 to 130–150: 30 → 15 ⇒ Decline = 15 days\n• 130–150 to 150–170: 15 → 0 ⇒ Decline = 15 days\nHence, 90–110 to 110–130 shows the sharpest decline.',
    explanationHi:
      'प्रत्येक क्रमिक अंतराल में दिनों की संख्या में गिरावट की गणना:\n• 70–90 से 90–110: 110 − 72 = 38 दिन\n• 90–110 से 110–130: 72 − 30 = 42 दिन (सबसे अधिक गिरावट)\n• 110–130 से 130–150: 30 − 15 = 15 दिन\n• 130–150 से 150–170: 15 − 0 = 15 दिन\nअतः 90–110 से 110–130 अंतराल में सबसे ज़्यादा गिरावट हुई।',
  },
  {
    id: 'cgl26_06o3_q69',
    topic: 'Mensuration 3D (Percentage Change in Volume)',
    questionEn:
      'The radius of a cylinder is increased by 25% and its height is decreased by 20%. Find the percentage change in its volume.',
    questionHi:
      'एक बेलन की त्रिज्या 25% बढ़ाई जाती है और उसकी ऊँचाई 20% घटाई जाती है। उसके आयतन में प्रतिशत परिवर्तन ज्ञात कीजिए।',
    optionsEn: ['15% decrease', '25% increase', '10% increase', '20% decrease'],
    optionsHi: ['15% की कमी', '25% वृद्धि', '10% वृद्धि', '20% की कमी'],
    correctIndex: 1,
    explanationEn:
      'Volume of a cylinder V = πr²h (so V ∝ r² × h).\nRatio Method:\n• Radius (+25% = +1/4): 4 → 5 (squared: 16 → 25)\n• Height (−20% = −1/5): 5 → 4\n• Volume ratio = (16 × 5) : (25 × 4) = 80 : 100 = 4 : 5\nPercentage change = [(5 − 4) / 4] × 100% = +25% (25% increase).',
    explanationHi:
      'बेलन का आयतन V = πr²h (अर्थात् V ∝ r² × h)।\nअनुपात विधि:\n• त्रिज्या (+25%): 4 → 5 ⇒ r²: 16 → 25\n• ऊँचाई (−20%): 5 → 4\n• आयतन का अनुपात = (16 × 5) : (25 × 4) = 80 : 100 = 4 : 5\nप्रतिशत वृद्धि = (1/4) × 100% = 25% वृद्धि।',
  },
  {
    id: 'cgl26_06o3_q70',
    topic: 'Profit, Loss & Discount',
    questionEn:
      'A shopkeeper marks an article 35% above its cost price. If he sells it after allowing a discount of 15%, what is his gain percentage?',
    questionHi:
      'एक दुकानदार किसी वस्तु का अंकित मूल्य उसकी लागत मूल्य से 35% अधिक रखता है। यदि वह इसे 15% की छूट देकर बेचता है, तो उसका लाभ प्रतिशत क्या होगा?',
    optionsEn: ['18.35%', '16.25%', '14.75%', '19.55%'],
    optionsHi: ['18.35%', '16.25%', '14.75%', '19.55%'],
    correctIndex: 2,
    explanationEn:
      'Successive Percentage Formula:\nNet Gain % = M − D − (M × D) / 100\n= 35 − 15 − (35 × 15) / 100\n= 20 − 5.25 = 14.75%.',
    explanationHi:
      'क्रमिक प्रतिशत सूत्र:\nलाभ % = M − D − (M × D) / 100\n= 35 − 15 − (35 × 15) / 100\n= 20 − 5.25 = 14.75%।',
  },
  {
    id: 'cgl26_06o3_q71',
    topic: 'Statistics & Data Interpretation (Histogram)',
    questionEn:
      'Read the given histogram carefully which shows daily wages (in ₹) of workers along with the number of workers (frequency) in each class interval and answer the question that follows:\nDetermine the median class of wages.',
    questionHi:
      'दिए गए हिस्टोग्राम को ध्यानपूर्वक पढ़ें, जो प्रत्येक वर्ग अंतराल में श्रमिकों की दैनिक वेतन (₹ में) तथा श्रमिकों की संख्या (आवृत्ति) को दर्शाता है, और दिए गए प्रश्न का उत्तर दें:\nवेतन का माध्यिका वर्ग निर्धारित करें।',
    imageUrl: Q71_HISTOGRAM_SVG,
    optionsEn: ['190-200', '200-210', '170-180', '180-190'],
    optionsHi: ['190-200', '200-210', '170-180', '180-190'],
    correctIndex: 3,
    explanationEn:
      'Compute Cumulative Frequencies (CF):\n• 150–160: f = 55, CF = 55\n• 160–170: f = 80, CF = 135\n• 170–180: f = 108, CF = 243\n• 180–190: f = 117, CF = 360\n• 190–200: f = 150, CF = 510\n• 200–210: f = 105, CF = 615\n• 210–220: f = 70, CF = 685\n\nTotal frequency N = 685 ⇒ N/2 = 342.5.\nThe first class whose CF ≥ 342.5 is 180–190 (CF = 360). Hence, the median class is 180-190.',
    explanationHi:
      'संचयी आवृत्ति (CF) ज्ञात करने पर:\n• 150–160: 55\n• 160–170: 55 + 80 = 135\n• 170–180: 135 + 108 = 243\n• 180–190: 243 + 117 = 360\n• 190–200: 510, 200–210: 615, 210–220: 685\n\nकुल आवृत्ति N = 685 ⇒ N/2 = 342.5।\n342.5 से ठीक बड़ी संचयी आवृत्ति 360 है, जो वर्ग 180-190 में आती है। अतः माध्यिका वर्ग 180-190 है।',
  },
  {
    id: 'cgl26_06o3_q72',
    topic: 'Data Interpretation (Pie Chart)',
    questionEn:
      "The following pie-chart represents the percentage-wise share of different forest types within a specified region. Analyze the data distribution provided in the chart and answer the question that follows.\nLet us assume that the 'Combined High Growth Zone' is made up of 'Tropical Evergreen' and 'Deciduous' forests, while the 'Sparse Zone' is made up of 'Scrub' and 'Mangrove' forests. By how many percentage points is the 'High Growth Zone' greater than the 'Sparse Zone'?",
    questionHi:
      "निम्नलिखित वृत्त आरेख (Pie-chart) एक निर्दिष्ट क्षेत्र के भीतर विभिन्न प्रकार के वनों के प्रतिशतानुसार हिस्से को दर्शाता है। आरेख में दिए गए आँकड़ों का विश्लेषण कीजिए और उसके आधार पर निम्नलिखित प्रश्न का उत्तर दीजिए:\nमान लीजिए कि ‘संयुक्त उच्च वृद्धि क्षेत्र’ (‘Combined High Growth Zone’) ‘उष्णकटिबंधीय सदाबहार वन’ (Tropical Evergreen) और 'पतझड़ी' (Deciduous) वनों से मिलकर बना है, जबकि ‘विरल क्षेत्र’ (Sparse Zone) ‘झाड़ियाँ’ (Scrub) और ‘मैंग्रोव’ (Mangrove) वनों से मिलकर बना है। ‘तेज़ विकास वाला क्षेत्र’ ‘विरल क्षेत्र’ से कितने प्रतिशत अंक अधिक है?",
    imageUrl: Q72_PIE_CHART_SVG,
    optionsEn: ['35', '40', '45', '50'],
    optionsHi: ['35', '40', '45', '50'],
    correctIndex: 2,
    explanationEn:
      'From the pie-chart:\n• Combined High Growth Zone = Tropical Evergreen (30%) + Deciduous (35%) = 65%\n• Sparse Zone = Scrub (10%) + Mangrove (10%) = 20%\n• Difference = 65% − 20% = 45 percentage points.',
    explanationHi:
      'वृत्त आरेख से:\n• संयुक्त उच्च वृद्धि क्षेत्र = उष्णकटिबंधीय सदाबहार (30%) + पतझड़ी (35%) = 65%\n• विरल क्षेत्र = झाड़ियाँ (10%) + मैंग्रोव (10%) = 20%\n• अंतर = 65 − 20 = 45 प्रतिशत अंक।',
  },
  {
    id: 'cgl26_06o3_q73',
    topic: 'Height & Distance',
    questionEn:
      "An observer 1.5 m tall is 28.5 m away from a tower. The angle of elevation of the top of the tower from the observer's eye is 45°. What is the height of the tower?",
    questionHi:
      'एक प्रेक्षक जिसकी ऊँचाई 1.5 m है, एक मीनार से 28.5 m दूर खड़ा है। प्रेक्षक की आँखों से मीनार के शीर्ष का उन्नयन कोण 45° है। मीनार की ऊँचाई ज्ञात कीजिए।',
    optionsEn: ['15 m', '20 m', '25 m', '30 m'],
    optionsHi: ['15 m', '20 m', '25 m', '30 m'],
    correctIndex: 3,
    explanationEn:
      'Let h be the height of the tower above the observer’s eye level.\nIn the right triangle formed with horizontal distance = 28.5 m and angle of elevation = 45°:\ntan 45° = h / 28.5 ⇒ 1 = h / 28.5 ⇒ h = 28.5 m.\nTotal height of the tower = h + observer’s height = 28.5 + 1.5 = 30 m.',
    explanationHi:
      'माना प्रेक्षक की आँखों के स्तर से ऊपर मीनार की ऊँचाई h है।\ntan 45° = h / 28.5 ⇒ 1 = h / 28.5 ⇒ h = 28.5 m।\nमीनार की कुल ऊँचाई = 28.5 + 1.5 = 30 m।',
  },
  {
    id: 'cgl26_06o3_q74',
    topic: 'Average',
    questionEn:
      'The average of 15 numbers is 72. The average of the first 8 numbers is 69, while the average of the last 6 numbers is 75. What is the ninth number?',
    questionHi:
      '15 संख्याओं का औसत 72 है। पहली 8 संख्याओं का औसत 69 है, जबकि अंतिम 6 संख्याओं का औसत 75 है। नौवीं संख्या क्या है?',
    optionsEn: ['66', '72', '78', '84'],
    optionsHi: ['66', '72', '78', '84'],
    correctIndex: 2,
    explanationEn:
      'Short Trick (Deviation Method):\n• Overall average = 72.\n• Deviation of first 8 numbers = 8 × (69 − 72) = −24.\n• Deviation of last 6 numbers = 6 × (75 − 72) = +18.\n• Combined deviation of these 14 numbers = −24 + 18 = −6.\nTo balance the average at 72, the 9th number must be 72 + 6 = 78.\n(Check: 15×72 − 8×69 − 6×75 = 1080 − 552 − 450 = 78.)',
    explanationHi:
      'शॉर्ट ट्रिक (विचलन विधि):\n• कुल औसत = 72।\n• पहली 8 संख्याओं का विचलन = 8 × (69 − 72) = −24।\n• अंतिम 6 संख्याओं का विचलन = 6 × (75 − 72) = +18।\n• कुल विचलन = −24 + 18 = −6।\nऔसत 72 बनाए रखने के लिए नौवीं संख्या = 72 + 6 = 78।',
  },
  {
    id: 'cgl26_06o3_q75',
    topic: 'Statistics & Data Interpretation (Bar Graph)',
    questionEn:
      'An E-Commerce platform tracks the number of attempts it takes to resolve customer disputes filed under a premium merchant category. The bar-graph below presents the distribution:\nFind the absolute difference between the mode and the median of this distribution.',
    questionHi:
      'एक ई-कॉमर्स प्लेटफ़ॉर्म प्रीमियम मर्चेंट कैटेगरी के तहत दर्ज ग्राहक विवादों का समाधान करने में लगने वाले प्रयासों की संख्या की निगरानी करता है। नीचे दिया गया बार-ग्राफ़ इसका बंटन दर्शाता है:\nइस बंटन के बहुलक और माध्यिका के बीच का निरपेक्ष अंतर ज्ञात कीजिए।',
    imageUrl: Q75_BAR_GRAPH_SVG,
    optionsEn: ['0', '1', '2', '3'],
    optionsHi: ['0', '1', '2', '3'],
    correctIndex: 0,
    explanationEn:
      'From the bar graph (Attempts → Frequency):\n1 → 14, 2 → 26, 3 → 35, 4 → 15, 5 → 7, 6 → 3.\n• Mode: The value with the highest frequency (35 cases) is 3 attempts ⇒ Mode = 3.\n• Median: Total cases N = 14 + 26 + 35 + 15 + 7 + 3 = 100.\n  Cumulative frequencies: 14, 40, 75, 90, 97, 100.\n  Both the 50th and 51st observations lie in the 41–75 range (Attempts = 3) ⇒ Median = 3.\n• Absolute difference = |Mode − Median| = |3 − 3| = 0.',
    explanationHi:
      'बार-ग्राफ़ से (प्रयास → आवृत्ति): 1→14, 2→26, 3→35, 4→15, 5→7, 6→3।\n• बहुलक (Mode): सर्वाधिक आवृत्ति (35) प्रयास संख्या 3 की है ⇒ बहुलक = 3।\n• माध्यिका (Median): कुल मामले N = 100। संचयी आवृत्तियाँ = 14, 40, 75, 90, 97, 100।\n  50वाँ और 51वाँ दोनों पद 41–75 के भीतर (प्रयास = 3) आते हैं ⇒ माध्यिका = 3।\n• निरपेक्ष अंतर = |3 − 3| = 0।',
  },
];

// ============================================================================
// SECTION 4: ENGLISH COMPREHENSION (Q1–Q25 / PDF 1076–1100)
// ============================================================================

const CLOZE_PASSAGE_06S3 =
  'Complete the following passage by filling in the blanks with the most appropriate words or phrases from the options given below.\n\nUrban farming has emerged as a practical response to growing concerns about food security, environmental degradation, and rapid urbanisation. Once regarded as a marginal activity, it is now increasingly recognised as a sustainable means of supplementing food supplies while promoting ecological awareness. (A) _______, many city dwellers have transformed vacant rooftops, balconies, and community spaces into productive gardens that contribute to local biodiversity. These initiatives not only reduce dependence on long-distance transportation but also foster a stronger sense of community responsibility. (B) _______ urban farming cannot entirely replace conventional agriculture, it serves as a valuable complement by encouraging responsible consumption and minimising food waste. In addition to producing fresh vegetables, urban gardens often (C) _______ social barriers by bringing together people from diverse economic and cultural backgrounds. Such interactions encourage cooperation and the exchange of practical knowledge, thereby strengthening neighbourhood ties. Moreover, the movement has generated widespread interest among policymakers and environmentalists, who regard it as an effective means of enhancing urban (D) _______. As cities continue to expand, the integration of green spaces into residential areas is increasingly viewed as a necessity rather than a luxury.\n\nConsequently, the long-term success of urban farming depends not only on individual enthusiasm but also (E) _______ supportive public policies, technological innovation, and sustained community participation. If managed effectively, urban farming may become an indispensable element of future city planning, helping to balance economic development with environmental responsibility.';

const SECTION_4_ENGLISH_06S3: Question[] = [
  {
    id: 'cgl26_06o3_q76',
    topic: 'Spelling Error',
    questionEn: 'Select the wrongly spelt word out of the four alternatives.',
    questionHi: 'Select the wrongly spelt word out of the four alternatives.',
    optionsEn: ['Comprehention', 'Surgeon', 'Discovery', 'Fathoms'],
    optionsHi: ['Comprehention', 'Surgeon', 'Discovery', 'Fathoms'],
    correctIndex: 0,
    explanationEn:
      '"Comprehention" is wrongly spelt. The correct spelling is "Comprehension" (ending in -sion, meaning the ability to understand something). Surgeon, Discovery, and Fathoms are all spelt correctly.',
    explanationHi:
      '"Comprehention" की वर्तनी गलत है; सही वर्तनी "Comprehension" (समझ/बोध) होती है। अन्य तीनों शब्द (Surgeon, Discovery, Fathoms) सही हैं।',
  },
  {
    id: 'cgl26_06o3_q77',
    topic: 'Spelling Error',
    questionEn: 'Select the wrongly spelt word out of the four alternatives.',
    questionHi: 'Select the wrongly spelt word out of the four alternatives.',
    optionsEn: ['Superstisious', 'Courteously', 'Superficial', 'Fertilizer'],
    optionsHi: ['Superstisious', 'Courteously', 'Superficial', 'Fertilizer'],
    correctIndex: 0,
    explanationEn:
      '"Superstisious" is wrongly spelt. The correct spelling is "Superstitious" (derived from superstition → -tious). Courteously, Superficial, and Fertilizer are spelt accurately.',
    explanationHi:
      '"Superstisious" की वर्तनी अशुद्ध है; सही वर्तनी "Superstitious" (अंधविश्वासी) है। शेष तीनों विकल्प सही लिखे गए हैं।',
  },
  {
    id: 'cgl26_06o3_q78',
    topic: 'Antonyms',
    questionEn:
      'Choose the most appropriate antonym of the underlined word.\nThe witness was accused of being "mendacious" during the trial.',
    questionHi:
      'Choose the most appropriate antonym of the underlined word.\nThe witness was accused of being "mendacious" during the trial.',
    optionsEn: ['Dishonest', 'Truthful', 'False', 'Deceitful'],
    optionsHi: ['Dishonest', 'Truthful', 'False', 'Deceitful'],
    correctIndex: 1,
    explanationEn:
      '"Mendacious" means not telling the truth; lying or dishonest. Dishonest, False, and Deceitful are all synonyms. Its exact antonym is "Truthful" (Option B).',
    explanationHi:
      '"Mendacious" का अर्थ झूठा या असत्यवादी होता है। Dishonest, False और Deceitful इसके पर्यायवाची हैं, जबकि "Truthful" (सत्यवादी) इसका सटीक विलोम है।',
  },
  {
    id: 'cgl26_06o3_q79',
    topic: 'Antonyms',
    questionEn:
      'Choose the most appropriate antonym of the underlined word.\nThe witness gave a "murky" account of the incident, making it hard to follow.',
    questionHi:
      'Choose the most appropriate antonym of the underlined word.\nThe witness gave a "murky" account of the incident, making it hard to follow.',
    optionsEn: ['Dark', 'Gloomy', 'Obscure', 'Clear'],
    optionsHi: ['Dark', 'Gloomy', 'Obscure', 'Clear'],
    correctIndex: 3,
    explanationEn:
      '"Murky" means dark, gloomy, or obscure and difficult to understand. Dark, Gloomy, and Obscure are synonyms; therefore, its direct antonym is "Clear" (Option D).',
    explanationHi:
      '"Murky" का अर्थ अस्पष्ट, धुँधला या अंधकारमय होता है। अतः इसका सबसे उपयुक्त विलोम शब्द "Clear" (स्पष्ट) है।',
  },
  {
    id: 'cgl26_06o3_q80',
    topic: 'Spelling Correction',
    questionEn:
      'Select the correctly spelt word to replace the highlighted word in the given sentence.\nHer "scintilating" wit charmed every single guest.',
    questionHi:
      'Select the correctly spelt word to replace the highlighted word in the given sentence.\nHer "scintilating" wit charmed every single guest.',
    optionsEn: ['Scintilating', 'Scintillating', 'Scintallating', 'Scintalating'],
    optionsHi: ['Scintilating', 'Scintillating', 'Scintallating', 'Scintalating'],
    correctIndex: 1,
    explanationEn:
      'The correct spelling is "Scintillating" (with double "l" and "-ill-"), meaning brilliantly clever, sparkling, or animated.',
    explanationHi:
      'सही वर्तनी "Scintillating" (चमकदार/अत्यंत प्रभावशाली व हाज़िरजवाब) है, जिसमें दो बार "l" (-ill-) का प्रयोग होता है।',
  },
  {
    id: 'cgl26_06o3_q81',
    topic: 'Spelling Correction',
    questionEn:
      'Select the correctly spelt word to replace the highlighted word in the given sentence.\nA "propencity" for violence was noted during the investigation.',
    questionHi:
      'Select the correctly spelt word to replace the highlighted word in the given sentence.\nA "propencity" for violence was noted during the investigation.',
    optionsEn: ['Propensity', 'Propensitty', 'Propencitty', 'Propencity'],
    optionsHi: ['Propensity', 'Propensitty', 'Propencitty', 'Propencity'],
    correctIndex: 0,
    explanationEn:
      'The correct spelling is "Propensity" (-sity with a single "t"), meaning a natural inclination or tendency to behave in a particular way.',
    explanationHi:
      'सही वर्तनी "Propensity" (प्रवृत्ति/झुकाव) है, जिसमें "-sity" और एक "t" आता है।',
  },
  {
    id: 'cgl26_06o3_q82',
    topic: 'Sentence Rearrangement (PQRS)',
    questionEn:
      'In the following question, the first and last parts of the sentence (1 and 6) are given. The rest of the sentence is split into four parts and named P, Q, R, and S. These four parts are not given in their proper order. Read the sentence and find out which of the four combinations is correct.\n1. Economic growth is\nP. the standard of living\nQ. a sustained increase\nR. in the production of\nS. goods and services that improves\n6. for the entire population.',
    questionHi:
      'In the following question, the first and last parts of the sentence (1 and 6) are given. The rest of the sentence is split into four parts and named P, Q, R, and S. These four parts are not given in their proper order. Read the sentence and find out which of the four combinations is correct.\n1. Economic growth is\nP. the standard of living\nQ. a sustained increase\nR. in the production of\nS. goods and services that improves\n6. for the entire population.',
    optionsEn: ['QRSP', 'RSQP', 'QPSR', 'QSPR'],
    optionsHi: ['QRSP', 'RSQP', 'QPSR', 'QSPR'],
    correctIndex: 0,
    explanationEn:
      'Linking logically from (1) to (6):\n• 1 → Q: "Economic growth is a sustained increase"\n• Q → R: "in the production of"\n• R → S: "goods and services that improves"\n• S → P → 6: "the standard of living for the entire population."\nHence, the correct sequence is QRSP (Option A).',
    explanationHi:
      'सही वाक्य क्रम QRSP है: "Economic growth is (Q) a sustained increase (R) in the production of (S) goods and services that improves (P) the standard of living for the entire population."',
  },
  {
    id: 'cgl26_06o3_q83',
    topic: 'Sentence Rearrangement (PQRS)',
    questionEn:
      'In the following question, the first and last parts of the sentence (1 and 6) are given. The rest of the sentence is split into four parts and named P, Q, R, and S. These four parts are not given in their proper order. Read the sentence and find out which of the four combinations is correct.\n1. The concept of the Blue Economy\nP. to promote economic growth\nQ. while ensuring the environmental sustainability\nR. seeks to harness ocean resources\nS. and improved social inclusion\n6. of the vast marine and coastal ecosystems.',
    questionHi:
      'In the following question, the first and last parts of the sentence (1 and 6) are given. The rest of the sentence is split into four parts and named P, Q, R, and S. These four parts are not given in their proper order. Read the sentence and find out which of the four combinations is correct.\n1. The concept of the Blue Economy\nP. to promote economic growth\nQ. while ensuring the environmental sustainability\nR. seeks to harness ocean resources\nS. and improved social inclusion\n6. of the vast marine and coastal ecosystems.',
    optionsEn: ['PQSR', 'RPSQ', 'RSQP', 'QSRP'],
    optionsHi: ['PQSR', 'RPSQ', 'RSQP', 'QSRP'],
    correctIndex: 1,
    explanationEn:
      'Grammar & Flow:\n• Subject (1) "The concept of the Blue Economy" needs its main verb immediately → R ("seeks to harness ocean resources").\n• Purpose infinitive → P ("to promote economic growth") + parallel noun phrase S ("and improved social inclusion").\n• Contrastive clause Q ("while ensuring the environmental sustainability") links naturally to (6) ("of the vast marine and coastal ecosystems.").\nHence, RPSQ (Option B) is correct.',
    explanationHi:
      'कर्ता (1) "The concept of the Blue Economy" के तुरंत बाद मुख्य क्रिया R ("seeks to harness...") आती है, उसके बाद उद्देश्य P ("to promote economic growth") और S ("and improved social inclusion"), तथा अंत में Q भाग (6) "of the vast marine..." से जुड़ता है। अतः सही क्रम RPSQ है।',
  },
  {
    id: 'cgl26_06o3_q84',
    topic: 'Tenses (Fill in the Blank)',
    questionEn:
      'Choose the most appropriate option to fill the blank in the given sentence.\nBy the time the workshop ended yesterday, Rahul ______ the model that he ______ for three hours.',
    questionHi:
      'Choose the most appropriate option to fill the blank in the given sentence.\nBy the time the workshop ended yesterday, Rahul ______ the model that he ______ for three hours.',
    optionsEn: [
      'had finished, had been building',
      'finished, was building',
      'has finished, is building',
      'finishes, built',
    ],
    optionsHi: [
      'had finished, had been building',
      'finished, was building',
      'has finished, is building',
      'finishes, built',
    ],
    correctIndex: 0,
    explanationEn:
      'Grammar Rule:\n• "By the time + Simple Past (ended yesterday)" indicates an action completed BEFORE that past point → Past Perfect ("had finished").\n• An ongoing action with a duration ("for three hours") continuing up to that past point requires Past Perfect Continuous ("had been building").\nHence, Option (A) is grammatically accurate.',
    explanationHi:
      'व्याकरण नियम:\n• "By the time + Simple Past (ended yesterday)" के साथ उससे पहले पूर्ण हो चुके कार्य के लिए Past Perfect ("had finished") का प्रयोग होता है।\n• और "for three hours" (अवधि) के कारण उस समय तक चल रहे कार्य के लिए Past Perfect Continuous ("had been building") उपयुक्त है।',
  },
  {
    id: 'cgl26_06o3_q85',
    topic: 'Conditionals (Fill in the Blank)',
    questionEn:
      'Choose the most appropriate option to fill the blank in the given sentence.\nIf I ______ my camera battery last night, I ______ more photos during the walk today.',
    questionHi:
      'Choose the most appropriate option to fill the blank in the given sentence.\nIf I ______ my camera battery last night, I ______ more photos during the walk today.',
    optionsEn: [
      'charged, would take',
      'had charged, would have taken',
      'have charged, will take',
      'had charged, would take',
    ],
    optionsHi: [
      'charged, would take',
      'had charged, would have taken',
      'have charged, will take',
      'had charged, would take',
    ],
    correctIndex: 1,
    explanationEn:
      'Third Conditional Rule (Unreal past condition & unreal past result):\nStructure: If + Subject + had + V3, Subject + would have + V3.\nSince both charging the battery ("last night") and taking photos ("during the walk today") refer to missed past events, "had charged, would have taken" (Option B) is correct.',
    explanationHi:
      'Third Conditional का नियम (भूतकाल की अपूर्ण शर्त और उसका अवास्तविक परिणाम):\nसंरचना: If + had + V3, ... would have + V3।\nअतः "had charged, would have taken" (विकल्प B) सही है।',
  },
  {
    id: 'cgl26_06o3_q86',
    topic: 'Homonyms / Multiple-Meaning Words',
    questionEn:
      "From the given options, select the homonym that corresponds to both Definition (P) and Definition (Q).\n(P) To adjust or compromise one's desires or actions to prevent conflict and cooperate harmoniously with others\n(Q) To provide temporary lodging, physical space, or overnight living quarters for someone",
    questionHi:
      "From the given options, select the homonym that corresponds to both Definition (P) and Definition (Q).\n(P) To adjust or compromise one's desires or actions to prevent conflict and cooperate harmoniously with others\n(Q) To provide temporary lodging, physical space, or overnight living quarters for someone",
    optionsEn: ['Rehabilitate', 'Accommodate', 'Articulate', 'Designate'],
    optionsHi: ['Rehabilitate', 'Accommodate', 'Articulate', 'Designate'],
    correctIndex: 1,
    explanationEn:
      '"Accommodate" matches both meanings:\n• (P) To adapt or make adjustments to fit someone’s wishes/needs (e.g., "accommodate a client’s request").\n• (Q) To provide lodging or physical room for someone (e.g., "the hotel can accommodate 200 guests").',
    explanationHi:
      '"Accommodate" के दोनों अर्थ होते हैं: (P) सामंजस्य बैठाना/समायोजन करना, तथा (Q) किसी को रहने का स्थान या आवास उपलब्ध कराना।',
  },
  {
    id: 'cgl26_06o3_q87',
    topic: 'Idioms & Phrases (Usage)',
    questionEn: 'Identify the option in which the underlined idiom has been used incorrectly.',
    questionHi: 'Identify the option in which the underlined idiom has been used incorrectly.',
    optionsEn: [
      'The minister did not "mince words" during the live television broadcast, spending nearly forty minutes delivering vague, evasive responses.',
      'When the journalist suggested that the CEO had intentionally misled investors, the executive angrily cut her off, accusing her of trying to "put words into his mouth".',
      'The eccentric philosophy professor loved to "talk in riddles", frequently answering direct student questions with cryptic metaphors that left the entire lecture hall confused.',
      'The interviewer accidentally "hit a raw nerve" when he asked the retired athlete about the career-ending knee injury that had cost his team the championship final.',
    ],
    optionsHi: [
      'The minister did not "mince words" during the live television broadcast, spending nearly forty minutes delivering vague, evasive responses.',
      'When the journalist suggested that the CEO had intentionally misled investors, the executive angrily cut her off, accusing her of trying to "put words into his mouth".',
      'The eccentric philosophy professor loved to "talk in riddles", frequently answering direct student questions with cryptic metaphors that left the entire lecture hall confused.',
      'The interviewer accidentally "hit a raw nerve" when he asked the retired athlete about the career-ending knee injury that had cost his team the championship final.',
    ],
    correctIndex: 0,
    explanationEn:
      '• "Not mince words" means to speak bluntly, plainly, and directly without softening the truth. Saying the minister "did not mince words" directly contradicts "delivering vague, evasive responses" — making Option (A) incorrect.\n• "Put words into one’s mouth" (falsely claim someone said something), "talk in riddles" (speak obscurely), and "hit a raw nerve" (touch a sensitive topic) are all used accurately.',
    explanationHi:
      '• "Not mince words" का अर्थ स्पष्ट, सीधी और खरी-खरी बात कहना होता है, जो वाक्य के दूसरे भाग ("vague, evasive responses" — अस्पष्ट व टालमटोल वाले उत्तर) के ठीक विपरीत है। अतः विकल्प (A) में मुहावरे का प्रयोग गलत है।',
  },
  {
    id: 'cgl26_06o3_q88',
    topic: 'Error Spotting (Articles)',
    questionEn:
      'Read the sentences provided in options A, B, C, and D carefully. While three of the sentences are grammatically sound, one contains an “article usage” error. Identify the option with the error.',
    questionHi:
      'Read the sentences provided in options A, B, C, and D carefully. While three of the sentences are grammatically sound, one contains an “article usage” error. Identify the option with the error.',
    optionsEn: [
      'A research team at the University of Cambridge successfully engineered a stable topological qubit, outpacing rival physics departments across Europe.',
      'Excavations funded by Yale University unearthed a beautifully preserved fossilised apex predator in the badlands of Montana.',
      'While the Administrator refused to comment on the launch failure, Director General Faiz issued a comprehensive technical briefing to the press.',
      'The diplomatic delegation travelled from Netherlands to the Czech Republic to ratify the new maritime trade agreement.',
    ],
    optionsHi: [
      'A research team at the University of Cambridge successfully engineered a stable topological qubit, outpacing rival physics departments across Europe.',
      'Excavations funded by Yale University unearthed a beautifully preserved fossilised apex predator in the badlands of Montana.',
      'While the Administrator refused to comment on the launch failure, Director General Faiz issued a comprehensive technical briefing to the press.',
      'The diplomatic delegation travelled from Netherlands to the Czech Republic to ratify the new maritime trade agreement.',
    ],
    correctIndex: 3,
    explanationEn:
      'Article Rule: Country names that are plural in form (like the Netherlands, the Philippines, the Maldives) or contain political descriptors (like the Czech Republic, the United Kingdom) MUST take the definite article "the".\nIn Option (D), "from Netherlands" is missing "the" — it should be "from the Netherlands to the Czech Republic".',
    explanationHi:
      'Article नियम: बहुवचन रूप वाले देशों के नामों (जैसे the Netherlands, the Philippines, the Maldives) से पहले निश्चित उपपद "the" का प्रयोग अनिवार्य है।\nविकल्प (D) में "from Netherlands" के स्थान पर "from the Netherlands" होना चाहिए।',
  },
  {
    id: 'cgl26_06o3_q89',
    topic: 'Error Spotting (Degrees of Comparison)',
    questionEn:
      'Read the sentences below carefully and identify which one contains a grammatical or structural error.\n(P) The agricultural collective harvested as many more metric tons of organic grain than the commercial farming conglomerate during the fiscal year.\n(Q) The more thoroughly the research cohort analysed the genomic sequencing data, the fewer anomalies they found in the control group.',
    questionHi:
      'Read the sentences below carefully and identify which one contains a grammatical or structural error.\n(P) The agricultural collective harvested as many more metric tons of organic grain than the commercial farming conglomerate during the fiscal year.\n(Q) The more thoroughly the research cohort analysed the genomic sequencing data, the fewer anomalies they found in the control group.',
    optionsEn: ['Only P', 'Only Q', 'Both P and Q', 'Neither P nor Q'],
    optionsHi: ['Only P', 'Only Q', 'Both P and Q', 'Neither P nor Q'],
    correctIndex: 0,
    explanationEn:
      '• Sentence (P) has an error: "as many more ... than" improperly blends the positive comparison ("as many ... as") with the comparative ("many more ... than"). The correct phrase is "many more metric tons ... than".\n• Sentence (Q) is grammatically sound: it uses the parallel double comparative ("The more thoroughly ..., the fewer ...") accurately with the countable plural noun "anomalies".\nHence, only P contains an error.',
    explanationHi:
      '• वाक्य (P) में त्रुटि है: "as many more ... than" अशुद्ध संरचना है (यहाँ "as" अनावश्यक है; सही प्रयोग "many more metric tons ... than" होगा)।\n• वाक्य (Q) में "The more ..., the fewer ..." (double comparative) का प्रयोग पूर्णतः सही है।\nअतः केवल P में त्रुटि है।',
  },
  {
    id: 'cgl26_06o3_q90',
    topic: 'Active & Passive Voice',
    questionEn:
      "Read the passive statement. If you were to explain the action in a single, direct sentence, which of the following active voice options would be the most accurate translation?\nThe narrative's deeply cynical conclusion is created by the suggestion that rescue is ultimately brought about by appalling savagery, whereas it fails to be achieved by coordinated and purposeful efforts.",
    questionHi:
      "Read the passive statement. If you were to explain the action in a single, direct sentence, which of the following active voice options would be the most accurate translation?\nThe narrative's deeply cynical conclusion is created by the suggestion that rescue is ultimately brought about by appalling savagery, whereas it fails to be achieved by coordinated and purposeful efforts.",
    optionsEn: [
      "The suggestion that appalling savagery ultimately bring about rescue, whereas coordinated and purposeful efforts fail to achieve it, creates the narrative's deeply cynical conclusion.",
      "The suggestion that appalling savagery ultimately bring about rescue, whereas coordinate and purposeful efforts fail to achieve it, creates the narrative's deeply cynical conclusion.",
      "The suggestion that appalling savagery ultimately brings about rescue, whereas coordinated and purposeful efforts fail to achieve it, creates the narrative's deep cynical conclusion.",
      "The suggestion that appalling savagery ultimately brings about rescue, whereas coordinated and purposeful efforts fail to achieve it, creates the narrative's deeply cynical conclusion.",
    ],
    optionsHi: [
      "The suggestion that appalling savagery ultimately bring about rescue, whereas coordinated and purposeful efforts fail to achieve it, creates the narrative's deeply cynical conclusion.",
      "The suggestion that appalling savagery ultimately bring about rescue, whereas coordinate and purposeful efforts fail to achieve it, creates the narrative's deeply cynical conclusion.",
      "The suggestion that appalling savagery ultimately brings about rescue, whereas coordinated and purposeful efforts fail to achieve it, creates the narrative's deep cynical conclusion.",
      "The suggestion that appalling savagery ultimately brings about rescue, whereas coordinated and purposeful efforts fail to achieve it, creates the narrative's deeply cynical conclusion.",
    ],
    correctIndex: 3,
    explanationEn:
      'Converting each simple present passive clause to active voice:\n1. "is created by the suggestion..." → "The suggestion ... creates the narrative\'s deeply cynical conclusion."\n2. "rescue is ultimately brought about by appalling savagery" → "appalling savagery (singular uncountable) ultimately brings about rescue" (eliminates A & B which use plural "bring").\n3. "deeply cynical" requires the adverb "deeply" to modify the adjective "cynical" (eliminates C which uses "deep").\nThus, Option (D) is the only completely accurate active transformation.',
    explanationHi:
      'Active Voice में रूपांतरण:\n• "appalling savagery" एकवचन है, अतः क्रिया "brings" होगी (विकल्प A व B में "bring" गलत है)।\n• विशेषण "cynical" की विशेषता बताने के लिए क्रिया-विशेषण "deeply" आवश्यक है (विकल्प C में "deep" गलत है)।\nअतः केवल विकल्प (D) व्याकरणिक रूप से पूर्णतः शुद्ध है।',
  },
  {
    id: 'cgl26_06o3_q91',
    topic: 'Direct & Indirect Speech',
    questionEn:
      'Convert the following sentence from direct to indirect speech. Choose the option that best represents the correct transformation.\nJanvi said to Kamal, “I travel about in an old utility vehicle, which is a simple transport setup with basic bedding on its floor, stopping where people gather to listen and observe; however, in the process, I have formed an impression of my surroundings, the accuracy of which is limited only by my own shortcomings.”',
    questionHi:
      'Convert the following sentence from direct to indirect speech. Choose the option that best represents the correct transformation.\nJanvi said to Kamal, “I travel about in an old utility vehicle, which is a simple transport setup with basic bedding on its floor, stopping where people gather to listen and observe; however, in the process, I have formed an impression of my surroundings, the accuracy of which is limited only by my own shortcomings.”',
    optionsEn: [
      "Janvi told Kamal that she travelled about in an old utility vehicle, which was a simple transport setup with basic bedding on it's floor, stopping where people gathered to listen and observe; however, in the process, she had formed an impression of her surroundings, the accuracy of which was limited only by her own shortcomings.",
      'Janvi told Kamal that she travelled about in an old utility vehicle, which was a simple transport setup with basic bedding on its floor, stopping where people gathered to listen and observe; however, in the process, she had formed an impression of her surroundings, the accuracy of which was limited only by her own shortcomings.',
      "Janvi told Kamal that she travelled about in an old utility vehicle, which was a simple transport setup with basic bedding on it's floor, stopping where people gather to listen and observe; however, in the process, she had formed an impression of her surroundings, the accuracy of which was limited only by her own shortcomings.",
      'Janvi told Kamal that she travelled about in an old utility vehicle, which was a simple transport setup with basic bedding on its floor, stopping where people gathered to listen and observed; however, in the process, she had formed an impression of her surroundings, the accuracy of which was limited only by her own shortcomings.',
    ],
    optionsHi: [
      "Janvi told Kamal that she travelled about in an old utility vehicle, which was a simple transport setup with basic bedding on it's floor, stopping where people gathered to listen and observe; however, in the process, she had formed an impression of her surroundings, the accuracy of which was limited only by her own shortcomings.",
      'Janvi told Kamal that she travelled about in an old utility vehicle, which was a simple transport setup with basic bedding on its floor, stopping where people gathered to listen and observe; however, in the process, she had formed an impression of her surroundings, the accuracy of which was limited only by her own shortcomings.',
      "Janvi told Kamal that she travelled about in an old utility vehicle, which was a simple transport setup with basic bedding on it's floor, stopping where people gather to listen and observe; however, in the process, she had formed an impression of her surroundings, the accuracy of which was limited only by her own shortcomings.",
      'Janvi told Kamal that she travelled about in an old utility vehicle, which was a simple transport setup with basic bedding on its floor, stopping where people gathered to listen and observed; however, in the process, she had formed an impression of her surroundings, the accuracy of which was limited only by her own shortcomings.',
    ],
    correctIndex: 1,
    explanationEn:
      'Eliminating subtle distractors:\n• Options (A) and (C) erroneously write "it\'s floor" (contraction of "it is") instead of the possessive determiner "its floor" (and C fails to backshift "gather" → "gathered").\n• Option (D) wrongly changes the bare infinitive "to listen and observe" to "to listen and observed", breaking parallel structure.\n• Option (B) correctly backshifts all tenses (travel → travelled, is → was, gather → gathered, have formed → had formed, is limited → was limited), shifts pronouns (I/my → she/her), and preserves "its floor" and "to listen and observe".',
    explanationHi:
      'विकल्पों का विश्लेषण:\n• विकल्प (A) व (C) में "its floor" के स्थान पर गलत "it\'s floor" लिखा है (और C में "gather" का काल नहीं बदला गया)।\n• विकल्प (D) में "to listen and observe" के स्थान पर "observed" लिखकर समानांतर संरचना तोड़ी गई है।\n• केवल विकल्प (B) में सभी काल, सर्वनाम तथा वर्तनी पूर्णतः सही हैं।',
  },
  {
    id: 'cgl26_06o3_q92',
    topic: 'Sentence Improvement',
    questionEn:
      'Read the sentence below carefully. Choose the option (A/B/C) that best improves the sentence. If the sentence is already correct, select Option D (No improvement required).\nIt was the clinical analyst’s conclusion that the patient’s underlying trauma was driven by a deep, unresolved desire, desires which continuously sabotaged their interpersonal relationships.',
    questionHi:
      'Read the sentence below carefully. Choose the option (A/B/C) that best improves the sentence. If the sentence is already correct, select Option D (No improvement required).\nIt was the clinical analyst’s conclusion that the patient’s underlying trauma was driven by a deep, unresolved desire, desires which continuously sabotaged their interpersonal relationships.',
    optionsEn: [
      'The clinical analyst concluded that underlying trauma of the patient being driven by a deep, unresolved desire, the desire that continuously sabotaged their interpersonal relationships.',
      'The clinical analyst concluded that the patient’s underlying trauma was driven by a deep, unresolved desire, a desire that continuously sabotaged their interpersonal relationships.',
      'It was concluded by the clinical analyst that a deep, unresolved desire was driven the patient’s underlying trauma, and their interpersonal relationships were continuously sabotaged by that desire.',
      'No improvement required',
    ],
    optionsHi: [
      'The clinical analyst concluded that underlying trauma of the patient being driven by a deep, unresolved desire, the desire that continuously sabotaged their interpersonal relationships.',
      'The clinical analyst concluded that the patient’s underlying trauma was driven by a deep, unresolved desire, a desire that continuously sabotaged their interpersonal relationships.',
      'It was concluded by the clinical analyst that a deep, unresolved desire was driven the patient’s underlying trauma, and their interpersonal relationships were continuously sabotaged by that desire.',
      'No improvement required',
    ],
    correctIndex: 1,
    explanationEn:
      '• The original sentence has a singular/plural mismatch ("a deep, unresolved desire, desires which...") and a wordy cleft opening ("It was the clinical analyst’s conclusion that").\n• Option (A) lacks a finite verb ("being driven").\n• Option (C) misuses passive voice ("desire was driven the patient’s underlying trauma").\n• Option (B) concisely uses active voice ("The clinical analyst concluded") and maintains singular agreement ("a deep, unresolved desire, a desire that...").',
    explanationHi:
      'मूल वाक्य में एकवचन-बहुवचन की असंगति ("a deep, unresolved desire, desires which...") है। विकल्प (B) में सक्रिय वाक्य ("The clinical analyst concluded") और सही एकवचन संगति ("a desire that continuously sabotaged...") का शुद्ध प्रयोग किया गया है।',
  },
  {
    id: 'cgl26_06o3_q93',
    topic: 'Sentence Improvement',
    questionEn:
      'Read the sentence below carefully. Choose the option (A/B/C) that best improves the sentence. If the sentence is already correct, select Option D (No improvement required).\nThe constitutional jurist argued that by altering the founding charter without a public referendum would nullify it and render it completely void, an act of total and absolute betrayal of the social contract.',
    questionHi:
      'Read the sentence below carefully. Choose the option (A/B/C) that best improves the sentence. If the sentence is already correct, select Option D (No improvement required).\nThe constitutional jurist argued that by altering the founding charter without a public referendum would nullify it and render it completely void, an act of total and absolute betrayal of the social contract.',
    optionsEn: [
      'The constitutional jurist argued that altering the founding charter without a public referendum would render it null and void, representing a total betrayal of the social contract.',
      'The constitutional jurist argued that any alteration in the founding charter without holding a public referendum would null it as completely void, being a total betrayal of the social contract.',
      'The constitutional jurist argued that in altering the founding charter without a public referendum, we would void it totally, acting as an absolute betrayal of the social contract.',
      'No improvement required',
    ],
    optionsHi: [
      'The constitutional jurist argued that altering the founding charter without a public referendum would render it null and void, representing a total betrayal of the social contract.',
      'The constitutional jurist argued that any alteration in the founding charter without holding a public referendum would null it as completely void, being a total betrayal of the social contract.',
      'The constitutional jurist argued that in altering the founding charter without a public referendum, we would void it totally, acting as an absolute betrayal of the social contract.',
      'No improvement required',
    ],
    correctIndex: 0,
    explanationEn:
      '• The original sentence has a structural error ("that by altering ... would nullify" — the preposition "by" prevents the gerund phrase from serving as subject of "would nullify") and redundancies ("nullify it and render it completely void", "total and absolute").\n• Option (B) wrongly uses "null" as a verb ("would null it").\n• Option (C) introduces an unsupported pronoun "we" and a dangling modifier ("acting as...").\n• Option (A) fixes the subject cleanly ("that altering ... would render it null and void, representing a total betrayal...").',
    explanationHi:
      'मूल वाक्य में "by altering ... would nullify" में "by" के कारण वाक्य में कर्ता की संरचनात्मक त्रुटि तथा शब्दों की पुनरावृत्ति है। विकल्प (A) में "by" हटाकर शुद्ध कानूनी अभिव्यक्ति ("render it null and void, representing a total betrayal...") का प्रयोग किया गया है।',
  },
  {
    id: 'cgl26_06o3_q94',
    topic: 'Active & Passive Voice',
    questionEn:
      'Select the correct passive form of the given sentence.\nThe judge will deliver the final verdict in the court tomorrow.',
    questionHi:
      'Select the correct passive form of the given sentence.\nThe judge will deliver the final verdict in the court tomorrow.',
    optionsEn: [
      'The final verdict will have been delivered in the court by the judge tomorrow.',
      'The final verdict will be delivered in the court by the judge tomorrow.',
      'The final verdict would be delivered in the court by the judge tomorrow.',
      'The final verdict is delivered in the court by the judge tomorrow.',
    ],
    optionsHi: [
      'The final verdict will have been delivered in the court by the judge tomorrow.',
      'The final verdict will be delivered in the court by the judge tomorrow.',
      'The final verdict would be delivered in the court by the judge tomorrow.',
      'The final verdict is delivered in the court by the judge tomorrow.',
    ],
    correctIndex: 1,
    explanationEn:
      'Simple Future Tense Passive Rule:\nActive: Subject + will + V1 + Object\nPassive: Object + will be + V3 + by + Subject\n⇒ "The final verdict will be delivered in the court by the judge tomorrow." (Option B).',
    explanationHi:
      'Simple Future Tense का Passive नियम:\nActive: will + V1 → Passive: will be + V3।\nअतः सही Passive रूप: "The final verdict will be delivered in the court by the judge tomorrow." (विकल्प B)।',
  },
  {
    id: 'cgl26_06o3_q95',
    topic: 'Direct & Indirect Speech',
    questionEn:
      'The following sentence is given in Indirect Speech. Select the option that correctly expresses it in Direct Speech.\nTertius Lydgate questioned himself wretchedly why he had allowed the shallow material desires of Rosamond Vincy to ruin his scientific ambitions.',
    questionHi:
      'The following sentence is given in Indirect Speech. Select the option that correctly expresses it in Direct Speech.\nTertius Lydgate questioned himself wretchedly why he had allowed the shallow material desires of Rosamond Vincy to ruin his scientific ambitions.',
    optionsEn: [
      'Tertius Lydgate questioned himself wretchedly, “Why did I allow the shallow material desires of Rosamond Vincy to ruin my scientific ambitions?”',
      'Tertius Lydgate questioned himself, “wretchedly why he had allowed the shallow material desires of Rosamond Vincy to ruin his scientific ambitions.”',
      'Tertius Lydgate questions himself wretchedly, “Why did I allowed the shallow material desires of Rosamond Vincy to ruined my scientific ambitions?”',
      'Tertius Lydgate questioned himself wretchedly. “Why I had allowed the shallow material desires of Rosamond Vincy to ruin my scientific ambitions?”',
    ],
    optionsHi: [
      'Tertius Lydgate questioned himself wretchedly, “Why did I allow the shallow material desires of Rosamond Vincy to ruin my scientific ambitions?”',
      'Tertius Lydgate questioned himself, “wretchedly why he had allowed the shallow material desires of Rosamond Vincy to ruin his scientific ambitions.”',
      'Tertius Lydgate questions himself wretchedly, “Why did I allowed the shallow material desires of Rosamond Vincy to ruined my scientific ambitions?”',
      'Tertius Lydgate questioned himself wretchedly. “Why I had allowed the shallow material desires of Rosamond Vincy to ruin my scientific ambitions?”',
    ],
    correctIndex: 0,
    explanationEn:
      'Converting Indirect Wh-question to Direct Speech:\n• Keep reporting clause unchanged: "Tertius Lydgate questioned himself wretchedly,"\n• Past Perfect ("why he had allowed ... his") reverts to Simple Past interrogative ("Why did I allow ... my ...?") with proper auxiliary-subject inversion ("did I allow") and a question mark.\nOptions (B), (C), and (D) contain grammar/punctuation errors ("did I allowed", "to ruined", missing inversion). Hence, Option (A) is correct.',
    explanationHi:
      'Indirect से Direct Speech में बदलते समय "why he had allowed ... his" प्रश्नवाचक रूप "Why did I allow ... my ...?" में बदल जाता है। विकल्प (C) में "did I allowed / to ruined" तथा (D) में प्रश्नवाचक क्रम की अशुद्धि है। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_06o3_q96',
    topic: 'Cloze Test',
    passageEn: CLOZE_PASSAGE_06S3,
    questionEn: 'Select the most appropriate option to fill in blank (A).',
    questionHi: 'Select the most appropriate option to fill in blank (A).',
    optionsEn: [
      'Encouraged by growing environmental awareness',
      'Encourage growing environmental awareness',
      'Having encourage environmental awareness',
      'Environmental awareness encouraging',
    ],
    optionsHi: [
      'Encouraged by growing environmental awareness',
      'Encourage growing environmental awareness',
      'Having encourage environmental awareness',
      'Environmental awareness encouraging',
    ],
    correctIndex: 0,
    explanationEn:
      'The main clause starts with the subject "many city dwellers". A passive past-participial phrase — "Encouraged by growing environmental awareness," — properly modifies "many city dwellers" (meaning city dwellers are encouraged by awareness). Option (B) is an imperative verb, (C) uses wrong participle form ("Having encourage"), and (D) is ungrammatical.',
    explanationHi:
      'मुख्य वाक्य का कर्ता "many city dwellers" है, जिसे संशोधित करने के लिए Past Participial Phrase "Encouraged by growing environmental awareness" (बढ़ती पर्यावरणीय जागरूकता से प्रोत्साहित होकर) व्याकरणिक व अर्थ की दृष्टि से एकदम उपयुक्त है।',
  },
  {
    id: 'cgl26_06o3_q97',
    topic: 'Cloze Test',
    passageEn: CLOZE_PASSAGE_06S3,
    questionEn: 'Select the most appropriate option to fill in blank (B).',
    questionHi: 'Select the most appropriate option to fill in blank (B).',
    optionsEn: ['Unless', 'Therefore', 'Although', 'Likewise'],
    optionsHi: ['Unless', 'Therefore', 'Although', 'Likewise'],
    correctIndex: 2,
    explanationEn:
      'The sentence contrasts a limitation ("urban farming cannot entirely replace conventional agriculture") with a positive benefit ("it serves as a valuable complement"). The subordinating conjunction of concession "Although" expresses this contrast accurately.',
    explanationHi:
      'वाक्य के दोनों भागों में विरोधाभास है ("यद्यपि शहरी खेती पारंपरिक कृषि का पूर्ण स्थान नहीं ले सकती, फिर भी यह एक मूल्यवान पूरक का कार्य करती है")। इस विरोधाभास के लिए "Although" (यद्यपि) सही संयोजक है।',
  },
  {
    id: 'cgl26_06o3_q98',
    topic: 'Cloze Test',
    passageEn: CLOZE_PASSAGE_06S3,
    questionEn: 'Select the most appropriate option to fill in blank (C).',
    questionHi: 'Select the most appropriate option to fill in blank (C).',
    optionsEn: ['bring over', 'break down', 'call off', 'put aside'],
    optionsHi: ['bring over', 'break down', 'call off', 'put aside'],
    correctIndex: 1,
    explanationEn:
      '"Break down" (social barriers) is the standard phrasal verb meaning to dismantle, remove, or overcome divisions between people. ("Bring over" = carry to someone’s place; "call off" = cancel; "put aside" = save/ignore temporarily.)',
    explanationHi:
      '"Break down social barriers" का अर्थ सामाजिक बाधाओं या दूरियों को समाप्त करना होता है। ("Call off" = रद्द करना, "put aside" = एक तरफ रख देना।) अतः "break down" सही phrasal verb है।',
  },
  {
    id: 'cgl26_06o3_q99',
    topic: 'Cloze Test',
    passageEn: CLOZE_PASSAGE_06S3,
    questionEn: 'Select the most appropriate option to fill in blank (D).',
    questionHi: 'Select the most appropriate option to fill in blank (D).',
    optionsEn: ['resilience', 'hesitation', 'extravagance', 'fragility'],
    optionsHi: ['resilience', 'hesitation', 'extravagance', 'fragility'],
    correctIndex: 0,
    explanationEn:
      'Policymakers and environmentalists view urban farming positively as a way to strengthen cities against food shortages and climate pressures — i.e., enhancing urban "resilience" (ability to recover and adapt). Hesitation, extravagance, and fragility are negative/irrelevant in context.',
    explanationHi:
      'नीति-निर्माता और पर्यावरणविद् शहरी खेती को शहरी लचीलापन/सहनशीलता ("urban resilience") बढ़ाने के प्रभावी साधन के रूप में देखते हैं। अन्य विकल्प (hesitation, extravagance, fragility) नकारात्मक या असंगत हैं।',
  },
  {
    id: 'cgl26_06o3_q100',
    topic: 'Cloze Test',
    passageEn: CLOZE_PASSAGE_06S3,
    questionEn: 'Select the most appropriate option to fill in blank (E).',
    questionHi: 'Select the most appropriate option to fill in blank (E).',
    optionsEn: ['on', 'regarding', 'at', 'toward'],
    optionsHi: ['on', 'regarding', 'at', 'toward'],
    correctIndex: 0,
    explanationEn:
      'Parallelism with correlative conjunction "not only ... but also": the verb "depends" takes the fixed preposition "on" — "depends not only on individual enthusiasm but also on supportive public policies...". Hence, "on" (Option A) is required.',
    explanationHi:
      '"Not only ... but also" के साथ समानांतर संरचना और क्रिया "depends" के साथ निश्चित पूर्वसर्ग "on" का प्रयोग होता है ("depends not only on ... but also on ...")। अतः विकल्प (A) "on" सही है।',
  },
];

export const FULL_MOCK_06_OCT_SHIFT3: MockTest = {
  id: 'ssc-cgl-06-oct-shift3-2026-full-mock',
  title: 'SSC CGL Tier-1 2026 (06 Oct Shift 3) — Full Mock',
  subtitle:
    'Complete 100-question bilingual paper with strict 15-minute sectional timers across all 4 Tier-1 sections',
  category: 'Full Mock',
  examTags: ['CGL'],
  seriesType: 'pyq',
  pyqFormat: 'full',
  durationMinutes: 60,
  positiveMarks: 2,
  negativeMarks: 0.5,
  strictSectionTiming: true,
  sections: [
    {
      id: 'sec-reasoning',
      name: 'General Intelligence & Reasoning',
      shortName: 'Reasoning',
      startIndex: 0,
      endIndex: 24,
      durationMinutes: 15,
    },
    {
      id: 'sec-ga',
      name: 'General Awareness',
      shortName: 'General Awareness',
      startIndex: 25,
      endIndex: 49,
      durationMinutes: 15,
    },
    {
      id: 'sec-quant',
      name: 'Quantitative Aptitude',
      shortName: 'Quant',
      startIndex: 50,
      endIndex: 74,
      durationMinutes: 15,
    },
    {
      id: 'sec-english',
      name: 'English Comprehension',
      shortName: 'English',
      startIndex: 75,
      endIndex: 99,
      durationMinutes: 15,
    },
  ],
  createdAt: '2026-11-22T23:55:00.000Z',
  questions: [
    ...SECTION_1_REASONING_06S3,
    ...SECTION_2_GA_06S3,
    ...SECTION_3_QUANT_06S3,
    ...SECTION_4_ENGLISH_06S3,
  ],
};
