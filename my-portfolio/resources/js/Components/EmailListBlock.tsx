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
    <Block className="col-span-12 md:col-span-9">
        <div className="w-full mx-auto px-4 md:px-8">
            <ul className="flex flex-col gap-8 items-center justify-center sm:flex-row">
                {stats.map((item, idx) => (
                    <li
                        key={idx}
                        className={`w-full text-center border hover:scale-105 hover:rotate-2 duration-250 transition-all ${
                            isDark
                                ? "bg-zinc-800 border-zinc-700"
                                : "bg-zinc-100 border-zinc-200"
                        } px-12 py-4 rounded-lg sm:w-auto shadow-lg hover:shadow-2xl`}
                    >
                        <h4
                            className={`text-4xl ${
                                isDark ? "text-zinc-200" : "text-zinc-800"
                            } font-semibold`}
                        >
                            {item.data}
                        </h4>
                        <p
                            className={`mt-3 ${
                                isDark ? "text-zinc-400" : "text-zinc-500"
                            }  font-medium`}
                        >
                            {item.title}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </Block>
);

export default EmailListBlock;
