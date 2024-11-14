import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { format } from "date-fns";

const Show = ({ project }: PageProps) => {
    console.log(project);

    const technologies = project?.technologies.split(",");

    return (
        <AuthenticatedLayout
            header={
                <motion.h2
                    className="text-3xl font-semibold leading-tight text-zinc-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Project: {project?.title}
                </motion.h2>
            }
        >
            <Head title="Project" />

            <div className="py-12 bg-zinc-800 min-h-screen">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <motion.div
                        className="overflow-hidden bg-zinc-900 shadow-xl sm:rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="p-8">
                            {project?.image && (
                                <motion.div
                                    className="mb-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="rounded-lg shadow-lg w-full h-96 object-cover"
                                    />
                                </motion.div>
                            )}

                            <div className="mb-6 text-lg text-zinc-300">
                                <motion.h3
                                    className="text-2xl font-semibold mb-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {project?.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {project?.description}
                                </motion.p>
                            </div>

                            <motion.div
                                className="mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-xl font-semibold text-zinc-200 mb-2">
                                    Technologies Used
                                </h4>
                                <ul className="flex flex-wrap gap-2">
                                    {technologies?.map(
                                        (tech: string, index: number) => (
                                            <motion.li
                                                key={index}
                                                className="bg-blue-500 hover:bg-blue-600 duration-150 transition-all text-white text-sm px-3 py-1 rounded-full"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.1,
                                                }}
                                            >
                                                {tech}
                                            </motion.li>
                                        )
                                    )}
                                </ul>
                            </motion.div>

                            <motion.div
                                className="mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-xl font-semibold text-zinc-200 mb-2">
                                    Project Duration
                                </h4>
                                <p className="text-sm text-zinc-400">
                                    {project?.start_date && project.start_date}-{" "}
                                    {project?.end_date && project.end_date}
                                </p>
                            </motion.div>

                            {project?.project_url && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <a
                                        href={project.project_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline hover:text-blue-300"
                                    >
                                        View Project
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;