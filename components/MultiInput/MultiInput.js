document.querySelectorAll('.ui5-multi-input').forEach(mi => {
  const input = mi.querySelector('input');
  const addToken = (val) => {
    const token = document.createElement('span');
    token.className = 'ui5-token';
    token.innerHTML = `${val}<button class="ui5-token__remove">×</button>`;
    token.querySelector('.ui5-token__remove').addEventListener('click', () => token.remove());
    mi.insertBefore(token, input);
  };
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      addToken(input.value.trim());
      input.value = '';
    }
    if (e.key === 'Backspace' && !input.value) {
      const tokens = mi.querySelectorAll('.ui5-token');
      tokens[tokens.length - 1]?.remove();
    }
  });
  mi.querySelectorAll('.ui5-token__remove').forEach(btn => btn.addEventListener('click', () => btn.closest('.ui5-token').remove()));
});
