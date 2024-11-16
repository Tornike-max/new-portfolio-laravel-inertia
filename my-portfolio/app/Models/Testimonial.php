<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Testimonial extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = ['author_name', 'position', 'content', 'author_image', 'user_id'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
