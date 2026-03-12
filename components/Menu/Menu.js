const stateEl = document.querySelector('.menu-state');

document.querySelectorAll('[data-menu-toggle]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const target  = document.getElementById(btn.dataset.menuToggle);
    const isOpen  = target.classList.contains('open');
    document.querySelectorAll('.ui5-menu').forEach(m => m.classList.remove('open'));
    if (!isOpen) target.classList.add('open');
  });
});
document.addEventListener('click', () => document.querySelectorAll('.ui5-menu').forEach(m => m.classList.remove('open')));

document.querySelectorAll('.ui5-menu__item:not(.ui5-menu__item--sep):not(.ui5-menu__item--disabled)').forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation();
    if (stateEl) stateEl.textContent = `Clicked: ${item.textContent.trim()}`;
    item.closest('.ui5-menu')?.classList.remove('open');
  });
});
