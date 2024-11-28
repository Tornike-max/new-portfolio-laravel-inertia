import { useTranslation } from "react-i18next";
import Block from "./Block";

const EmailListBlock = ({ isDark }: { isDark: boolean }) => {
    const { t } = useTranslation();
    const stats = [
        {
            data: `2 ${t("year")}`,
            title: t("experience"),
        },
        {
            data: "50+",
            title: t("project"),
        },
        {
            data: "10+",
            title: t("TechnologiesMastered"),
        },
        {
            data: "500+",
            title: t("commits"),
        },
    ];
    return (
        <>
            {stats.map((stat, i) => (
                <Block
                    key={i}
                    whileHover={{
                        rotate: "2.5deg",
                        scale: 1.1,
                    }}
                    className={`col-span-6 md:col-span-3 ${
                        isDark
                            ? "bg-zinc-800 border-zinc-700"
                            : "bg-zinc-100 border-zinc-200"
                    } flex flex-col justify-center items-center gap-3`}
                >
                    <h3 className="grid h-full place-content-center text-3xl text-white">
                        {stat.data}
                    </h3>
                    <p>{stat.title}</p>
                </Block>
            ))}
        </>
    );
};

export default EmailListBlock;
