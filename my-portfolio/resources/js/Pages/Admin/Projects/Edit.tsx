// @ts-nocheck

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Project } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

const Edit = ({ project }: { project: Project }) => {
    const { data, processing, setData, errors, put } = useForm({
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        project_url: project.project_url,
        image: project.image,
        start_date: project.start_date,
        end_date: project.end_date,
    });

    const handleUpdate = () => {
        put(route("admin.project.update", project.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    {`Update ${project.title}`}
                </h2>
            }
        >
            <Head title={`Update-${project.title}`} />

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
                                onSubmit={handleUpdate}
                                className="w-full flex justify-center items-center flex-col gap-4"
                            >
                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Title"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="text"
                                        name="title"
                                        className="w-full text-zinc-900"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Description"
                                        className="text-zinc-100"
                                    />
                                    <textarea
                                        name="description"
                                        className="w-full text-zinc-900 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {data.description}
                                    </textarea>
                                    <InputError message={errors.description} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Technologies"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="text"
                                        name="technologies"
                                        className="w-full text-zinc-900"
                                        value={data.technologies}
                                        onChange={(e) =>
                                            setData(
                                                "technologies",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError message={errors.technologies} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Project Url"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="text"
                                        name="project_url"
                                        className="w-full text-zinc-900"
                                        value={data.project_url}
                                        onChange={(e) =>
                                            setData(
                                                "project_url",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError message={errors.project_url} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Start Date"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="date"
                                        name="start_date"
                                        className="w-full text-zinc-900"
                                        value={data.start_date}
                                        onChange={(e) =>
                                            setData(
                                                "start_date",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError message={errors.start_date} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="End Date"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="date"
                                        name="end_date"
                                        className="w-full text-zinc-900"
                                        value={data.end_date}
                                        onChange={(e) =>
                                            setData("end_date", e.target.value)
                                        }
                                    />
                                    <InputError message={errors.end_date} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Image"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="file"
                                        name="image"
                                        className="w-full text-zinc-900 border"
                                        onChange={(e) => {
                                            if (
                                                e.target.files &&
                                                e.target.files[0]
                                            ) {
                                                setData(
                                                    "image",
                                                    e.target.files[0]
                                                );
                                            }
                                        }}
                                    />
                                    <InputError message={errors.image} />
                                </div>

                                <div className="w-full flex  justify-center items-center">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 hover:bg-blue-600 py-2 px-3 w-full rounded-lg duration-150 transition-all"
                                    >
                                        {processing
                                            ? "Saving..."
                                            : "Save Changes"}
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

export default Edit;
