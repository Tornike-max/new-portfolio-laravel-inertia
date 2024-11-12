<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ExperienceFactory extends Factory
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
            'company_name' => fake()->company(),
            'title' => fake()->jobTitle(),
            'sphere' => fake()->word(),
            'start_date' => fake()->date(),
            'end_date' => fake()->date(),
        ];
    }
}