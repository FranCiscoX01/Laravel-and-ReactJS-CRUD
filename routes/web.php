<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('animals/show', 'AnimalsController@GetAnimals');
Route::post('animals/create', 'AnimalsController@create');
Route::delete('animals/delete/{id}', 'AnimalsController@delete');
Route::get('animals/edit/{id}', 'AnimalsController@editAnimal');
Route::put('animals/update/{id}', 'AnimalsController@update');
