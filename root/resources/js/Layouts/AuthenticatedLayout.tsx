import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useState } from "react";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-zinc-800 text-zinc-50">
            {/* Navigation bar */}
            <nav className="border-b border-zinc-700 bg-zinc-900">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-zinc-100" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("home")}
                                    active={route().current("home")}
                                    className="text-zinc-300 hover:text-zinc-100"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    href={route("projects.index")}
                                    active={route().current("projects.index")}
                                    className="text-zinc-300 hover:text-zinc-100"
                                >
                                    Projects
                                </NavLink>
                                <NavLink
                                    href={route("about.index")}
                                    active={route().current("about.index")}
                                    className="text-zinc-300 hover:text-zinc-100"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    href={route("testimonials.index")}
                                    active={route().current(
                                        "testimonials.index"
                                    )}
                                    className="text-zinc-300 hover:text-zinc-100"
                                >
                                    Testimonials
                                </NavLink>
                                <NavLink
                                    href={route("contact.index")}
                                    active={route().current("contact.index")}
                                    className="text-zinc-300 hover:text-zinc-100"
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>

                        {/* Mobile toggle button */}
                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        !showingNavigationDropdown
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "block"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "block"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {user?.is_admin === "admin" ? (
                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                <div className="hidden h-16 space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route("admin.index")}
                                        active={route().current("admin.index")}
                                    >
                                        Admin Panel
                                    </NavLink>
                                </div>
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-3 py-2 text-sm font-medium leading-4 text-zinc-50 transition duration-150 ease-in-out hover:text-zinc-200 focus:outline-none"
                                                >
                                                    {user?.name}

                                                    <svg
                                                        className="-me-0.5 ms-2 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a 1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                <div className="hidden h-16 space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route("login")}
                                        active={route().current("login")}
                                    >
                                        Login
                                    </NavLink>
                                </div>
                                <div className="hidden h-16 space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route("register")}
                                        active={route().current("register")}
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="space-y-1 pb-3 pt-2">
                    <ResponsiveNavLink
                        href={route("home")}
                        active={route().current("home")}
                        className="text-zinc-300 hover:text-zinc-100"
                    >
                        Home
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route("projects.index")}
                        active={route().current("projects.index")}
                        className="text-zinc-300 hover:text-zinc-100"
                    >
                        Projects
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route("about.index")}
                        active={route().current("about.index")}
                        className="text-zinc-300 hover:text-zinc-100"
                    >
                        About
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route("testimonials.index")}
                        active={route().current("testimonials.index")}
                        className="text-zinc-300 hover:text-zinc-100"
                    >
                        Testimonials
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route("contact.index")}
                        active={route().current("contact.index")}
                        className="text-zinc-300 hover:text-zinc-100"
                    >
                        Contact
                    </ResponsiveNavLink>
                </div>

                {user?.is_admin === "admin" ? (
                    <div className="border-t border-zinc-700 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-zinc-100">
                                {user?.name}
                            </div>
                            <div className="text-sm font-medium text-zinc-400">
                                {user?.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("profile.edit")}
                                className="text-zinc-300 hover:text-zinc-100"
                            >
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="text-zinc-300 hover:text-zinc-100"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                ) : (
                    <div className="border-t border-zinc-700 pb-1 pt-4">
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("login")}
                                className="text-zinc-300 hover:text-zinc-100"
                            >
                                Login
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("register")}
                                className="text-zinc-300 hover:text-zinc-100"
                            >
                                Register
                            </ResponsiveNavLink>
                        </div>
                    </div>
                )}
            </div>

            {/* Header */}
            {header && (
                <header className="bg-zinc-900 shadow">
                    <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            {/* Main content */}
            <main>{children}</main>
        </div>
    );
}
