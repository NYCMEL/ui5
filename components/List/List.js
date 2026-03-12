document.querySelectorAll('.ui5-list--selectable .ui5-list__item').forEach(item => {
  item.addEventListener('click', function() {
    this.closest('.ui5-list').querySelectorAll('.ui5-list__item').forEach(i => i.classList.remove('selected'));
    this.classList.add('selected');
    const stateEl = this.closest('.demo-block')?.querySelector('.list-state');
    if (stateEl) stateEl.textContent = `Selected: ${this.querySelector('.ui5-list__title')?.textContent}`;
  });
});
