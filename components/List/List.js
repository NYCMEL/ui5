document.querySelectorAll('.mtk-list--selectable .mtk-list__item').forEach(item => {
  item.addEventListener('click', function() {
    this.closest('.mtk-list').querySelectorAll('.mtk-list__item').forEach(i => i.classList.remove('selected'));
    this.classList.add('selected');
    const stateEl = this.closest('.demo-block')?.querySelector('.list-state');
    if (stateEl) stateEl.textContent = `Selected: ${this.querySelector('.mtk-list__title')?.textContent}`;
  });
});
