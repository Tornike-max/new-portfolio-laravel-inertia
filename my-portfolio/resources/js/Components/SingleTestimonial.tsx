import useToggleDarkMode from "@/context/useToggleDarkMode";
import DotShape from "./DotShape";

const SingleTestimonial = ({
    image,
    reviewImg,
    reviewAlt,
    details,
    name,
    position,
}: {
    image: string;
    reviewImg: string;
    reviewAlt: string;
    details: string;
    name: string;
    position: string;
}) => {
    const { isDark } = useToggleDarkMode();
    return (
        <div className="relative flex justify-center">
            <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12">
                <div className="w-full items-center md:flex">
                    <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
                        <img src={image} alt="image" className="w-full" />
                        <span className="absolute -left-6 -top-6 z-[-1] hidden sm:block">
                            <DotShape />
                        </span>
                    </div>
                    <div className="w-full">
                        <div
                            className={` ${
                                isDark ? "text-zinc-100" : "text-zinc-900"
                            }`}
                        >
                            <div className="mb-7">
                                <img src={reviewImg} alt={reviewAlt} />
                            </div>

                            <p className="mb-11 text-base font-normal italic leading-[1.81]  sm:text-[22px]">
                                {details}
                            </p>

                            <h4 className="mb-2 text-[22px] font-semibold leading-[27px] ">
                                {name}
                            </h4>
                            <p className="text-base">{position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;
