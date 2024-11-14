import { Testimonial, TestimonialData } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

const TestimonialsTable = ({
    testimonials,
}: {
    testimonials: TestimonialData | undefined;
}) => {
    const { delete: destroy, processing } = useForm();
    const handleDelete = (id: number) => {
        destroy("");
    };
    return (
        <>
            <h1 className="text-lg font-semibold py-2">Testimonials</h1>
            <table className="min-w-full text-sm text-left text-zinc-50">
                <thead className="bg-zinc-900">
                    <tr>
                        <th className="px-6 py-3 font-medium">ID</th>
                        <th className="px-6 py-3 font-medium">Name</th>
                        <th className="px-6 py-3 font-medium">Position</th>
                        <th className="px-6 py-3 font-medium">content</th>
                        <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonials?.data.map((testimonial: Testimonial) => (
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
                                {testimonial?.position}
                            </td>
                            <td className="px-6 py-4 w-[200px] cursor-pointer">
                                {`${testimonial.content.slice(0, 60)}...`}
                            </td>
                            <td className="px-6 py-4 flex items-center gap-1">
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
        </>
    );
};

export default TestimonialsTable;
