<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Models\User;
use App\Models\Upgradeteacher;

use App\Http\Requests\SendNotificationRequest;
use App\Notifications\SendNotification;

use Validator;

class UpgradeTeacherController extends Controller
{
    public function index()
    {
        //dùng riêng cho role admin
        $requests = UpgradeTeacher::join('users', 'users.id', '=', 'upgrade_teachers.user_id')
            ->where('status', '=', 'pending')
            ->select('upgrade_teachers.*', 'users.username', 'users.email')
            ->get();
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
        $HasRequest = UpgradeTeacher::where(['user_id' => $request->input('user_id'), 'status'=> 'pending']);
        if($user->role == 'teacher'){
            return response()->json([
                'status' => 400,
                'message' => 'User is already a teacher',
            ]);
        }
        else if($HasRequest->count() > 0){
            return response()->json([
                'status' => 400,
                'message' => 'You have already sent request',
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
        $req = UpgradeTeacher::find($request->id);
        $req->status = 'accepted';
        $req->save();
        
        $user = User::find($req->user_id);
        $user->role = 'teacher';
        $user->save();
        
        //send notification to user
        $data = [
            'user_id' => $user->id,
            'title' => 'Request Accepted',
            'type' =>  'request accepted',
            'name' => 'Request To Become Teacher Accepted',
            'status' => 'accepted',
            'description' => 'Congratulations! Your request to become a teacher has been accepted',
        ];
        $user->notify(new SendNotification ($data));
        
        return response()->json([
            'status' => 200,
            'message' => 'User upgraded to teacher successfully',
        ]);
    }
    public function reject_request_become_teacher(Request $request)
    {
        $req = UpgradeTeacher::find($request->id);
        $req->status = 'rejected';
        $req->save();
        //send notification to user
        $data = [
            'user_id' => $req->user_id,
            'title' => 'Request Rejected',
            'type' =>  'request rejected',
            'name' => 'Request To Be Teacher Rejected',
            'status' => 'rejected',
            'description' => 'Sorry, Your request to become teacher has been rejected',
        ];
        $user = User::find($req->user_id);
        $user->notify(new SendNotification ($data));
        return response()->json([
            'status' => 200,
            'message' => 'User rejected to upgrade to teacher successfully',
        ]);
        
    }
}
