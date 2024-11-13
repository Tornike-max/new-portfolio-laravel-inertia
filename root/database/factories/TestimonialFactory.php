<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'author_name' => fake()->name(),
            'position' => fake()->randomElement([
                'Software Developer',
                'Project Manager',
                'CEO',
                'Marketing Specialist',
                'Graphic Designer'
            ]),
            'content' => fake()->text(),
            'author_image' => fake()->imageUrl()
        ];
    }
}
