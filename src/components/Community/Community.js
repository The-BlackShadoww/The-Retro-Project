import React from "react";
import { Link } from "react-router-dom";
import { CardSwiperLg } from "../../lib/Swiper/Swiper";
import "../../assests/styles/global.css";
import { ThickArrowRightIcon, ThickArrowLeftIcon } from "@radix-ui/react-icons";

const Community = () => {
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
            id: 2,
            img: "/community-3",
            smTxt: "Member Product",
            bigTxt: "Your Exclusive Access",
            path: "/shop",
            button: "Shop",
        },
        {
            id: 1,
            img: "/community-2",
            smTxt: "Best of Retro",
            bigTxt: "It's better as a member",
            path: "/signup",
            button: "Sign Up",
        },
        {
            id: 1,
            img: "/Retro/community-4_hhlp80",
            smTxt: "Best of Retro",
            bigTxt: "It's better as a member",
            path: "/signup",
            button: "Sign Up",
        },
    ];

    return (
        <section className="mt-24">
            <span className="mb-7 -z-10">
                <h1>Retro Membership</h1>
            </span>
            <div>
                <CardSwiperLg arr={arr} />
            </div>
        </section>
    );
};

export default Community;
