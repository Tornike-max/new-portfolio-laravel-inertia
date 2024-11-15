import { PageProps, Project } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import React from "react";

const ProjectsTable = ({ projects }: { projects: Project[] }) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (id: number) => {
        destroy(route("admin.project.delete", id));
    };
    return (
        <>
            <h1 className="text-lg font-semibold py-2">Projects</h1>
            <table className="min-w-full text-sm text-left text-zinc-50">
                <thead className="bg-zinc-900">
                    <tr>
                        <th className="px-6 py-3 font-medium">ID</th>
                        <th className="px-6 py-3 font-medium">Project Name</th>
                        <th className="px-6 py-3 font-medium">Description</th>
                        <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects?.map((project: Project) => (
                        <motion.tr
                            key={project.id}
                            className="border-t border-zinc-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <td className="px-6 py-4">{project.id}</td>
                            <td className="px-6 py-4">{project?.title}</td>
                            <td className="px-6 py-4">{project.description}</td>
                            <td className="px-6 py-4">
                                <Link
                                    href={route(
                                        "admin.project.edit",
                                        project.id
                                    )}
                                    className="text-blue-500 hover:text-blue-700 mr-4"
                                >
                                    Edit
                                </Link>
                                <form onSubmit={() => handleDelete(project.id)}>
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
        </>
    );
};

export default ProjectsTable;
