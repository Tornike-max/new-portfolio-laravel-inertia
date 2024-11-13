<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => 1,
            'title' => fake()->name(),
            'description' => fake()->text(),
            'technologies' => 'Laravel,React,Inertia,Tailwind css',
            'project_url' => fake()->url(),
            'image' => fake()->imageUrl(),
            'start_date' => now(),
            'end_date' => now()->addDays(30),
        ];
    }
}
