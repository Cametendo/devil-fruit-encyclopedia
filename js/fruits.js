/* Devil Fruit index page: search + category filter over FRUITS. */

(function () {
  const grid = document.getElementById('fruit-grid');
  const searchInput = document.getElementById('search-input');
  const resultCount = document.getElementById('result-count');
  const chipRow = document.getElementById('category-chips');

  document.getElementById('stat-fruits').textContent = FRUITS.length;
  document.getElementById('stat-paramecia').textContent = FRUITS.filter((f) => f.category === 'Paramecia').length;
  document.getElementById('stat-zoan').textContent = FRUITS.filter((f) => f.category === 'Zoan').length;
  document.getElementById('stat-logia').textContent = FRUITS.filter((f) => f.category === 'Logia').length;

  const categories = ['All', 'Paramecia', 'Zoan', 'Logia'];
  let activeCategory = 'All';

  chipRow.innerHTML = categories.map((cat) =>
    `<button type="button" class="chip${cat === activeCategory ? ' is-active' : ''}" data-cat="${cat}">${cat}</button>`
  ).join('');

  function applyFilters() {
    const term = searchInput.value.trim().toLowerCase();

    const results = FRUITS.filter((f) => {
      if (activeCategory !== 'All' && f.category !== activeCategory) return false;
      if (term) {
        const userNames = f.users.map((u) => (findCharacter(u.id) || {}).name || '').join(' ');
        const haystack = `${f.name} ${f.englishName} ${f.tagline} ${userNames}`.toLowerCase();
        if (!haystack.includes(term)) return false;
      }
      return true;
    });

    renderCardGrid(grid, results, fruitCardHTML, 'No Devil Fruits match your search.');
    resultCount.textContent = `${results.length} of ${FRUITS.length} Devil Fruits`;
  }

  chipRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    chipRow.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-active', c === btn));
    applyFilters();
  });

  searchInput.addEventListener('input', applyFilters);

  applyFilters();
})();
