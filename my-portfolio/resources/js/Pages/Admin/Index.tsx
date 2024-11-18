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

const Index = ({
    projects,
    skills,
    testimonials,
    experienceData,
}: PageProps) => {
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
                                <ProjectsTable projects={projects?.data} />
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
                                <SkillsTable skills={skills?.data} />
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
                                    experienceData={experienceData}
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
