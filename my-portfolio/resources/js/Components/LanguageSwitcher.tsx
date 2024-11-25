import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";

const LanguageSwitcher = () => {
    const {
        t,
        tChoice,
        currentLocale,
        setLocale,
        getLocales,
        isLocale,
        loading,
    } = useLaravelReactI18n();

    const handleChangeLang = (e: { target: { value: unknown } }) => {
        setLocale(String(e.target.value));
        // post(route("set-locale"));
    };

    console.log(getLocales());

    return (
        <div className="flex gap-2 items-center">
            <label htmlFor="language">{t("language")}:</label>
            <select
                id="language"
                onChange={handleChangeLang}
                className="rounded border p-2"
            >
                <option value="en">English</option>
                <option value="ka">ქართული</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
