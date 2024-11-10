import React from "react";
import Block from "./Block";

const AboutBlock = () => {
    return (
        <Block className="col-span-12 text-3xl leading-snug">
            <p>
                My passion is building cool stuff.{" "}
                <span className="text-zinc-400">
                    I build primarily with React, Tailwind CSS, and Framer
                    Motion. I love this stack so much that I even built a
                    website about it. I've made over a hundred videos on the
                    subject across YouTube and TikTok.
                </span>
            </p>
        </Block>
    );
};

export default AboutBlock;
