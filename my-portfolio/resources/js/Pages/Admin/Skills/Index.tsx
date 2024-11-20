import AdminNavigation from "@/Components/AdminNavigation";
import ProjectsPaginatedTable from "@/Components/ProjectsPaginatedTable";
import ProjectsTable from "@/Components/ProjectsTable";
import SkillsPaginatedData from "@/Components/SkillsPaginatedTable";
import useToggleDarkMode from "@/context/useToggleDarkMode";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

const Index = ({ auth, skillsData }: PageProps) => {
    const { isDark } = useToggleDarkMode();
    console.log(skillsData);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">Skills</h2>
            }
        >
            <Head title="Skills" />

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
                            {skillsData !== undefined && (
                                <SkillsPaginatedData skillsData={skillsData} />
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
