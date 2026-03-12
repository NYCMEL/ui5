document.querySelectorAll('[data-popover-toggle]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const target = document.getElementById(btn.dataset.popoverToggle);
    const isOpen = target.classList.contains('open');
    document.querySelectorAll('.ui5-popover').forEach(p => p.classList.remove('open'));
    if (!isOpen) target.classList.add('open');
  });
});
document.addEventListener('click', () => document.querySelectorAll('.ui5-popover').forEach(p => p.classList.remove('open')));
