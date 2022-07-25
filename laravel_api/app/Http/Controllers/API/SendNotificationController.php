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
    public function NotifyUser(Request $request, $user_id)
    {
        $user = User::where('id', $user_id)->first();
        $notify = $user->notifications()->get();
        return response()->json([
            'notify' => $notify
        ]);
    }
}
