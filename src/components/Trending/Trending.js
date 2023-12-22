import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";

const Trending = () => {
    const arr = [
        {
            id: 1,
            img: "/Retro/trending-1",
            desTxt: "Some random texts in details",
            smTxt: "some small txt",
            path: "/",
        },
        {
            id: 2,
            img: "/Retro/trending-1",
            desTxt: "Some random texts in details",
            smTxt: "some small txt",
            path: "/",
        },
        {
            id: 3,
            img: "/Retro/trending-1",
            desTxt: "Some random texts in details",
            smTxt: "some small txt",
            path: "/",
        },
        {
            id: 3,
            img: "/Retro/trending-1",
            desTxt: "Some random texts in details",
            smTxt: "some small txt",
            path: "/",
        },
        {
            id: 3,
            img: "/Retro/trending-1",
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
                <CardSwiper arr={arr} />
            </div>
        </div>
    );
};

export default Trending;
