import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButton, SwiperButtonSm } from "./SwiperButtons";
import "swiper/css";
import "./assets/css/style.css";
import {
    SwiperSlides,
    SwiperSlidesLayard,
} from "../../components/UI/cards/Card";

//!--------- Swiper 1 ---------
export function CardSwiper({ arr }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 960);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth <= 960);
        };
        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    });

    const slides = arr.map((item) => (
        <SwiperSlide key={item.id} className="w-full">
            <SwiperSlides item={item} />
        </SwiperSlide>
    ));

    //! Swiper has style properties like = z-1, overflow-hidden
    const swiper = (
        <Swiper
            className="relative"
            spaceBetween={0}
            slidesPerView={`${windowWidth ? 1.3 : 3}`}
        >
            <SwiperButtonSm />
            {slides}
        </Swiper>
    );

    return <div>{swiper}</div>;
}

//!--------- Swiper 2 ---------
export function CardSwiperLg({ arr }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 960);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth <= 960);
        };
        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    });

    const slides = arr.map((item) => (
        <SwiperSlide key={item.id} className="w-full">
            <SwiperSlidesLayard item={item} />
        </SwiperSlide>
    ));

    const swiper = (
        <div className="relative">
            <Swiper spaceBetween={0} slidesPerView={`${windowWidth ? 1.2 : 3}`}>
                {slides}
                <SwiperButton />
            </Swiper>
        </div>
    );

    return <div>{swiper}</div>;
}
