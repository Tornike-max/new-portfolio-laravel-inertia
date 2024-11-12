<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $about = About::query()->with('user')->where('user_id', '=', 1)->first();

        return inertia('Contact/Index', compact('about'));
    }
}
