import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import DarkModeProvider from "./context/DarkModeContext";
import { NextUIProvider } from "@nextui-org/react";
import { LaravelReactI18nProvider } from "laravel-react-i18n";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <LaravelReactI18nProvider
                locale={"en"}
                fallbackLocale={"en"}
                files={import.meta.glob("/lang/*.json")}
            >
                <DarkModeProvider>
                    <NextUIProvider>
                        <App {...props} />
                    </NextUIProvider>
                </DarkModeProvider>
            </LaravelReactI18nProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
