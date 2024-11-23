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

        $prohibitedWords = [
            // English prohibited words
            'fuck',
            'shit',
            'damn',
            'bitch',
            'ass',
            'asshole',
            'bastard',
            'crap',
            'dick',
            'pussy',
            'cunt',
            'slut',
            'whore',
            'fag',
            'jerk',
            'motherfucker',
            'goddamn',
            'blowjob',
            'tits',
            'horny',
            'gangbang',
            'anal',
            'dildo',
            'masturbate',
            'porn',

            // Georgian prohibited words
            'დედააფეთქებული',
            'ახვარი',
            'ნაბიჭვარი',
            'პიდარასტი',
            'ცენზურის მ...',
            'ბოზი',
            'მუტელი',
            'ტრაკი',
            'დედამოტყნული',
            'ყლე',
            'ყლეობაა',
            'ლაწირაკი',
            'ხეპრე',
            'უნამუსო',
            'კახპა',
            'ნაგავი',
            'ქურდი',
            'ჯაბახანა',
            'დამპალი',
            'თახსირი'
        ];

        foreach ($prohibitedWords  as $word) {
            if (str_contains($validatedData['content'], $word)) {
                $validatedData['content'] = 'This message contains inappropriate language. Please avoid using offensive words and try again';
                break;
            }
        }

        if ($validatedData['author_image']) {
            $pathName = $request->file('author_image')->store('uploads', 'public');
            $validatedData['author_image'] = $pathName;
        }

        Testimonial::create($validatedData);

        return to_route('testimonials.index');
    }
}
