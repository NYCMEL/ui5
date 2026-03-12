
document.querySelectorAll('.mtk-combo').forEach(combo => {
  const input    = combo.querySelector('.mtk-combo__input');
  const arrow    = combo.querySelector('.mtk-combo__arrow');
  const dropdown = combo.querySelector('.mtk-combo__dropdown');
  const items    = (combo.dataset.items || '').split(',').map(s => s.trim());

  function showItems(filter = '') {
    const filtered = filter ? items.filter(i => i.toLowerCase().includes(filter.toLowerCase())) : items;
    dropdown.innerHTML = filtered.length
      ? filtered.map(i => `<div class="mtk-combo__item">${i}</div>`).join('')
      : `<div class="mtk-combo__item no-match">No results</div>`;
    dropdown.querySelectorAll('.mtk-combo__item:not(.no-match)').forEach(el => {
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
