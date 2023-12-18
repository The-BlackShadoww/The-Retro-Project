import React from "react";
import {
    SwiperSlides,
    SwiperSlidesLayard,
} from "../../components/UI/cards/Card";
import { register } from "swiper/element/bundle";
register();

//!--------- Swiper 1 ---------
export function Swiper({ arr }) {
    const slides = arr.map((item) => (
        <swiper-slide key={item.id}>
            <SwiperSlides item={item} />
        </swiper-slide>
    ));

    return (
        <div>
            <swiper-container slides-per-view="1.3" speed="300">
                {slides}
            </swiper-container>
        </div>
    );
}
//!--------- Swiper 2 ---------
export function SwiperLayard({ arr }) {
    const slides = arr.map((item) => (
        <swiper-slide key={item.id}>
            <SwiperSlidesLayard item={item} />
        </swiper-slide>
    ));

    return (
        <div>
            <swiper-container slides-per-view="1.2" speed="300">
                {slides}
            </swiper-container>
        </div>
    );
}
