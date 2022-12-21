<?php

use App\Http\Controllers\QuizController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
|  Routes
|--------------------------------------------------------------------------
|
| Here is where you can register  routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "" middleware group. Now create something great!
|
*/

// リダイレクト！
Route::get('/', function () { return redirect('/quiz'); });


// クイズ一覧
// localhost/quizにアクセスしたら、QuizControllerのindexメソッドに。。そしてクイズ一覧表示
Route::get('/quiz', [QuizController::class, 'index'])->name('quiz.index');



Route::get('/quiz/{id}', [QuizController::class, 'detail'])->whereNumber('id')->name('quiz.detail');

