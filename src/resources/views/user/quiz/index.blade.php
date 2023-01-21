<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>クイズ一覧！</title>
</head>
<body>
  <main>
  <pre>
    <?php
    // var_dump($bigQuestions);
    ?>
  </pre>

    <ul>
      @foreach ($bigQuestions as $bigQuestion)
      <li><a href="quiz/{{ $bigQuestion->id}}"> {{ $bigQuestion->name }}</a></li>
      <!-- <li><img src="{{ asset('/images/' . $bigQuestion->image) }}" alt=""></li> -->
      @endforeach
    </ul>

  </main>
</body>
</html>

<!-- このページは、/quiz -->