let currentClass = 1;

// 반 선택
function selectClass(classNum) {
  currentClass = classNum;

  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');

  loadPosts();
}

// 게시물 생성
function createPost() {
  const type = document.getElementById('postType').value;
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;
  const deadline = document.getElementById('postDeadline').value;

  if (!title || !content) {
    alert('제목과 내용을 입력하세요.');
    return;
  }

  const post = document.createElement('div');
  post.className = 'post-card';

  post.innerHTML = `
    <div class="post-header">
      <div class="post-title">${title}</div>
      <span class="post-badge badge-assignment">${type}</span>
    </div>
    <div class="post-content">${content}</div>
    <div class="post-meta">
      <span>${deadline ? '마감: ' + deadline : ''}</span>
      <label>
        <input type="checkbox"> 제출 완료
      </label>
    </div>
  `;

  document.getElementById('postsList').prepend(post);

  // 초기화
  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';
  document.getElementById('postDeadline').value = '';
}

// 게시물 불러오기 (데모)
function loadPosts() {
  console.log(`${currentClass}반 게시물 로딩`);
}

