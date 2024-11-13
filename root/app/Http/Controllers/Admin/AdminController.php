<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $projects = Project::query()->with('user')->paginate(10);

        return inertia('Admin/Index', compact('projects'));
    }

    public function edit(Project $project)
    {

        return inertia('Admin/Projects/Edit', [
            'project' => new ProjectResource($project)
        ]);
    }

    public function update(Request $request, Project $project)
    {
        $validatedData = $request->validate([
            'title' => 'nullable',
            'description' => 'nullable',
            'technologies' => 'nullable',
            'project_url' => 'nullable',
            'start_date' => 'nullable',
            'end_date' => 'nullable'
        ]);

        $project->update($validatedData);
        return to_route('admin.project.edit', $project->id);
        dd($validatedData);
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return to_route(route('admin.index'));
    }
}
