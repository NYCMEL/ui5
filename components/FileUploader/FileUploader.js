document.querySelectorAll('.ui5-file-uploader').forEach(uploader => {
  const drop  = uploader.querySelector('.ui5-file-uploader__drop');
  const input = uploader.querySelector('input[type=file]');
  const stateEl = uploader.closest('.demo-block')?.querySelector('.file-state');

  drop.addEventListener('click', () => input.click());
  drop.addEventListener('dragover',  e => { e.preventDefault(); drop.classList.add('dragover'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('dragover'));
  drop.addEventListener('drop', e => {
    e.preventDefault();
    drop.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length && stateEl) stateEl.textContent = `Dropped: ${[...files].map(f=>f.name).join(', ')}`;
  });
  input.addEventListener('change', () => {
    if (input.files.length && stateEl) stateEl.textContent = `Selected: ${[...input.files].map(f=>f.name).join(', ')}`;
  });
});
