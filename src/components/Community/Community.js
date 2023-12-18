import React from "react";
import { Link } from "react-router-dom";
import { SwiperLayard } from "../../lib/Swiper/Swiper";
import CommunityImg from "../../assests/images/giftImg-1 (1).jpg";
import CommunityImg2 from "../../assests/images/giftImg-2.jpg";

const Community = () => {
    const arr = [
        {
            id: 1,
            img: CommunityImg,
            smTxt: "Best of Retro",
            bigTxt: "It's better as a member",
            path: "/signup",
            button: "Sign Up",
        },
        {
            id: 2,
            img: CommunityImg2,
            smTxt: "Member Product",
            bigTxt: "Your Exclusive Access",
            path: "/shop",
            button: "Shop",
        },
    ];
    return (
        <section className="mt-24">
            <div className="mb-7 flex justify-between items-center">
                <h1>Retro Membership</h1>
                <Link to="/" className="text-sm">
                    Sign up
                </Link>
            </div>
            <div>
                <SwiperLayard arr={arr} />
            </div>
        </section>
    );
};

export default Community;
