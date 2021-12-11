'use strict';

let quiz_div_wrapper = document.getElementById('quiz_div_wrapper');

let optionTextArray = [
  ['たかなわ','こうわ','たかわ'],
  ['かめいど','かめど','かめと'],
  ['こうじまち','かゆまち','おかとまち'],
  ['おなりもん','ごせいもん','おかどもん'],
  ['とどろき','たたら','たたりき'],
  ['しゃくじい','いじい','せきこうい'],
  ['ぞうしき','ざっしき','ざっしょく'],
  ['おかちまち','みとちょう','ごしろちょう'],
  ['ししぼね','しこね','ろっこつ'],
  ['こぐれ','こしゃく','こばく'],

]

for (let i = 0 ; i<10 ; i++){
  let articles = 
    '<div class="quiz_div"> '

      + `<h2 class="question">${i + 1}.この地名はなんて読む？</h2>`
      + '<div class="question-image-container">'    
      +      `<img src="/images/${i + 1}.png" alt="" class="question_image">`
      + '</div>'

      + '<ul class="option_list" id="optionList">'
      + `<li class="option" id="correctAnswerQ${i + 1}" onclick="show_answer_correct(${i + 1})">${optionTextArray[i][0]}</li>`
      + `<li class="option" id="wrongAnswerQ${i + 1}_1" onclick="show_answer_wrong_1(${i + 1})">${optionTextArray[i][1]}</li>`
      +  `<li class="option" id="wrongAnswerQ${i + 1}_2" onclick="show_answer_wrong_2(${i + 1})">${optionTextArray[i][2]}</li>`
      + '</+ul>'

      + `<div class="hidden_message_correct" id="correctPopQ${i + 1}">`
      +  '<p>正解！</p>'
      +  '<p>正解は「たかなわ」です！</p></div>'
      + '</div>'

      + `<div class="hidden_message_wrong" id="wrongPopQ${i + 1}">`
      +   '<p>不正解！</p>'
      +   '<p>正解は「たかなわ」です！</p>'
      + '</div>'
      
    +'</div>'

  quiz_div_wrapper.insertAdjacentHTML('beforeend',articles)

}



// let correctAnswerQ1 = document.getElementById('correctAnswerQ1');
// let wrongAnswerQ1_1 = document.getElementById('wrongAnswerQ1_1');
// let wrongAnswerQ1_2 = document.getElementById('wrongAnswerQ1_2');
// let correctPopQ1 = document.getElementById('correctPopQ1');
// let wrongPopQ1 = document.getElementById('wrongPopQ1');
let optionList = document.getElementById('optionList');



function show_answer_correct(quiz_num) {
  let correctAnswer = document.getElementById(`correctAnswerQ${quiz_num}`)
  let correctPop = document.getElementById(`correctPopQ${quiz_num}`)
  correctAnswer.classList.add('option_correct_after');
  correctPop.classList.add('pop_up_correct')
  correctPop.classList.remove('hidden_message_correct')
  optionList.style.pointerEvents = "none"
}
function show_answer_wrong_1(quiz_num) {
  let correctAnswer = document.getElementById(`correctAnswerQ${quiz_num}`)
  let wrongAnswer = document.getElementById(`wrongAnswerQ${quiz_num}_1`)
  let wrongPop = document.getElementById(`wrongPopQ${quiz_num}_1`)
  wrongAnswer.classList.add('option_wrong_after');
  correctAnswer.classList.add('option_correct_after');
  optionList.style.pointerEvents = "none";
  wrongPop.classList.add('pop_up_wrong');
  wrongPop.classList.remove('hidden_message_wrong');
}

function show_answer_wrong_2(quiz_num) {
  let correctAnswer = document.getElementById(`correctAnswerQ${quiz_num}`)
  let wrongAnswer = document.getElementById(`wrongAnswerQ${quiz_num}_2`)
  let wrongPop = document.getElementById(`wrongPopQ${quiz_num}_2`)
  wrongAnswer.classList.add('option_wrong_after');
  correctAnswer.classList.add('option_correct_after');
  optionList.style.pointerEvents = "none";
  wrongPop.classList.add('pop_up_wrong');
  wrongPop.classList.remove('hidden_message_wrong');
}



