<?php

namespace App\Http\Controllers\API;
use App\Models\Record;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function index($id)
    {
        $record = Record::find($id);
        return response()->json([
            'status' => 200,
            'record' => $record,
        ]);
    }
    public function save_feedback(Request $request)
    {
        $feedback = new Feedback;
        $feedback->student_id = 1;
        $feedback->teacher_id = 1;
        $feedback->body = $request->input('body');
        $feedback->record_id = $request->input('record_id');
        $feedback->save();
        return response()->json([
            'status' => 200,
            'message' => 'Feedback Successfully',
        ]);
    }
    public function see_feedback($id)
    {
        // $feedback = DB::table('feedback')->where('record_id',$id)->get();
        $feedback = Feedback::where('record_id',$id)->get();
        if($feedback != [])
        {
            return response()->json([
                'status' => 200,
                'feedback' => $feedback,
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'No Feedback',
            ]);
        }
    }
}
