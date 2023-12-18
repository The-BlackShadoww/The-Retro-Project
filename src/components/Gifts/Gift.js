import React from "react";
import { Link } from "react-router-dom";
import GiftBannerImg from "../../assests/images/giftImg-4.webp";
import { DescriptiveText } from "../UI/Texts/Text";
import { Button } from "../UI/Buttons/Button";

const Gift = () => {
    return (
        <section className="mt-24">
            <div className="mb-7">
                <h1>All The Greatest Gifts</h1>
            </div>
            <Link to="/" gifts>
                <div className="w-full mb-3 bg-slate-500">
                    <img
                        src={GiftBannerImg}
                        alt="gifts"
                        className="w-full h-full"
                    />
                </div>
                <h1 className="text-4xl">Top Gifts By Price</h1>
                <div className="mt-10">
                    <DescriptiveText>
                        Order now to get your gifts in time for the holidays.
                        Shop new markdowns- no code needed. sale ends 31.12.
                    </DescriptiveText>

                    <div className="mt-10 ">
                        <Button path="/30">Gifts under $30</Button>
                        <Button path="/">Gifts under $50</Button>
                        <Button path="/">Gifts under $100</Button>
                        <Button path="/">Shop all gifts</Button>
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default Gift;
