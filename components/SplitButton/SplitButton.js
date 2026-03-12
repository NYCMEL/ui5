const splitState = document.querySelector('.split-state');

document.querySelectorAll('[data-menu-toggle]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const menu   = document.getElementById(btn.dataset.menuToggle);
    const isOpen = menu.classList.contains('open');
    document.querySelectorAll('.ui5-menu').forEach(m => m.classList.remove('open'));
    if (!isOpen) { menu.style.position = 'absolute'; btn.closest('.ui5-split-btn').appendChild(menu); menu.classList.add('open'); }
  });
});

document.addEventListener('click', () => document.querySelectorAll('.ui5-menu').forEach(m => m.classList.remove('open')));

document.querySelectorAll('.split-main').forEach(btn => {
  btn.addEventListener('click', () => { if (splitState) splitState.textContent = `Main action: ${btn.textContent.trim()}`; });
});

document.querySelectorAll('.ui5-menu__item').forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    if (splitState) splitState.textContent = `Menu action: ${item.textContent.trim()}`;
    item.closest('.ui5-menu')?.classList.remove('open');
  });
});
