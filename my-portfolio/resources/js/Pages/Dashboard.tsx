import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { SiYoutube, SiGithub, SiTiktok } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import AboutBlock from "@/Components/AboutBlock";
import EmailListBlock from "@/Components/EmailListBlock";
import Footer from "@/Components/Footer";
import HeaderBlock from "@/Components/HeaderBlock";
import LocationBlock from "@/Components/LocationBlock";
import Logo from "@/Components/Logo";
import SocialsBlock from "@/Components/SocialsBlock";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
                                <Logo />
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    transition={{
                                        staggerChildren: 0.05,
                                    }}
                                    className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4"
                                >
                                    <HeaderBlock />
                                    <SocialsBlock />
                                    <AboutBlock />
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
