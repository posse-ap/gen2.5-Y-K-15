<?php
// phpinfo();
// session_start();
require('dbconnect.php');

// パラメーターの数字に対応したクイズのタイトルを取得
$big_question_id = $_GET['id'];
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
        <h1 class="question_title">
            <?= $big_question_title['name'] ?>
        </h1>

        <div class="main_container">
            <div class="main_inner" id="quizDivWrapper">

                <?php
                $question_number = 1;
                $choice_number = 0;
                ?>

                <!-- １問目 -->
                <section class="quiz_div">
                    <h2 class="question">
                        <?= $question_number ?>.この地名はなんて読む？
                    </h2>
                    <?php
                    // 設問テーブルから写真のファイル名を持ってくる
                    $stmt_question_images = $db->prepare('SELECT image FROM questions WHERE id = ?');
                    $stmt_question_images->execute(array($question_number));
                    $question_images = $stmt_question_images->fetch();
                    ?>
                    <div class="question-image-container">
                        <img src="./images/<?php echo $question_images['image']; ?>" alt="" class="question_image">
                    </div>

                    <ul class="option_list" id="optionList3">

                        <?php
                        for ($i = 0; $i < 3; $i++) {

                            $choice_number++;

                            // 選択肢テーブルから
                            $stmt_choice_name = $db->prepare('SELECT name FROM choices WHERE id = ?');
                            $stmt_choice_name->execute(array($choice_number));
                            $choices_name = $stmt_choice_name->fetch();

                            // 選択肢を表示

                            echo '<li class="option">' . $choices_name['name'] . '</li>';
                        }
                        ?>

                        <!-- if文でvalidかどうか調べる -->
                        <!-- <div class="hidden_message_correct" id="correctPopQ3">
                            <p class="correct">正解！</p>
                            <p>正解は<?= '高輪'; ?>です！</p>
                        </div>
                        <div class="hidden_message_wrong" id="wrongPopQ3">
                            <p class="wrong">不正解！</p>
                            <p>正解は<?= '高輪'; ?>です！</p>
                        </div> -->
                        <!-- if文でvalidかどうか調べる 終わり -->

                    </ul>
                </section>

                <!-- 2問目 -->
                <section class="quiz_div">
                    <?php
                    $question_number++;
                    ?>
                    <h2 class="question">
                        <?= $question_number ?>.この地名はなんて読む？
                    </h2>
                    <?php
                    // 設問テーブルから写真のファイル名を持ってくる
                    $stmt_question_images = $db->prepare('SELECT image FROM questions WHERE id = ?');
                    $stmt_question_images->execute(array($question_number));
                    $question_images = $stmt_question_images->fetch();
                    ?>
                    <div class="question-image-container">
                        <img src="./images/<?php echo $question_images['image']; ?>" alt="" class="question_image">
                    </div>
                    <div class="question-image-container">
                        <img src="./images/<?php echo $question_images[$question_number - 1]; ?>" alt="" class="question_image">
                    </div>

                    <ul class="option_list" id="optionList3">

                        <?php
                        for ($i = 0; $i < 3; $i++) {

                            $choice_number++;

                            // 選択肢テーブルから
                            $stmt_choice_name = $db->prepare('SELECT name FROM choices WHERE id = ?');
                            $stmt_choice_name->execute(array($choice_number));
                            $choices_name = $stmt_choice_name->fetch();

                            // 選択肢を表示

                            echo '<li class="option">' . $choices_name['name'] . '</li>';
                        }
                        ?>

                        <!-- if文でvalidかどうか調べる -->
                        <!-- <div class="hidden_message_correct" id="correctPopQ3">
                            <p class="correct">正解！</p>
                            <p>正解は<?= '高輪'; ?>です！</p>
                        </div>
                        <div class="hidden_message_wrong" id="wrongPopQ3">
                            <p class="wrong">不正解！</p>
                            <p>正解は<?= '高輪'; ?>です！</p>
                        </div> -->
                        <!-- if文でvalidかどうか調べる 終わり -->

                    </ul>
                </section>


            </div>

        </div>
        </div>
    </main>
    <!-- <script src="js/kuizy.js"></script> -->
</body>

</html>