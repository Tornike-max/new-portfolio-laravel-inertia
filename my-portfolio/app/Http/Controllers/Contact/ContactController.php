<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use App\Models\About;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        $about = About::query()->with('user')->where('user_id', '=', 1)->first();

        return inertia('Contact/Index', compact('about'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
            'phone' => 'required|string'
        ]);

        Mail::to('ozbetelashvilitornike2@gmail.com')->send(new SendMail($validatedData));

        return to_route('contact.index');
    }
}
