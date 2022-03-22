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

// 学習コンテンツのえんぐらふ
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
        '#0345EC',
        '#0F71BD',
        '#20BDDE',
      ],
      pieHole: 0.4, 
    };
    var chart = new google.visualization.PieChart(studyContentsPieChart);

    data = new google.visualization.DataTable();
    data.addColumn('string', 'Contents');
    data.addColumn('number', 'hours');
    data.addRow(['N予備校', 40]);
    data.addRow(['ドットインストール', 20]);
    data.addRow(['課題', 40]);

    // データ元
    // http://posse-task.anti-pattern.co.jp/1st-work/study_language.json

    chart.draw(data, options);

  }

  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
})();

// チェックボックスの背景の色変更
// 参考：http://javascript123.seesaa.net/article/107029180.html
function chebg(chkID){
  Myid=document.getElementById(chkID);
  if(Myid.checked == true){
  Myid.parentNode.style.backgroundColor = '#E7F5FF';  
  }
  else{Myid.parentNode.style.backgroundColor = '#F5F5F8';}
  }


// 投稿画面のモーダル  
// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
let overlay = document.getElementById('overlay');
let openRecordModalBtn = document.getElementById('openRecordModalBtn');
let submitBtn = document.getElementById('submitBtn');
let recordModal = document.getElementById('recordModal');
let loadingModal = document.getElementById('loadingModal');
let SubmitFinishModal = document.getElementById('SubmitFinishModal');
let closeRecordModalBtn = document.getElementById('closeRecordModalBtn');
let closeLoadingModalBtn = document.getElementById('closeLoadingModalBtn');
let closeSubmitFinishModalBtn = document.getElementById('closeSubmitFinishModalBtn');

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

// submitボタンをクリックしたら、モダルとオーバーレイに.activeを付け→３秒後に完了画面出す。
submitBtn.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // ローディングと完了のモーダルにactiveクラスを付与する
  loadingModal.classList.add('active');
  SubmitFinishModal.classList.add('active');

  setTimeout(() => {
    loadingModal.classList.remove('active');
  }, 3000);  
});  

// ローディングのモーダルの閉じるボタンを押したら、ローディングモダルと、完了モーダルと、オーバーレイのactiveクラスを外す
closeLoadingModalBtn.addEventListener('click', function(){
  overlay.classList.remove('active');
  loadingModal.classList.remove('active');
  SubmitFinishModal.classList.remove('active');
  recordModal.classList.remove('active');
});  

// 完了モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeSubmitFinishModalBtn.addEventListener('click', function(){
  overlay.classList.remove('active');
  SubmitFinishModal.classList.remove('active');
  recordModal.classList.remove('active');
});  









