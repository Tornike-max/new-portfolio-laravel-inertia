import { About, PageProps } from "@/types";
import Block from "./Block";
import { useTranslation } from "react-i18next";

const AboutBlock = ({
    about,
    isDark,
}: {
    about: About | undefined;
    isDark: boolean;
}) => {
    const { t } = useTranslation();
    return (
        <Block className="col-span-12 text-3xl leading-snug">
            <p>
                <span className={`${isDark ? "text-white" : "text-black"}`}>
                    {t("aboutTitle")}
                </span>{" "}
                <span
                    className={`${isDark ? "text-zinc-400" : "text-zinc-800"}`}
                >
                    {t("aboutContent")}
                </span>
            </p>
        </Block>
    );
};

export default AboutBlock;
