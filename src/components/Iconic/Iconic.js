import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";

const Iconic = () => {
    const arr = [
        {
            id: 1,
            img: "/Retro/shoe-2",
            desTxt: "Air jordan 1",
            path: "/jordan",
        },
        {
            id: 2,
            img: "/Retro/shoe-2",
            desTxt: "Air jordan 1",
            path: "/air",
        },
        {
            id: 3,
            img: "/Retro/shoe-4",
            desTxt: "Air jordan 1",
            path: "/",
        },
        {
            id: 3,
            img: "/Retro/shoe-7",
            desTxt: "Air jordan 1",
            path: "/",
        },
        {
            id: 3,
            img: "/Retro/shoe-4",
            desTxt: "Air jordan 1",
            path: "/",
        },
        {
            id: 3,
            img: "/Retro/shoe-6",
            desTxt: "Air jordan 1",
            path: "/",
        },
    ];
    return (
        <section className="mt-24">
            <div className="mb-7">
                <h1>Always Iconic</h1>
            </div>
            <div className="">
                <CardSwiper arr={arr} />
            </div>
        </section>
    );
};

export default Iconic;
