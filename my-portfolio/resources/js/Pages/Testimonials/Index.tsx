// @ts-nocheck

import { motion } from "framer-motion";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from "@/Components/SingleTestimonial";
import { PageProps, Testimonial } from "@/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useToggleDarkMode from "@/context/useToggleDarkMode";
import { Button, useDisclosure } from "@nextui-org/react";
import TestimonialModal from "@/Components/TestimonialModal";
import { formatImage } from "@/functions/helpers";

const Index = ({ testimonials }: PageProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [page, setPage] = useState(0);

    const sliderRef = useRef(null);
    const { isDark } = useToggleDarkMode();

    useEffect(() => {
        setTimeout(() => {
            if (page < testimonials?.length) {
                handleNext();
                setPage((page) => page + 1);
            } else {
                setPage(0);
            }
        }, 2000);
    }, [page]);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current?.swiper?.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current?.swiper?.slideNext();
    }, []);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    Testimonials
                </h2>
            }
        >
            <Head title="Testimonials" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div
                        className={`overflow-hidden ${
                            isDark ? "bg-zinc-900" : "bg-zinc-200"
                        } shadow-sm sm:rounded-lg`}
                    >
                        <div
                            className={`p-6 ${
                                isDark ? "text-gray-100" : "text-gray-900"
                            }`}
                        >
                            <motion.div
                                className="group rounded-xl transition-all duration-500 w-full mx-auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7 }}
                            >
                                <section className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
                                    <div className="container mx-auto">
                                        <div className="text-center mb-12">
                                            <h2 className="text-3xl font-bold mb-4">
                                                What Our Clients Say
                                            </h2>
                                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                                Want to share your experience?
                                                Add your testimonial below!
                                            </p>
                                        </div>
                                        <Swiper
                                            slidesPerView={1}
                                            loop={true}
                                            ref={sliderRef}
                                        >
                                            {testimonials?.map(
                                                (
                                                    testimonial: Testimonial,
                                                    index
                                                ) => (
                                                    <SwiperSlide key={index}>
                                                        <SingleTestimonial
                                                            image={formatImage(
                                                                testimonial.author_image
                                                            )}
                                                            reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                                                            reviewAlt="lineicon"
                                                            details={
                                                                testimonial.content
                                                            }
                                                            name={
                                                                testimonial.author_name
                                                            }
                                                            position={
                                                                testimonial.position
                                                            }
                                                        />
                                                    </SwiperSlide>
                                                )
                                            )}
                                            <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
                                                <div
                                                    className="prev-arrow cursor-pointer"
                                                    onClick={handlePrev}
                                                >
                                                    <button className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 text-zinc-100 bg-zinc-800 hover:bg-zinc-900 hover:border-zinc-100">
                                                        <FaArrowLeft />
                                                    </button>
                                                </div>
                                                <div
                                                    className="next-arrow cursor-pointer"
                                                    onClick={handleNext}
                                                >
                                                    <button className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 text-zinc-100 bg-zinc-800 hover:bg-zinc-900 hover:border-zinc-100">
                                                        <FaArrowRight />
                                                    </button>
                                                </div>
                                            </div>
                                        </Swiper>
                                        <div className="text-center mt-8">
                                            <Button
                                                onClick={onOpenChange}
                                                variant="solid"
                                                color="primary"
                                            >
                                                Add Your Testimonial
                                            </Button>
                                        </div>
                                        <TestimonialModal
                                            isOpen={isOpen}
                                            onOpen={onOpen}
                                            onOpenChange={onOpenChange}
                                        />
                                    </div>
                                </section>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
