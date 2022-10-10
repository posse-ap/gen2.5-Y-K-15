<?php
require('dbconnect.php');
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

    <!-- NEW ここから -->

    <?php
    // パラメーターの数字をもとにデータベースからデータをとってくる。
    $big_question_id = $_GET['id'];
    $stmt_questions = $db->prepare('SELECT big_questions.name AS big_questions_name, choices.id AS choice_id, questions.image, choices.question_id, choices.name AS choice
FROM big_questions 
INNER JOIN questions
ON big_questions.id = questions.big_question_id
INNER JOIN choices 
ON questions.id = choices.question_id WHERE questions.big_question_id = ?');
    $stmt_questions->execute(array($big_question_id));
    $questions_array = $stmt_questions->fetchAll();
    ?>

    <main class="main" style="margin-bottom:100px">

        <h1 class="question_title">
            <?= $questions_array[0]['big_questions_name'] ?>
        </h1>

        <div class="main_container">

            <?php foreach ($questions_array as $question_array) : ?>

                <?php if ($question_array['choice_id'] % 3 == 1) : ?>

                    <h2 class="question">
                        <?php if ($question_array['question_id'] == 1 || $question_array['question_id'] == 2) : ?>
                            <?= $question_array['question_id']; ?>
                        <?php else : ?>
                            <?= $question_array['question_id'] - 2; ?>
                        <?php endif; ?>
                        .この地名はなんて読む？
                    </h2>
                    <div class="question-image-container">
                        <img src="./images/<?php echo $question_array['image']; ?>" alt="" class="question_image">
                    </div>

                <?php else : ?>
                    <p></p>
                <?php endif; ?>


                <?php if ($question_array['choice_id'] % 3 == 1) : ?>
                    <ul class="option_list">
                    <?php else : ?>
                        <p></p>
                    <?php endif; ?>

                    <?= '<li class="option">' . $question_array['choice'] . '</li>'; ?>

                    <?php if ($question_array['choice_id'] % 3 == 0) : ?>
                    </ul>
                <?php else : ?>
                    <p></p>
                <?php endif; ?>

            <?php endforeach; ?>
    </main>
</body>

</html>