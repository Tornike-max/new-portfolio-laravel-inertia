<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;
use App\Models\About;
use App\Models\Experience;
use App\Models\User;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $about = About::query()->with('user')->where('user_id', '=', 1)->first();
        $experiences = Experience::query()->with('user')->where('user_id', '=', 1)->get();

        return inertia('About/Index', compact(['about', 'experiences']));
    }
}
