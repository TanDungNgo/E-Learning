<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Lesson;

class Course extends Model
{
    use HasFactory;
    protected $table = 'courses';
    protected $filltable = [
        'name',
        'description',
        'price',
    ];
    public function teacher_id()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function lessons()
    {
        return $this->hasMany(Lesson::class, 'course_id');
    }
    public function students()
    {
        return $this->belongsToMany(Student::class, 'course_id');
    }
}
