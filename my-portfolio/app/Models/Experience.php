<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Experience extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = ['title', 'sphere', 'start_date', 'end_date', 'company_name', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
