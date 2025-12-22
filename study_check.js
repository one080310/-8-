document.querySelectorAll('#studyTable input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    if (cb.checked) {
      cb.closest('tr').style.backgroundColor = '#e6fffa';
    } else {
      cb.closest('tr').style.backgroundColor = '';
    }
  });
});

