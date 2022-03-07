'use strict'


let sectionPlaceName = [
  ['たかなわ','たかわ','こうわ'],
  ['かめいど','かめと','かめど'],
  ['こうじまち','おかとまち','かゆまち']
];

let a = [0,1,2];
let j = 0;
let r = 0;
let tmp = 0;

let quizBox = document.getElementById('quizBox');

for(let i = 0;i<3;i++){
  
  for(j = a.length -1;j>0;j--){
    r = Math.floor(Math.random()*(j+1));
    tmp = a[j];
    a[j] = a[r];
    a[r] = tmp;
  };

  let sectionHTML = [

    `<li class="" id ="correctSelectionQ${i}" onclick = showAnswerCorrect(${i})> ${sectionPlaceName[i][0]}</li>` ,
    
    `<li class="" id ="incorrectSelectionQ${i}-1" onclick = showAnswerIncorrect1(${i}) changeSelectionBoxColor(${i})> ${sectionPlaceName[i][1]}</li>` ,

    `<li class="" id ="incorrectSelectionQ${i}-2" onclick = showAnswerIncorrect2(${i}) changeSelectionBoxColor(${i})> ${sectionPlaceName[i][2]}</li>`
  ];
  

  let quizHtml = `<div class="quiz" id="quiz${i+1}" >`
  +`  <div class="question-sentences">${i+1}この地名は何て読む？</div>`
  +`  <div class="kanji-picture">`
  +`    <img src="./pictures/${i+1}.png" alt="">`
+`  </div>`
+`  <div>`
+`    <ul class="quiz-list" id="quizList${i}">`

+       `${sectionHTML[a[0]]}`
+       `${sectionHTML[a[1]]}`
+       `${sectionHTML[a[2]]}`

+`      <li class="result-correct-before" id="resultCorrectQ${i}">`
+`        <p>正解！</p>`
+`        <p>正解は「${sectionPlaceName[i][0]}」です！</p>`
+`      </li>`

+`      <li class="result-incorrect-before" id="resultIncorrectQ${i}">`
+`        <p>不正解！</p>`
+`        <p>正解は「${sectionPlaceName[i][0]}」です！</p>`
+`      </li>`

+`    </ul>`
+`  </div>`
+`</div>`


// console.log(quizHtml);
quizBox.insertAdjacentHTML('beforeend',quizHtml);

};



function showAnswerCorrect(i){
  
  let correctSelection = document.getElementById(`correctSelectionQ${i}`);
  let resultCorrect = document.getElementById(`resultCorrectQ${i}`);
  
  correctSelection.classList.add("correct-selection-after");
  resultCorrect.classList.remove("result-correct-before");


  document.getElementById(`quizList${i}`).classList.add("pointer-none");
  
}

function showAnswerIncorrect1(i){
  
  let incorrectSelection = document.getElementById(`incorrectSelectionQ${i}-1`);
  let resultIncorrect1 = document.getElementById(`resultIncorrectQ${i}`);
    
  let correctSelection = document.getElementById(`correctSelectionQ${i}`);
  
  
  incorrectSelection.classList.add("incorrect-selection-after");
  resultIncorrect1.classList.remove("result-incorrect-before");
  
  correctSelection.classList.add("correct-selection-after");

  document.getElementById(`quizList${i}`).classList.add("pointer-none");
  
}

function showAnswerIncorrect2(i){
  
  let incorrectSelection = document.getElementById(`incorrectSelectionQ${i}-2`);
  let resultIncorrect1 = document.getElementById(`resultIncorrectQ${i}`);
    
  let correctSelection = document.getElementById(`correctSelectionQ${i}`);
  
  
  incorrectSelection.classList.add("incorrect-selection-after");
  resultIncorrect1.classList.remove("result-incorrect-before");
  
  correctSelection.classList.add("correct-selection-after");
  
  document.getElementById(`quizList${i}`).classList.add("pointer-none");

}