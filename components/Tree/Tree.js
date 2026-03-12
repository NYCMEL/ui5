const stateEl = document.querySelector('.tree-state');
document.querySelectorAll('.ui5-tree__item').forEach(item => {
  const toggle = item.querySelector('.ui5-tree__toggle:not(.invisible)');
  const label  = item.querySelector('.ui5-tree__label');
  item.addEventListener('click', function(e) {
    if (stateEl) stateEl.textContent = `Selected: ${label?.textContent}`;
    if (toggle) item.classList.toggle('expanded');
  });
});
