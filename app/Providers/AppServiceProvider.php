<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Inertia::share([
            'base_url' => config('app.url'),
            'app_name' => config('app.name'),
            'config.app' => config('app'),
            'auth' => function () {
                return [
                    'user' => auth()->user(),
                ];
            },
            'session' => fn () => [
                'success' => session('success'),
                'error' => session('error'),
            ],
            'errors' => function () {
                return session('errors') ? session('errors')->getBag('default')->getMessages() : [];
            },
        ]);
    }
}
