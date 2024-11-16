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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function index()
    {
        $projects = ProjectResource::collection(Project::query()->with('user')->paginate(10));
        $skills = SkillResource::collection(Skill::query()->with('user')->paginate(10));
        $testimonials = TestimonialResource::collection(Testimonial::query()->with('user')->paginate(10));

        return inertia('Admin/Index', compact(['projects', 'skills', 'testimonials']));
    }

    public function createProject()
    {
        return inertia('Admin/Projects/Create');
    }

    public function storeProject(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'technologies' => 'required|string',
            'project_url' => 'required|string',
            'start_date' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5000',
            'end_date' => 'nullable'
        ]);

        if ($request->file('image')) {
            $imagePath = $request->file('image')->store('uploads', 'public');
            $validatedData['image'] = $imagePath;
        }

        $validatedData['user_id'] = Auth::user()->id;

        Project::create($validatedData);

        return to_route('admin.index');
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
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5000',
            'end_date' => 'nullable'
        ]);

        if ($request->file('image')) {
            if ($project->image) {
                Storage::delete('public/' . $project->image);
            }

            $imagePath = $request->file('image')->store('uploads', 'public');
            $validatedData['image'] = $imagePath;
        }

        $project->update($validatedData);
        return to_route('admin.project.edit', $project->id);
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

    public function createSkill(Skill $skill)
    {
        return inertia('Admin/Skills/Create');
    }

    public function storeSkill(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'level' => 'required|string'
        ]);

        $validatedData['user_id'] = Auth::user()->id;

        Skill::create($validatedData);

        return to_route('admin.index');
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

    public function createTestimonial()
    {
        return inertia('Admin/Testimonials/Create');
    }

    public function storeTestimonial(Request $request)
    {
        $validatedData = $request->validate([
            'author_name' => 'required|string',
            'content' => 'required|string',
            'position' => 'required|string',
            'author_image' => 'image|mimes:jpeg,png,jpg,gif|max:5000'
        ]);

        if ($validatedData['author_image']) {
            $imagePath = $request->file('author_image')->store('uploads', 'public');
            $validatedData['author_image'] = $imagePath;
        };

        $validatedData['user_id'] = Auth::user()->id ?? null;


        Testimonial::create($validatedData);
        return to_route('admin.index');
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
