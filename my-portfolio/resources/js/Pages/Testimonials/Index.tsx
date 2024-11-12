import { motion } from "framer-motion";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from "@/Components/SingleTestimonial";
import { PageProps } from "@/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Index = ({ testimonials }: PageProps) => {
    const sliderRef = useRef(null);

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
                <h2 className="text-xl font-semibold leading-tight text-zinc-200">
                    Testimonials
                </h2>
            }
        >
            <Head title="Testimonials" />

            <div className="py-12">
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-zinc-900 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <motion.div
                                className="group rounded-xl transition-all duration-500 w-full mx-auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7 }}
                            >
                                <section className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
                                    <div className="container mx-auto">
                                        <Swiper
                                            slidesPerView={1}
                                            ref={sliderRef}
                                        >
                                            {testimonials?.map(
                                                (testimonial) => (
                                                    <SwiperSlide>
                                                        <SingleTestimonial
                                                            image={
                                                                testimonial.author_image
                                                            }
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
                                                    <button className="flex h-[60px] w-[60px]  items-center justify-center rounded-full border border-stroke transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 text-zinc-100 bg-zinc-800 hover:bg-zinc-900 hover:border-zinc-100">
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
