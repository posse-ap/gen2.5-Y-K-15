<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>

    </title>
    <!-- ファイル読み込み参考サイト
  https://qiita.com/ntm718/items/fed0e1060557a4e28ef3
  -->
    <link rel="stylesheet" href="{{ asset('/css/style.css') }}">
</head>

<body class="body">
    <header class="header">
      <img src="./images/kuizy_logo.jpg" alt="" class="kuizy_logo">
      <div class="header_right_side">
            <p>クイズ・診断を作成</p>
            <div><img src="" alt=""></div>
            <p>検索</p>
        </div>
    </header>

  <h1 class="test">This is test message!!</h1>
  <main>
    <div class="main_container">
      <h1 class="question_title">
        ガチで東京の人しか解けない！ #東京の難読地名クイズ
      </h1>

<?php
?>
      
      <div class="main_inner" id="quizDivWrapper">
      </div>
      </div>
    </div>
  </main>

  <script src="{{ asset('/js/kuizy.js') }}"></script>
</body>

</html>