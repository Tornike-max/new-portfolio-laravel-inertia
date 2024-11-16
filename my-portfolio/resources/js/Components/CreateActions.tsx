import { Link } from "@inertiajs/react";
import React from "react";

const CreateActions = () => {
    return (
        <div className="w-full flex justify-center items-center gap-4">
            <Link
                className="py-2 px-3 rounded-lg border hover:bg-indigo-600 duration-150 transition-all"
                href={route("admin.project.create")}
            >
                Create Project
            </Link>
            <Link
                className="py-2 px-3 rounded-lg border hover:bg-indigo-600 duration-150 transition-all"
                href={route("admin.skill.create")}
            >
                Create Skill
            </Link>
            <Link
                className="py-2 px-3 rounded-lg border hover:bg-indigo-600 duration-150 transition-all"
                href={route("admin.testimonial.create")}
            >
                Create Testimonial
            </Link>
        </div>
    );
};

export default CreateActions;
