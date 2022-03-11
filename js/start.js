// 상수로 main, qna, result를 선언
const main = document.querySelector('#main');
const detail = document.querySelector('#detail');
const end = document.querySelector('#end');

function begin() {
  main.style.WebkitAnimation = 'fadeOut 1s';
  main.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    detail.style.WebkitAnimation = 'fadeIn 1s';
    detail.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      main.style.display = 'none';
      detail.style.display = 'block';
    }, 450);
  }, 450);
}

function back() {
  detail.style.WebkitAnimation = 'fadeOut 1s';
  detail.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    main.style.WebkitAnimation = 'fadeIn 1s';
    main.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      detail.style.display = 'none';
      main.style.display = 'block';
    }, 450);
  }, 450);
}

function next() {
  detail.style.WebkitAnimation = 'fadeOut 1s';
  detail.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    end.style.WebkitAnimation = 'fadeIn 1s';
    end.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      detail.style.display = 'none';
      end.style.display = 'block';
    }, 450);
  }, 450);
}
