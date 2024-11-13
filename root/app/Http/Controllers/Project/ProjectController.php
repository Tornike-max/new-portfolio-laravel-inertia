<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::query()->with('user')->where('user_id', '=', '1')->get();
        return inertia('Projects/Index', compact('projects'));
    }
}
