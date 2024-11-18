import useToggleDarkMode from "@/context/useToggleDarkMode";
import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    const { isDark } = useToggleDarkMode();
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? isDark
                        ? "text-zinc-100 border-indigo-400 bg-zinc-800 focus:border-indigo-500 focus:bg-zinc-700 focus:text-zinc-100"
                        : "text-zinc-800 border-indigo-400 bg-indigo-50 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800"
                    : isDark
                    ? "border-transparent text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-100 focus:border-zinc-600 focus:bg-zinc-900 focus:text-zinc-100"
                    : "border-transparent text-zinc-700 hover:border-gray-300 hover:bg-gray-50 hover:text-zincs-800 focus:border-gray-300 focus:bg-zinc-50 focus:text-zinc-800"
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
