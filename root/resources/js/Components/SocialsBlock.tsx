import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import Block from "./Block";

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-indigo-500 hover:bg-indigo-600  md:col-span-3"
        >
            <a
                href="https://www.linkedin.com/in/tornike-ozbetelashvili-1732b2205/"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiLinkedin />
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
                href="https://github.com/Tornike-max"
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
                href="https://www.instagram.com/ozbeta_25/"
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
                href="https://www.facebook.com/tornike.ozbetelashvili"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <FaFacebookF />
            </a>
        </Block>
    </>
);

export default SocialsBlock;
