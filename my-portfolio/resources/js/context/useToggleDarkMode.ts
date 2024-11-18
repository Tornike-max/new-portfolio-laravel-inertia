import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const useToggleDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context)
        throw new Error(
            "You can't use context outside of the parent context scope"
        );

    return context;
};

export default useToggleDarkMode;
