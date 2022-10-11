  


// ------------------------------------------------------------------------//
// モーダル関連
  // ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
  let overlay = document.getElementById('overlay');
  let openRecordModalBtn = document.getElementById('openRecordModalBtn');
  let openRecordModalBtn2 = document.getElementById('openRecordModalBtn2');
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
  

// 記録画面のモーダル  
// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
openRecordModalBtn.addEventListener('click', function(e){
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  recordModal.classList.add('active');
  overlay.classList.add('active');
});  
// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
openRecordModalBtn2.addEventListener('click', function(e){
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
  overlay.classList.remove('active');
  // 順番これ
  recordModal.classList.remove('active');
  loadingModal.classList.remove('active');
  SubmitFinishModal.classList.remove('active');
  calenderModal.classList.remove('active');
});  

// カレンダーモーダルの起動
openCalenderModalBtn.addEventListener('click',function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    calenderModal.classList.add('active');
});

// カレンダーモーダルで決定を押したとき。
confirmDateBtn.addEventListener('click',
function(){
  overlay.classList.remove('active')
  calenderModal.classList.remove('active');
}
)

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
    s = commentForTwitter.value;
    // "%23"はハッシュタグ生成のためにURLエンコード
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
    loadingModal.classList.add('active');
    SubmitFinishModal.classList.add('active');
    setTimeout(() => {
      loadingModal.classList.remove('active');
    }, 3000);  
  }
});  

// ローディングのモーダルの閉じるボタンをクリック
closeLoadingModalBtn.addEventListener('click', function(){
  overlay.classList.remove('active');
  loadingModal.classList.remove('active');
  SubmitFinishModal.classList.remove('active');
  recordModal.classList.remove('active');
});
// 完了モダルの閉じるボタンをクリック
closeSubmitFinishModalBtn.addEventListener('click', function(){
  overlay.classList.remove('active');
  SubmitFinishModal.classList.remove('active');
  recordModal.classList.remove('active');
});  

// ------------------------------------------------------------------------//

// チェックボックスの背景の色変更
// 参考：http://javascript123.seesaa.net/article/107029180.html
function chebg(chkID){
  Myid=document.getElementById(chkID);
  if(Myid.checked == true){
  Myid.parentNode.style.backgroundColor = '#E7F5FF';  
  }
  else{Myid.parentNode.style.backgroundColor = '#F5F5F8';}
  }

  // ----------------------------------------------------------------------//

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
                else if(dateInfo.isHoliday) {
                    calendar += "<td class='holiday' title='" + dateInfo.holidayName + "'>" + count + "</td>";
                }
                else {
                    calendar += `<td  id="${year}_${month}_${count}" onclick = "check(${year},${month},${count})">` + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;

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




