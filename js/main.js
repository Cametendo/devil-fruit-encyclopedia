/* Home page: character grid with search + affiliation + devil-fruit filters. */

(function () {
  const grid = document.getElementById('character-grid');
  const searchInput = document.getElementById('search-input');
  const affiliationSelect = document.getElementById('affiliation-select');
  const fruitOnlyCheckbox = document.getElementById('fruit-only-checkbox');
  const resultCount = document.getElementById('result-count');

  document.getElementById('stat-characters').textContent = CHARACTERS.length;
  document.getElementById('stat-fruits').textContent = FRUITS.length;

  const affiliations = [...new Set(CHARACTERS.map((c) => c.affiliation))].sort((a, b) => a.localeCompare(b));
  affiliations.forEach((aff) => {
    const opt = document.createElement('option');
    opt.value = aff;
    opt.textContent = aff;
    affiliationSelect.appendChild(opt);
  });

  function applyFilters() {
    const term = searchInput.value.trim().toLowerCase();
    const affiliation = affiliationSelect.value;
    const fruitOnly = fruitOnlyCheckbox.checked;

    const results = CHARACTERS.filter((c) => {
      if (fruitOnly && !c.devilFruit) return false;
      if (affiliation && c.affiliation !== affiliation) return false;
      if (term) {
        const haystack = `${c.name} ${c.epithet || ''} ${c.affiliation} ${c.role}`.toLowerCase();
        if (!haystack.includes(term)) return false;
      }
      return true;
    });

    renderCardGrid(grid, results, characterCardHTML, 'No characters match your search. Try a different name or affiliation.');
    resultCount.textContent = `${results.length} of ${CHARACTERS.length} characters`;
    hydrateProperImages(grid);
  }

  searchInput.addEventListener('input', applyFilters);
  affiliationSelect.addEventListener('change', applyFilters);
  fruitOnlyCheckbox.addEventListener('change', applyFilters);

  applyFilters();
})();
