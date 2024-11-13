<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $myData = User::query()->with(['skills', 'about'])->where('id', '=', 1)->first();

        return inertia('Dashboard', [
            'myData' => new UserResource($myData)
        ]);
    }
}
