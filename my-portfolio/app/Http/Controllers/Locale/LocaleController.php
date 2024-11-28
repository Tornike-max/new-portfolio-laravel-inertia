<?php

namespace App\Http\Controllers\Locale;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LocaleController extends Controller
{
    public function switchLanguage(Request $request)
    {
        $locale = $request->input('lang');

        if (in_array($locale, ['en', 'ka'])) {
            session(['locale' => $locale]);
            app()->setLocale($locale);
        }

        return redirect()->back();
    }
}
