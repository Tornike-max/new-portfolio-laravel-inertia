import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

const LanguageSwitcher = () => {
    const { t } = useTranslation();
    const { post, data, setData } = useForm({
        lang: "",
    });
    useEffect(() => {
        if (localStorage.getItem("lang")) {
            setData("lang", String(localStorage.getItem("lang")));
            i18next.changeLanguage(
                String(localStorage.getItem("lang")),
                (err, t) => {
                    if (err)
                        throw new Error(
                            "something went wrong while translating",
                            err
                        );
                }
            );
        }
    }, []);

    const handleChangeLang = (e: { target: { value: string } }) => {
        setData("lang", e.target.value);
        localStorage.setItem("lang", e.target.value);
        i18next.changeLanguage(e.target.value, (err, t) => {
            if (err)
                throw new Error("something went wrong while translating", err);
        });
    };

    return (
        <div className="flex gap-2 items-center">
            <label htmlFor="language">{t("language")}:</label>
            <select
                id="language"
                name="lang"
                onChange={handleChangeLang}
                value={data.lang}
                className="rounded border p-2 text-zinc-800"
            >
                <option value="en">English</option>
                <option value="ka">ქართული</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
