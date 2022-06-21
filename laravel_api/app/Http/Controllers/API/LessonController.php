<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;

class LessonController extends Controller
{
    public function index($id)
    {
        $course = Course::find($id);
        // $lessons = Lesson::all();
        $lessons = DB::table('lessons')->where('course_id',$id)->get();
        return response()->json([
            'status' => 200,
            'course' => $course,
            'lessons' => $lessons,
        ]);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'description' => 'required|max:191',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }
        else
        {
            $lesson = new Lesson;
            if ($request->File('video'))
            {
                $file= $request->file('video');
                $filename= date('YmdHi').$file->getClientOriginalName();
                $file-> move(public_path('Video'), $filename);
                $lesson->video_link = $filename;
            }
            else
            {
                $lesson->video_link = $request->input('video');;
            }
            $lesson->name = $request->input('name');
            $lesson->description = $request->input('description');
            $lesson->course_id = $request->input('course_id');
            $lesson->save();

            return response()->json([
                'status' => 200,
                'message' => 'Lesson Added Successfully',
            ]);
        }
    }
}
