document.querySelectorAll('.mtk-multi-input').forEach(mi => {
  const input = mi.querySelector('input');
  const addToken = (val) => {
    const token = document.createElement('span');
    token.className = 'mtk-token';
    token.innerHTML = `${val}<button class="mtk-token__remove">×</button>`;
    token.querySelector('.mtk-token__remove').addEventListener('click', () => token.remove());
    mi.insertBefore(token, input);
  };
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      addToken(input.value.trim());
      input.value = '';
    }
    if (e.key === 'Backspace' && !input.value) {
      const tokens = mi.querySelectorAll('.mtk-token');
      tokens[tokens.length - 1]?.remove();
    }
  });
  mi.querySelectorAll('.mtk-token__remove').forEach(btn => btn.addEventListener('click', () => btn.closest('.mtk-token').remove()));
});
