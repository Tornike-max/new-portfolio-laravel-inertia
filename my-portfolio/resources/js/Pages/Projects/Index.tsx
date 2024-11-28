// @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Project } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import useToggleDarkMode from "@/context/useToggleDarkMode";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import { formatImage } from "@/functions/helpers";
import { FiArrowLeft, FiMail, FiSearch } from "react-icons/fi";
import NavLink from "@/Components/NavLink";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Pagination from "@/Components/Pagination";
import { useTranslation } from "react-i18next";

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

export const Index = ({ auth, myData, projects }: PageProps) => {
    const { isDark } = useToggleDarkMode();
    const { t } = useTranslation();
    const { get, processing, data, setData, errors, reset } = useForm({
        query: "",
    });
    let query = window.location.href
        .slice(window.location.href.lastIndexOf("?") + 1)
        .split("=")[1];

    const handleSearch = (e: React.ChangeEvent) => {
        e.preventDefault();
        get(route("projects.index"));
    };

    const handleReset = (e: React.MouseEvent) => {
        e.preventDefault();
        reset();
        const url = window.location.origin + window.location.pathname;
        window.history.replaceState(null, "", url);
        window.location.reload();
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    {t("projects")}
                </h2>
            }
        >
            <Head title={t("projects")} />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <motion.div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-200"
                        }  shadow-sm sm:rounded-lg`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="p-6">
                            <motion.h3
                                className={`text-2xl py-2 ${
                                    isDark ? "text-zinc-200" : "text-zinc-800"
                                } `}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {t("myProjects")}
                            </motion.h3>
                            <form
                                onSubmit={handleSearch}
                                className="flex items-center gap-2 my-2"
                            >
                                <input
                                    type="search"
                                    placeholder={`${t("search")}...`}
                                    onChange={(e) =>
                                        setData("query", e.target.value)
                                    }
                                    className={`w-full rounded border ${
                                        isDark
                                            ? "border-zinc-700 bg-zinc-800 focus:border-red-300"
                                            : "border-zinc-500 bg-zinc-200 text-zinc-800 focus:border-indigo-300"
                                    }  px-3 py-1.5 transition-colors  focus:outline-0`}
                                />

                                {query === undefined ? (
                                    <button
                                        type="submit"
                                        className={`flex items-center gap-2 whitespace-nowrap rounded ${
                                            isDark
                                                ? "bg-zinc-50 text-zinc-900 hover:bg-zinc-300"
                                                : "bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
                                        }  px-3 py-2 text-sm font-medium transition-colors `}
                                    >
                                        {processing ? (
                                            "Searching..."
                                        ) : (
                                            <div className="flex items-center gap-1">
                                                <FiSearch />{" "}
                                                <span>{t("search")}</span>
                                            </div>
                                        )}
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className={`flex items-center gap-2 whitespace-nowrap rounded ${
                                            isDark
                                                ? "bg-zinc-50 text-zinc-900 hover:bg-zinc-300"
                                                : "bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
                                        }  px-3 py-2 text-sm font-medium transition-colors `}
                                    >
                                        <div className="flex items-center gap-1">
                                            X <span>{t("clear")}</span>
                                        </div>
                                    </button>
                                )}
                            </form>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {projects?.data?.map((project: Project) => (
                                    <motion.div
                                        key={project?.id}
                                        className={`${
                                            isDark
                                                ? "bg-zinc-800 "
                                                : "bg-zinc-100 "
                                        }group p-4 rounded-lg shadow-md `}
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
                                            <div className="mb-4 group-hover:scale-105 duration-150 transitin-all flex justify-center items-center">
                                                <Image
                                                    src={formatImage(
                                                        project.image
                                                    )}
                                                    alt={project.image}
                                                    loading="lazy"
                                                    isZoomed
                                                    shadow="md"
                                                    fallbackSrc="https://via.placeholder.com"
                                                    className="bg-cover max-w-[350px] w-full h-[250px]"
                                                />
                                            </div>
                                            <h4
                                                className={`text-lg ${
                                                    isDark
                                                        ? "text-zinc-100"
                                                        : "text-zinc-700"
                                                } `}
                                            >
                                                {project.title}
                                            </h4>
                                            <p
                                                className={`text-sm ${
                                                    isDark
                                                        ? "text-zinc-400"
                                                        : "text-zinc-600"
                                                } `}
                                            >
                                                {project.description}
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <Pagination data={projects} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
