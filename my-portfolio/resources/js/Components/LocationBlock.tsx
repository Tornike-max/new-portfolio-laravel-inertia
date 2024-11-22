import React from "react";
import Block from "./Block";
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const LocationBlock = ({ isDark }: { isDark: boolean }) => (
    <Block className="col-span-12 flex flex-col items-center justify-center gap-4 md:col-span-3 group">
        <Link
            href={route("contact.index")}
            className="w-full flex justify-center items-center flex-col gap-3 cursor-pointer"
        >
            <FaPhone
                className={`text-3xl ${
                    isDark ? "text-zinc-400" : "text-zinc-800"
                } group-hover:rotate-12 duration-250 transition-all`}
            />
            <p
                className={`text-center text-lg ${
                    isDark ? "text-zinc-400" : "text-zinc-700"
                }`}
            >
                Contact
            </p>
        </Link>
    </Block>
);

export default LocationBlock;
