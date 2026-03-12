
document.querySelectorAll('.ui5-ai-btn:not([disabled]):not(.ui5-ai-btn--loading)').forEach(btn => {
  btn.addEventListener('click', function() {
    if (this.classList.contains('ui5-ai-btn--complete')) return;
    const original = this.innerHTML;
    this.classList.add('ui5-ai-btn--loading');
    this.innerHTML = '⏳ Generating…';
    this.disabled = true;
    setTimeout(() => {
      this.classList.remove('ui5-ai-btn--loading');
      this.classList.add('ui5-ai-btn--complete');
      this.innerHTML = '✓ Complete';
      this.disabled = false;
    }, 2000);
  });
});
