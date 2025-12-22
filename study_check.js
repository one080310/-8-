document.querySelector('input')
  .addEventListener('change', e => {
    alert(e.target.checked ? "완료" : "미완료");
  });
