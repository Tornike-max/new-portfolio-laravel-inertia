import { Link } from "@inertiajs/react";
import React from "react";

const CreateActions = () => {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
                className="py-1 px-2 md:py-2 md:px-3 text-sm md:text-base text-center rounded-lg border hover:bg-indigo-600 duration-150 transition-all"
                href={route("admin.project.create")}
            >
                Create Project
            </Link>
            <Link
                className="py-1 px-2 md:py-2 md:px-3 text-sm md:text-base text-center rounded-lg border hover:bg-indigo-600 duration-150 transition-all"
                href={route("admin.skill.create")}
            >
                Create Skill
            </Link>
            <Link
                className="py-1 px-2 md:py-2 md:px-3 text-sm md:text-base text-center rounded-lg border hover:bg-indigo-600 duration-150 transition-all"
                href={route("admin.testimonial.create")}
            >
                Create Testimonial
            </Link>
            <Link
                className="py-1 px-2 md:py-2 md:px-3 text-sm md:text-base text-center rounded-lg border hover:bg-indigo-600 duration-150 transition-all"
                href={route("admin.experience.create")}
            >
                Create Experience
            </Link>
        </div>
    );
};

export default CreateActions;
