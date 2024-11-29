import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import useToggleDarkMode from "@/context/useToggleDarkMode";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { useTranslation } from "react-i18next";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const { isDark } = useToggleDarkMode();
    const { t } = useTranslation();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        className={`${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                        }`}
                        htmlFor="name"
                        value={t("name")}
                    />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className={`${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                        }`}
                        htmlFor="email"
                        value={t("email")}
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className={`${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                        }`}
                        htmlFor="password"
                        value={t("password")}
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className={`${
                            isDark ? "text-zinc-100" : "text-zinc-800"
                        }`}
                        htmlFor="password_confirmation"
                        value={t("confirmPassword")}
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className={`rounded-md text-sm ${
                            isDark
                                ? "text-gray-300 hover:text-gray-200"
                                : "text-gray-600 hover:text-gray-900"
                        }  underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                        {t("alreadyRegistered")}{" "}
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        {t("register")}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
