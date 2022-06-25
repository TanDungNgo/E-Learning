<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
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
        if($course)
        {
            return response()->json([
                'status' => 200,
                'course' => $course,
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
            $course = Course::find($id);
            if($course)
            {
                $course->name = $request->input('name');
                $course->description = $request->input('description');
                $course->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Course Updated Successfully',
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

    public function destroy($id)
    {
        $course = Course::find($id);
        $course->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Course Deleted Successfully',
        ]);
    }
}
