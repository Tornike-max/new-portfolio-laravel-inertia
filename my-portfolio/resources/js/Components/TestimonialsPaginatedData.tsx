// @ts-nocheck

import useToggleDarkMode from "@/context/useToggleDarkMode";
import { PageProps, Testimonial, TestimonialData } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import React from "react";
import Pagination from "./Pagination";

const TestimonialsPaginatedData = ({
    testimonialsData,
}: {
    testimonialsData: TestimonialData;
}) => {
    const { isDark } = useToggleDarkMode();
    const { delete: destroy, processing } = useForm();

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this skill?")) {
            destroy(route("admin.testimonial.delete", id));
        }
    };

    return (
        <>
            <h1 className="text-lg font-semibold py-2">skills</h1>
            <table
                className={`min-w-full text-sm text-left ${
                    isDark ? "text-zinc-50" : "text-zinc-900"
                } `}
            >
                <thead className={` ${isDark ? "bg-zinc-900" : "bg-zinc-200"}`}>
                    <tr>
                        <th className="px-6 py-3 font-medium">ID</th>
                        <th className="px-6 py-3 font-medium">Author</th>
                        <th className="px-6 py-3 font-medium">Content</th>
                        <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonialsData?.data.map((testimonial: Testimonial) => (
                        <motion.tr
                            key={testimonial.id}
                            className="border-t border-zinc-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                            }}
                        >
                            <td className="px-6 py-4">{testimonial.id}</td>
                            <td className="px-6 py-4">
                                {testimonial?.author_name}
                            </td>
                            <td className="px-6 py-4">
                                {testimonial?.content}
                            </td>
                            <td className="px-6 py-4">
                                <Link
                                    href={route(
                                        "admin.testimonial.edit",
                                        testimonial.id
                                    )}
                                    className="text-blue-500 hover:text-blue-700 mr-4"
                                >
                                    Edit
                                </Link>
                                <form
                                    onSubmit={() =>
                                        handleDelete(testimonial.id)
                                    }
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
            <Pagination data={testimonialsData} />
        </>
    );
};

export default TestimonialsPaginatedData;
