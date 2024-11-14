<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\SkillResource;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $projects = ProjectResource::collection(Project::query()->with('user')->paginate(10));
        $skills = SkillResource::collection(Skill::query()->with('user')->paginate(10));

        return inertia('Admin/Index', compact(['projects', 'skills']));
    }


    //project actions
    public function editProject(Project $project)
    {

        return inertia('Admin/Projects/Edit', [
            'project' => new ProjectResource($project)
        ]);
    }

    public function updateProject(Request $request, Project $project)
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

    public function destroyProject(Project $project)
    {
        $project->delete();
        return to_route(route('admin.index'));
    }


    //skill actions
    public function editSkill(Skill $skill)
    {
        return inertia('Admin/Skills/Edit', compact('skill'));
    }

    public function updateSkill(Request $request, Skill $skill)
    {
        $validatedData = $request->validate([
            'name' => 'nullable',
            'level' => 'nullable',

        ]);

        $skill->update($validatedData);
        return to_route('admin.skill.edit', $skill->id);
    }
}
