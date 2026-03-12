document.querySelectorAll('.mtk-segmented').forEach(seg => {
  const stateEl = seg.closest('.demo-block')?.querySelector('.seg-state');
  seg.querySelectorAll('.mtk-segmented__btn').forEach(btn => {
    btn.addEventListener('click', function() {
      seg.querySelectorAll('.mtk-segmented__btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (stateEl) stateEl.textContent = `Selected: ${this.textContent.trim()}`;
    });
  });
});
