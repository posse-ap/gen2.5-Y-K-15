  // 棒グラフ
  // 参考：https://www.petitmonte.com/javascript/chart_columnchart.html
  // name:visualization(可視化),version:バージョン(1),packages:パッケージ(corechart)
  google.load('visualization', '1', {'packages':['corechart']});     

  // グラフを描画する為のコールバック関数を指定
  google.setOnLoadCallback(drawChart);
  // グラフの描画   
  function drawChart() {
    // 配列からデータの生成
    var data = google.visualization.arrayToDataTable([
      ['日付', '時間'],
      [1, 3], // 日付のところのデータを数値にしてなかったから横軸のticksが効かなかった。
      [2, 4],            
      [3, 5],
      [4, 3], 
      [5, 0],
      [6, 0],
      [7, 4],
      [8, 2],
      [9, 2],
      [10, 8],
      [11, 8],
      [12, 2],
      [13, 2],
      [14, 4],
      [15, 7],
      [16, 4],
      [17, 4],
      [18, 3],
      [19, 3],
      [20, 3],
      [21, 2],
      [22, 2],
      [23, 6],
      [24, 2],
      [25, 2],
      [26, 1],
      [27, 1],
      [28, 1],
      [29, 7],
      [30, 8],
    ]);
 
    // オプションの設定
    // 参考：http://yohshiy.blog.fc2.com/blog-entry-195.html
    var options = {
      width:500,
      height:310,
      'chartArea': {'width': '90%', 'height': '80%'},
      color:['#3CCEFE'],
      legend:'none',
      vAxis: {
        minValue: 0,
        ticks: [0,2,4,6,8],
        gridlines: {
          color: 'transparent'
        },
        format:'#h'
      },
      hAxis: {
        ticks: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,],
        gridlines: {
          color: 'transparent'
        },
        
      }



    };
    


    // 指定されたIDの要素に棒グラフを作成
    var chart = new google.visualization.ColumnChart(document.getElementById('studyTimeBarGraph'));
 
    // グラフの描画
    chart.draw(data, options);
  }


//学習言語の円グラフ
//参考：ドットインストール
(function() {

  function drawChart() {
    var studyLanguagePieChart = document.getElementById('studyLanguagePieChart');
    var data;

    var options = {
      // title: 'My Chart',
      legend: 'none',
      width: 220,
      height: 220,
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
      'chartArea': {'width': '95%', 'height': '95%'}

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
      legend: 'none',
      width: 220,
      height: 220,
      backgroundColor: '#fff',
      colors: [
        '#0345EC',
        '#0F71BD',
        '#20BDDE',
      ],
      pieHole: 0.4, 
      'chartArea': {'width': '95%', 'height': '95%'}
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

let twitterCheckbox = document.getElementById('twitterCheckbox');
let commentForTwitter = document.getElementById('commentForTwitter');



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



// モーダル内の記録・投稿ボタン押したとき
submitBtn.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  if(twitterCheckbox.checked == true){
    // （チッターのチェックボックスがチェックされているとき）→記録・投稿ボタンでチッターに飛ぶ
    var s, url;
    s = commentForTwitter.value + " %23POSSE学習記録 " + "posse-ap.com";
    // ハッシュタグ生成のためにURLエンコード
    // 参考：https://tech-unlimited.com/urlencode.html
    url = document.location.href;
    if (s != "") {
      if (s.length > 140) {
  			//文字数制限
        alert("テキストが140字を超えています");
      } else {
  			//投稿画面を開く
        url = "http://twitter.com/share?url=" 
        // + escape(url)
        // + "&text=" // これまでいたurlを表示する。本番環境ならこれの方がいいと思った。いまは見栄え重視でPOSSEのホームページにするためにコメントアウトにした。
        + s;
        window.open(url,"_blank");
        // 新しいタブを開き、ページを表示
        // 参考：https://qiita.com/shuntaro_tamura/items/99adbe51132e0fb3c9e9
      }
    }
  }
  else{
    // (チッターのチェックボックスがチェックされてないとき)→submitボタンをクリックしたら、モダルとオーバーレイに.activeを付け→３秒後に完了画面出す。
    // ローディングと完了のモーダルにactiveクラスを付与する
    loadingModal.classList.add('active');
    SubmitFinishModal.classList.add('active');
    setTimeout(() => {
      loadingModal.classList.remove('active');
    }, 3000);  
  }
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

