<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Models\User;
use App\Models\UpgradeTeacher;

use App\Http\Requests\SendNotificationRequest;
use App\Notifications\SendNotification;

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
        // $validator = Validator::make($request->all(), [
        //     'user_id' => 'required|max:191',
        //     'video_link' => 'required|max:191',
        // ]);
        
        $user = User::find($request->input('user_id'));

        if($user->role == 'teacher'){
            return response()->json([
                'status' => 400,
                'message' => 'User is already a teacher',
            ]);
        }
        else 
        {
            $become_teacher = new UpgradeTeacher;
            $become_teacher->user_id = $request->input('user_id');
            $become_teacher->video_link = $request->input('video_link');
            $become_teacher->save();
            return response()->json([
                'status' => 200,
                'message' => 'Request Added Successfully',
            ]);
        }
    }
    public function approve_request_become_teacher(Request $request)
    {
        $req->status = 'accepted';
        $req->save();
        
        $user = User::find($req->user_id);
        $user->role = 'teacher';
        $user->save();
        
        //send notification to user
        $data = [
            'user_id' => $user->id,
            'name' => 'Upgrade To Teacher',
            'status' => 'accepted',
            'description' => 'Xin chúc mừng, Bạn đã trở thành giáo viên',
        ];
        $user->notify(new SendNotification ($data));
        
        return response()->json([
            'status' => 200,
            'message' => 'User upgraded to teacher successfully',
        ]);
        $req = UpgradeTeacher::find($request->id);
    }
    public function reject_request_become_teacher(Request $request)
    {
        $req->status = 'rejected';
        $req->save();
        $req = UpgradeTeacher::find($request->id);
        //send notification to user
        $data = [
            'user_id' => $req->user_id,
            'name' => 'Upgrade To Teacher',
            'status' => 'rejected',
            'description' => 'Thật đáng tiếc, bạn không đủ điều kiện để trở thành giáo viên',
        ];
        $user = User::find($req->user_id);
        $user->notify(new SendNotification ($data));
        return response()->json([
            'status' => 200,
            'message' => 'User rejected to upgrade to teacher successfully',
        ]);
        
    }
}
