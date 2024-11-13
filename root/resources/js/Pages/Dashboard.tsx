import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import AboutBlock from "@/Components/AboutBlock";
import EmailListBlock from "@/Components/EmailListBlock";
import Footer from "@/Components/Footer";
import HeaderBlock from "@/Components/HeaderBlock";
import LocationBlock from "@/Components/LocationBlock";
import Logo from "@/Components/Logo";
import SocialsBlock from "@/Components/SocialsBlock";
import { PageProps } from "@/types";

export default function Dashboard({ auth, myData }: PageProps) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-zinc-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="min-h-screen w-full text-gray-50">
                                <Logo />
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    transition={{
                                        staggerChildren: 0.05,
                                    }}
                                    className="mx-auto grid max-w-8xl grid-flow-dense grid-cols-12 gap-4"
                                >
                                    <HeaderBlock />
                                    <SocialsBlock />
                                    <AboutBlock about={myData?.about} />
                                    <LocationBlock />
                                    <EmailListBlock />
                                </motion.div>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
