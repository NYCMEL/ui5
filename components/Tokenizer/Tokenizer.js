
document.querySelectorAll('.ui5-token__remove').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('.ui5-token').remove());
});

let tokenCount = 6;
document.getElementById('add-token')?.addEventListener('click', () => {
  const tok = document.createElement('span');
  tok.className = 'ui5-token';
  tok.innerHTML = `Token ${tokenCount++}<button class="ui5-token__remove">×</button>`;
  tok.querySelector('.ui5-token__remove').addEventListener('click', () => tok.remove());
  document.querySelector('.ui5-tokenizer').insertBefore(tok, document.getElementById('tok-overflow'));
});
