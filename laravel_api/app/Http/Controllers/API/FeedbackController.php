<?php

namespace App\Http\Controllers\API;
use App\Models\Record;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Feedback;
use App\Models\Lesson;
use App\Models\Course;
use App\Models\User;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Notifications\SendNotification;
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
        $feedback->student_id = $request->input('student_id');
        $feedback->teacher_id = $request->input('teacher_id');
        $feedback->body = $request->input('body');
        $feedback->record_id = $request->input('record_id');
        $feedback->save();
        $url = Record::find($request->input('record_id'))->record_file;
        //notify student
        $user = User::where('id', $request->input('student_id'))->first();
        $lessonID = Record::where('id', $request->input('record_id'))->first()->lesson_id;
        $lesson = Lesson::where('id', $lessonID)->get('name');
        $lesson = $lesson[0]->name;
        $data = [
            'title' => 'Feedback',
            'type' =>  'feedback',
            'name' => "Feedback Record: ". $lesson,
            'url' => $url,
            'description' => $request->input('body'),
        ];
        $user->notify(new SendNotification($data));
        return response()->json([
            'status' => 200,
            'message' => 'Feedback Successfully',
        ]);
    }
    public function see_feedback($id)
    {
        // $feedback = DB::table('feedbacks')->where('record_id',$id)->get();
        $feedback = Feedback::where('record_id',$id)->get();
        $count = count($feedback);
        if($count > 0)
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
