import React from "react";
import { useSwiper } from "swiper/react";

//! ---------- SwiperButton -------------
export const SwiperButton = ({ item }) => {
    const swiper = useSwiper();

    return (
        <div className="w-full hidden md:flex justify-end mt-3">
            <button
                className="bg-gray-200 p-5 rounded-full mx-1 hover:bg-gray-300"
                onClick={() => swiper.slidePrev()}
            >
                CaretLeftIcon
            </button>
            <button
                className="bg-gray-200 p-5 rounded-full mx-1 hover:bg-gray-300"
                onClick={() => swiper.slideNext()}
            >
                CaretRightIcon
            </button>
        </div>
    );
};

//! ---------- SwiperButtonSm -------------
export const SwiperButtonSm = ({ item }) => {
    const swiper = useSwiper();

    return (
        <div className="w-full tablet:block hidden">
            <button
                className="bg-indigo-800 z-10 p-4 rounded-full mx-1 hover:bg-gray-300 absolute top-2/4 left-[5%] -translate-y-1/2"
                onClick={() => swiper.slidePrev()}
            >
                CaretLeftIcon
            </button>
            <button
                className="bg-indigo-200 z-10 p-4 rounded-full mx-1 hover:bg-gray-300 absolute top-2/4 right-[5%] -translate-y-1/2"
                onClick={() => swiper.slideNext()}
            >
                CaretRightIcon
            </button>
        </div>
    );
};
