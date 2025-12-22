document.querySelectorAll('input').forEach(cb => {
  cb.addEventListener('change', () => {
    cb.parentElement.style.textDecoration =
      cb.checked ? 'line-through' : '';
  });
});
