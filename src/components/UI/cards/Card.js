import React from "react";
import { Link } from "react-router-dom";
import { DescriptiveText, SmallText } from "../Texts/Text";
import { ButtonWhite } from "../Buttons/Button";
import { CardImg, CardImgLg, ProductImg } from "../Media/AdvancedImg";

//!--------- Card 1 ---------
export const SwiperSlides = ({ item }) => {
    const cards = (
        <Link to={item.path}>
            <div className="w-[97%]">
                <div>
                    <CardImg img={item.img} />
                </div>
                <div>
                    <span>
                        <SmallText>{item.smTxt}</SmallText>
                    </span>
                    <span>
                        <DescriptiveText>{item.desTxt}</DescriptiveText>
                    </span>
                    <span>
                        <DescriptiveText>{item.category}</DescriptiveText>
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
                    <CardImgLg img={item.img} />
                </div>
            </div>
        </Link>
    );
    return <div>{cards}</div>;
};

//!--------- Card 3 ---------
export const ProductSwiperSlides = ({ item, windowWidth }) => {
    const cards = (
        <Link to={item.path}>
            <div className="relative w-[97%]">
                <div className={``}>
                    <ProductImg img={item.img} />
                </div>
                <div className="md:bottom-10 md:left-10 text-black">
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <h2 className="text-lg font-medium text-black opacity-50 mt-1">
                        {item.category}
                    </h2>
                    <h2 className="text-lg font-medium mb-5 mt-1">
                        ${item.price}
                    </h2>
                </div>
            </div>
        </Link>
    );
    return <div>{cards}</div>;
};

export const ProductMobileSwiperSlides = ({ item, windowWidth }) => {
    const cards = (
        <div className="relative w-[100%]">
            <div className={``}>
                <ProductImg img={item.img} />
            </div>
        </div>
    );
    return <div>{cards}</div>;
};
