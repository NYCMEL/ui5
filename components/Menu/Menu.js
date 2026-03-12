const stateEl = document.querySelector('.menu-state');

document.querySelectorAll('[data-menu-toggle]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const target  = document.getElementById(btn.dataset.menuToggle);
    const isOpen  = target.classList.contains('open');
    document.querySelectorAll('.mtk-menu').forEach(m => m.classList.remove('open'));
    if (!isOpen) target.classList.add('open');
  });
});
document.addEventListener('click', () => document.querySelectorAll('.mtk-menu').forEach(m => m.classList.remove('open')));

document.querySelectorAll('.mtk-menu__item:not(.mtk-menu__item--sep):not(.mtk-menu__item--disabled)').forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    if (stateEl) stateEl.textContent = `Clicked: ${item.textContent.trim()}`;
    item.closest('.mtk-menu')?.classList.remove('open');
  });
});
