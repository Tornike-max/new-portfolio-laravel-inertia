<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExperienceResource;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\SkillResource;
use App\Http\Resources\TestimonialResource;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function __construct()
    {
        if (Gate::allows('is-admin')) {
            abort(401);
        }
    }
    public function index()
    {
        $projects = ProjectResource::collection(Project::query()->with('user')->get());
        $skills = SkillResource::collection(Skill::query()->with('user')->get());
        $testimonials = TestimonialResource::collection(Testimonial::query()->with('user')->get());
        $experiences = ExperienceResource::collection(experience::query()->where('user_id', '=', 1)->with('user')->get());

        return inertia('Admin/Index', compact(['projects', 'skills', 'testimonials', 'experiences']));
    }

    public function indexProjects(Request $request)
    {
        $projectsData = Project::query()->where('user_id', '=', Auth::user()->id)->with('user')->paginate(10);

        return inertia('Admin/Projects/Index', [
            'projectsData' => ProjectResource::collection($projectsData)
        ]);
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
    public function indexSkills(Request $request)
    {
        $skills = SkillResource::collection(Skill::query()->where('user_id', '=', Auth::user()->id)->with('user')->paginate(10));

        return inertia('Admin/Skills/Index', [
            'skillsData' => $skills
        ]);
    }
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

    public function indexTestimonials(Request $request)
    {
        $testimonials = TestimonialResource::collection(Testimonial::query()->with('user')->paginate(10));
        return inertia('Admin/Testimonials/Index', [
            'testimonialsData' => $testimonials
        ]);
    }
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


    //experiences
    public function indexExperiences(Request $request)
    {
        $experiencesData = ExperienceResource::collection(Experience::query()->where('user_id', '=', Auth::user()->id)->paginate(10));
        return inertia('Admin/Experiences/Index', [
            'experiencesData' => $experiencesData
        ]);
    }
    public function createExperience()
    {
        return inertia('Admin/Experiences/Create');
    }

    public function storeExperience(Request $request)
    {
        $validatedData = $request->validate([
            'company_name' => 'required|string',
            'title' => 'required|string',
            'sphere' => 'required|string',
            'start_date' => 'required',
            'end_date' => 'required'
        ]);

        $validatedData['user_id'] = Auth::user()->id;

        Experience::create($validatedData);

        return to_route('admin.index');
    }

    public function editExperience(Experience $experience)
    {
        $experienceData = new ExperienceResource($experience);

        return inertia('Admin/Experiences/Edit', [
            'experience' => $experienceData
        ]);
    }

    public function updateExperience(Request $request, Experience $experience)
    {
        $validatedData = $request->validate([
            'company_name' => 'nullable|string',
            'title' => 'nullable|string',
            'sphere' => 'nullable|string',
            'start_date' => 'nullable',
            'end_date' => 'nullable'
        ]);


        $experience->update($validatedData);
        return to_route('admin.index');
    }

    public function destroyExperience(Experience $experience)
    {
        $experience->delete();

        return to_route('admin.index');
    }
}
