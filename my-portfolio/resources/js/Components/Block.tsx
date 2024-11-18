// @ts-nocheck

import useToggleDarkMode from "@/context/useToggleDarkMode";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Block = ({ className, ...rest }) => {
    const { isDark } = useToggleDarkMode();
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                `col-span-4 rounded-lg border ${
                    isDark
                        ? "border-zinc-700 bg-zinc-800"
                        : "bg-zinc-100 border-zinc-200"
                }  p-6`,
                className
            )}
            {...rest}
        />
    );
};

export default Block;
