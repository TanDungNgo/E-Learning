<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use DB;

use App\Models\Student;
use App\Models\Course;

class CourseController extends Controller
{
    public function index()
    {

        $courses = DB::table('courses')->join('users', 'users.id', '=', 'courses.teacher_id')->select(DB::raw("concat (users.firstname,' ',users.lastname) as teacher_name"),'courses.*')->get();
        return response()->json([
            'status' => 200,
            'courses' => $courses,
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
            $course = new Course;
            $course->name = $request->input('name');
            $course->description = $request->input('description');
            // $file= $request->file('banner');
            // $filename= date('YmdHi').$file->getClientOriginalName();
            // $file-> move(public_path('Image'), $filename);
            // $course->banner = $filename;
            $course->banner = $request->input('url');
            $course->teacher_id = '1';
            $course->price = 1000;
            $course->save();

            return response()->json([
                'status' => 200,
                'message' => 'Course Added Successfully',
            ]);
        }
    }
    public function edit($id)
    {
        $course = Course::find($id);
        if ($course) {
            return response()->json([
                'status' => 200,
                'course' => $course,
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
            $course = Course::find($id);
            if ($course) {
                $course->name = $request->input('name');
                $course->description = $request->input('description');
                $course->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Course Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Course ID Found',
                ]);
            }
        }
    }

    public function destroy($id)
    {
        $course = Course::find($id);
        $course->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Course Deleted Successfully',
        ]);
    }
    //teacher noi tieng nhat
    //not complete
    public function famousTeacher()
    {
    }

    public function popular_courses()
    {
        $courses = Course::all();
        $popular_course = [];
        foreach($courses as $course)
        {
            $popular_course[] = $course->students();
        }
        $max = max($popular_course);
        $index = array_search($max, $popular_course);
        $popular_course = $courses[$index];
        return response()->json([
            'status' => 200,
            'popular_course' => $popular_course,
        ]);
    }
}
