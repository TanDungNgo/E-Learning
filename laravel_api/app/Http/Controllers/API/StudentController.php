<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\Course;
use Illuminate\Http\Request;
use Validator;

class StudentController extends Controller
{
    public function index()
    {
        $student = Student::join('courses', 'courses.id', '=', 'students.course_id')
        ->select('courses.*')->get();
        return response()->json([
            'status' => 200,
            'student' => $student,
        ]);
    }
    public function isStudent (Request $request)
    {
        $validator = Validator::make($request->all(), [
            'course_id' => 'required|integer',
            'user_id' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }
        $student = Student::where([
            'course_id' => $request->course_id,
            'user_id' => $request->user_id,
        ])->first();
        if ($student) {
            return response()->json([
                'status' => 200,
                'isStudent' => "true"
            ]);
        }
        return response()->json([
            'status' => 401,
            'isStudent' => "false"
        ]);
    }
    public function EnrollCourse(Request $request){
        $validator = Validator::make($request->all(), [
            'course_id' => 'required',
            'user_id' => 'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }
        $student = new Student;
        $student->course_id = $request->course_id;
        $student->user_id = $request->user_id;
        $student->join_date = date('Y-m-d');
        $student->save();
        return response()->json([
            'status' => 200,
            'message' => 'Enroll Course Successfully',
        ]);
    }
    public function UnenrollCourse(Request $request){
        $validator = Validator::make($request->all(), [
            'course_id' => 'required',
            'user_id' => 'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }
        $student = Student::where([
            'user_id' => $request->user_id,
            'course_id' => $request->course_id,
        ])->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Unenroll Course Successfully',
        ]);
    }
}
