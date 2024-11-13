<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $myData = User::query()->with('skills')->where('id', '=', 1)->first();

        return inertia('Dashboard', compact('myData'));
    }
}
