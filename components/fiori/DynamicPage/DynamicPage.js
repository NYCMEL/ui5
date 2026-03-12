
const btn     = document.getElementById('dp-collapse');
const content = document.getElementById('dp-content');
btn?.addEventListener('click', () => {
  btn.classList.toggle('collapsed');
  content.classList.toggle('collapsed');
  btn.textContent = content.classList.contains('collapsed') ? '▼' : '▲';
});
