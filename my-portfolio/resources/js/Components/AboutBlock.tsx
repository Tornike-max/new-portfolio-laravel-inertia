import { About, PageProps } from "@/types";
import Block from "./Block";

const AboutBlock = ({
    about,
    isDark,
}: {
    about: About | undefined;
    isDark: boolean;
}) => {
    return (
        <Block className="col-span-12 text-3xl leading-snug">
            <p>
                <span className={`${isDark ? "text-white" : "text-black"}`}>
                    My passion is building cool stuff.
                </span>{" "}
                <span
                    className={`${isDark ? "text-zinc-400" : "text-zinc-800"}`}
                >
                    {about?.about}
                </span>
            </p>
        </Block>
    );
};

export default AboutBlock;
