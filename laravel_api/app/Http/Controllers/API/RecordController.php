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
        $users = Record::where('lesson_id',$id)->groupBy('user_id')->get('user_id');
        $data = [];
        foreach ($users as $user) {
            $all_record = Record::where([
                'lesson_id' => $id,
                'user_id' => $user->user_id,
            ])
            ->select('id', 'record_file', 'created_at')
            ->get();
            if(count($all_record) > 0){
                $data[] = [
                    'user_id' => $user->user_id,
                    'record' => $all_record,
                ];
            }
        }
        return response()->json([
            'data' => $data,
        ]);
    }
    public function save_audio_record(Request $request)
    {
        $record = new Record;
        $record->user_id = $request->input('user_id');
        $record->lesson_id = $request->input('lesson_id');
        $record->record_file = $request->input('url');
        // $record->create_at = date('Y-m-d H:i:s');
        $record->save();
        return response()->json([
            'status' => 200,
            'message' => 'Record Saved Successfully',
        ]);
    }
}
