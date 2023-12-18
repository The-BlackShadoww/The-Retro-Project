import React from "react";
import { Swiper } from "../../lib/Swiper/Swiper";
import SportImg_1 from "../../assests/images/sport-10.webp";
import SportImg_2 from "../../assests/images/sport-1.webp";
import SportImg_3 from "../../assests/images/sport-15.webp";
import SportImg_4 from "../../assests/images/sport-14.webp";

const Sport = () => {
    const arr = [
        {
            id: 1,
            img: SportImg_2,
            desTxt: "Basketball",
            path: "/signup",
            button: "Sign Up",
        },
        {
            id: 2,
            img: SportImg_1,
            desTxt: "Tennis",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 2,
            img: SportImg_3,
            desTxt: "Golf",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 2,
            img: SportImg_4,
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
                <Swiper arr={arr} />
            </div>
        </section>
    );
};

export default Sport;
