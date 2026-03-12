document.querySelectorAll('.ui5-expandable').forEach(ex => {
  const text   = ex.querySelector('.ui5-expandable__text');
  const toggle = ex.querySelector('.ui5-expandable__toggle');
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
