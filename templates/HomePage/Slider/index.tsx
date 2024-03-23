import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { sliderHome } from "@/mocks/slider";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="relative mb-14 bg-primary rounded-3xl before:absolute before:-z-1 before:inset-2 before:-bottom-2 before:bg-[#CFC8FF] before:rounded-3xl after:absolute after:-z-2 after:top-4 after:left-5 after:right-5 after:-bottom-4 after:bg-[#CFC8FF] after:rounded-3xl md:mb-12">
        <Swiper
            modules={[Pagination]}
            className="slider-home"
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true }}
            speed={500}
        >
            {sliderHome.map((slide) => (
                <SwiperSlide
                    className="!flex pt-11 pl-8 pb-14 text-white md:flex-col-reverse md:pt-8 md:px-8 md:pb-14"
                    key={slide.id}
                >
                    <div className="w-[11.62rem] pt-3 md:w-auto md:max-w-[15.5rem] md:mx-auto md:pt-0 md:text-center">
                        <div className="mb-3.5 text-h5">{slide.title}</div>
                        <div className="mb-3.5 md:mb-6">{slide.content}</div>
                        <button className="btn-white min-w-[10rem]">
                            Go Setting
                        </button>
                    </div>
                    <div className="w-[13.375rem] mx-auto md:mb-6">
                        <Image
                            className="w-full"
                            src={slide.image}
                            width={214}
                            height={214}
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <button className="group absolute z-2 top-2 right-2 w-10 h-10 rounded-full bg-white text-0 dark:bg-dark-2 dark:shadow-xl">
            <Icon
                className="transition-transform group-hover:rotate-90 dark:fill-white"
                name="close-fat"
            />
        </button>
    </div>
);

export default Main;
