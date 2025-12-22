document.querySelectorAll('input[type="checkbox"]').forEach(box => {
  const id = box.dataset.id;
  box.checked = localStorage.getItem(id) === 'true';

  box.addEventListener('change', () => {
    localStorage.setItem(id, box.checked);
  });
});
