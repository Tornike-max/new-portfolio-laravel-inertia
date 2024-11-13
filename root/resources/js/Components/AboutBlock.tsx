import { About, PageProps } from "@/types";
import Block from "./Block";

const AboutBlock = ({ about }: { about: About | undefined }) => {
    return (
        <Block className="col-span-12 text-3xl leading-snug">
            <p>
                My passion is building cool stuff.
                <span className="text-zinc-400">{about?.about}</span>
            </p>
        </Block>
    );
};

export default AboutBlock;
