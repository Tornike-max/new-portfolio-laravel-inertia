<?php

namespace App\Http\Controllers\Locale;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LocaleController extends Controller
{
    public function setLocale(Request $request)
    {
        $locale = $request->input('lang', 'en');
        if (in_array($locale, ['en', 'ka'])) {
            Session::put('locale', $locale);
            App::setLocale($locale);
        }

        return back();

        return back();
    }
}
