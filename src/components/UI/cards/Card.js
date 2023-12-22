import React from "react";
import { Link } from "react-router-dom";
import { DescriptiveText, SmallText } from "../Texts/Text";
import { ButtonWhite } from "../Buttons/Button";
import { Card, CardLg } from "../Media/AdvancedImg";

//!--------- Card 1 ---------
export const SwiperSlides = ({ item }) => {
    const cards = (
        <Link to={item.path}>
            <div className="w-[97%]">
                <div>
                    <Card img={item.img} />
                </div>
                <div>
                    <span>
                        <SmallText>{item.smTxt}</SmallText>
                    </span>
                    <span>
                        <DescriptiveText>{item.desTxt}</DescriptiveText>
                    </span>
                </div>
            </div>
        </Link>
    );

    return <div>{cards}</div>;
};

//!--------- Card 2 ---------
export const SwiperSlidesLayard = ({ item, windowWidth }) => {
    const cards = (
        <Link to={item.path}>
            <div className="relative w-[97%]">
                <div className="absolute bottom-5 left-7 md:bottom-10 md:left-10 text-white">
                    <p className="text-sm">{item.smTxt}</p>
                    <p className="mb-5 mt-1">{item.bigTxt}</p>
                    <ButtonWhite path={item.path}>{item.button}</ButtonWhite>
                </div>
                <div className={``}>
                    <CardLg img={item.img} />
                </div>
            </div>
        </Link>
    );
    return <div>{cards}</div>;
};
