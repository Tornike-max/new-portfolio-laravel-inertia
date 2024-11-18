import { ContextTypes } from "@/types";
import { createContext, useState } from "react";

const defaultValues = {
    toggleDarkMode: () => {},
    isDark: false,
};

export const DarkModeContext = createContext<ContextTypes | null>(
    defaultValues
);

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(true);
    const toggleDarkMode = () => {
        setIsDark((dark) => !dark);
    };
    const values = {
        toggleDarkMode: toggleDarkMode,
        isDark: isDark,
    };
    return (
        <DarkModeContext.Provider value={values}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;
