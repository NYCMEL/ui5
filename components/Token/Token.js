
document.querySelectorAll('.ui5-token__remove').forEach(btn => {
  btn.addEventListener('click', () => {
    const token = btn.closest('.ui5-token');
    token.style.transition = 'all .15s'; token.style.transform = 'scale(0)'; token.style.opacity = '0';
    setTimeout(() => token.remove(), 150);
  });
});
