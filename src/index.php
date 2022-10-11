<?php
require('dbconnect.php');
?>


<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POSSE学習記録アプリのトップ画面</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">

    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">

    <script src="js/jquery-3.6.0.min.js"></script>
    <!-- <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> -->
    <script type="text/javascript" src="//www.google.com/jsapi"></script>


</head>

<body>
    <header>
        <!-- <div class="header-inner"> -->
        <div class="header-left">
            <div class="header-logo">
                <img src="./pictures/posseLogo.png" alt="">
            </div>
            <div class="week-count-wrapper">
                <p class="week-count">4th week</p>
            </div>
        </div>
        <div class="header-right">
            <a href="#" id="openRecordModalBtn" class="btn">
                <p class="header-right-button">記録・投稿</p>
            </a>
        </div>
        <!-- </div> -->
    </header>

    <main>
        <div class="main-inner">

            <div class="main-left">
                <div class="study-time-container">

                    <?php
                    $date_today = '2022-09-03';
                    $stmt_time_today = $db->prepare('SELECT SUM(time) AS time_today FROM logs WHERE date = ?');
                    $stmt_time_today->execute(array($date_today));
                    $time_today = $stmt_time_today->fetch();
                    ?>
                    <div class="study-time-card">
                        <div class="content-box">
                            <p class="time-span">Today</p>
                            <p class="study-time-figure"><?= $time_today['time_today'] ?></p>
                            <p class="hour">hour</p>
                        </div>
                    </div>
                    <?php
                    $stmt_time_month = $db->prepare('SELECT SUM(time) AS time_month FROM logs WHERE LEFT(date,7) = LEFT(?,7)');
                    $stmt_time_month->execute(array($date_today));
                    $time_month = $stmt_time_month->fetch();
                    ?>
                    <div class="study-time-card">
                        <div class="content-box">
                            <p class="time-span">Month</p>
                            <p class="study-time-figure"><?= $time_month['time_month'] ?></p>
                            <p class="hour">hour</p>
                        </div>
                    </div>
                    <?php
                    $stmt_time_total = $db->prepare('SELECT sum(time) as time_total FROM logs;');
                    $stmt_time_total->execute(array());
                    $time_total = $stmt_time_total->fetch();
                    ?>
                    <div class="study-time-card">
                        <div class="content-box">
                            <p class="time-span">Total</p>
                            <p class="study-time-figure"><?= $time_total['time_total'] ?></p>
                            <p class="hour">hour</p>
                        </div>
                    </div>
                </div>
                <div class="sp-bar">
                    <span class="sp-bar-span"></span>
                </div>
                <div class="study-time-bargraph-container">
                    <div class="study-time-bargraph content-box">
                        <!-- <img src="./pictures/bargraph.jpg" alt=""> -->
                        <div id="studyTimeBarGraph"></div>
                    </div>
                </div>
            </div>

            <div class="main-right">

                <div class="pie-chart-wrapper">
                    <div class="pie-chart-card content-box">
                        <p class="graph-title">学習言語</p>
                        <div class="pie-chart study-languege-graph" id="studyLanguagePieChart">
                            <!-- <img src="./pictures/pie chart.jpg" alt=""> -->
                        </div>
                        <div class="pie-chart-index">
                            <!-- <img src="./pictures/pie chart index.jpg" alt=""> -->
                            <div class="legend-language pie-chart-legend">
                                <p class="legend-1"><i class="fas fa-circle "></i> HTML </p>
                                <p class="legend-2"><i class="fas fa-circle "></i> CSS </p>
                                <p class="legend-3"><i class="fas fa-circle "></i> JavaScript </p>
                                <p class="legend-4"><i class="fas fa-circle "></i> PHP </p>
                                <p class="legend-5"><i class="fas fa-circle "></i> Laravel </p>
                                <p class="legend-6"><i class="fas fa-circle "></i> SQL</p>
                                <p class="legend-7"><i class="fas fa-circle "></i> SHELL </p>
                                <p class="legend-8"><i class="fas fa-circle "></i> 情報システム基礎知識(その他) </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="pie-chart-wrapper">
                    <div class="pie-chart-card content-box">
                        <p class="graph-title">学習コンテンツ</p>
                        <div class="pie-chart study-contents-graph" id="studyContentsPieChart">
                            <!-- <img src="./pictures/pie chart.jpg" alt=""> -->
                        </div>
                        <div class="pie-chart-index">
                            <!-- <img src="./pictures/pie chart index.jpg" alt=""> -->
                            <div class="legend-contents pie-chart-legend">
                                <p class="legend-1"><i class="fas fa-circle"></i> N予備校</p>
                                <p class="legend-2"><i class="fas fa-circle"></i> ドットインストール</p>
                                <p class="legend-3"><i class="fas fa-circle"></i> POSSE課題</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="main-bottom">
            <div class="change-month">
                <div class="change-to-previous-month">
                    ＜
                </div>
                <div class="month">
                    2022年3月
                </div>
                <div class="change-to-next-month">
                    ＞
                </div>
            </div>

            <div class="sp-open-record-button">
                <a href="#" id="openRecordModalBtn2" class="sp-open-record-button-text">
                    記録・投稿
                </a>
            </div>
        </div>


    </main>

    <div class="modal" id="recordModal">

        <div class="close-button-container">
            <div class="close-button" id="closeRecordModalBtn">
                <span class="batsu"></span>
            </div>
        </div>


        <div class="modal-forms">

            <div class="form-left">


                <div class="form-content form-study-date">
                    <p class="form-content-title">学習日</p>

                    <label class="">
                        <input type="text" name="date" class="input-text-common" id="openCalenderModalBtn">
                    </label>
                </div>

                <div class="form-content form-study-content">
                    <p class="form-content-title">学習コンテンツ（複数選択可）</p>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox1" onclick="chebg('cBox1')">
                        <span class="checkbox-fontas"></span>
                        N予備校
                    </label>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox2" onclick="chebg('cBox2')">
                        <span class="checkbox-fontas"></span>
                        ドットインストール
                    </label>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox3" onclick="chebg('cBox3')">
                        <span class="checkbox-fontas"></span>
                        POSSE課題
                    </label>

                </div>


                <div class="form-content form-study-language">
                    <p class="form-content-title">学習言語（複数選択可）</p>


                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox4" onclick="chebg('cBox4')">
                        <span class="checkbox-fontas"></span>
                        HTML
                    </label>




                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox5" onclick="chebg('cBox5')">
                        <span class="checkbox-fontas"></span>
                        CSS
                    </label>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox6" onclick="chebg('cBox6')">
                        <span class="checkbox-fontas"></span>
                        JavaScript
                    </label>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox7" onclick="chebg('cBox7')">
                        <span class="checkbox-fontas"></span>
                        PHP
                    </label>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox8" onclick="chebg('cBox8')">
                        <span class="checkbox-fontas"></span>
                        Laravel
                    </label>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox9" onclick="chebg('cBox9')">
                        <span class="checkbox-fontas"></span>
                        SQL
                    </label>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox10" onclick="chebg('cBox10')">
                        <span class="checkbox-fontas"></span>
                        SHELL
                    </label>

                    <label class="checkbox-wrapper">
                        <input type="checkbox" name="" class="checkbox" id="cBox11" onclick="chebg('cBox11')">
                        <span class="checkbox-fontas"></span>
                        情報システム基礎知識（その他）
                    </label>

                </div>


            </div>

            <div class="form-right">

                <div class="form-content">
                    <label class="">
                        <p class="form-content-title">学習時間</p>
                        <input type="number" name="study-time" id="studyTime" class="input-text-common">
                    </label>
                </div>

                <div class="form-content">
                    <label class="">
                        <p class="form-content-title">Twitter用コメント</p>
                        <textarea name="" id="commentForTwitter" cols="50" rows="10" class="input-text-common">POSSE学習記録アプリから記録!

