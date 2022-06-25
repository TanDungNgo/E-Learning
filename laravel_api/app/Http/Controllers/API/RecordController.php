<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RecordController extends Controller
{
    public function index()
    {
        $records = Record::all();
        return response()->json([
            'status' => 200,
            'records' => $records,
        ]);
    }
    public function save_record(){
        $file = $_FILEs['audio-file'];
        $file_name = date('YmdHi').$file->getClientOriginalName();
        move_uploaded_file($file, public_path('audio').$file_name);
        $record = new Record;
        $record->user_id = 1;
        $record->lesson_id = 1;
        $record->path = $file_name;
        $record->save();
        return response()->json([
            'status' => 200,
            'message' => 'Record Added Successfully',
        ]);
    }
}
