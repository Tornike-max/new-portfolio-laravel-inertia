import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import kaLang from "./locales/ka/ka.json";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: enLang,
        },
        ka: {
            translation: kaLang,
        },
    },
});

export default i18n;
