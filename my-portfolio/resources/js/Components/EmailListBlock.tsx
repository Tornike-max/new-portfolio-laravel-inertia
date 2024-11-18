import React from "react";
import Block from "./Block";
import { FiMail } from "react-icons/fi";

const EmailListBlock = ({ isDark }: { isDark: boolean }) => (
    <Block className="col-span-12 md:col-span-9">
        <p className="mb-3 text-lg">Join my mailing list</p>
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
        >
            <input
                type="email"
                placeholder="Enter your email"
                className={`w-full rounded border ${
                    isDark
                        ? "border-zinc-700 bg-zinc-800 focus:border-red-300"
                        : "border-zinc-500 bg-zinc-200 text-zinc-800 focus:border-indigo-300"
                }  px-3 py-1.5 transition-colors  focus:outline-0`}
            />
            <button
                type="submit"
                className={`flex items-center gap-2 whitespace-nowrap rounded ${
                    isDark
                        ? "bg-zinc-50 text-zinc-900 hover:bg-zinc-300"
                        : "bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
                }  px-3 py-2 text-sm font-medium transition-colors `}
            >
                <FiMail /> Join the list
            </button>
        </form>
    </Block>
);

export default EmailListBlock;
