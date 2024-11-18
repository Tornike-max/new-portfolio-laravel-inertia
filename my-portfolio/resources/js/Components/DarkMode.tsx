import { useState } from "react";
import SliderToggle from "./SliderToggle";
import useToggleDarkMode from "@/context/useToggleDarkMode";

const DarkMode = () => {
    const { isDark, toggleDarkMode } = useToggleDarkMode();
    return (
        <div className={`grid place-content-center px-4 transition-colors`}>
            <SliderToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
        </div>
    );
};

export default DarkMode;
