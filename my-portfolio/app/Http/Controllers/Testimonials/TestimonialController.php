<?php

namespace App\Http\Controllers\Testimonials;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::query()->latest()->get();
        return inertia('Testimonials/Index', compact('testimonials'));
    }
}
