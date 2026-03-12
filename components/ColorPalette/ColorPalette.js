document.querySelectorAll('.ui5-color-palette').forEach(palette => {
  palette.querySelectorAll('.ui5-color-palette__swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
      palette.querySelectorAll('.ui5-color-palette__swatch').forEach(s => s.classList.remove('selected'));
      this.classList.add('selected');
      const stateEl = this.closest('.demo-block')?.querySelector('.color-state');
      if (stateEl) { stateEl.textContent = `Selected: ${this.style.background}`; stateEl.style.color = this.style.background; }
    });
  });
});
