import { FiArrowRight } from "react-icons/fi";
import Block from "./Block";

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            Hi, I'm Tom.{" "}
            <span className="text-zinc-400">
                I build cool websites like this one.
            </span>
        </h1>
        <a
            href="#"
            className="flex items-center gap-1 text-red-300 hover:underline"
        >
            Contact me <FiArrowRight />
        </a>
    </Block>
);

export default HeaderBlock;
