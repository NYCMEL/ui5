
let step = 2, total = 4;
const steps = document.querySelectorAll('.ui5-wizard__step');
const lines = document.querySelectorAll('.ui5-wizard__step-line');
const panes = document.querySelectorAll('.ui5-wizard__pane');
const counter = document.getElementById('wiz-counter');
const prevBtn = document.getElementById('wiz-prev');
const nextBtn = document.getElementById('wiz-next');

function renderStep() {
  steps.forEach((s, i) => {
    const n = i/2+1;
    s.classList.remove('active','completed');
    if (n < step) s.classList.add('completed');
    if (n === step) s.classList.add('active');
  });
  lines.forEach((l, i) => { l.classList.toggle('completed', i+1 < step); });
  panes.forEach((p, i) => p.classList.toggle('active', i+1 === step));
  if (counter) counter.textContent = `Step ${step} of ${total}`;
  if (prevBtn) prevBtn.disabled = step === 1;
  if (nextBtn) nextBtn.textContent = step === total ? '✓ Submit' : 'Next →';
}

prevBtn?.addEventListener('click', () => { if (step > 1) { step--; renderStep(); } });
nextBtn?.addEventListener('click', () => { if (step < total) { step++; renderStep(); } else { alert('Submitted! ✓'); } });
renderStep();
