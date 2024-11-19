<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $projects = null;
        if ($request->has('query')) {
            $validatedData = $request->validate([
                'query' => 'required|string|min:2'
            ]);
            $projects = Project::query()->with('user')->where('user_id', '=', '1')->where('title', 'like', '%' . $validatedData['query'] . '%')->get();
        } else {
            $projects = Project::query()->with('user')->where('user_id', '=', '1')->get();
        }
        return inertia('Projects/Index', compact('projects'));
    }

    public function show(Project $project)
    {
        return inertia('Projects/Show', [
            'project' => new ProjectResource($project)
        ]);
    }
}
