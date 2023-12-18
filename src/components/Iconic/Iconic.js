import React from "react";
import IconicImg from "../../assests/images/iconic-1.webp";
import IconicImg2 from "../../assests/images/iconic-3.jpeg";
import IconicImg3 from "../../assests/images/iconic-6.webp";
import IconicImg4 from "../../assests/images/iconic-8.webp";
import { Swiper } from "../../lib/Swiper/Swiper";

const Iconic = () => {
    const arr = [
        {
            id: 1,
            img: IconicImg,
            desTxt: "Air jordan 1",
            path: "/jordan",
        },
        {
            id: 2,
            img: IconicImg2,
            desTxt: "Air jordan 1",
            path: "/air",
        },
        {
            id: 3,
            img: IconicImg3,
            desTxt: "Air jordan 1",
            path: "/",
        },
        {
            id: 3,
            img: IconicImg4,
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
                <Swiper arr={arr} />
            </div>
        </section>
    );
};

export default Iconic;
