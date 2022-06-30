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
        $records = DB::table('records')->where('lesson_id',$id)->get();
        return response()->json([
            'status' => 200,
            'lesson' => $lesson,
            'records' => $records,
        ]);
    }
    public function save_record(Request $request){
        $record = new Record;
        $record->user_id = 1;
        $record->lesson_id = $request->input('lesson_id');
        $record->path = $request->input('url');
        $record->save();
        return response()->json([
            'status' => 200,
            'message' => 'Record Saved Successfully',
        ]);
    }
}