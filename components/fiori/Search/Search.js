
const input   = document.getElementById('search-input');
const clear   = document.getElementById('search-clear');
const sugg    = document.getElementById('search-suggestions');
const stateEl = document.getElementById('search-state');
const ITEMS   = ['Product Analytics','Purchase Orders','Sales Dashboard','Inventory Report','Employee Directory','Budget Overview','Contract Management','Supplier Portal','Customer Support','HR Workflows'];

input.addEventListener('input', () => {
  const val = input.value.trim();
  clear.style.display = val ? '' : 'none';
  if (!val) { sugg.classList.remove('open'); return; }
  const matches = ITEMS.filter(i => i.toLowerCase().includes(val.toLowerCase()));
  if (!matches.length) { sugg.classList.remove('open'); return; }
  sugg.innerHTML = matches.map(m => {
    const hi = m.replace(new RegExp(val,'gi'), s => `<em>${s}</em>`);
    return `<div class="mtk-search__suggestion">${hi}</div>`;
  }).join('');
  sugg.querySelectorAll('.mtk-search__suggestion').forEach(el => {
    el.addEventListener('click', () => { input.value = el.textContent; sugg.classList.remove('open'); if (stateEl) stateEl.textContent = `Searched: "${el.textContent}"`; });
  });
  sugg.classList.add('open');
});

clear.addEventListener('click', () => { input.value = ''; clear.style.display = 'none'; sugg.classList.remove('open'); input.focus(); });
document.addEventListener('click', e => { if (!e.target.closest('.mtk-search-wrap')) sugg.classList.remove('open'); });
