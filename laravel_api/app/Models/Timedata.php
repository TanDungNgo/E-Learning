<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timedata extends Model
{
    use HasFactory;
    protected $table = 'timedatas';
    protected $fillable = ['minute', 'second'];
}
