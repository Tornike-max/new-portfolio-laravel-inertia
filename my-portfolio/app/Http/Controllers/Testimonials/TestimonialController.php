<?php

namespace App\Http\Controllers\Testimonials;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::query()->latest()->get();
        return inertia('Testimonials/Index', compact('testimonials'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'author_name' => 'required|string|min:2',
            'position' => 'required|string|min:2',
            'content' => 'required|string|min:10',
            'author_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5000'
        ]);

        if ($validatedData['author_image']) {
            $pathName = $request->file('author_image')->store('uploads', 'public');
            $validatedData['author_image'] = $pathName;
        }

        Testimonial::create($validatedData);

        return to_route('testimonials.index');
    }
}
