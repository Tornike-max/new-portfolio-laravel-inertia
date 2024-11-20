import {
    ExperienceData,
    Links,
    Meta,
    ProjectsData,
    SkillsData,
    TestimonialData,
} from "@/types";
import React from "react";
import NavLink from "./NavLink";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useToggleDarkMode from "@/context/useToggleDarkMode";

const Pagination = ({
    data,
}: {
    data:
        | {
              data:
                  | ProjectsData
                  | ExperienceData
                  | TestimonialData
                  | SkillsData
                  | undefined;
              links: Links;
              meta: Meta;
          }
        | undefined;
}) => {
    const { isDark } = useToggleDarkMode();
    if (!data || !data.data) {
        return null;
    }
    return (
        <div
            className={`w-full flex flex-col sm:flex-row justify-between items-center my-4 p-4 ${
                isDark ? "bg-zinc-800" : "bg-zinc-100"
            } shadow-md rounded-md `}
        >
            <p
                className={`${
                    isDark ? "text-zinc-200" : "text-gray-700"
                }  text-sm`}
            >
                Showing {data?.meta.from} to {data?.meta.to}
            </p>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                {data?.meta.links.map((item) => (
                    <NavLink
                        key={item.label}
                        active={item.active}
                        href={item.url || ""}
                        className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 `}
                    >
                        {item.label === "&laquo;" ? (
                            <FaArrowLeft />
                        ) : item.label === "&raquo;" ? (
                            <FaArrowRight />
                        ) : (
                            item.label
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
