<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

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
    public function StudentInCourse($id)
    {
        $students = Student::join('users', 'users.id', '=', 'students.user_id')
            ->join('courses', 'courses.id', '=', 'students.course_id')
            ->select('users.username', 'users.email', 'users.avatar', 'courses.name as course_name', 'students.*')
            ->where('courses.teacher_id', $id)->get();
        return response()->json([
            'status' => 200,
            'students' => $students,
        ]);
    }
    public function GetCourseEnroll($id)
    {
        $listcourse = DB::table('students')
            ->join('courses', 'courses.id', '=', 'students.course_id')
            ->join('users', 'users.id', '=', 'courses.teacher_id')
            ->select('users.username as teacher_name', 'users.avatar','courses.*')
            ->where('students.user_id', $id)
            ->get();
        return response()->json([
            'status' => 200,
            'courses' => $listcourse,
        ]);
    }
    // Kiểm tra xem học viên đã đăng kí chưa
    public function CheckEnroll($user_id, $course_id)
    {
        $check = DB::table('students')->where('user_id', $user_id)->where('course_id', $course_id)->count();
        if ($check === 1) {
            return response()->json([
                'status' => true,
            ]);
        } else {
            return response()->json([
                'status' => false,
            ]);
        }
    }
    public function isStudent(Request $request)
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
    public function EnrollCourse(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'course_id' => 'required',
            'user_id' => 'required',
        ]);
        if ($validator->fails()) {
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
    public function UnenrollCourse($user_id, $course_id)
    {
        // $validator = Validator::make($request->all(), [
        //     'course_id' => 'required',
        //     'user_id' => 'required',
        // ]);
        // if ($validator->fails()) {
        //     return response()->json([
        //         'validate_err' => $validator->messages(),
        //     ]);
        // }
        $student = Student::where([
            'user_id' => $user_id,
            'course_id' => $course_id,
        ])->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Unenroll Course Successfully',
        ]);
    }
}
