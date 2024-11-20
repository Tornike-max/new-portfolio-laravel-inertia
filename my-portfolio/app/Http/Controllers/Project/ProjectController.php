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
            $projects = ProjectResource::collection(Project::query()->with('user')->where('user_id', '=', '1')->where('title', 'like', '%' . $validatedData['query'] . '%')->paginate(4));
        } else {
            $projects = ProjectResource::collection(Project::query()->with('user')->where('user_id', '=', '1')->paginate(4));
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
