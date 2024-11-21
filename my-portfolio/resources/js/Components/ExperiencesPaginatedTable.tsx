// @ts-nocheck

import useToggleDarkMode from "@/context/useToggleDarkMode";
import { formatDate } from "@/functions/helpers";
import { Experience, ExperiencesData } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import Pagination from "./Pagination";

const ExperiencesPaginatedTable = ({
    experiencesData,
}: {
    experiencesData: ExperiencesData;
}) => {
    const { isDark } = useToggleDarkMode();
    const { delete: destroy, processing } = useForm();
    const handleDelete = (id: number) => {
        destroy(route("admin.experience.delete", id));
    };

    return (
        <>
            <h1 className="text-lg font-semibold py-2">Experiences</h1>
            <table
                className={`min-w-full text-sm text-left ${
                    isDark ? "text-zinc-50" : "text-zinc-900"
                } `}
            >
                <thead className={` ${isDark ? "bg-zinc-900" : "bg-zinc-200"}`}>
                    <tr className="w-full">
                        <th className="px-6 py-3 font-medium">ID</th>
                        <th className="px-6 py-3 font-medium">Company Name</th>
                        <th className="px-6 py-3 font-medium">Title</th>
                        <th className="px-6 py-3 font-medium">Sphere</th>
                        <th className="px-6 py-3 font-medium">Start Date</th>
                        <th className="px-6 py-3 font-medium"></th>
                    </tr>
                </thead>
                <tbody>
                    {experiencesData?.data.map((experience: Experience) => (
                        <motion.tr
                            key={experience.id}
                            className="border-t border-zinc-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <td className="px-6 py-4">{experience.id}</td>
                            <td className="px-6 py-4">
                                {experience?.company_name}
                            </td>
                            <td className="px-6 py-4">{experience?.title}</td>
                            <td className="px-6 py-4 w-[200px] cursor-pointer">
                                {experience.sphere}
                            </td>
                            <td className="px-6 py-4 w-[200px] cursor-pointer">
                                {formatDate(experience.start_date)}
                            </td>
                            <td className="px-6 py-4 flex items-center gap-1">
                                <Link
                                    href={route(
                                        "admin.experience.edit",
                                        experience.id
                                    )}
                                    className="text-blue-500 hover:text-blue-700 mr-4"
                                >
                                    Edit
                                </Link>
                                <form
                                    onSubmit={() => handleDelete(experience.id)}
                                >
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        {processing ? "Deleting..." : "Delete"}
                                    </button>
                                </form>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
            <Pagination data={experiencesData} />
        </>
    );
};

export default ExperiencesPaginatedTable;
