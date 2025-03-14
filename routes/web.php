<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;

Route::get('/{any}', [ApplicationController::class,'index'])->where('any', '.*');
