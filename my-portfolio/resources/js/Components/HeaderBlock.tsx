import { FiArrowRight } from "react-icons/fi";
import Block from "./Block";
import { Link } from "@inertiajs/react";
import useToggleDarkMode from "@/context/useToggleDarkMode";

const HeaderBlock = ({ isDark }: { isDark: boolean }) => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            <span className={`${isDark ? "text-white" : "text-black"}`}>
                Hi, I'm Tornike.
            </span>{" "}
            <span className={`${isDark ? "text-zinc-400" : "text-zinc-700"}`}>
                I build full stack applications.
            </span>
        </h1>
        <Link
            href={route("contact.index")}
            className="flex items-center gap-1 text-red-400 hover:text-red-500 hover:underline"
        >
            Contact me <FiArrowRight />
        </Link>
    </Block>
);

export default HeaderBlock;
