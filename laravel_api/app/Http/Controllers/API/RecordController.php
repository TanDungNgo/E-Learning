<?php

namespace App\Http\Controllers\API;

use App\Models\Record;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    public function index($id)
    {
        $lesson = Lesson::find($id);
        // $record = Lesson::latest()->all();
        // $users = User::get();
        $users = DB::table('users')->select('records.user_id', 'records.id', 'records.record_file')
            ->join('records', 'users.id', '=', 'records.user_id')
            ->where('records.lesson_id', $id)->get();
        // $records = DB::table('records')->where('lesson_id',$id)->get();
        return response()->json([
            'status' => 200,
            'lesson' => $lesson,
            'users' => $users,
            // 'records' => $records,
        ]);
    }
    public function save_audio_record(Request $request)
    {
        $record = new Record;
        $record->user_id = 1;
        $record->lesson_id = $request->input('lesson_id');
        $record->record_file = $request->input('url');
        $record->minute = $request->input('minute');
        $record->second = $request->input('second');
        // $record->create_at = date('Y-m-d H:i:s');
        $record->save();
        return response()->json([
            'status' => 200,
            'message' => 'Record Saved Successfully',
        ]);
    }
}
