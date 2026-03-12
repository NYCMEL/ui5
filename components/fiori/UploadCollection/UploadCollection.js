
const drop  = document.getElementById('uc-drop');
const input = document.getElementById('uc-input');
const list  = document.getElementById('uc-list');

drop.addEventListener('click', () => input.click());
drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('drag'); });
drop.addEventListener('dragleave', () => drop.classList.remove('drag'));
drop.addEventListener('drop', e => { e.preventDefault(); drop.classList.remove('drag'); addFiles(e.dataTransfer.files); });
input.addEventListener('change', () => addFiles(input.files));

function addFiles(files) {
  [...files].forEach(f => {
    const item = document.createElement('div');
    item.className = 'mtk-upload-collection__item';
    item.innerHTML = `<span class="mtk-upload-collection__icon">📄</span>
      <div class="mtk-upload-collection__info">
        <div class="mtk-upload-collection__name">${f.name}</div>
        <div class="mtk-upload-collection__meta">${(f.size/1024).toFixed(0)} KB · Just added</div>
      </div>
      <div class="mtk-upload-collection__actions">
        <button class="mtk-btn mtk-btn--transparent mtk-btn--sm">⬇️</button>
        <button class="mtk-btn mtk-btn--transparent mtk-btn--sm uc-remove">🗑️</button>
      </div>`;
    item.querySelector('.uc-remove').addEventListener('click', () => item.remove());
    list.appendChild(item);
  });
}
document.querySelectorAll('.uc-remove').forEach(btn => btn.addEventListener('click', () => btn.closest('.mtk-upload-collection__item').remove()));
