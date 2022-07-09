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
            // $file= $request->file('video');
            // $filename= date('YmdHi').$file->getClientOriginalName();
            // $file-> move(public_path('Video'), $filename);
            // $lesson->video_link = $filename;

            $lesson->name = $request->input('name');
            $lesson->description = $request->input('description');
            $lesson->course_id = $request->input('course_id');
            $lesson->video_link = $request->input('url');
            $lesson->save();

            return response()->json([
                'status' => 200,
                'message' => 'Lesson Added Successfully',
            ]);
        }
    }
    public function destroy($id)
    {
        $lesson = Lesson::find($id);
        $lesson->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Lesson Deleted Successfully',
        ]);
    }
    public function edit($id)
    {
        $lesson = Lesson::find($id);
        if($lesson)
        {
            return response()->json([
                'status' => 200,
                'lesson' => $lesson,
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'No Course ID Found',
            ]);
        }
    }
    public function update(Request $request, $id)
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
            $lesson = Lesson::find($id);
            if($lesson)
            {
                $lesson->name = $request->input('name');
                $lesson->description = $request->input('description');
                // $lesson->course_id = $request->input('course_id');
                $lesson->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Lesson Updated Successfully',
                ]);
            }
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Course ID Found',
                ]);
            }
        }
    }
    public function updatevideo(Request $request, $id)
    {
        $lesson = Lesson::find($id);
        if($lesson)
        {
            if ($request->file('video'))
            {
                $file= $request->file('video');
                $filename= date('YmdHi').$file->getClientOriginalName();
                $file-> move(public_path('Video'), $filename);
                $lesson->video_link = $filename;
                $lesson->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Video Updated Successfully',
                ]);
            }
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'No Course ID Found',
            ]);
        }
    }

}