@posse_program posse-ap.com</textarea>
                    </label>
                    <div class="button-to-share">
                        <label id="twitterShareCheckbox">
                            <input type="checkbox" name="" id="twitterCheckbox" class="checkbox-twitter">
                            <span class="checkbox-fontas-twitter"></span>
                            Twitterにシェアする
                        </label>
                    </div>
                </div>

            </div>

        </div>
        <div>
            <a class="submit-button" id="submitBtn" href="">
                <p>記録・投稿</p>
            </a>
        </div>
    </div>


    <div class=" submit-finish-modal" id="SubmitFinishModal">
        <div class="close-button-container">
            <div class="close-button" id="closeSubmitFinishModalBtn">
                <span class="batsu"></span>
            </div>
        </div>

        <div class="submit-finish-content">
            <p class="gj-message">AWESOME!</p>
            <div class="submit-finish-checkmark">
                <input type="checkbox" name="" id="" class="checkbox-finish">
                <span class="checkbox-fontas-finish"></span>
            </div>
            <div class="finish-message">
                <p class="finish-message-text">記録・投稿</p>
                <p class="finish-message-text">完了しました</p>
            </div>
        </div>

    </div>


    <div class=" loading-modal" id="loadingModal">
        <div class="close-button-container">
            <div class="close-button" id="closeLoadingModalBtn">
                <span class="batsu"></span>
            </div>
        </div>

        <div class="loading-content">

            <div class="loading-content-inner">

                <div class="loading">
                    <!-- <div class="loadingxx"></div> -->
                </div>
                <div class="loading2">
                    <div class="loading4"></div>
                </div>
                <div class="loading3"></div>

            </div>

        </div>


    </div>

    </div>




    <div class="calender-modal" id="calenderModal">

        <div class="back-button-container">
            <div class="back-button" id="closeCalenderModalBtn">
                <p>←</p>
            </div>
        </div>

        <div class="wrapper">
            <!-- xxxx年xx月を表示 -->

            <!-- ボタンクリックで月移動 -->
            <div id="next-prev-button">
                <button id="prev" onclick="prev()">＜</button>
                <h1 id="clHeader"></h1>

                <button id="next" onclick="next()">＞</button>
            </div>

            <!-- カレンダー -->
            <div id="calendar"></div>
        </div>


        <div class="confirm-button" id="confirmDateBtn">
            <p>決定</p>
        </div>

    </div>





    <!-- オーバーレイ -->
    <div class="overlay" id="overlay"></div>


    <!-- グラフ関連 -->
    <script type="text/javascript">
        console.log('接続確認');
        // 棒グラフ
        // 参考：https://www.petitmonte.com/javascript/chart_columnchart.html
        google.load('visualization', '1', {
            'packages': ['corechart']
        });

        // グラフを描画する為のコールバック関数を指定
        google.setOnLoadCallback(drawChart);
        // グラフの描画   
        function drawChart() {
            // 配列からデータの生成
            var data = google.visualization.arrayToDataTable([
                ['日付', '時間'],
                    <?php 
                    $stmt_var_chart = $db->prepare('SELECT RIGHT(date,2) AS day, SUM(time) AS time_day FROM logs WHERE LEFT(date,7) = LEFT(?,7) GROUP BY `date` ORDER BY `date` ASC');
                    $stmt_var_chart->execute(array($date_today));
                    $var_chart_array = $stmt_var_chart->fetchAll();
                    // var_dump($var_chart_array);
                    ?>
                    <?php foreach ($var_chart_array as $var_chart): ?>
                        [<?= $var_chart['day'] ?>,<?= $var_chart['time_day']?>],
                    <?php endforeach; ?>
            ]);

            // オプションの設定
            // 参考：http://yohshiy.blog.fc2.com/blog-entry-195.html
            var options = {
                width: '100%',
                height: '100%',
                // width:500,
                // height:310,
                'chartArea': {
                    'width': '90%',
                    'height': '80%'
                },
                color: ['#3CCEFE'],
                legend: 'none',
                vAxis: {

                    // minValue: 0,
                    ticks: [0, 2, 4, 6, 8],
                    gridlines: {
                        color: 'transparent'
                    },
                    format: '#h'
                },
                hAxis: {
                    ticks: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, ],
                    gridlines: {
                        color: 'transparent'
                    },

                }
            };

            // 指定されたIDの要素に棒グラフを作成
            var chart = new google.visualization.ColumnChart(document.getElementById('studyTimeBarGraph'));

            // グラフの描画
            chart.draw(data, options);

            // レスポンシブ
            $(window).resize(function() {
                chart.draw(data, options);
            });

        }

        //学習言語の円グラフ
        //参考：ドットインストール
        (function() {
            function drawChart() {
                var studyLanguagePieChart = document.getElementById('studyLanguagePieChart');
                var data;
                var options = {
                    legend: 'none',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
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
                    'chartArea': {
                        'width': '100%',
                        'height': '100%'
                    },
                };
                var chart = new google.visualization.PieChart(studyLanguagePieChart);

                data = new google.visualization.DataTable();
                data.addColumn('string', 'Language');
                data.addColumn('number', 'hours');

                <?php
                $stmt_core_languages = $db->prepare('SELECT languages.language AS language , SUM(logs.time) AS time_language FROM logs INNER JOIN languages ON logs.language_id = languages.id GROUP BY language_id ORDER BY language_id ASC');
                $stmt_core_languages->execute(array());
                $core_languages_array = $stmt_core_languages->fetchAll();
                // var_dump($core_languages_array);
                ?>
                <?php foreach ($core_languages_array as $core_language) : ?>
                    data.addRow(['<?= $core_language['language'] ?>' , <?= $core_language['time_language'] ?>]);
                <?php endforeach; ?>
                // data.addRow(['HTML', 30]);
                // data.addRow(['CSS', 20]);
                // data.addRow(['JavaScript', 10]);
                // data.addRow(['PHP', 5]);
                // data.addRow(['Laravel', 5]);
                // data.addRow(['SQL', 20]);
                // data.addRow(['SHELL', 20]);
                // data.addRow(['その他', 10]);
                // データ元
                // http://posse-task.anti-pattern.co.jp/1st-work/study_language.json

                chart.draw(data, options);


                $(window).resize(function() {
                    console.log('リサイズ')
                    chart.draw(data, options);
                });

            }

            google.charts.load('current', {
                packages: ['corechart']
            });
            google.charts.setOnLoadCallback(drawChart);
        })();

        // 学習コンテンツの円グラフ
        //参考：ドットインストール
        (function() {
            function drawChart() {
                var studyLanguagePieChart = document.getElementById('studyLanguagePieChart');
                var data;

                var options = {
                    // title: 'My Chart',
                    legend: 'none',
                    width: '100%',
                    height: '100%',
                    // width: 220,
                    // height: 220,
                    backgroundColor: 'white',
                    colors: [
                        '#0345EC',
                        '#0F71BD',
                        '#20BDDE',
                    ],
                    pieHole: 0.4,
                    'chartArea': {
                        'width': '100%',
                        'height': '100%'
                    },
                };
                var chart = new google.visualization.PieChart(studyContentsPieChart);
                data = new google.visualization.DataTable();
                data.addColumn('string', 'Contents');
                data.addColumn('number', 'hours');
                <?php 
                $stmt_core_contents = $db->prepare('SELECT SUM(logs.time) AS time_material , contents.material AS material FROM logs INNER JOIN contents ON logs.content_id = contents.id GROUP BY content_id ORDER BY content_id ASC');
                $stmt_core_contents->execute(array());
                $core_contents_array = $stmt_core_contents->fetchAll();
                ?>
                <?php foreach ($core_contents_array as $core_content): ?>
                    data.addRow(['<?= $core_content['material'] ?>' , <?= $core_content['time_material'] ?>]);
                <?php endforeach; ?>

                // データ元
                // http://posse-task.anti-pattern.co.jp/1st-work/study_contents.json

                chart.draw(data, options);
                // レスポンシブ
                $(window).resize(function() {
                    console.log('リサイズ')
                    chart.draw(data, options);
                });

            }

            google.charts.load('current', {
                packages: ['corechart']
            });
            google.charts.setOnLoadCallback(drawChart);

        })();
    </script>

    <script src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="./js/script.js"></script>
</body>

</html>