const splitState = document.querySelector('.split-state');

document.querySelectorAll('[data-menu-toggle]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const menu   = document.getElementById(btn.dataset.menuToggle);
    const isOpen = menu.classList.contains('open');
    document.querySelectorAll('.mtk-menu').forEach(m => m.classList.remove('open'));
    if (!isOpen) { menu.style.position = 'absolute'; btn.closest('.mtk-split-btn').appendChild(menu); menu.classList.add('open'); }
  });
});

document.addEventListener('click', () => document.querySelectorAll('.mtk-menu').forEach(m => m.classList.remove('open')));

document.querySelectorAll('.split-main').forEach(btn => {
  btn.addEventListener('click', () => { if (splitState) splitState.textContent = `Main action: ${btn.textContent.trim()}`; });
});

document.querySelectorAll('.mtk-menu__item').forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    if (splitState) splitState.textContent = `Menu action: ${item.textContent.trim()}`;
    item.closest('.mtk-menu')?.classList.remove('open');
  });
});
