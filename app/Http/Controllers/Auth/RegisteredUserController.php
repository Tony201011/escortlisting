<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults(), 'min:8'],
            'phone' => ['required'],
            'suburb' => ['required'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'suburb' => $request->suburb,
            'city' => $request->city,
            'state' => $request->state,
            'zipcode' => $request->zipcode,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'eighteenplus' => $request->eighteenplus ?? 0,
        ]);

        event(new Registered($user));
        // Auth::login($user);
        // return redirect(route('dashboard', absolute: false));
        return redirect(route('home', absolute: false))->with('success', 'Registration successful! Please log in to continue.');
    }
}
