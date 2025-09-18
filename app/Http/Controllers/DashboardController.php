<?php

namespace App\Http\Controllers;

use App\Models\ListingContact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $propData[] = [];

        return Inertia::render('Dashboard', compact('propData'));
    }
}
