import useToggleDarkMode from "@/context/useToggleDarkMode";
import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    const { isDark } = useToggleDarkMode();
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? `border-red-500 ${
                          isDark ? "text-zinc-100" : "text-zinc-800"
                      }  focus:border-indigo-700`
                    : `border-transparent ${
                          isDark
                              ? "text-zinc-300 hover:border-red-400 hover:text-zinc-200 focus:border-gray-300 focus:text-zinc-300"
                              : "text-zinc-800 hover:border-red-500 hover:text-zinc-900 focus:border-gray-800 focus:text-zinc-900"
                      } `) +
                className
            }
        >
            {children}
        </Link>
    );
}
