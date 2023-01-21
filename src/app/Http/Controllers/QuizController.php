<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\BigQuestion;
use App\Models\Question;
use Illuminate\Support\Facades\DB;

// ↑Choiceは？

class QuizController extends Controller
{
    public function index(Request $request)
    {
        
        $bigQuestions = BigQuestion::all();

        
        return view('user.quiz.index', compact('bigQuestions'));

        // 変数の受け渡し
        // https://qiita.com/ryo2132/items/63ced19601b3fa30e6de
        
        // $big_questions = DB::table('big_questions')->get();
        // return view('user.quiz.index', ['big_questions' => $big_questions]);
        
    }

    public function detail($id)
    {
        $Questions = BigQuestion::with('questions.choices')->find($id);
        // with関数について
        // https://cloudsmith.co.jp/blog/backend/laravel/2020/07/1506704.html
        return view('user.quiz.detail', compact('Questions'));
    }
}

// hoge(Request $request)ってなんだ??
// https://qiita.com/yuzgit/items/5df7924d62ba4c788279

// https://github.com/posse-ap/sample-ph3-quizy/blob/feature/version9/src/app/Http/Controllers/QuizController.php