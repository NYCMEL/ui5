const stateEl = document.querySelector('.tree-state');
document.querySelectorAll('.mtk-tree__item').forEach(item => {
  const toggle = item.querySelector('.mtk-tree__toggle:not(.invisible)');
  const label  = item.querySelector('.mtk-tree__label');
  item.addEventListener('click', function(e) {
    if (stateEl) stateEl.textContent = `Selected: ${label?.textContent}`;
    if (toggle) item.classList.toggle('expanded');
  });
});
