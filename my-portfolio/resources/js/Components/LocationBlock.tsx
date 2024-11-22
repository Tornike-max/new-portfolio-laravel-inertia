import Block from "./Block";
import {
    FaInfo,
    FaPhone,
    FaProjectDiagram,
    FaQuestion,
    FaQuoteLeft,
    FaQuoteRight,
} from "react-icons/fa";
import { Link } from "@inertiajs/react";
import { Tooltip } from "@nextui-org/react";
import { color } from "framer-motion";

const LocationBlock = ({ isDark }: { isDark: boolean }) => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <div className="w-full grid grid-cols-2 gap-4">
            <Tooltip content={"Projects"} className="capitalize">
                <Link
                    href={route("projects.index")}
                    className="w-full flex justify-center items-center flex-col gap-3 cursor-pointer border border-zinc-700 rounded-lg p-4"
                >
                    <FaProjectDiagram
                        className={`text-3xl ${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                        }  duration-250 transition-all`}
                    />
                    <p
                        className={`text-center text-lg ${
                            isDark ? "text-zinc-100" : "text-zinc-700"
                        }`}
                    >
                        Projects
                    </p>
                </Link>
            </Tooltip>
            <Tooltip content={"About"} className="capitalize">
                <Link
                    href={route("about.index")}
                    className="w-full flex justify-center items-center flex-col gap-3 cursor-pointer border border-zinc-700 rounded-lg p-4"
                >
                    <FaInfo
                        className={`text-3xl ${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                        }  duration-250 transition-all`}
                    />
                    <p
                        className={`text-center text-lg ${
                            isDark ? "text-zinc-100" : "text-zinc-700"
                        }`}
                    >
                        About
                    </p>
                </Link>
            </Tooltip>
            <Tooltip content={"Testimonials"} className="capitalize">
                <Link
                    href={route("testimonials.index")}
                    className="w-full flex justify-center items-center flex-col gap-3 cursor-pointer border border-zinc-700 rounded-lg p-4"
                >
                    <FaQuoteLeft
                        className={`text-3xl ${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                        }  duration-250 transition-all`}
                    />
                    <p
                        className={`text-center text-lg ${
                            isDark ? "text-zinc-100" : "text-zinc-700"
                        }`}
                    >
                        Testimonials
                    </p>
                </Link>
            </Tooltip>
            <Tooltip content={"Contact"} className="capitalize">
                <Link
                    href={route("contact.index")}
                    className="w-full flex justify-center items-center flex-col gap-3 cursor-pointer border border-zinc-700 rounded-lg p-4"
                >
                    <FaPhone
                        className={`text-3xl ${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                        }  duration-250 transition-all`}
                    />
                    <p
                        className={`text-center text-lg ${
                            isDark ? "text-zinc-100" : "text-zinc-700"
                        }`}
                    >
                        Contact
                    </p>
                </Link>
            </Tooltip>
        </div>
    </Block>
);

export default LocationBlock;
