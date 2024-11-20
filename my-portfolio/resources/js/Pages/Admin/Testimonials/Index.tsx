import AdminNavigation from "@/Components/AdminNavigation";
import ProjectsPaginatedTable from "@/Components/ProjectsPaginatedTable";
import ProjectsTable from "@/Components/ProjectsTable";
import SkillsPaginatedData from "@/Components/SkillsPaginatedTable";
import TestimonialsPaginatedData from "@/Components/TestimonialsPaginatedData";
import useToggleDarkMode from "@/context/useToggleDarkMode";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

const Index = ({ auth, testimonialsData }: PageProps) => {
    const { isDark } = useToggleDarkMode();
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    Testimonials
                </h2>
            }
        >
            <Head title="Testimonials" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <motion.div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-300"
                        }  shadow-sm sm:rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            {testimonialsData !== undefined && (
                                <TestimonialsPaginatedData
                                    testimonialsData={testimonialsData}
                                />
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
