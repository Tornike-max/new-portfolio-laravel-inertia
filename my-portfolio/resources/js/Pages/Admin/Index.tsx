// @ts-nocheck

import AdminNavigation from "@/Components/AdminNavigation";
import CreateActions from "@/Components/CreateActions";
import ExperiencesTable from "@/Components/ExperiencesTable";
import ProjectsTable from "@/Components/ProjectsTable";
import SkillsTable from "@/Components/SkillsTable";
import TestimonialsTable from "@/Components/TestimonialsTable";
import useToggleDarkMode from "@/context/useToggleDarkMode";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Project } from "@/types";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

const Index = ({ projects, skills, testimonials, experiences }: PageProps) => {
    const { isDark } = useToggleDarkMode();
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    Admin Panel
                </h2>
            }
        >
            <Head title="Admin-Panel" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8 space-y-2">
                    <motion.div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-300"
                        }  shadow-sm sm:rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div
                                className={`overflow-x-auto ${
                                    isDark ? "bg-zinc-800" : "bg-zinc-200"
                                } p-4 rounded-lg grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono`}
                            >
                                <div className="flex justify-center items-center rounded-lg bg-blue-600 py-4 px-6 hover:-rotate-1 duration-250 transition-all">
                                    <div
                                        className={`w-full flex justify-center items-center flex-col gap-2 text-zinc-100`}
                                    >
                                        <h2 className="text-base md:text-lg lg:text-xl">
                                            Projects Created
                                        </h2>
                                        <p className="text-sm md:text-base lg:text-lg ">
                                            {projects?.data?.length}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center rounded-lg bg-green-600 py-4 px-6 hover:-rotate-1 duration-250 transition-all">
                                    <div
                                        className={`w-full flex justify-center items-center flex-col gap-2 text-zinc-100`}
                                    >
                                        <h2 className="text-base md:text-lg lg:text-xl">
                                            Skills has
                                        </h2>
                                        <p className="text-sm md:text-base lg:text-lg ">
                                            {skills?.data?.length}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center rounded-lg bg-purple-600 py-4 px-6 hover:rotate-1 duration-250 transition-all">
                                    <div
                                        className={`w-full flex justify-center items-center flex-col gap-2 text-zinc-100`}
                                    >
                                        <h2 className="text-base md:text-lg lg:text-xl">
                                            Testimonials
                                        </h2>
                                        <p className="text-sm md:text-base lg:text-lg ">
                                            {testimonials?.data?.length}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center rounded-lg bg-indigo-600 py-4 px-6 hover:rotate-1 duration-250 transition-all">
                                    <div
                                        className={`w-full flex justify-center items-center flex-col gap-2 text-zinc-100`}
                                    >
                                        <h2 className="text-base md:text-lg lg:text-xl">
                                            Experiences
                                        </h2>
                                        <p className="text-sm md:text-base lg:text-lg ">
                                            {experiences?.data?.length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-300"
                        }  shadow-sm sm:rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div
                                className={`overflow-x-auto ${
                                    isDark ? "bg-zinc-800" : "bg-zinc-200"
                                } p-4 rounded-lg`}
                            >
                                <CreateActions />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-300"
                        }  shadow-sm sm:rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div
                                className={`overflow-x-auto ${
                                    isDark ? "bg-zinc-800" : "bg-zinc-200"
                                }  p-4 rounded-lg`}
                            >
                                <ProjectsTable projects={projects.data} />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-300"
                        }  shadow-sm sm:rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div
                                className={`overflow-x-auto ${
                                    isDark ? "bg-zinc-800" : "bg-zinc-200"
                                }  p-4 rounded-lg`}
                            >
                                <SkillsTable skills={skills.data} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-300"
                        }  shadow-sm sm:rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div
                                className={`overflow-x-auto ${
                                    isDark ? "bg-zinc-800" : "bg-zinc-200"
                                }  p-4 rounded-lg`}
                            >
                                <TestimonialsTable
                                    testimonials={testimonials}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-300"
                        }  shadow-sm sm:rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div
                                className={`overflow-x-auto ${
                                    isDark ? "bg-zinc-800" : "bg-zinc-200"
                                }  p-4 rounded-lg`}
                            >
                                <ExperiencesTable
                                    experiences={experiences.data}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
