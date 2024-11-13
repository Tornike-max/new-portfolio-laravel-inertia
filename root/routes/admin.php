<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/admin', [AdminController::class, 'index'])->middleware('auth')->name('admin.index');
Route::get('/admin/projects/{project}/edit', [AdminController::class, 'edit'])->middleware('auth')->name('admin.project.edit');
Route::put('/admin/projects/edit/{project}', [AdminController::class, 'update'])->middleware('auth')->name('admin.project.update');
Route::delete('/admin/projects/delete/{project}', [AdminController::class, 'destroy'])->middleware('auth')->name('admin.project.delete');
