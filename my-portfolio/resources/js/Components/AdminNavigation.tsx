import useToggleDarkMode from "@/context/useToggleDarkMode";
import NavLink from "./NavLink";

const AdminNavigation = () => {
    const { isDark } = useToggleDarkMode();
    return (
        <div className="flex h-16 justify-between">
            <div className="flex">
                <div className="hidden space-x-4 sm:-my-px sm:ms-10 md:flex">
                    <NavLink
                        href={route("admin.index")}
                        active={route().current("admin.index")}
                        className={`${
                            isDark
                                ? "text-zinc-300 hover:text-zinc-100"
                                : "text-zinc-700 hover:text-zinc-900"
                        } text-zinc-300 hover:text-zinc-100`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        href={route("admin.project.index")}
                        active={route().current("admin.project.index")}
                        className={`${
                            isDark
                                ? "text-zinc-300 hover:text-zinc-100"
                                : "text-zinc-700 hover:text-zinc-900"
                        } text-zinc-300 hover:text-zinc-100`}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        href={route("admin.skills.index")}
                        active={route().current("admin.skills.index")}
                        className={`${
                            isDark
                                ? "text-zinc-300 hover:text-zinc-100"
                                : "text-zinc-700 hover:text-zinc-900"
                        } text-zinc-300 hover:text-zinc-100`}
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        href={route("admin.experiences.index")}
                        active={route().current("admin.experiences.index")}
                        className={`${
                            isDark
                                ? "text-zinc-300 hover:text-zinc-100"
                                : "text-zinc-700 hover:text-zinc-900"
                        } text-zinc-300 hover:text-zinc-100`}
                    >
                        Experiences
                    </NavLink>
                    <NavLink
                        href={route("admin.testimonials.index")}
                        active={route().current("admin.testimonials.index")}
                        className={`${
                            isDark
                                ? "text-zinc-300 hover:text-zinc-100"
                                : "text-zinc-700 hover:text-zinc-900"
                        } text-zinc-300 hover:text-zinc-100`}
                    >
                        Testimonials
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AdminNavigation;
