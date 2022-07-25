<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\Course;
use App\Models\User;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Notifications\SendNotification;
use Validator;

class LessonController extends Controller
{
    public function getOne($courseId, $lessonId)
    {
        $course = Course::find($courseId);
        $lesson = Lesson::find($lessonId);
        $data = [];
        $records = DB::table('records')
            ->join('users', 'users.id', '=', 'records.user_id')
            ->select('users.username', 'records.*')->where('lesson_id', '=', $lessonId)->get();
        $data = [
            'course_name' => $course->name,
            'id' => $lesson->id,
            'name' => $lesson->name,
            'description' => $lesson->description,
            'video_link' => $lesson->video_link,
            'status' => $lesson->status,
            'records' => $records,
        ];
        return response()->json([
            'status' => 200,
            'lesson' => $data,
        ]);
    }
    public function index($id)
    {
        $course = DB::table('courses')->join('users', 'users.id', '=', 'courses.teacher_id')
            ->select('users.username', 'courses.*')->where('courses.id', $id)->first();
        $lessons = DB::table('lessons')->where('course_id', $id)->get();
        $data = [
            'username' => $course->username,
            'name' => $course->name,
            'description' => $course->description,
            'banner' => $course->banner,
            'price' => $course->price,
            'status' => $course->status,
            'lessons' => $lessons,
        ];
        return response()->json([
            'status' => 200,
            'course' => $data,
            // 'lessons' => $lessons,
        ]);
    }
    //pending lesson for admin approve
    public function PendingLesson(Request $request)
    {
        //dùng cho role admin
        $lesson = Lesson::join('courses', 'courses.id', '=', 'lessons.course_id')
            ->join('users', 'users.id', '=', 'courses.teacher_id')
            ->select('courses.name', 'lessons.*', DB::raw("concat (users.firstname,' ',users.lastname) as teacher_name"))
            ->where('lessons.status', 'pending')->get();
        return response()->json([
            'lesson' => $lesson,
        ]);
    }
    public function ApprovePendingLesson(Request $request)
    {
        $status = $request->status;
        $lesson = Lesson::find($request->id);
        $user = User::find($lesson->course_id->teacher_id);
        if ($status == 'accepted') {
            $lesson->status = 'accepted';
            $lesson->save();
            $data = [
                'lesson_name' => $lesson->name,
                'description' => 'Your lesson has been approved',
            ];
            $user->notify(new SendNotification($data));
            return response()->json([
                'status' => 200,
                'message' => 'Lesson Approved Successfully',
            ]);
        } else {
            $lesson->status = 'rejected';
            $lesson->save();
            $data = [
                'lesson_name' => $lesson->name,
                'description' => 'Your lesson has been rejected',
            ];
            $user->notify(new SendNotification($data));
            return response()->json([
                'status' => 200,
                'message' => 'Lesson Rejected Successfully',
            ]);
        }
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
        } else {
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
            $courseName = Course::where('id', $request->input('course_id'))->get('name');
            $courseName = $courseName[0]->name;
            $student = Student::where('course_id', $request->input('course_id'))->get('user_id');
            foreach ($student as $key => $value) {
                $user = User::find($value->user_id);
                $data = [
                    'title' => 'New Lesson',
                    'type' => 'new_lesson',
                    'name' => "New Lesson At $courseName", 
                    'course_id' => $request->input('course_id'),
                    'description' => "Let's study!",
                ];
                $user->notify(new SendNotification($data));
            }
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
        if ($lesson) {
            return response()->json([
                'status' => 200,
                'lesson' => $lesson,
            ]);
        } else {
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
        } else {
            $lesson = Lesson::find($id);
            if ($lesson) {
                $lesson->name = $request->input('name');
                $lesson->description = $request->input('description');
                // $lesson->course_id = $request->input('course_id');
                $lesson->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Lesson Updated Successfully',
                ]);
            } else {
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
        if ($lesson) {
            if ($request->file('video')) {
                $file = $request->file('video');
                $filename = date('YmdHi') . $file->getClientOriginalName();
                $file->move(public_path('Video'), $filename);
                $lesson->video_link = $filename;
                $lesson->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Video Updated Successfully',
                ]);
            }
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Course ID Found',
            ]);
        }
    }
}
