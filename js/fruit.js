/* Devil Fruit detail page: renders a full entry from ?id= against FRUITS/CHARACTERS. */

(function () {
  const root = document.getElementById('fruit-content');
  const id = qs('id');
  const fruit = id ? findFruit(id) : null;

  if (!fruit) {
    root.innerHTML = `
      <div class="empty-state">
        Devil Fruit not found. <a href="fruits.html">Return to the Devil Fruit index</a>.
      </div>
    `;
    return;
  }

  document.title = `${fruit.name} — One Piece Wiki`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', `${fruit.name} (${fruit.englishName}) — history, powers, and every known user on the One Piece Wiki.`);

  const historyParagraphs = fruit.history.split('\n\n').map((p) => `<p>${escapeHtml(p)}</p>`).join('');

  const usersHTML = fruit.users.map((u) => {
    const c = findCharacter(u.id);
    if (!c) return '';
    return `
      <a class="user-chip" href="${characterLink(c.id)}" style="--accent:${accentFor(c)}">
        <div class="user-chip__avatar">${characterPortraitSVG(c)}</div>
        <div>
          <div class="user-chip__name">${escapeHtml(c.name)}</div>
          <div class="user-chip__status">${escapeHtml(u.status)}</div>
        </div>
      </a>
    `;
  }).join('');

  root.innerHTML = `
    <section class="fruit-detail-header" data-cat="${escapeHtml(fruit.category)}">
      <div class="fruit-detail-header__icon">${fruitPortraitSVG(fruit)}</div>
      <div>
        <p class="profile-eyebrow" style="color:var(--cat-color)">${escapeHtml(fruit.category)}${fruit.subtype ? ' · ' + escapeHtml(fruit.subtype) : ''}${fruit.awakened ? ' · Awakened' : ''}</p>
        <h1>${escapeHtml(fruit.name)}</h1>
        <p class="profile-epithet">${escapeHtml(fruit.englishName)}</p>
        <p class="fruit-meaning">${escapeHtml(fruit.meaning)}</p>
      </div>
    </section>

    <div class="profile-layout">
      <div class="profile-main">
        <div class="card">
          <h2>Overview</h2>
          <p>${escapeHtml(fruit.description)}</p>
        </div>

        <div class="card">
          <h2>History</h2>
          <div class="prose">${historyParagraphs}</div>
        </div>

        <div class="card">
          <h2>Powers &amp; Techniques</h2>
          <ul class="power-list">
            ${fruit.powers.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}
          </ul>
        </div>

        <div class="card">
          <h2>Strengths &amp; Weaknesses</h2>
          <p><strong style="color:var(--text)">Strengths:</strong> ${escapeHtml(fruit.strengths)}</p>
          <p><strong style="color:var(--text)">Weaknesses:</strong> ${escapeHtml(fruit.weaknesses)}</p>
        </div>
      </div>

      <aside class="card">
        <h2>Users</h2>
        <div class="user-list">
          ${usersHTML || '<p>No known users.</p>'}
        </div>
      </aside>
    </div>
  `;

  hydrateProperImages(root);
})();
