
document.querySelectorAll('.mtk-token__remove').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('.mtk-token').remove());
});

let tokenCount = 6;
document.getElementById('add-token')?.addEventListener('click', () => {
  const tok = document.createElement('span');
  tok.className = 'mtk-token';
  tok.innerHTML = `Token ${tokenCount++}<button class="mtk-token__remove">×</button>`;
  tok.querySelector('.mtk-token__remove').addEventListener('click', () => tok.remove());
  document.querySelector('.mtk-tokenizer').insertBefore(tok, document.getElementById('tok-overflow'));
});
