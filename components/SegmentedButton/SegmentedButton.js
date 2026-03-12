document.querySelectorAll('.ui5-segmented').forEach(seg => {
  const stateEl = seg.closest('.demo-block')?.querySelector('.seg-state');
  seg.querySelectorAll('.ui5-segmented__btn').forEach(btn => {
    btn.addEventListener('click', function() {
      seg.querySelectorAll('.ui5-segmented__btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (stateEl) stateEl.textContent = `Selected: ${this.textContent.trim()}`;
    });
  });
});
