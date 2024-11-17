import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Experience, Project } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

const Create = () => {
    const { data, processing, setData, errors, post } = useForm({
        company_name: "",
        title: "",
        sphere: "",
        start_date: "",
        end_date: "",
    });

    const handleCreate = () => {
        post(route("admin.experience.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-zinc-200">
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
                                onSubmit={handleCreate}
                                className="w-full flex justify-center items-center flex-col gap-4"
                            >
                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Company Name"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="text"
                                        name="company_name"
                                        className="w-full text-zinc-900"
                                        value={data.company_name}
                                        onChange={(e) =>
                                            setData(
                                                "company_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError message={errors.company_name} />
                                </div>

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
                                    />{" "}
                                    <InputError message={errors.title} />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <InputLabel
                                        children="Sphere"
                                        className="text-zinc-100"
                                    />
                                    <TextInput
                                        type="text"
                                        name="sphere"
                                        className="w-full text-zinc-900"
                                        value={data.sphere}
                                        onChange={(e) =>
                                            setData("sphere", e.target.value)
                                        }
                                    />
                                    <InputError message={errors.sphere} />
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
