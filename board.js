let currentClass = 1;

function selectClass(num) {
  currentClass = num;

  document.querySelectorAll('.class-btn')
    .forEach(b => b.classList.remove('active'));

  event.target.classList.add('active');
}

function createPost() {
  const title = postTitle.value;
  const content = postContent.value;

  if (!title || !content) {
    alert("입력해");
    return;
  }

  const div = document.createElement('div');
  div.className = 'post';
  div.innerHTML = `<h4>${title}</h4><p>${content}</p>`;

  postsList.prepend(div);

  postTitle.value = "";
  postContent.value = "";
}
