import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";

const Sport = () => {
    const arr = [
        {
            id: 1,
            img: "/basketball",
            desTxt: "Basketball",
            path: "/signup",
            button: "Sign Up",
        },
        {
            id: 2,
            img: "/tennis",
            desTxt: "Tennis",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 2,
            img: "/golf",
            desTxt: "Golf",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 2,
            img: "/training",
            desTxt: "Training",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 2,
            img: "/training",
            desTxt: "Training",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 2,
            img: "/training",
            desTxt: "Training",
            path: "/shop",
            button: "Shop",
        },
    ];
    return (
        <section className="mt-14">
            <div className="mb-7">
                <h1>Shop by Sport</h1>
            </div>
            <div>
                <CardSwiper arr={arr} />
            </div>
        </section>
    );
};

export default Sport;
