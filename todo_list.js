
document.querySelectorAll('.todo-item input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    cb.parentElement.classList.toggle('completed', cb.checked);
  });
});
