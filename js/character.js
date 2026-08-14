/* Character detail page: renders a full profile from ?id= against CHARACTERS/FRUITS. */

(function () {
  const root = document.getElementById('character-content');
  const id = qs('id');
  const character = id ? findCharacter(id) : null;

  if (!character) {
    root.innerHTML = `
      <div class="empty-state">
        Character not found. <a href="index.html">Return to the character index</a>.
      </div>
    `;
    return;
  }

  document.title = `${character.name} — One Piece Wiki`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', `${character.name}${character.epithet ? ' "' + character.epithet + '"' : ''} — profile, abilities, and Devil Fruit on the One Piece Wiki.`);

  const accent = accentFor(character);
  const fruit = character.devilFruit ? findFruit(character.devilFruit) : null;
  const fruitRelation = fruit ? fruit.users.find((u) => u.id === character.id) : null;

  const statRows = [
    ['Affiliation', character.affiliation],
    ['Role', character.role],
    ['Origin', character.origin],
    ['Age', character.age ?? 'Unknown'],
    ['Height', character.height || 'Unknown'],
    ['Birthday', character.birthday || 'Unknown'],
    ['Status', character.status || 'Unknown'],
    ['First Appearance', character.firstAppearance || 'Unknown'],
  ];

  root.innerHTML = `
    <section class="profile-header" style="--accent:${accent}">
      <div class="profile-avatar">${characterPortraitSVG(character)}</div>
      <div>
        <p class="profile-eyebrow">${escapeHtml(character.affiliation)} · ${escapeHtml(character.role)}</p>
        <h1>${escapeHtml(character.name)}</h1>
        <p class="profile-epithet">${character.epithet ? '"' + escapeHtml(character.epithet) + '"' : ''}</p>
        <div class="profile-badges">
          <span class="badge ${statusBadgeClass(character.status)}">${escapeHtml(character.status || 'Unknown')}</span>
          <span class="badge badge--bounty">${character.bounty ? formatBounty(character.bounty) : 'Bounty Unknown'}</span>
          ${fruit ? `<span class="badge" data-cat="${escapeHtml(fruit.category)}" style="color:var(--cat-color)">${escapeHtml(fruit.category)} User</span>` : ''}
        </div>
      </div>
    </section>

    <div class="profile-layout">
      <div class="profile-main">
        ${fruit ? `
          <a class="fruit-callout" href="${fruitLink(fruit.id)}">
            <div class="fruit-callout__icon">${fruitPortraitSVG(fruit)}</div>
            <div>
              <p class="fruit-callout__label">${escapeHtml(fruitRelation ? fruitRelation.status : 'Devil Fruit')}</p>
              <h3>${escapeHtml(fruit.name)}</h3>
              <p>${escapeHtml(fruit.tagline)}</p>
            </div>
          </a>
        ` : ''}

        <div class="card">
          <h2>Biography</h2>
          <p>${escapeHtml(character.bio)}</p>
        </div>

        <div class="card">
          <h2>Abilities &amp; Haki</h2>
          <ul class="ability-list">
            ${character.abilities.map((a) => `<li>${escapeHtml(a)}</li>`).join('')}
          </ul>
        </div>
      </div>

      <aside class="profile-stats card">
        <h2>Profile</h2>
        <dl class="stat-list">
          ${statRows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}
        </dl>
      </aside>
    </div>
  `;

  hydrateProperImages(root);
})();
