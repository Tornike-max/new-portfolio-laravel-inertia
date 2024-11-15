import CreateActions from "@/Components/CreateActions";
import ProjectsTable from "@/Components/ProjectsTable";
import SkillsTable from "@/Components/SkillsTable";
import TestimonialsTable from "@/Components/TestimonialsTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Project } from "@/types";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

const Index = ({ projects, skills, testimonials }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-zinc-200">
                    Admin Panel
                </h2>
            }
        >
            <Head title="Admin-Panel" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <motion.div
                        className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div className="overflow-x-auto bg-zinc-800 p-4 rounded-lg">
                                <CreateActions />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div className="overflow-x-auto bg-zinc-800 p-4 rounded-lg">
                                <ProjectsTable projects={projects?.data} />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div className="overflow-x-auto bg-zinc-800 p-4 rounded-lg">
                                <SkillsTable skills={skills?.data} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <div className="overflow-x-auto bg-zinc-800 p-4 rounded-lg">
                                <TestimonialsTable
                                    testimonials={testimonials}
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
