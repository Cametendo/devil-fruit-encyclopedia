/* One Piece Wiki — shared utilities used by every page. */

const FACTION_COLORS = [
  [/straw hat/i, '#e63946'],
  [/whitebeard/i, '#6fb7e8'],
  [/blackbeard/i, '#7a5ea8'],
  [/big mom/i, '#e0559a'],
  [/beast pirates/i, '#2f8f7a'],
  [/kozuki|wano/i, '#b3372c'],
  [/revolutionary/i, '#3fa34d'],
  [/donquixote/i, '#e08a2b'],
  [/roger pirates/i, '#d4af37'],
  [/heart pirates/i, '#f2c230'],
  [/kid pirates/i, '#b23a48'],
  [/cp0|cp9|world government/i, '#8a93a6'],
  [/marine/i, '#4c7fc0'],
  [/warlord|cross guild/i, '#9c7a3c'],
  [/germa/i, '#2f96a3'],
  [/fishman|ryugu|amazon lily|kuja/i, '#2aa38f'],
];

function hashHue(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 360;
}

function accentFor(entity) {
  const key = (entity.affiliation || entity.name || '').toString();
  for (const [pattern, color] of FACTION_COLORS) {
    if (pattern.test(key)) return color;
  }
  return `hsl(${hashHue(entity.name || key)}, 58%, 48%)`;
}

function initialFor(name) {
  const match = (name || '?').match(/[A-Za-z]/);
  return match ? match[0].toUpperCase() : '?';
}

function formatBounty(amount) {
  if (amount === null || amount === undefined) return 'Unknown';
  return '฿' + amount.toLocaleString('en-US');
}

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function findCharacter(id) {
  return CHARACTERS.find((c) => c.id === id) || null;
}

function findFruit(id) {
  return FRUITS.find((f) => f.id === id) || null;
}

function characterLink(id) {
  return `character.html?id=${encodeURIComponent(id)}`;
}

function fruitLink(id) {
  return `fruit.html?id=${encodeURIComponent(id)}`;
}

function statusBadgeClass(status) {
  if (!status) return 'badge--unknown';
  if (/alive/i.test(status)) return 'badge--alive';
  if (/deceased/i.test(status)) return 'badge--deceased';
  return 'badge--unknown';
}

function characterCardHTML(c) {
  const accent = accentFor(c);
  const deadRibbon = /deceased/i.test(c.status || '') ? '<span class="char-card__status">Deceased</span>' : '';
  const fruitTag = c.devilFruit ? '<span class="tag tag--fruit">Devil Fruit</span>' : '';
  return `
    <article class="char-card" style="--accent:${accent}">
      <a href="${characterLink(c.id)}" aria-label="View ${escapeHtml(c.name)}">
        <div class="char-card__poster">
          ${deadRibbon}
          <span class="char-card__wanted">WANTED</span>
          <div class="char-card__avatar">${initialFor(c.name)}</div>
        </div>
        <div class="char-card__body">
          <h3>${escapeHtml(c.name)}</h3>
          <p class="char-card__epithet">${c.epithet ? '"' + escapeHtml(c.epithet) + '"' : ' '}</p>
          <p class="char-card__bounty">${c.bounty ? formatBounty(c.bounty) : 'Bounty Unknown'}</p>
          <div class="char-card__tags">
            <span class="tag">${escapeHtml(c.affiliation)}</span>
            ${fruitTag}
          </div>
        </div>
      </a>
    </article>
  `;
}

function fruitCardHTML(f) {
  const owner = f.users.find((u) => /current/i.test(u.status)) || f.users[0];
  const ownerChar = owner ? findCharacter(owner.id) : null;
  return `
    <article class="fruit-card" data-cat="${escapeHtml(f.category)}">
      <a href="${fruitLink(f.id)}" aria-label="View ${escapeHtml(f.name)}">
        <div class="fruit-card__inner">
          <div class="fruit-card__icon">${f.icon}</div>
          <h3>${escapeHtml(f.name)}</h3>
          <span class="fruit-card__type">${escapeHtml(f.category)}${f.subtype ? ' · ' + escapeHtml(f.subtype.split(' —')[0].split(' (')[0]) : ''}</span>
          <p class="fruit-card__tagline">${escapeHtml(f.tagline)}</p>
          <p class="fruit-card__user">${ownerChar ? `<strong>${owner.status.replace(/former|current/i, (m) => m[0].toUpperCase() + m.slice(1))}:</strong> ${escapeHtml(ownerChar.name)}` : 'No known user'}</p>
        </div>
      </a>
    </article>
  `;
}

function renderCardGrid(container, items, renderFn, emptyMessage) {
  if (!items.length) {
    container.innerHTML = `<div class="empty-state">${escapeHtml(emptyMessage || 'No results found.')}</div>`;
    return;
  }
  container.innerHTML = items.map(renderFn).join('');
}

function markActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach((a) => {
    const href = a.getAttribute('href');
    const isCharacters = page === 'index.html' && href === 'index.html';
    const isFruits = (page === 'fruits.html' || page === 'fruit.html') && href === 'fruits.html';
    const isCharDetail = page === 'character.html' && href === 'index.html';
    if (isCharacters || isFruits || isCharDetail) a.classList.add('is-active');
  });
}

document.addEventListener('DOMContentLoaded', markActiveNav);
