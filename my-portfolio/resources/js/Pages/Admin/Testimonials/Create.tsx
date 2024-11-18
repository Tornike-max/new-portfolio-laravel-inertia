// @ts-nocheck

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Testimonial } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

const Create = () => {
    const { data, processing, setData, errors, post } = useForm({
        author_name: "",
        position: "",
        content: "",
        author_image: "",
    });

    const handleCreate = () => {
        post(route("admin.testimonial.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    {`Create`}
                </h2>
            }
        >
            <Head title={`Create`} />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <motion.div
                        className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <form
                                encType="multipart/form-data"
                                onSubmit={handleCreate}
                                className="w-full flex justify-center items-center flex-col gap-4"
                            >
                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Author Name"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="text"
                                        name="title"
                                        className="w-full text-zinc-900"
                                        value={data.author_name}
                                        onChange={(e) =>
                                            setData(
                                                "author_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError message={errors.author_name} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Position"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="text"
                                        name="position"
                                        className="w-full text-zinc-900 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={data.position}
                                        onChange={(e) =>
                                            setData("position", e.target.value)
                                        }
                                    />
                                    <InputError message={errors.position} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Content"
                                        className="text-zinc-100"
                                    />
                                    <textarea
                                        name="content"
                                        className="w-full text-zinc-900"
                                        value={data.content}
                                        onChange={(e) =>
                                            setData("content", e.target.value)
                                        }
                                    />
                                    <InputError message={errors.content} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Author_image"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="file"
                                        name="author_image"
                                        className="w-full text-zinc-900 border"
                                        onChange={(e) => {
                                            if (
                                                e.target.files &&
                                                e.target.files[0]
                                            ) {
                                                setData(
                                                    "author_image",
                                                    e.target.files[0]
                                                );
                                            }
                                        }}
                                    />
                                    <InputError message={errors.author_image} />
                                </div>

                                <div className="w-full flex  justify-center items-center">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 hover:bg-blue-600 py-2 px-3 w-full rounded-lg duration-150 transition-all"
                                    >
                                        {processing ? "Pending..." : "Create"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
