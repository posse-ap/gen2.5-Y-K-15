// 投稿画面のモーダル

// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
let openRecordModalBtn = document.getElementById('openRecordModalBtn');
let recordModal = document.getElementById('recordModal');
let closeRecordModalBtn = document.getElementById('closeRecordModalBtn');
let overlay = document.getElementById('overlay');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
openRecordModalBtn.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  recordModal.classList.add('active');
  overlay.classList.add('active');
});


// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeRecordModalBtn.addEventListener('click', function(){
  recordModal.classList.remove('active');
  overlay.classList.remove('active');
});

// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す

//overlayクリックする系はこれだけでいい
overlay.addEventListener('click', function() {
  recordModal.classList.remove('active');
  loadingModal.classList.remove('active');
  SubmitFinishModal.classList.remove('active');


  overlay.classList.remove('active');
});


// -----------------------------------------------//


// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
let submitBtn = document.getElementById('submitBtn');
let SubmitFinishModal = document.getElementById('SubmitFinishModal');
let closeSubmitFinishModalBtn = document.getElementById('closeSubmitFinishModalBtn');

let loadingModal = document.getElementById('loadingModal');

let closeLoadingModalBtn = document.getElementById('closeLoadingModalBtn');


// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
submitBtn.addEventListener('click', function(e){

  // ここにローディングモーダルを起動させる処理を書く！！！！！
  
  
  console.log('提出ボタンが押されました。');
  
  
  
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  // overlay.classList.add('active');// 無くてもいい多分
  loadingModal.classList.add('active');
  SubmitFinishModal.classList.add('active');




  setTimeout(() => {
    loadingModal.classList.remove('active');
  }, 3000);
});



// ローディングのモーダルの閉じるボタンを押したら、ローディングモダルと、完了モーダルと、オーバーレイのactiveクラスを外す
closeLoadingModalBtn.addEventListener('click', function(){

  loadingModal.classList.remove('active');
  SubmitFinishModal.classList.remove('active');
  overlay.classList.remove('active');
  recordModal.classList.remove('active');

});




// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeSubmitFinishModalBtn.addEventListener('click', function(){
  SubmitFinishModal.classList.remove('active');
  overlay.classList.remove('active');
  recordModal.classList.remove('active');


});





// オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
// overlay.addEventListener('click', function() {
//   SubmitFinishModal.classList.remove('active');
//   overlay.classList.remove('active');
//   recordModal.classList.remove('active');
// });









//学習言語の円グラフ
(function() {

  function drawChart() {
    var studyLanguagePieChart = document.getElementById('studyLanguagePieChart');
    var data;

    var options = {
      // title: 'My Chart',
      width: 500,
      height: 200,
      backgroundColor: '#fff',
      colors: [
        '#3CCEFE',
        '#0F71BD',
        '#1754EF',
        '#20BDDE',
        '#B29EF3',
        '#6D46EC',
        '#4A17EF',
        '#3105C0'
      ],
      pieHole: 0.4, 
    };
    var chart = new google.visualization.PieChart(studyLanguagePieChart);

    data = new google.visualization.DataTable();
    data.addColumn('string', 'Language');
    data.addColumn('number', 'hours');
    data.addRow(['HTML', 30]);
    data.addRow(['CSS', 20]);
    data.addRow(['JavaScript', 10]);
    data.addRow(['PHP', 5]);
    data.addRow(['Laravel', 5]);
    data.addRow(['SQL', 20]);
    data.addRow(['SHELL', 20]);
    data.addRow(['その他', 10]);
    // データ元
    // http://posse-task.anti-pattern.co.jp/1st-work/study_language.json

    chart.draw(data, options);

  }

  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
})();




// チェックボックスの背景の色変更
function chebg(chkID){
  Myid=document.getElementById(chkID);
  if(Myid.checked == true){
  Myid.parentNode.style.backgroundColor = '#E7F5FF';
  }
  else{Myid.parentNode.style.backgroundColor = '#F5F5F8';}
  }