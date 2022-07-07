<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Models\User;
use App\Models\UpgradeTeacher;

use Validator;

class UpgradeTeacherController extends Controller
{
    public function index()
    {
        //dùng riêng cho role admin
        $requests = UpgradeTeacher::all();
        return response()->json([
            'status' => 200,
            'requests' => $requests,
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
            $become_teacher = new UpgradeTeacher;
            $become_teacher->user_id = $request->user_id;
            $become_teacher->video_link = $request->video_link;
            $become_teacher->save();
            return response()->json([
                'status' => 200,
                'message' => 'Request Added Successfully',
            ]);
        }
    }
    public function approve_request_become_teacher(Request $request)
    {
                $re = UpgradeTeacher::find($request->id);
                $re->status = 'accepted';
                $re->save();
        
                $user = User::find($re->user_id);
                $user->role = 'teacher';
                $user->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'User upgraded to teacher successfully',
                ]);
    }
    public function reject_request_become_teacher(Request $request)
    {
                $re = UpgradeTeacher::find($request->id);
                $re->status = 'rejected';
                $re->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'User rejected to upgrade to teacher successfully',
                ]);
    }
}
