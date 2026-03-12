
const ta    = document.getElementById('aitextarea');
const statEl= document.getElementById('aitextarea-status');
const TRANSFORMS = {
  improve:  t => t.replace(/\./g,'. ✓').replace(/  +/g,' ') || t,
  formal:   t => 'Dear valued reader,\n\n' + t + '\n\nKind regards.',
  shorter:  t => t.split(' ').slice(0, Math.ceil(t.split(' ').length * .6)).join(' ') + '…',
  expand:   t => t + '\n\nFurthermore, this enhanced perspective provides additional context and detail that enriches our understanding of the subject matter.',
};
document.querySelectorAll('.ui5-aitextarea__action').forEach(btn => {
  btn.addEventListener('click', function() {
    if (!ta?.value) return;
    const fn = TRANSFORMS[this.dataset.action];
    if (fn) {
      ta.value = fn(ta.value.trim());
      if (statEl) { statEl.textContent = `✨ Applied: ${this.textContent.trim()}`; setTimeout(() => statEl.textContent = '', 3000); }
    }
  });
});
