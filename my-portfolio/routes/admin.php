<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/admin', [AdminController::class, 'index'])->middleware('auth')->name('admin.index');

//projects
Route::get('/admin/projects/{project}/edit', [AdminController::class, 'editProject'])->middleware('auth')->name('admin.project.edit');
Route::put('/admin/projects/edit/{project}', [AdminController::class, 'updateProject'])->middleware('auth')->name('admin.project.update');
Route::delete('/admin/projects/delete/{project}', [AdminController::class, 'destroyProject'])->middleware('auth')->name('admin.project.delete');


//skills
Route::get('/admin/skills/{skill}/edit', [AdminController::class, 'editSkill'])->middleware('auth')->name('admin.skill.edit');
Route::put('/admin/skills/update/{skill}', [AdminController::class, 'updateSkill'])->middleware('auth')->name('admin.skill.update');
Route::delete('/admin/skills/delete/{skill}', [AdminController::class, 'destroySkill'])->middleware('auth')->name('admin.skill.delete');


//testimonials
Route::get('/admin/testimonials/{testimonial}/edit', [AdminController::class, 'editTestimonial'])->middleware('auth')->name('admin.testimonial.edit');
Route::put('/admin/testimonials/update/{testimonial}', [AdminController::class, 'updateTestimonial'])->middleware('auth')->name('admin.testimonial.update');
