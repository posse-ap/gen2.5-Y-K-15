<?php
// namespace App\Http\Controllers;
// use Illuminate\Http\Request;
// use Illuminate\Http\Response;

// class QuizController extends Controller{

//   public function index(){
//     return view('quiz.index');
//   }


// }



namespace App\Http\Controllers;

use App\Models\BigQuestion;
use App\Models\Question;

class QuizController extends Controller
{
    public function index()
    {
        return view('user.quiz.index');
    }

    public function detail($id)
    {
        // $bigQuestion = BigQuestion::with('questions.choices')->find($id);
        return view('user.quiz.detail');
    }
}