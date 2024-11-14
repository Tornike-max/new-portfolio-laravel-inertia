import { Skill } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

const SkillsTable = ({ skills }: { skills: Skill[] }) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (id: number) => {
        console.log(id);
        // destroy("");
    };
    return (
        <>
            <h1 className="text-lg font-semibold py-2">skills</h1>
            <table className="min-w-full text-sm text-left text-zinc-50">
                <thead className="bg-zinc-900">
                    <tr>
                        <th className="px-6 py-3 font-medium">ID</th>
                        <th className="px-6 py-3 font-medium">Name</th>
                        <th className="px-6 py-3 font-medium">Level</th>
                        <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {skills?.map((skill: Skill) => (
                        <motion.tr
                            key={skill.id}
                            className="border-t border-zinc-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <td className="px-6 py-4">{skill.id}</td>
                            <td className="px-6 py-4">{skill?.name}</td>
                            <td className="px-6 py-4">{skill.level}</td>
                            <td className="px-6 py-4">
                                <Link
                                    href={route("admin.skill.edit", skill.id)}
                                    className="text-blue-500 hover:text-blue-700 mr-4"
                                >
                                    Edit
                                </Link>
                                <form onSubmit={() => handleDelete(skill.id)}>
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

export default SkillsTable;
