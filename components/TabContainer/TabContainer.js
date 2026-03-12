document.querySelectorAll('.mtk-tabs').forEach(tabs => {
  const btns  = tabs.querySelectorAll('.mtk-tabs__tab');
  const panes = tabs.querySelectorAll('.mtk-tabs__pane');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      btns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panes[i]?.classList.add('active');
    });
  });
});
