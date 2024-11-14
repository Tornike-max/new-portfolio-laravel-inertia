<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\SkillResource;
use App\Http\Resources\TestimonialResource;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $projects = ProjectResource::collection(Project::query()->with('user')->paginate(10));
        $skills = SkillResource::collection(Skill::query()->with('user')->paginate(10));
        $testimonials = TestimonialResource::collection(Testimonial::query()->with('user')->paginate(10));

        return inertia('Admin/Index', compact(['projects', 'skills', 'testimonials']));
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

    public function destroySkill(Skill $skill)
    {
        $skill->delete();
        return to_route('admin.index');
    }


    //testimonials
    public function editTestimonial(Testimonial $testimonial)
    {
        return inertia('Admin/Testimonials/Edit', [
            'testimonial' => new TestimonialResource($testimonial)
        ]);
    }

    public function updateTestimonial(Request $request, Testimonial $testimonial)
    {
        $validatedData = $request->validate([
            'author_name' => 'nullable',
            'position' => 'nullable',
            'content' => 'nullable'
        ]);

        $testimonial->update($validatedData);
        return to_route('admin.testimonial.edit', $testimonial->id);
    }

    public function destroyTestimonial(Testimonial $testimonial)
    {
        $testimonial->delete();

        return to_route('admin.index');
    }
}
