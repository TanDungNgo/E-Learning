<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Lesson;


class Feedback extends Model
{
    use HasFactory;
    protected $fillable = ['body'];
}
