// 변수
NEXT_COUNT = 0;
SCORE = 0;

// 시작하기 버튼 구현
const startBtn = document.querySelector('.btn--start');
const home = document.querySelector('.quiz__home');
function nextPage () {
    home.classList.add('active')
}
startBtn.addEventListener('click',nextPage);

// 다음버튼 구현
const nextBtn = document.querySelector('.btn--next');
const quizs = document.querySelectorAll('.quiz__item');
const results = document.querySelectorAll('quiz__item__input');


nextBtn.addEventListener('click',()=>{
    console.log(results);
    quizs[NEXT_COUNT].classList.add('active');
    quizs[NEXT_COUNT+1].classList.remove('active');
    NEXT_COUNT++;
})