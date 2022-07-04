<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Models\User;
use App\Models\Upgradeteacher;

use Validator;

class UpgradeTeacherController extends Controller
{
    public function index()
    {
        //dùng riêng cho role admin
        $become_teachers = UpgradeTeacher::all();
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
    public function upgrade_to_teacher(Request $request)
    {
        if(true) // điều chỉnh lại sau
        {
            $status = $request->input('status');
            if($status == 'accept')
            {
                $re = Upgradeteacher::find($request->input('id'));
                $user = User::find($re->user_id);
                $user->role = 'teacher';
                $user->save();
                
                $re->status = 'accepted';
                $re->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'User upgraded to teacher successfully',
                ]);
            }
            else
            {
                $reject = UpgradeTeacher::find($request->input('id'));
                $reject->status = 'rejected';
                return response()->json([
                    'status' => 200,
                    'message' => 'Request deleted successfully',
                ]);
            }
        }
        else
        {
            return response()->json([
                'status' => 400,
                'message' => 'You are not admin',
            ]);
        }
    }
}
