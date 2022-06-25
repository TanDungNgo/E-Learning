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

            return response()->json([
                'status' => 200,
                'message' => "Login thành công!",
            ]);
        }
        return response()->json([
            'status' => 401,
            'message' => "Login không thành công!",
        ]);
    }
}
