import React from "react";
import { cld } from "../../../config/Cloudinary/Cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { Resize } from "@cloudinary/url-gen/actions";

//!--------- General Image ---------
export const General = ({ img }) => {
    <AdvancedImage cldImg={cld.image(img)} />;
};

//!--------- Poster Image ---------
export const Poster = ({ img }) => {
    return (
        <AdvancedImage
            cldImg={cld
                .image(img)
                .resize(
                    Resize.crop().width(1300).height(1200).gravity("center")
                )
                .resize(Resize.scale().width(1300).height(1200))
                .quality("auto")
                .format("auto")}
        />
    );
};

//!--------- Banner Image ---------
export const Banner = ({ img }) => {
    return (
        <AdvancedImage
            cldImg={cld
                .image(img)
                .resize(Resize.crop().width(1980).height(1600).gravity("auto"))
                .quality(100)
                .format("auto")}
        />
    );
};

//!--------- Card Image ---------
export const Card = ({ img }) => {
    return (
        <AdvancedImage
            cldImg={cld
                .image(img)
                .resize(Resize.scale().width(1200).height(1200))
                .resize(Resize.crop().width(1200).height(1200).gravity("auto"))
                .quality("auto")}
        />
    );
};

//!--------- CardLg Image ---------
export const CardLg = ({ img }) => {
    return (
        <AdvancedImage
            cldImg={cld
                .image(img)
                .resize(Resize.scale().width(1200).height(1500))
                .resize(Resize.crop().width(1200).height(1500).gravity("auto"))
                .quality(100)
                .format("auto")}
        />
    );
};
