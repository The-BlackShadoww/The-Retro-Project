import React from "react";
import "../../lib/Swiper/assets/css/swiper-bundle.min.css";
import "../../lib/Swiper/assets/css/style.css";
import { Link } from "react-router-dom";
import Swiper2 from "../../lib/Swiper/Swiper2";
import { ThickArrowLeftIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";

const Community2 = () => {
    const arr = [
        {
            id: 1,
            img: "/banner",
            smTxt: "Best of Retro",
            bigTxt: "It's better as a member",
            path: "/signup",
            button: "Sign Up",
        },
        {
            id: 2,
            img: "/women",
            smTxt: "Member Product",
            bigTxt: "Your Exclusive Access",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 3,
            img: "/community-3",
            smTxt: "Member Product",
            bigTxt: "Your Exclusive Access",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 4,
            img: "/community-2",
            smTxt: "Best of Retro",
            bigTxt: "It's better as a member",
            path: "/signup",
            button: "Sign Up",
        },
    ];

    return (
        <section className="mt-24">
            <div className="mb-7 flex justify-between items-center">
                <h1>Retro Membership</h1>
                <div className="flex items-center">
                    <Link to="/" className="text-sm sm:mr-5">
                        Sign up
                    </Link>
                    <div className="roboto sm:flex hidden">
                        <span className="bg-gray-200 p-5 rounded-full mx-1 cursor-pointer hover:bg-gray-300">
                            <ThickArrowLeftIcon
                                className="text-black"
                                size={50}
                            />
                        </span>
                        <span className="bg-gray-200 p-5 rounded-full mx-1 cursor-pointer hover:bg-gray-300">
                            <ThickArrowRightIcon
                                className="text-black"
                                size={50}
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <Swiper2 arr={arr} />
            </div>
        </section>
    );
};

export default Community2;
