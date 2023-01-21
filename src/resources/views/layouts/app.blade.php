<!doctype html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title>POSSE | @yield('title', 'Quizy')</title>
    <link rel="icon" href="{{ asset('/favicon.ico') }}">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/html5resetcss/html5reset-1.6.css">
    @yield('head')
    <link rel="stylesheet" href="{{ asset('/css/style.css') }}">
        <!-- ファイル読み込み参考サイト
  https://qiita.com/ntm718/items/fed0e1060557a4e28ef3
  -->
</head>

<body>
    <div id="app">
        <main>
            @yield('content')
        </main>
    </div>
</body>
@yield('script')

</html>