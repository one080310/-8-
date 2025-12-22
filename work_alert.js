document.querySelectorAll('.homework input').forEach(cb => {
  cb.addEventListener('change', () => {
    cb.nextElementSibling.style.textDecoration =
      cb.checked ? 'line-through' : '';
  });
});
