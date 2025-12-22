// 체크박스 상태 저장
document.querySelectorAll('input[type="checkbox"]').forEach((box, i) => {
  const key = location.pathname + '_check_' + i;
  box.checked = localStorage.getItem(key) === 'true';

  box.addEventListener('change', () => {
    localStorage.setItem(key, box.checked);
  });
});

// contenteditable 저장
document.querySelectorAll('[contenteditable]').forEach((el, i) => {
  const key = location.pathname + '_text_' + i;
  el.innerText = localStorage.getItem(key) || el.innerText;

  el.addEventListener('input', () => {
    localStorage.setItem(key, el.innerText);
  });
});
