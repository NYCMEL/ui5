document.querySelectorAll('.ui5-msgstrip__close').forEach(btn => {
  btn.addEventListener('click', () => {
    const strip = btn.closest('.ui5-msgstrip');
    strip.style.transition = 'opacity 0.2s, transform 0.2s';
    strip.style.opacity = '0';
    strip.style.transform = 'translateX(10px)';
    setTimeout(() => strip.remove(), 200);
  });
});
