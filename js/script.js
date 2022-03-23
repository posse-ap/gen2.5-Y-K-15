//学習言語の円グラフ
(function() {

  function drawChart() {
    var studyLanguagePieChart = document.getElementById('studyLanguagePieChart');
    var data;

    var options = {
      // title: 'My Chart',
      legend :none,
      // legend :{ position: 'bottom'},
      width: 300,
      height: 400,
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


let openCalenderModalBtn = document.getElementById('openCalenderModalBtn');
let calenderModal = document.getElementById('calenderModal');
let confirmDateBtn = document.getElementById('confirmDateBtn');
let closeCalenderModalBtn = document.getElementById('closeCalenderModalBtn');




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

  console.log('オーバーレイが押されました。');

  overlay.classList.remove('active');
  // 順番これ
  recordModal.classList.remove('active');
  loadingModal.classList.remove('active');
  SubmitFinishModal.classList.remove('active');
  calenderModal.classList.remove('active');

});  

// カレンダーモーダルの起動
openCalenderModalBtn.addEventListener('click',function(e){
  console.log('学習日が押された。')
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する

    calenderModal.classList.add('active');

});

// 戻るボタンを押したとき、カレンダーもーだうが消える
closeCalenderModalBtn.addEventListener('click', function(){
  calenderModal.classList.remove('active');
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




// カレンダー↓↓

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

// 祝日取得
var request;
window.onload = function () {
    request = new XMLHttpRequest();
    request.open('get', 'syukujitsu.csv', true);
    request.send(null);
    request.onload = function () {
        // 初期表示
        showProcess(today, calendar);
    };
};

// 前の月表示
function prev(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}

// 次の月表示
function next(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth(); // 0始まり
    document.querySelector('#clHeader').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);





    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += `<td class='disabled' id="${year}_${month}_${count}" onclick = "check(${year},${month},${count})">` + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += `<td class='disabled' id="${year}_${month}_${count}" onclick = "check(${year},${month},${count})">` + (count - endDate) + `</td>`;
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                var dateInfo = checkDate(year, month, count);
                if(dateInfo.isToday){
                    calendar += `<td class='today'  id="${year}_${month}_${count}" onclick = "check(${year},${month},${count})">` + count + "</td>";
                }
                // else if(dateInfo.isHoliday) {
                //     calendar += "<td class='holiday' title='" + dateInfo.holidayName + "'>" + count + "</td>";
                // }
                else {
                    calendar += `<td  id="${year}_${month}_${count}" onclick = "check(${year},${month},${count})">` + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
  


      // console.log(year);
      // console.log(month);
      // console.log(day);
}

function check(year,month,day){
  let studyDate = year + "年" + (month + 1) + "月" + day + "日"
  openCalenderModalBtn.value = studyDate;
}

// 日付チェック
function checkDate(year, month, day) {
    if(isToday(year, month, day)){
        return {
            isToday: true,
            isHoliday: false,
            holidayName: ""
        };
    }

    var checkHoliday = isHoliday(year, month, day);
    return {
        isToday: false,
        isHoliday: checkHoliday[0],
        holidayName: checkHoliday[1],
    };
}

// 当日かどうか
function isToday(year, month, day) {
    return (year == today.getFullYear()
        && month == (today.getMonth())
        && day == today.getDate());
    }

// 祝日かどうか
function isHoliday(year, month, day) {
    var checkDate = year + '/' + (month + 1) + '/' + day;
    var dateList = request.responseText.split('\n');
    // 1行目はヘッダーのため、初期値1で開始
    for (var i = 1; i < dateList.length; i++) {
        if (dateList[i].split(',')[0] === checkDate) {
            return [true, dateList[i].split(',')[1]];
        }
    }
    return [false, ""];
}


confirmDateBtn.addEventListener('click',
function(){

  overlay.classList.remove('active')
  calenderModal.classList.remove('active');



  
}
)

