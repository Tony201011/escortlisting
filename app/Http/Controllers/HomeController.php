<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    protected $cacheTime = (3600 * 24);

    public function index()
    {
        $propData = [];
        return Inertia::render('Home', compact('propData'));
    }
}
