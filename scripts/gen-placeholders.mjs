import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'products');
const PRODUCTS = JSON.parse(
  readFileSync(join(ROOT, 'data', 'products.json'), 'utf8'),
).products;

const PALETTES = [
  ['#0f172a', '#3b0a58'],
  ['#0b132b', '#2563eb'],
  ['#1a0b2e', '#e11d48'],
  ['#052e16', '#16a34a'],
  ['#170b1f', '#f97316'],
  ['#0b1e3d', '#06b6d4'],
  ['#1a0b0b', '#f59e0b'],
  ['#0b2e2e', '#14b8a6'],
  ['#1e0b3d', '#a855f7'],
  ['#1a0b2e', '#db2777'],
  ['#0b1220', '#38bdf8'],
  ['#1a1305', '#eab308'],
];

const ACCENT = '#39ff14';

const hash = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
};

const paletteFor = (id) => PALETTES[hash(id) % PALETTES.length];

const CATEGORY_LABEL = {
  consoles: 'CONSOLE',
  games: 'GAME',
  accessories: 'ACCESSORY',
};

const escape = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const splitName = (name, maxLen = 18) => {
  if (name.length <= maxLen) return [name];
  const words = name.split(' ');
  if (words.length === 1) return [name];
  let best = { diff: Infinity, i: 0 };
  for (let i = 1; i < words.length; i++) {
    const left = words.slice(0, i).join(' ').length;
    const right = words.slice(i).join(' ').length;
    const diff = Math.abs(left - right);
    if (diff < best.diff) best = { diff, i };
  }
  return [words.slice(0, best.i).join(' '), words.slice(best.i).join(' ')];
};

const fontSizeFor = (lines) => {
  const longest = Math.max(...lines.map((l) => l.length));
  if (longest > 22) return 40;
  if (longest > 16) return 48;
  return 56;
};

const buildSvg = (product) => {
  const [c1, c2] = paletteFor(product.id);
  const label = CATEGORY_LABEL[product.category] ?? 'PRODUCT';
  const lines = splitName(product.name);
  const size = fontSizeFor(lines);
  const badgeWidth = 40 + label.length * 8;

  const ACCENT_Y = 558;
  const lastBaselineY = ACCENT_Y - 14;
  const firstBaselineY = lastBaselineY - (lines.length - 1) * (size + 8);

  const textLines = lines
    .map(
      (line, i) =>
        `<text x="60" y="${firstBaselineY + i * (size + 8)}" font-family="'Space Grotesk', system-ui, sans-serif" font-weight="700" font-size="${size}" fill="#f8fafc">${escape(line)}</text>`,
    )
    .join('\n  ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" role="img" aria-label="${escape(product.name)}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.22" r="0.65">
      <stop offset="0" stop-color="rgba(255,255,255,0.18)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <rect width="800" height="600" fill="url(#glow)"/>
  <path d="M 560 0 L 800 0 L 800 240 Z" fill="rgba(255,255,255,0.05)"/>
  <circle cx="700" cy="500" r="160" fill="rgba(255,255,255,0.04)"/>
  <rect x="60" y="60" rx="6" ry="6" width="${badgeWidth}" height="30" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.18)"/>
  <text x="${60 + badgeWidth / 2}" y="80" text-anchor="middle" font-family="'Space Grotesk', system-ui, sans-serif" font-weight="600" font-size="13" fill="#e2e8f0" letter-spacing="2">${label}</text>
  ${textLines}
  <rect x="60" y="${ACCENT_Y}" width="80" height="4" fill="${ACCENT}"/>
</svg>
`;
};

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

let count = 0;
for (const product of PRODUCTS) {
  const filename = join(OUT_DIR, `${product.id}.svg`);
  writeFileSync(filename, buildSvg(product));
  count++;
}

console.log(`gen-placeholders: wrote ${count} SVGs to public/products/`);
