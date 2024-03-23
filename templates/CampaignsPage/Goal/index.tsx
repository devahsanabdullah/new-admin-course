import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const slider = [
    {
        image: "/images/ball-1.png",
        color: "#A0D7E7",
    },
    {
        image: "/images/banner.png",
        color: "#FFA2C0",
    },
    {
        image: "/images/ball-1.png",
        color: "#7FBA7A",
    },
];

const items = [
    {
        title: "Bento Illustration",
        percentage: 40,
        color: "#6C5DD3",
    },
    {
        title: "Bento Illustration",
        percentage: 25,
        color: "#7FBA7A",
    },
    {
        title: "Bento Illustration",
        percentage: 50,
        color: "#FFCE73",
    },
    {
        title: "Bento Illustration",
        percentage: 80,
        color: "#FFA2C0",
    },
];

type GoalProps = {};

const Goal = ({}: GoalProps) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="card-shadow mb-16 p-8 bg-white 2xl:w-[calc(50%-2rem)] 2xl:mx-4 2xl:mb-0 md:w-full md:mx-0 dark:bg-dark-2">
            <div className="mb-8 text-h6">2020 Goal</div>
            <div className="relative -mx-2 mb-6">
                <div className="absolute top-0 left-2 z-10 flex space-x-2">
                    <button
                        className="group w-6 h-6 rounded-full bg-white shadow-[0_0.3125rem_0.625rem_#E3E6EC] transition-colors text-0 hover:bg-primary dark:bg-dark-2 dark:shadow-[0_0.3125rem_0.625rem_rgba(0,0,0,.3)]"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Icon
                            className="transition-colors group-hover:fill-white dark:fill-white"
                            classSize="w-3"
                            name="arrow-slider-prev"
                        />
                    </button>
                    <button
                        className="group w-6 h-6 rounded-full bg-white shadow-[0_0.3125rem_0.625rem_#E3E6EC] transition-colors text-0 hover:bg-primary dark:bg-dark-2 dark:shadow-[0_0.3125rem_0.625rem_rgba(0,0,0,.3)]"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Icon
                            className="transition-colors group-hover:fill-white dark:fill-white"
                            classSize="w-3"
                            name="arrow-slider-next"
                        />
                    </button>
                </div>
                <Swiper
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="slider-home"
                    spaceBetween={16}
                    slidesPerView={1}
                    speed={500}
                >
                    {slider.map((slide, index) => (
                        <SwiperSlide
                            className="!flex justify-center items-center !h-[13.75rem]"
                            key={index}
                        >
                            <Image
                                className="relative z-1 w-48 object-cover"
                                src={slide.image}
                                width={192}
                                height={192}
                                alt=""
                            />
                            <div
                                className="absolute top-0 right-0 bottom-0 w-1/2 rounded-2xl"
                                style={{ backgroundColor: slide.color }}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="space-y-8">
                {items.map((item, index) => (
                    <div className="" key={index}>
                        <div className="flex justify-between mb-3 text-title">
                            <div className="">{item.title}</div>
                            <div className="shrink-0 ml-2">
                                {item.percentage}%
                            </div>
                        </div>
                        <div className="relative h-2 rounded-full bg-grey-light/50 dark:bg-grey-light/5">
                            <div
                                className="absolute top-0 left-0 bottom-0 rounded-full"
                                style={{
                                    width: item.percentage + "%",
                                    backgroundColor: item.color,
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Goal;
