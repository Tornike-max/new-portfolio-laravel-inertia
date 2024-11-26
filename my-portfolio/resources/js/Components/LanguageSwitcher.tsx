import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LanguageSwitcher = () => {
    const { t } = useTranslation();

    const handleChangeLang = (e: { target: { value: string } }) => {
        i18next.changeLanguage(e.target.value, (err, t) => {
            if (err)
                throw new Error("something went wrong while translating", err);
        });
    };

    console.log(t("language"));

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
