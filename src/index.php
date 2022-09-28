<?php
// phpinfo();
// session_start();
require('dbconnect.php');

$big_question_id = $_GET['id'];
// パラメーターの数字に対応したクイズのタイトルを取得
$stmt_big_question_title = $db->prepare('SELECT name FROM big_questions WHERE id = ?');
$stmt_big_question_title->execute(array($big_question_id));
$big_question_title = $stmt_big_question_title->fetch();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $big_question_title['name'] ?></title>
    <link rel="stylesheet" href="./style/style.css">
    <link rel="stylesheet" href="./style/reset.css">
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
    <main>
        <div class="main_container">
            <h1 class="question_title">
                <?= $big_question_title['name'] ?>
            </h1>
            <div class="main_inner" id="quizDivWrapper">
            </div>
        </div>
        </div>
    </main>
    <script src="js/kuizy.js"></script>
</body>

</html>