<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Course;

class Lesson extends Model
{
    use HasFactory;
    protected $table = 'lessons';
    protected $filltable = [
        'name',
        'description',
        'course_id',
        'video_link',
    ];
    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }
}
