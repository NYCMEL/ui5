
document.querySelectorAll('.mtk-ai-btn:not([disabled]):not(.mtk-ai-btn--loading)').forEach(btn => {
  btn.addEventListener('click', function() {
    if (this.classList.contains('mtk-ai-btn--complete')) return;
    const original = this.innerHTML;
    this.classList.add('mtk-ai-btn--loading');
    this.innerHTML = '⏳ Generating…';
    this.disabled = true;
    setTimeout(() => {
      this.classList.remove('mtk-ai-btn--loading');
      this.classList.add('mtk-ai-btn--complete');
      this.innerHTML = '✓ Complete';
      this.disabled = false;
    }, 2000);
  });
});
