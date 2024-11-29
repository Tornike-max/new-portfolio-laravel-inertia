// @ts-nocheck

import { useForm } from "@inertiajs/react";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import { useTranslation } from "react-i18next";

const TestimonialModal = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: () => void;
}) => {
    const { data, setData, errors, post, processing } = useForm({
        author_name: "",
        content: "",
        position: "",
        author_image: null,
    });
    const { t } = useTranslation();
    const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("testimonials.store"), {
            onSuccess: () => {
                onOpenChange();
            },
        });
    };

    return (
        <Modal
            className="bg-zinc-900 text-zinc-100"
            isOpen={isOpen}
            placement={"auto"}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                    {t("addTestimonial")}
                </ModalHeader>
                <ModalBody>
                    <form
                        onSubmit={handleCreate}
                        className="w-full flex justify-center items-center flex-col gap-4"
                        encType="multipart/form-data"
                    >
                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel className="text-zinc-100">
                                {t("authorName")}
                            </InputLabel>
                            <TextInput
                                className="w-full text-zinc-800"
                                type="text"
                                name="author_name"
                                placeholder="John Doe"
                                value={data.author_name}
                                onChange={(e) =>
                                    setData("author_name", e.target.value)
                                }
                            />
                            <InputError message={errors.author_name} />
                        </div>

                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel className="text-zinc-100">
                                {t("position")}
                            </InputLabel>
                            <TextInput
                                className="w-full text-zinc-800"
                                type="text"
                                name="position"
                                placeholder="Project Manager"
                                value={data.position}
                                onChange={(e) =>
                                    setData("position", e.target.value)
                                }
                            />
                            <InputError message={errors.position} />
                        </div>

                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel className="text-zinc-100">
                                {t("content")}
                            </InputLabel>
                            <textarea
                                className="w-full text-zinc-800 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                name="content"
                                placeholder="Something..."
                                value={data.content}
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                            />
                            <InputError message={errors.content} />
                        </div>

                        <div className="w-full flex justify-center items-start flex-col gap-1">
                            <InputLabel className="text-zinc-100">
                                {t("authorImage")}
                            </InputLabel>
                            <input
                                type="file"
                                className="w-full text-zinc-800 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                name="author_image"
                                onChange={(e) =>
                                    setData("author_image", e.target.files[0])
                                }
                            />
                            <InputError message={errors.author_image} />
                        </div>

                        <div className="flex gap-4 mt-4">
                            <Button
                                type="button"
                                color="danger"
                                variant="light"
                                onPress={onOpenChange}
                                disabled={processing}
                            >
                                {t("close")}
                            </Button>
                            <Button
                                type="submit"
                                color="primary"
                                disabled={processing}
                            >
                                {processing
                                    ? `${t("creating")}`
                                    : `${t("create")}`}
                            </Button>
                        </div>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default TestimonialModal;
