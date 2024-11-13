<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::query()->with('user')->where('user_id', '=', '1')->get();
        return inertia('Projects/Index', compact('projects'));
    }

    public function show(Project $project)
    {
        return inertia('Projects/Show', [
            'project' => new ProjectResource($project)
        ]);
    }
}
