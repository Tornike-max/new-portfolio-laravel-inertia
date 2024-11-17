<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/admin', [AdminController::class, 'index'])->middleware('auth')->name('admin.index');

//projects
Route::get('/admin/projects/{project}/edit', [AdminController::class, 'editProject'])->middleware('auth')->name('admin.project.edit');
Route::get('/admin/projects/create', [AdminController::class, 'createProject'])->middleware('auth')->name('admin.project.create');
Route::post('/admin/projects/store', [AdminController::class, 'storeProject'])->middleware('auth')->name('admin.project.store');
Route::put('/admin/projects/edit/{project}', [AdminController::class, 'updateProject'])->middleware('auth')->name('admin.project.update');
Route::delete('/admin/projects/delete/{project}', [AdminController::class, 'destroyProject'])->middleware('auth')->name('admin.project.delete');


//skills
Route::get('/admin/skills/{skill}/edit', [AdminController::class, 'editSkill'])->middleware('auth')->name('admin.skill.edit');
Route::get('/admin/skills/create', [AdminController::class, 'createSkill'])->middleware('auth')->name('admin.skill.create');
Route::post('/admin/skills/store', [AdminController::class, 'storeSkill'])->middleware('auth')->name('admin.skill.store');
Route::put('/admin/skills/update/{skill}', [AdminController::class, 'updateSkill'])->middleware('auth')->name('admin.skill.update');
Route::delete('/admin/skills/delete/{skill}', [AdminController::class, 'destroySkill'])->middleware('auth')->name('admin.skill.delete');


//testimonials
Route::get('/admin/testimonials/{testimonial}/edit', [AdminController::class, 'editTestimonial'])->middleware('auth')->name('admin.testimonial.edit');
Route::get('/admin/testimonials/create', [AdminController::class, 'createTestimonial'])->middleware('auth')->name('admin.testimonial.create');
Route::post('/admin/testimonials/store', [AdminController::class, 'storeTestimonial'])->middleware('auth')->name('admin.testimonial.store');
Route::put('/admin/testimonials/update/{testimonial}', [AdminController::class, 'updateTestimonial'])->middleware('auth')->name('admin.testimonial.update');
Route::delete('/admin/testimonials/delete/{testimonial}', [AdminController::class, 'destroyTestimonial'])->middleware('auth')->name('admin.testimonial.delete');


Route::get('/admin/experiences/{experience}/edit', [AdminController::class, 'editExperience'])->middleware('auth')->name('admin.experience.edit');
Route::get('/admin/experiences/create', [AdminController::class, 'createExperience'])->middleware('auth')->name('admin.experience.create');
Route::post('/admin/experiences/store', [AdminController::class, 'storeExperience'])->middleware('auth')->name('admin.experience.store');
Route::put('/admin/experiences/update/{experience}', [AdminController::class, 'updateExperience'])->middleware('auth')->name('admin.experience.update');
Route::delete('/admin/experiences/delete/{experience}', [AdminController::class, 'destroyExperience'])->middleware('auth')->name('admin.experience.delete');
