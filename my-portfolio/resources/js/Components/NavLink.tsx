import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-red-500 text-zinc-100 focus:border-indigo-700"
                    : "border-transparent text-zinc-300 hover:border-red-400 hover:text-zinc-200 focus:border-gray-300 focus:text-zinc-300") +
                className
            }
        >
            {children}
        </Link>
    );
}
