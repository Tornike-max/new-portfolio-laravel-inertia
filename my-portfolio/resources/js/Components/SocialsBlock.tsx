import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiGithub, SiYoutube } from "react-icons/si";
import Block from "./Block";

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-red-500 hover:bg-red-600  md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiYoutube />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-green-500 hover:bg-green-600  md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiGithub />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-purple-500 hover:bg-purple-600  md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <FaInstagram />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-500 hover:bg-blue-600 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <FaFacebookF />
            </a>
        </Block>
    </>
);

export default SocialsBlock;
