<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\BecomeTeacher;


class BecomeTeacherController extends Controller
{
    public function index()
    {
        //dùng riêng cho role admin
        $become_teachers = BecomeTeacher::all();
        return response()->json([
            'status' => 200,
            'become_teachers' => $requests,
        ]);
    }
    public function RequestBecomeTeacher(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|max:191',
            'video_link' => 'required|max:191',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }
        else
        {
            $become_teacher = new BecomeTeacher;
            $become_teacher->user_id = $request->input('user_id');
            $become_teacher->video_link = $request->input('video_link');
            $become_teacher->save();
            return response()->json([
                'status' => 200,
                'message' => 'Request Added Successfully',
            ]);
        }
    }
    // hàm xét duyệt sẽ viết sau khi cập nhật lại hàm check admin của user
}
