import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Project } from "@/types";
import { Head, Link } from "@inertiajs/react";

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

export const Index = ({ auth, myData, projects }: PageProps) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-zinc-200">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <motion.div
                        className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <motion.h3
                                className="text-2xl text-zinc-200"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Your Projects
                            </motion.h3>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {projects?.map((project: Project) => (
                                    <motion.div
                                        key={project?.id}
                                        className="bg-zinc-800 group p-4 rounded-lg shadow-md"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.7 }}
                                    >
                                        <Link
                                            href={route(
                                                "projects.show",
                                                project.id
                                            )}
                                        >
                                            <div className="mb-4 group-hover:scale-105 duration-150 transitin-">
                                                {project?.image && (
                                                    <LogoRolodex
                                                        items={[
                                                            <LogoItem
                                                                key={1}
                                                                className="bg-orange-300 text-neutral-900"
                                                            >
                                                                <SiAmazon />
                                                            </LogoItem>,
                                                            <LogoItem
                                                                key={2}
                                                                className="bg-green-300 text-neutral-900"
                                                            >
                                                                <SiGoogle />
                                                            </LogoItem>,
                                                            <LogoItem
                                                                key={3}
                                                                className="bg-blue-300 text-neutral-900"
                                                            >
                                                                <SiMeta />
                                                            </LogoItem>,
                                                            <LogoItem
                                                                key={4}
                                                                className="bg-white text-black"
                                                            >
                                                                <SiGithub />
                                                            </LogoItem>,
                                                            <LogoItem
                                                                key={5}
                                                                className="bg-purple-300 text-neutral-900"
                                                            >
                                                                <SiTwitch />
                                                            </LogoItem>,
                                                        ]}
                                                    />
                                                )}
                                            </div>
                                            <h4 className="text-lg text-zinc-100">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm text-zinc-400">
                                                {project.description}
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

const LogoRolodex = ({ items }) => {
    const intervalRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setIndex((pv) => pv + 1);
        }, DELAY_IN_MS);

        return () => {
            clearInterval(intervalRef.current || undefined);
        };
    }, []);

    return (
        <div
            style={{
                transform: "rotateY(-20deg)",
                transformStyle: "preserve-3d",
            }}
            className="relative z-0 h-44 w-full bg-cover shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
        >
            <AnimatePresence mode="sync">
                <motion.div
                    style={{
                        y: "-50%",
                        x: "-50%",
                        clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                        zIndex: -index,
                        backfaceVisibility: "hidden",
                    }}
                    key={index}
                    transition={{
                        duration: TRANSITION_DURATION_IN_SECS,
                        ease: "easeInOut",
                    }}
                    initial={{ rotateX: "0deg" }}
                    animate={{ rotateX: "0deg" }}
                    exit={{ rotateX: "-180deg" }}
                    className="absolute left-1/2 top-1/2"
                >
                    {items[index % items.length]}
                </motion.div>
                <motion.div
                    style={{
                        y: "-50%",
                        x: "-50%",
                        clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                        zIndex: index,
                        backfaceVisibility: "hidden",
                    }}
                    key={(index + 1) * 2}
                    initial={{ rotateX: "180deg" }}
                    animate={{ rotateX: "0deg" }}
                    exit={{ rotateX: "0deg" }}
                    transition={{
                        duration: TRANSITION_DURATION_IN_SECS,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2"
                >
                    {items[index % items.length]}
                </motion.div>
            </AnimatePresence>

            <hr
                style={{
                    transform: "translateZ(1px)",
                }}
                className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
            />
        </div>
    );
};

const LogoItem = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    return (
        <div
            className={twMerge(
                "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Index;
