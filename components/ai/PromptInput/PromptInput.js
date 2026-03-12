
const promptInput = document.getElementById('prompt-input');
const charsEl     = document.getElementById('prompt-chars');
const MAX = 4000;
promptInput?.addEventListener('input', () => {
  const len = promptInput.value.length;
  if (charsEl) { charsEl.textContent = `${len} / ${MAX} chars`; charsEl.style.color = len > MAX * .9 ? '#b00' : ''; }
  if (len > MAX) promptInput.value = promptInput.value.slice(0, MAX);
});
document.getElementById('prompt-clear')?.addEventListener('click', () => { if (promptInput) { promptInput.value = ''; promptInput.dispatchEvent(new Event('input')); } });
document.querySelectorAll('.ui5-prompt__sugg').forEach(s => {
  s.addEventListener('click', () => { if (promptInput) { promptInput.value = s.textContent.trim(); promptInput.dispatchEvent(new Event('input')); } });
});
document.getElementById('prompt-submit')?.addEventListener('click', () => {
  if (promptInput?.value) alert('Prompt submitted: ' + promptInput.value.slice(0, 50) + '…');
});
