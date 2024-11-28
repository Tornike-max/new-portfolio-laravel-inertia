import useToggleDarkMode from "@/context/useToggleDarkMode";
import { formatYear } from "@/functions/helpers";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Experience, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Key } from "react";
import { useTranslation } from "react-i18next";

const Index = ({ auth, about, experiences }: PageProps) => {
    const { isDark } = useToggleDarkMode();
    const { t } = useTranslation();
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    {t("aboutMe")}
                </h2>
            }
        >
            <Head title={t("aboutMe")} />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <motion.div
                        className={`overflow-hidden   shadow-sm rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div
                            className={`p-8 w-full flex flex-col sm:flex-row gap-8 ${
                                isDark ? "bg-zinc-900" : "bg-zinc-200"
                            }  rounded-lg shadow-lg`}
                        >
                            <motion.div
                                className="relative w-full sm:w-[400px] lg:w-[500px] xl:w-[600px]"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src="./images/my-image.jpg"
                                    alt="image"
                                    className="w-full h-auto rounded-tl-none rounded-tr-[100px] rounded-br-none rounded-bl-[40px] shadow-md"
                                />
                                <div className="absolute top-0 lg:top-6 sm:top-8 -right-[180px] sm:-right-[100px] md:-right-[105px] lg:-right-[180px] xl:-right-[230px] flex items-center justify-center h-full">
                                    <h1 className="transform -rotate-90 text-4xl sm:text-xl lg:text-4xl xl:text-5xl font-extrabold text-zinc-600 tracking-widest">
                                        <span>{about?.user?.name}</span>
                                        <span>{about?.user.lastName}</span>
                                    </h1>
                                </div>
                            </motion.div>

                            <div className="flex flex-col gap-4 w-full lg:w-[700px]">
                                <h1
                                    className={`${
                                        isDark
                                            ? "text-zinc-100"
                                            : "text-zinc-900"
                                    }  text-sm sm:text-base md:text-xl lg:text-2xl font-semibold leading-relaxed`}
                                >
                                    Hi! {about?.about}
                                </h1>
                                {experiences?.map((experience: Experience) => (
                                    <ListItem
                                        key={experience.id}
                                        experience={experience}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;

const ListItem = ({ experience }: { experience: any }) => {
    const { isDark } = useToggleDarkMode();
    return (
        <motion.div
            className={`w-full flex flex-col gap-4 ${
                isDark ? "bg-zinc-800" : "bg-zinc-100"
            }  p-4 rounded-lg shadow-md`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full flex justify-between items-center">
                <div className="w-full flex flex-col gap-1">
                    <h3
                        className={`${
                            isDark ? "text-zinc-100" : "text-zinc-900"
                        } text-sm sm:text-base md:text-lg lg:text-xl font-bold`}
                    >
                        {experience?.sphere}
                    </h3>
                    <p
                        className={`${
                            isDark ? "text-zinc-400" : "text-zinc-600"
                        } text-xs sm:text-sm md:text-base`}
                    >
                        {experience?.title}
                    </p>
                </div>
                <h3 className="text-zinc-500 text-sm sm:text-base md:text-lg text-nowrap">
                    {formatYear(experience?.start_date)} -{" "}
                    {formatYear(experience?.end_date) || "Ongoing"}
                </h3>
            </div>
        </motion.div>
    );
};
