/* One Piece Wiki — original, procedurally generated portrait/icon artwork.
   Every character gets a role-themed line-art medallion; every Devil Fruit gets a
   stylized fruit-shape icon colored by type. All shapes are drawn from scratch here —
   no external art or copyrighted imagery is used anywhere in this file. */

function radialLines(cx, cy, rInner, rOuter, count, strokeWidth) {
  let out = '';
  for (let i = 0; i < count; i++) {
    const a = (Math.PI * 2 * i) / count;
    const x1 = cx + rInner * Math.cos(a), y1 = cy + rInner * Math.sin(a);
    const x2 = cx + rOuter * Math.cos(a), y2 = cy + rOuter * Math.sin(a);
    out += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="${strokeWidth}"/>`;
  }
  return out;
}

function starPoints(cx, cy, rOuter, rInner, count) {
  const pts = [];
  for (let i = 0; i < count * 2; i++) {
    const r = i % 2 === 0 ? rOuter : rInner;
    const a = (Math.PI * i) / count - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(' ');
}

/* Simple original line-art built from primitive shapes (circles/lines/polygons) — one per archetype. */
const ROLE_ICONS = {
  sword: '<g transform="rotate(45 32 32)"><line x1="32" y1="10" x2="32" y2="42"/><line x1="24" y1="18" x2="40" y2="18"/><line x1="32" y1="42" x2="32" y2="50"/></g><g transform="rotate(-45 32 32)"><line x1="32" y1="10" x2="32" y2="42"/><line x1="24" y1="18" x2="40" y2="18"/><line x1="32" y1="42" x2="32" y2="50"/></g>',
  compass: `<circle cx="32" cy="32" r="18"/>${radialLines(32, 32, 15, 18, 12, 2)}<polygon points="32,21 37,32 32,43 27,32" fill="currentColor" stroke="none"/>`,
  target: '<circle cx="32" cy="32" r="18"/><circle cx="32" cy="32" r="11"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/>',
  cross: '<line x1="32" y1="14" x2="32" y2="50"/><line x1="14" y1="32" x2="50" y2="32"/>',
  scroll: '<rect x="16" y="20" width="32" height="24" rx="2"/><circle cx="16" cy="20" r="4"/><circle cx="16" cy="44" r="4"/><circle cx="48" cy="20" r="4"/><circle cx="48" cy="44" r="4"/><line x1="22" y1="28" x2="42" y2="28"/><line x1="22" y1="36" x2="42" y2="36"/>',
  gear: `<circle cx="32" cy="32" r="9"/>${radialLines(32, 32, 12, 18, 8, 3)}`,
  note: '<circle cx="23" cy="46" r="6"/><circle cx="43" cy="42" r="6"/><line x1="29" y1="46" x2="29" y2="16"/><line x1="49" y1="42" x2="49" y2="14"/><line x1="29" y1="16" x2="49" y2="14"/><line x1="29" y1="24" x2="49" y2="22"/>',
  chefhat: '<path d="M20 44 h24 v6 h-24 z"/><path d="M22 44 C18 30 22 18 32 18 C34 12 44 12 46 18 C54 20 54 32 46 36 C46 40 46 42 44 44 h-22 C20 42 20 44 22 44 Z"/>',
  flask: '<line x1="26" y1="12" x2="26" y2="26"/><line x1="38" y1="12" x2="38" y2="26"/><line x1="24" y1="12" x2="40" y2="12"/><path d="M26 26 L16 48 a4 4 0 0 0 4 6 h24 a4 4 0 0 0 4 -6 L38 26 Z"/><line x1="20" y1="40" x2="44" y2="40"/>',
  anchor: '<circle cx="32" cy="16" r="5"/><line x1="32" y1="21" x2="32" y2="50"/><line x1="18" y1="30" x2="46" y2="30"/><path d="M18 38 a14 14 0 0 0 14 12"/><path d="M46 38 a14 14 0 0 1 -14 12"/>',
  crown: '<polygon points="16,44 16,26 24,34 32,20 40,34 48,26 48,44"/><line x1="16" y1="44" x2="48" y2="44"/>',
  tiara: '<path d="M16 40 Q32 16 48 40"/><circle cx="32" cy="22" r="4" fill="currentColor" stroke="none"/><line x1="16" y1="40" x2="48" y2="40"/>',
  flag: '<line x1="20" y1="12" x2="20" y2="52"/><path d="M20 14 h26 l-8 9 8 9 h-26 z"/>',
  dagger: '<line x1="32" y1="12" x2="32" y2="38"/><line x1="24" y1="20" x2="40" y2="20"/><polygon points="32,38 26,46 38,46"/>',
  skull: '<circle cx="32" cy="28" r="16"/><circle cx="25" cy="26" r="3" fill="currentColor" stroke="none"/><circle cx="39" cy="26" r="3" fill="currentColor" stroke="none"/><path d="M24 38 h16 M26 44 h4 M34 44 h4"/>',
  paw: '<circle cx="32" cy="38" r="10"/><circle cx="20" cy="24" r="5"/><circle cx="32" cy="18" r="5"/><circle cx="44" cy="24" r="5"/>',
  wing: '<path d="M14 40 C22 24 30 18 34 30 C38 18 46 24 50 40 C40 34 40 40 34 34 C28 40 24 34 14 40 Z"/>',
  star: `<polygon points="${starPoints(32, 32, 18, 8, 5)}"/>`,
};

const ROLE_ICON_RULES = [
  [/navigat/, 'compass'],
  [/sniper|marksman|sharpshoot/, 'target'],
  [/doctor|medic|surgeon/, 'cross'],
  [/archaeolog|scholar/, 'scroll'],
  [/shipwright|engineer|mechanic/, 'gear'],
  [/musician|singer/, 'note'],
  [/cook|chef/, 'chefhat'],
  [/scientist/, 'flask'],
  [/helmsman|admiral|marine|navy|warden/, 'anchor'],
  [/king|emperor|empress|yonko|shogun/, 'crown'],
  [/princess|prince/, 'tiara'],
  [/revolutionary/, 'flag'],
  [/agent|spy|officer|assassin|cp0|cp9/, 'dagger'],
  [/mink|beast|tiger|lion|leopard|wolf|dragon/, 'paw'],
  [/phoenix|bird|wing|flight/, 'wing'],
  [/swordsm|santoryu|blade|commander|combatant/, 'sword'],
  [/captain|warlord|pirate/, 'skull'],
];

function iconKeyForCharacter(c) {
  const haystack = `${c.role} ${c.epithet || ''} ${c.affiliation}`.toLowerCase();
  for (const [re, key] of ROLE_ICON_RULES) {
    if (re.test(haystack)) return key;
  }
  return 'star';
}

function characterImageTitle(c) {
  return c.imageTitle || c.name;
}

function fruitImageTitle(f) {
  if (f.imageTitle) return f.imageTitle;
  if (f.id === 'gomu-gomu-no-mi') return 'Hito Hito no Mi, Model: Nika';
  return f.name;
}

function properImageHTML(kind, title, label, fallback) {
  return `
    <span class="proper-image proper-image--${kind}" data-image-title="${escapeHtml(title)}" data-image-kind="${kind}">
      <span class="proper-image__fallback">${fallback}</span>
      <img class="proper-image__img" alt="${escapeHtml(label)}" loading="lazy" referrerpolicy="no-referrer" hidden>
    </span>
  `;
}

function characterPortraitFallbackSVG(c) {
  const accent = accentFor(c);
  const hue2 = (hashHue(c.id + 'x') + 45) % 360;
  const icon = ROLE_ICONS[iconKeyForCharacter(c)] || ROLE_ICONS.star;
  const uid = c.id.replace(/[^a-z0-9]/g, '');
  const rotation = hashHue(c.name) % 90;
  const fruit = c.devilFruit ? findFruit(c.devilFruit) : null;

  return `
    <svg viewBox="0 0 64 64" role="img" aria-label="${escapeHtml(c.name)} portrait" class="portrait-svg">
      <defs>
        <linearGradient id="g-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="hsl(${hue2}, 55%, 26%)"/>
        </linearGradient>
        <pattern id="p-${uid}" width="9" height="9" patternTransform="rotate(${rotation})" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="9" stroke="rgba(255,255,255,0.09)" stroke-width="2"/>
        </pattern>
      </defs>
      <circle cx="32" cy="32" r="32" fill="url(#g-${uid})"/>
      <circle cx="32" cy="32" r="32" fill="url(#p-${uid})"/>
      <circle cx="32" cy="32" r="30.5" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
      <g fill="none" stroke="#fdf6e3" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">${icon}</g>
      ${fruit ? `<circle cx="49" cy="49" r="11.5" fill="#0b1220" stroke="#fdf6e3" stroke-width="1.5"/><text x="49" y="53.5" font-size="12" text-anchor="middle">${fruit.icon}</text>` : ''}
    </svg>
  `;
}

const CATEGORY_HEX = { Paramecia: '#a06cd5', Zoan: '#4c9a5a', Logia: '#3f9bd0' };

function fruitPortraitFallbackSVG(f) {
  const color = CATEGORY_HEX[f.category] || '#e3b04b';
  const glow = f.subtype && /mythical|special/i.test(f.subtype);
  const uid = f.id.replace(/[^a-z0-9]/g, '');
  return `
    <svg viewBox="0 0 64 64" role="img" aria-label="${escapeHtml(f.name)} icon" class="portrait-svg">
      <defs>
        <radialGradient id="fg-${uid}" cx="35%" cy="28%" r="80%">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0.28"/>
        </radialGradient>
      </defs>
      <circle cx="32" cy="34" r="32" fill="#0b1220"/>
      <path d="M32 14 C21 14 13 23 13 34 C13 47 21 54 32 54 C43 54 51 47 51 34 C51 23 43 14 32 14 Z"
        fill="url(#fg-${uid})" stroke="${glow ? '#e3b04b' : color}" stroke-width="2.2"/>
      <path d="M32 14 C30 9 31 5 36 3" fill="none" stroke="#7a9b57" stroke-width="3" stroke-linecap="round"/>
      <path d="M20 27 C25 23 39 23 44 27" fill="none" stroke="rgba(255,255,255,0.32)" stroke-width="2" stroke-linecap="round"/>
      <path d="M22 40 C27 44 37 44 42 40" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="2" stroke-linecap="round"/>
      <text x="32" y="41" font-size="19" text-anchor="middle">${f.icon}</text>
    </svg>
  `;
}


function characterPortraitSVG(c) {
  return properImageHTML('character', characterImageTitle(c), `${c.name} portrait`, characterPortraitFallbackSVG(c));
}

function fruitPortraitSVG(f) {
  return properImageHTML('fruit', fruitImageTitle(f), `${f.name} fruit`, fruitPortraitFallbackSVG(f));
}

const IMAGE_CACHE_KEY = 'opwikiProperImages:v1';
const IMAGE_API_ENDPOINT = 'https://onepiece.fandom.com/api.php';
let properImageCache = null;

function getProperImageCache() {
  if (properImageCache) return properImageCache;
  try {
    properImageCache = JSON.parse(localStorage.getItem(IMAGE_CACHE_KEY) || '{}');
  } catch (_) {
    properImageCache = {};
  }
  return properImageCache;
}

function saveProperImageCache() {
  try {
    localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(getProperImageCache()));
  } catch (_) {
    // Non-critical: images still load for the current page if storage is unavailable.
  }
}

function wikiThumbnailUrl(title, size = 700) {
  const params = new URLSearchParams({
    action: 'query',
    prop: 'pageimages',
    format: 'json',
    piprop: 'thumbnail',
    pithumbsize: String(size),
    redirects: '1',
    origin: '*',
    titles: title,
  });
  return `${IMAGE_API_ENDPOINT}?${params.toString()}`;
}

async function resolveProperImage(title) {
  const cache = getProperImageCache();
  if (Object.prototype.hasOwnProperty.call(cache, title)) return cache[title];

  const response = await fetch(wikiThumbnailUrl(title));
  if (!response.ok) throw new Error(`Image lookup failed for ${title}`);
  const data = await response.json();
  const page = Object.values(data.query?.pages || {})[0];
  const source = page?.thumbnail?.source || '';
  cache[title] = source;
  saveProperImageCache();
  return source;
}

function hydrateProperImages(root = document) {
  const holders = [...root.querySelectorAll('.proper-image[data-image-title]')];
  holders.forEach(async (holder) => {
    const img = holder.querySelector('.proper-image__img');
    if (!img || holder.dataset.loaded) return;
    holder.dataset.loaded = 'pending';

    try {
      const source = await resolveProperImage(holder.dataset.imageTitle);
      if (!source) throw new Error('No thumbnail returned');
      img.addEventListener('load', () => {
        holder.classList.add('is-loaded');
        img.hidden = false;
      }, { once: true });
      img.src = source;
      holder.dataset.loaded = 'true';
    } catch (_) {
      holder.dataset.loaded = 'fallback';
    }
  });
}
