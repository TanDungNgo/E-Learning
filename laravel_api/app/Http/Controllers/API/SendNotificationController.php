<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SendNotificationRequest;
use App\Notifications\SendNotification;
use App\Models\User;
use App\Models\Lesson;


class SendNotificationController extends Controller
{
    public function StoreUpgrateToTeacher(Request $request)
    {
        $data = $request->all();
        $data['name'] = "Upgrade To Teacher";
        if ($data['status'] == 'accepted'){
            $data['description'] = 'Xin chúc mừng, Bạn đã trở thành giáo viên';
        }
        else {
            $data['description'] = 'Thật đáng tiếc, bạn không đủ điều kiện để trở thành giáo viên';
        }
        $user = User::find($data['user_id']);
        $user->notify(new SendNotification ($data));
    }
    public function NotifyUser(Request $request)
    {
        $user = User::find($request->$user_id);
        $notify = $user->notifications()->get();
        return response()->json([
            'notify' => $notify,
        ]);
    }
}
