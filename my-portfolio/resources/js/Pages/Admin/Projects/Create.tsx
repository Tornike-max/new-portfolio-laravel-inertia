import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Project } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

const Create = () => {
    const { data, processing, setData, errors, post } = useForm({
        title: "",
        description: "",
        technologies: "",
        project_url: "",
        image: "",
        start_date: "",
        end_date: "",
    });

    const handleStore = () => {
        post(route("admin.project.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-zinc-200">
                    Create Project
                </h2>
            }
        >
            <Head title={`Create Project`} />

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
                                onSubmit={handleStore}
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
                                    ></textarea>
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

export default Create;
