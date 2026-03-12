
document.querySelectorAll('.mtk-mcombo').forEach(mc => {
  const field    = mc.querySelector('.mtk-mcombo__field');
  const input    = mc.querySelector('.mtk-mcombo__input');
  const arrow    = mc.querySelector('.mtk-mcombo__arrow');
  const dropdown = mc.querySelector('.mtk-mcombo__dropdown');
  const tokWrap  = mc.querySelector('.mtk-mcombo__tokens');
  const allItems = (mc.dataset.items || '').split(',').map(s => s.trim());
  let selected   = new Set();

  function renderDropdown(filter = '') {
    const list = filter ? allItems.filter(i => i.toLowerCase().includes(filter.toLowerCase())) : allItems;
    dropdown.innerHTML = list.map(i => `<div class="mtk-mcombo__item${selected.has(i) ? ' checked' : ''}" data-val="${i}">${i}</div>`).join('');
    dropdown.querySelectorAll('.mtk-mcombo__item').forEach(el => {
      el.addEventListener('click', e => { e.stopPropagation(); toggle(el.dataset.val); });
    });
    dropdown.classList.add('open');
  }

  function toggle(val) {
    selected.has(val) ? selected.delete(val) : selected.add(val);
    renderTokens(); renderDropdown(input.value);
  }

  function renderTokens() {
    tokWrap.innerHTML = [...selected].map(v =>
      `<span class="mtk-token">${v}<button class="mtk-token__remove" data-val="${v}">×</button></span>`
    ).join('');
    tokWrap.querySelectorAll('.mtk-token__remove').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); selected.delete(btn.dataset.val); renderTokens(); });
    });
  }

  input.addEventListener('focus', () => renderDropdown(input.value));
  input.addEventListener('input', () => renderDropdown(input.value));
  arrow.addEventListener('click', e => { e.stopPropagation(); dropdown.classList.contains('open') ? dropdown.classList.remove('open') : renderDropdown(input.value); });
  field.addEventListener('click', () => input.focus());
  document.addEventListener('click', e => { if (!mc.contains(e.target)) dropdown.classList.remove('open'); });
});
