<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\DB;
// この二つ追加

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questions')->truncate();
        $now = CarbonImmutable::now();

        $params = [
            [
                'big_question_id' => 1,
                'image' => 'takanawa.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'big_question_id' => 1,
                'image' => 'kameido.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'big_question_id' => 2,
                'image' => 'mukainada.png',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        DB::table('questions')->insert($params);
    }
}


// https://github.com/posse-ap/sample-ph3-quizy/blob/feature/version9/src/database/seeders/QuestionSeeder.php