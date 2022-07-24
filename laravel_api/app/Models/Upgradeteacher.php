<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UpgradeTeacher extends Model
{
    use HasFactory;
    protected $table = 'upgrade_teachers';
    protected $fillable = ['user_id', 'video_link'];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
