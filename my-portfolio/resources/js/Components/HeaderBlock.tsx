import { FiArrowRight } from "react-icons/fi";
import Block from "./Block";
import { Link } from "@inertiajs/react";

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            Hi, I'm Tornike.{" "}
            <span className="text-zinc-400">
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
