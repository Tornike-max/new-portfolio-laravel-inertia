import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { useForm } from "@inertiajs/react";

const LanguageSwitcher = () => {
    const { t } = useTranslation();
    const { setLocale, currentLocale } = useLaravelReactI18n();
    const { post, data, setData } = useForm({
        lang: currentLocale(),
    });
    const handleChangeLang = (e: { target: { value: string } }) => {
        // const locale = e.target.value;
        // setLocale(locale);

        // setData("lang", locale);
        // post(route("language.switch"));
        setData("lang", e.target.value);
        i18next.changeLanguage(e.target.value, (err, t) => {
            if (err)
                throw new Error("something went wrong while translating", err);
        });
    };

    console.log(data.lang);

    return (
        <div className="flex gap-2 items-center">
            <label htmlFor="language">{t("language")}:</label>
            <select
                id="language"
                name="lang"
                onChange={handleChangeLang}
                value={data.lang}
                className="rounded border p-2"
            >
                <option value="en">English</option>
                <option value="ka">ქართული</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
