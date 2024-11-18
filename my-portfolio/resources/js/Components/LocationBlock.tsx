import React from "react";
import Block from "./Block";
import { FiMapPin } from "react-icons/fi";

const LocationBlock = ({ isDark }: { isDark: boolean }) => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
        <FiMapPin
            className={`text-3xl ${isDark ? "text-zinc-400" : "text-zinc-800"}`}
        />
        <p
            className={`text-center text-lg ${
                isDark ? "text-zinc-400" : "text-zinc-700"
            } `}
        >
            Cyberspace
        </p>
    </Block>
);

export default LocationBlock;
