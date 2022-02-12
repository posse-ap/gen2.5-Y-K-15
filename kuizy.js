'use strict';

//選択肢（それぞれの0番目のが正解になっている）
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
];

//回答ボックスのメッセージ
let answerBoxArray = [
  '正解は「たかなわ」です！',
  '正解は「かめいど」です！',
  '正解は「こうじまち」です！',
  '正解は「おなりもん」です！',
  '正解は「とどろき」です！',
  '正解は「しゃくじい」です！',
  '正解は「ぞうしき」です！',
  '正解は「おかちまち」です！',
  '江戸川区にあります。',
  '正解は「こぐれ」です！',
];

//ソートされた配列
let a = [0,1,2];
let j = 0;
let r = 0;
let tmp = 0;

//下のfor文の中に書いたhtmlをぶち込む先
let quizDivWrapper = document.getElementById('quizDivWrapper');

//htmlへ記述したいことをfor文で繰り返し生成している。
for (let i = 0 ; i<10 ; i++){
  
  let optionHtml = [
    ` <li class="option" id="correctAnswerQ${i + 1}" onclick="show_answer_correct(${i + 1})">${optionTextArray[i][0]}</li> `,
    ` <li class="option" id="wrongAnswerQ${i + 1}_1" onclick="show_answer_wrong_1(${i + 1})">${optionTextArray[i][1]}</li> `,
    ` <li class="option" id="wrongAnswerQ${i + 1}_2" onclick="show_answer_wrong_2(${i + 1})">${optionTextArray[i][2]}</li> `,
  ]

  for(j = a.length -1;j>0;j--){
    //乱数生成を使ってランダムに取り出す値を決める
    r = Math.floor(Math.random()*(j+1));
    //取り出した値と箱の外の先頭の値を交換する
    tmp = a[j];
    a[j] = a[r];
    a[r] = tmp;    
  }

  let articles = 
    '<div class="quiz_div"> '
      //「この地名はなんて読む？」と漢字の画像
      + `<h2 class="question">${i + 1}.この地名はなんて読む？</h2>`
      + '<div class="question-image-container">'    
      +      `<img src="/images/${i + 1}.png" alt="" class="question_image">`
      + '</div>'

      //選択肢 一番上（配列の0番目）が正解の選択肢になっている。
      + `<ul class="option_list" id="optionList${i + 1}">`
        +optionHtml[a[0]]
        +optionHtml[a[1]]
        +optionHtml[a[2]]
      + '</+ul>'

      //正解の時の回答ボックスのメッセージ
      + `<div class="hidden_message_correct" id="correctPopQ${i + 1}">`
      +  '<p class="correct">正解！</p>'
      +  `<p>${answerBoxArray[i]}</p>`
      + '</div>'

      //不正解の時の回答ボックスのメッセージ
      + `<div class="hidden_message_wrong" id="wrongPopQ${i + 1}">`
      +   '<p class="wrong">不正解！</p>'
      +   `<p>${answerBoxArray[i]}</p>`
      + '</div>'
      
    +'</div>'

  //↓ 上でつくったquiz_divというidがつけられたdivをkuizy.htmlのquizDivWrapperというidがつけられたdivのなかにぶちこんでいる。beforeend！！
  quizDivWrapper.insertAdjacentHTML('beforeend',articles)

}


//正解のボタン押したときの表示変更や回答ボックスの表示
function show_answer_correct(quiz_num) {
  let correctAnswer = document.getElementById(`correctAnswerQ${quiz_num}`)
  let correctPop = document.getElementById(`correctPopQ${quiz_num}`)
  correctAnswer.classList.add('option_correct_after');
  correctPop.classList.add('pop_up_correct')
  correctPop.classList.remove('hidden_message_correct')

  let optionList = document.getElementById(`optionList${quiz_num}`);
  optionList.style.pointerEvents = "none"
}
//1つ目の不正解のボタン押したときの表示変更や回答ボックスの表示
function show_answer_wrong_1(quiz_num) {
  let correctAnswer = document.getElementById(`correctAnswerQ${quiz_num}`)
  let wrongAnswer = document.getElementById(`wrongAnswerQ${quiz_num}_1`)
  let wrongPop = document.getElementById(`wrongPopQ${quiz_num}`)
  wrongAnswer.classList.add('option_wrong_after');
  correctAnswer.classList.add('option_correct_after');
  wrongPop.classList.add('pop_up_wrong');
  wrongPop.classList.remove('hidden_message_wrong');

  let optionList = document.getElementById(`optionList${quiz_num}`);
  optionList.style.pointerEvents = "none";
}
//2つ目の不正解のボタン押したときの表示変更や回答ボックスの表示
function show_answer_wrong_2(quiz_num) {
  let correctAnswer = document.getElementById(`correctAnswerQ${quiz_num}`)
  let wrongAnswer = document.getElementById(`wrongAnswerQ${quiz_num}_2`)
  let wrongPop = document.getElementById(`wrongPopQ${quiz_num}`)
  wrongAnswer.classList.add('option_wrong_after');
  correctAnswer.classList.add('option_correct_after');
  wrongPop.classList.add('pop_up_wrong');
  wrongPop.classList.remove('hidden_message_wrong');

  let optionList = document.getElementById(`optionList${quiz_num}`);
  optionList.style.pointerEvents = "none";
}
// console.log('a')