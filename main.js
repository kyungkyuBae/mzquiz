// 변수
NEXT_COUNT = 0;
SCORE = 0;
ANSWERS = ["좋아","일이고","깔센","티비","저녁메뉴추천","귀여워","킹","구알","억지텐션","당연히모든치킨은옳다"]

// 시작하기 버튼 구현
const startBtn = document.querySelector('.btn--start');
const home = document.querySelector('.quiz__home');
const quizForm = document.querySelector('.quiz__form');
function nextPage () {
    home.classList.add('active');
    quizForm.classList.remove('active');
    quizs[0].classList.remove('active');
    results[0].focus();
}
startBtn.addEventListener('click',nextPage);

// 다음버튼 구현
const nextBtn = document.querySelector('.btn--next');
const quizs = document.querySelectorAll('.quiz__item');
const results = document.querySelectorAll('.quiz__item__input');
const firstResult = document.querySelector('.result--first');
const resultForm = document.querySelector('.quiz__result');
const resultFirst = document.querySelector('.result--first');
const resultSecond = document.querySelector('.result--second');
const resultThird = document.querySelector('.result--third');
const resultTitles = document.querySelectorAll('.result__title');

nextBtn.addEventListener('click',()=>{
    let result = results[NEXT_COUNT].value
    for (i=0; i < result.length; i++){
        result = result.replace(/ /gi,'')
    }
    if (result === ANSWERS[NEXT_COUNT]){
        SCORE++;
    }
    if (NEXT_COUNT < 10 ){
        quizs[NEXT_COUNT].classList.add('active');
    if (NEXT_COUNT < 9){
        quizs[NEXT_COUNT+1].classList.remove('active');
        results.forEach(e=>{e.focus()})
    }
    NEXT_COUNT++;
    }

    if (NEXT_COUNT === 10){
        nextBtn.classList.add('active');
        resultForm.classList.remove('active');
        quizForm.classList.add('active')
        if (SCORE > 7){
            resultThird.classList.remove('active');
            resultTitles[2].innerHTML = `<div>10문제 중 ${SCORE}문제를 맞히셨네요!</div>`
        }
        else if (SCORE > 3){
            resultSecond.classList.remove('active');
            resultTitles[1].innerHTML = `<div>10문제 중 ${SCORE}문제를 맞히셨네요!</div>`
        }
        else if (SCORE <= 3) {
            resultFirst.classList.remove('active');
            resultTitles[0].innerHTML = `<div>10문제 중 ${SCORE} 문제를 맞히셨네요!</div>`
        }
    }
})

// input 에서 enter시 next로 넘어가기 구현
results.forEach(input=>{
    input.addEventListener('keydown',(e)=>{
        if(e.keyCode === 13){
            nextBtn.click()
        }
    })
})
