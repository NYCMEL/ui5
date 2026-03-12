document.querySelectorAll('.mtk-expandable').forEach(ex => {
  const text   = ex.querySelector('.mtk-expandable__text');
  const toggle = ex.querySelector('.mtk-expandable__toggle');
  const maxH   = text.dataset.maxHeight || '48px';
  let expanded = false;
  text.style.maxHeight = maxH;
  text.style.overflow  = 'hidden';
  toggle.addEventListener('click', () => {
    expanded = !expanded;
    text.style.maxHeight = expanded ? text.scrollHeight + 'px' : maxH;
    toggle.textContent   = expanded ? 'Show Less' : 'Show More';
  });
});
