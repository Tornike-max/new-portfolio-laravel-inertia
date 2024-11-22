import Block from "./Block";

const stats = [
    {
        data: "2 Years",
        title: "Experience",
    },
    {
        data: "50+",
        title: "Projects",
    },
    {
        data: "10+",
        title: "Technologies Mastered",
    },
    {
        data: "500+",
        title: "Commits",
    },
];

const EmailListBlock = ({ isDark }: { isDark: boolean }) => (
    <>
        {stats.map((stat) => (
            <Block
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

export default EmailListBlock;
