<?php

namespace App\Http\Controllers\API;
use App\Models\Record;
use App\Models\Lesson;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    public function index($id)
    {
        $lesson = Lesson::find($id);
        $record = Lesson::latest()->all();
        $records = DB::table('records')->where('lesson_id',$id)->get();
        return response()->json([
            'status' => 200,
            'lesson' => $lesson,
            'records' => $records,
        ]);
    }
    public function save_audio_record(Request $request){
        $record = new Record;
        $record->user_id = 1;
        $record->lesson_id = 1;
        $record->record_file = $request->input('url');
        // $record->create_at = date('Y-m-d H:i:s');
        $record->save();
        return response()->json([
            'status' => 200,
            'message' => 'Record Saved Successfully',
        ]);
    }
}
