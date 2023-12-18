import React from "react";
import { Link } from "react-router-dom";
import { DescriptiveText, SmallText } from "../Texts/Text";
import { ButtonWhite } from "../Buttons/Button";

//!--------- Card 1 ---------
export const SwiperSlides = ({ item }) => {
    const cards = (
        <Link to={item.path}>
            <div className="" style={{ width: "97%" }}>
                <div>
                    <img
                        src={item.img}
                        alt="img"
                        className="w-full object-cover"
                        style={{
                            height: 300,
                            backgroundPosition: "center",
                        }}
                    />
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
export const SwiperSlidesLayard = ({ item }) => {
    const cards = (
        <Link to={item.path}>
            <div className="relative overflow-hidden" style={{ width: "95%" }}>
                <div className="absolute bottom-5 left-7 text-white">
                    <p className="text-sm">{item.smTxt}</p>
                    <p className="mb-5 mt-1">{item.bigTxt}</p>
                    <ButtonWhite path={item.path}>{item.button}</ButtonWhite>
                </div>
                <div className="w-full h-96">
                    <img
                        src={item.img}
                        alt="img"
                        className="w-full h-full object-cover bg-center"
                    />
                </div>
            </div>
        </Link>
    );
    return <div>{cards}</div>;
};
