let progInterval = null;
document.getElementById('run-progress')?.addEventListener('click', () => {
  const fill  = document.getElementById('prog-fill');
  const label = document.getElementById('prog-label');
  if (!fill || !label) return;
  clearInterval(progInterval);
  let v = 0; fill.style.width = '0%'; label.textContent = '0%';
  progInterval = setInterval(() => {
    v = Math.min(100, v + Math.random() * 10);
    fill.style.width = v + '%'; label.textContent = Math.round(v) + '%';
    if (v >= 100) clearInterval(progInterval);
  }, 200);
});
