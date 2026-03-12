let toastId = 0;
const container = document.getElementById('toast-container');

function showToast(msg, type = '', duration = 3000) {
  const icons = { success: '✅', error: '❌', warning: '⚠️', '': 'ℹ️' };
  const el = document.createElement('div');
  el.className = `ui5-toast${type ? ' ui5-toast--' + type : ''}`;
  el.innerHTML = `<span class="ui5-toast__icon">${icons[type] || icons['']}</span><span class="ui5-toast__msg">${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => { el.classList.add('hiding'); setTimeout(() => el.remove(), 300); }, duration);
}
