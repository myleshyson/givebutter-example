<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use QodeNL\LaravelPosthog\Facades\Posthog;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Home', [
            'headerFlag' => Posthog::getFeatureFlag('main_header') === 'HeaderImageTiles'
                ? 'HeaderImageTiles'
                : 'SplitHeader'
        ]);
    }
}
