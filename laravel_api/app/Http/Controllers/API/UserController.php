<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests\SendNotificationRequest;
use App\Notifications\SendNotification;

class UserController extends Controller
{
    // Lấy ra tất cả user để xem role
    public function GetAllUser()
    {
        $users = User::all();
        return response()->json([
            'status' => 200,
            'users' => $users
        ]);
    }
    public function BecomeAllAdmin()
    {
        $user = User::where('role', 'user');
        $user->update(['role' => 'admin']);
        return response()->json([
            'status' => 200,
            'message' => 'All normal users are now an admin',
        ]);
    }
    public function BecomeAdmin($id)
    {
        $user = User::find($id);
        $user->role = "admin";
        $user->update();
        return response()->json([
            'status' => 200,
            'user' => $user,
            'message' => 'users are now an teacher',
        ]);
    }
    public function BecomeTeacher($id)
    {
        $user = User::find($id);
        $user->role = "teacher";
        $user->update();
        return response()->json([
            'status' => 200,
            'user' => $user,
            'message' => 'users are now an teacher',
        ]);
    }
    public function onLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }
        if (Auth::attempt([
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ])) {
            $user = User::where('email', $request->input('email'))->first();
            return response()->json([
                'status' => 200,
                'message' => "Login thành công!",
                'user' => $user,
            ]);
        }
        return response()->json([
            'status' => 401,
            'message' => "Login không thành công!",
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|min:3',
            'firstname' => 'required|min:3',
            'lastname' => 'required|min:3',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:3|max:32',
            'passwordAgain' => 'required|same:password',
            'phone_number' => 'required|min:3|max:11',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        }
        $user = new User;
        $user->username = $request->username;
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->phone_number = $request->phone_number;
        $user->password = bcrypt($request->password);
        $user->save();
        $data = [
            'title' => 'Welcome Message',
            'type' => 'welcome',
            'name' => "Welcome New User",
            'description' => "Have a nice experience in our website!",
        ];
        $user->notify(new SendNotification($data));
        return response()->json([
            'status' => 200,
            'message' => "Đăng kí thành công!",
        ]);
    }
    public function teacherList()
    {
        $teachers = User::where('role', 'teacher')->get();
        return response()->json([
            'teachers' => $teachers,
        ]);
    }
    public function update(Request $request, $id)
    {
        // $validator = Validator::make($request->all(), [
        //     'username' => 'required|max:191',
        //     'email' => 'required|email|max:191',
        //     'phone_number' => 'required|numberic|max:10|min:9',
        // ]);

        // if ($validator->fails()) {
        //     return response()->json([
        //         'validate_err' => $validator->messages(),
        //     ]);
        // }
        // else
        {
            $User = User::find($id);
            if ($User) {
                $User->username = $request->input('username');
                $User->email = $request->input('email');
                $User->phone_number = $request->input('phone_number');
                $User->firstname = $request->input('firstname');
                $User->lastname = $request->input('lastname');
                $User->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'User Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No User ID Found',
                ]);
            }
        }
    }
}
