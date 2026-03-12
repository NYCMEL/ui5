
document.querySelectorAll('.ui5-combo').forEach(combo => {
  const input    = combo.querySelector('.ui5-combo__input');
  const arrow    = combo.querySelector('.ui5-combo__arrow');
  const dropdown = combo.querySelector('.ui5-combo__dropdown');
  const items    = (combo.dataset.items || '').split(',').map(s => s.trim());

  function showItems(filter = '') {
    const filtered = filter ? items.filter(i => i.toLowerCase().includes(filter.toLowerCase())) : items;
    dropdown.innerHTML = filtered.length
      ? filtered.map(i => `<div class="ui5-combo__item">${i}</div>`).join('')
      : `<div class="ui5-combo__item no-match">No results</div>`;
    dropdown.querySelectorAll('.ui5-combo__item:not(.no-match)').forEach(el => {
      el.addEventListener('click', () => { input.value = el.textContent; dropdown.classList.remove('open'); });
    });
    dropdown.classList.add('open');
  }

  input.addEventListener('input', () => showItems(input.value));
  input.addEventListener('focus', () => showItems(input.value));
  arrow.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.contains('open') ? dropdown.classList.remove('open') : showItems(input.value);
  });
  document.addEventListener('click', e => { if (!combo.contains(e.target)) dropdown.classList.remove('open'); });
});
