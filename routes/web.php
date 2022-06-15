<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/get-amadeus-access-token', function () {
  return Inertia::render('AccessToken');
});

Route::get('airports/direct-destinations', function () {
  return Inertia::render('Airports/DirectDestinations');
});

Route::get('/landing-page', function () {
  return Inertia::render('LandingPage');
});

Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
})->name('homepage');

Route::middleware(['auth', 'verified'])->group(function () {
  Route::prefix('product')->name('product.')->group(function () {
    $products = ['Flight', 'Hotel', 'Bus', 'Train', 'Ferry', 'Holiday', 'Insurance', 'Marketing'];
    foreach ($products as $product) {
      Route::get('/' . strtolower($product), function () use ($product) {
        return Inertia::render('Products/' . $product);
      })->name(strtolower($product));
    }
  });
});


require __DIR__ . '/auth.php';
