import { motion } from "framer-motion";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;
const Index = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-zinc-200">
                    Testimonials
                </h2>
            }
        >
            <Head title="Testimonials" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <motion.div
                                className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="">
                                    <div className="flex items-center mb-7 gap-2 text-amber-500">
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 18 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="text-base font-semibold text-indigo-600">
                                            4.9
                                        </span>
                                    </div>
                                    <p className="text-base text-gray-600 leading-6 pb-8">
                                        Pagedone has made it possible for me to
                                        stay on top of my portfolio and make
                                        informed decisions quickly and easily.
                                    </p>
                                </div>
                                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                                    <img
                                        className="rounded-full h-10 w-10 object-cover"
                                        src="https://pagedone.io/asset/uploads/1696229969.png"
                                        alt="avatar"
                                    />
                                    <div className="block">
                                        <h5 className="text-gray-900 font-medium mb-1">
                                            Jane D
                                        </h5>
                                        <span className="text-sm leading-4 text-gray-500">
                                            CEO
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
