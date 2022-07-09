<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
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
            'passwordAgain' => 'required|same:password'
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
        //$user->phone_number = $request->phone_number;
        $user->password = bcrypt($request->password);
        $user->save();
        return response()->json([
            'status' => 200,
            'message' => "Đăng kí thành công!",
        ]);
    }
}
