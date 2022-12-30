<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkoutsController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/get/workout/list',
    [WorkoutsController::class, 'getWorkoutList'])->name('workout.list');
Route::post('/create/workout',
    [WorkoutsController::class, 'createWorkout'])->name('workout.create');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
