# MZ 테스트

![](https://velog.velcdn.com/images/kyudeveloper/post/f52d06c7-8807-47fc-8e0e-a3fd89d9c447/image.png)




</div>

# 사이드프로젝트 전 스프린트
> **참여인원 : 1명(개인) ** <br/> **개발기간: 2023.07.26 ~ 2023.07.26**
> **230726 HTML,CSS,JS 기본적인 배포 완료**

## 배포 주소

> **개발 버전** : https://kyungkyubae.github.io/mzquiz/ <br>


## 개발자 소개



|      배경규       |                                                                                                               
| :------------------------------------------------------------------------------: |
|   <img width="160px" src="https://velog.velcdn.com/images/kyudeveloper/post/ffb11860-dcea-4b08-a2a2-bb7b22287998/image.png" />    |
|   [@kyu](https://github.com/kyungkyubae)   |


## 왜 만들었는지
그룹스터디 내에서 사이드 프로젝트를 예정중인데, 서로가 어느정도 스택을 다룰 수 있는지, 격차를 확인하기 위해서
간단하게 사이드 프로젝트에서 사용될 스택을 사용해서 스프린트 프로젝트를 진행하게 되었습니다.








---

## Stacks 🐈


### Development
<div>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>






---
## 만들면서 궁금했던 점 📦

### ⭐️ 싱글 페이지로 구현
- 싱글페이지로 구현하기 위해서 특정 버튼을 누르면 display 를 조정하는 로직으로 구현했는데
이 방식이 렌더링 성능에 있어서 옳은 방식인지
옳지 않다면 바닐라자바스크립트로 해결할 수 있는 다른 로직이 있는지?
없거나 복잡하다면 싱글페이지를 쉽게 만들 수 있는 다른 라이브러리인 리액트를 사용해야하는 이유가 될 수 있다

### ⭐️ 사용자의 제출한 답과 정답지가 일치하면 올라가는 카운트 구현
- 질문에 대한 답을 저장하는 과정에서 단순하게 스크립트파일 내에서 전역변수로 답안지인 배열과 count를 만들었고 일치한다면 count를 올리는 방식을 사용했는데 localstorage를 이용한다면 전역변수로 하는 것과는 다르게 장단점이 어떤것이 있을지???

### ⭐️ 정답의 개수에 따라 결과페이지가 달라짐을 구현
- 

---

## 이슈
---
### 이슈 #1
- 답안지 제출에 공백이 있을경우 공백을 제거  
 => 공백이 있을경우 replace 함수로 공백을 제거할 때 replaceAll 같은 함수는 없어서 멘토님이 알려주신 표현식이 제가 알고있는   표현식이 아니라서 검색한 후 찾아보니  
 정규 표현식으로 모든 문자열을 replace 할 수 있어서 해결했습니다.  

 ### 이슈 #2
 - 답안지 제출시 다음 버튼 클릭 뿐만 아니라 Enter키 입력시에도 답안 제출 가능하도록 하기  
 => 인풋 창에서 enter 이벤트 발생시 다음 버튼 click 이벤트를 실행하여 해결하였습니다.  
 `겪었던 오류=>키보드 이벤트리스너에서 key값으로 이벤트를 주면 input에 값이 있을경우 enter가 두번인식됨
/keyCode로 이벤트를 주면 해결됨. 근본적인 원인을 찾지 못했습니다.`

 ### 이슈 #3
 - 문제가 화면에 랜더링 되었을때 인풋의 기본값이 포커스 되도록 하기  
 => nextBtn의 기존 클릭 이벤트리스너에 input에 focus() 함수를 이용하여 자동으로 포커스 되게 하였습니다.  
