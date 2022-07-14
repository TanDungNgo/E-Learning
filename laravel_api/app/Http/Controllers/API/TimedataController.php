<?php

namespace App\Http\Controllers\API;
use App\Models\Record;
use App\Models\Lesson;
use App\Models\Timedata;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TimedataController extends Controller
{
    public function index($id)
    {
        $lesson = Lesson::find($id);
        $time = DB::table('timedatas')->where('lesson_id',$id)->get();
        return response()->json([
            'status' => 200,
            'lesson' => $lesson,
            'time' => $time,
        ]);
    }
    public function save_timedata(Request $request){
        $time = new Timedata;
        $time->lesson_id = $request->input('lesson_id');
        $time->minute = $request->input('minute');
        $time->second = $request->input('second');
        $time->save();
        return response()->json([
            'status' => 200,
            'message' => 'Timedata Saved Successfully',
        ]);
    }
    public function update(Request $request, $id)
    {
        $time = Timedata::find($id);
        if($time)
        {
            $time->minute = $request->input('minute');
            $time->second = $request->input('second');
            $time->update();
            return response()->json([
                'status' => 200,
                'message' => 'Updated Successfully',
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'No Student ID Found',
            ]);
        }
    }
    public function destroy($id)
    {
        $time = Timedata::find($id);
        $time->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Deleted Successfully',
        ]);
    }

}
