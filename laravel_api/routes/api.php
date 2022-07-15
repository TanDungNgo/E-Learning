<?php
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\CourseController;
use App\Http\Controllers\API\LessonController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\RecordController;
use App\Http\Controllers\API\FeedbackController;
use App\Http\Controllers\API\TimedataController;
use App\Http\Controllers\API\UpgradeTeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\SendNotificationController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/students', [StudentController::class, 'index']);

Route::post('/add-student', [StudentController::class, 'store']);

Route::get('/edit-student/{id}', [StudentController::class, 'edit']);

Route::put('/update-student/{id}', [StudentController::class, 'update']);

Route::delete('/delete-student/{id}', [StudentController::class, 'destroy']);

// Course

Route::get('/courses', [CourseController::class, 'index']);

Route::post('/add-course', [CourseController::class, 'store']);

Route::get('/edit-course/{id}', [CourseController::class, 'edit']);

Route::put('/update-course/{id}', [CourseController::class, 'update']);

Route::delete('/delete-course/{id}', [CourseController::class, 'destroy']);

//phê duyệt khóa học (role==admin)
Route::get('/pending-course', [CourseController::class, 'PendingCourse']);
Route::put('/approve-pending-course/{id}', [CourseController::class, 'ApprovePendingCourse']);

// Lesson
Route::get('/lessons/{id}', [LessonController::class, 'index']);
Route::post('/add-lesson', [LessonController::class, 'store']);
Route::delete('/delete-lesson/{id}', [LessonController::class, 'destroy']);
Route::get('/edit-lesson/{id}', [LessonController::class, 'edit']);
Route::put('/update-lesson/{id}', [LessonController::class, 'update']);
Route::post('/update-video/{id}', [LessonController::class, 'updatevideo']);

//phê duyệt bài học (role==admin)
Route::get('/pending-lesson', [LessonController::class, 'PendingLesson']);
Route::put('/approve-pending-lesson/{id}', [LessonController::class, 'ApprovePendingLesson']);

// User
Route::post('/users/login', [UserController::class, 'onLogin']);
Route::post('/users/register', [UserController::class, 'register']);
Route::post('/users/update/{id}', [UserController::class, 'update']);

/// Teacher List
Route::get('/teacher-list', [UserController::class, 'teacherList']);


// Feedback
Route::get('/feedback/{id}', [FeedbackController::class, 'index']);
Route::post('/save-feedback', [FeedbackController::class, 'save_feedback']);
Route::get('/see-feedback/{id}', [FeedbackController::class, 'see_feedback']);


// Upgrade Teacher
Route::get('/admin/all-request-become-teacher', [UpgradeTeacherController::class, 'index']);
Route::post('/request-to-become-teacher', [UpgradeTeacherController::class, 'RequestBecomeTeacher']);
    //See Notification
Route::get('/see-notification', [SendNotificationController::class, 'NotifyUpgrateToTeacher']);
//accept request
Route::put('admin/approve-request-become-teacher/{id}', [UpgradeTeacherController::class, 'approve_request_become_teacher']);
//reject request
Route::put('admin/reject-request-become-teacher/{id}', [UpgradeTeacherController::class, 'reject_request_become_teacher']);
Route::get('/popular-courses', [CourseController::class, 'popular_courses']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// save audio-record
Route::post('/save-audio-record', [RecordController::class, 'save_audio_record']);
Route::get('/records/{id}', [RecordController::class, 'index']);

// save timedata
Route::post('/save-timedata', [TimedataController::class, 'save_timedata']);
Route::get('/timedata/{id}', [TimedataController::class, 'index']);
Route::put('/update-timedata/{id}', [TimedataController::class, 'update']);
