import React from "react";
import {Swiper} from "../../lib/Swiper/Swiper";
import HeroImg from "../../assests/images/heroImg.jpg";

const Trending = () => {
    const arr = [
        {
            id: 1,
            img: HeroImg,
            desTxt: "Some random texts in details",
            smTxt: "some small txt",
            path: "/",
        },
        {
            id: 2,
            img: HeroImg,
            desTxt: "Some random texts in details",
            smTxt: "some small txt",
            path: "/",
        },
        {
            id: 3,
            img: HeroImg,
            desTxt: "Some random texts in details",
            smTxt: "some small txt",
            path: "/",
        },
    ];

    return (
        <div className="mt-24">
            <div className="mb-7">
                <h1>Trending</h1>
            </div>
            <div className="">
                <Swiper arr={arr} />
            </div>
        </div>
    );
};

export default Trending;
