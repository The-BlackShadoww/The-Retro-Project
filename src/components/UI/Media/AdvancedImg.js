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
// export const Banner = ({ img }) => {
//     return (
//         <AdvancedImage
//             cldImg={cld
//                 .image(img)
//                 .resize(Resize.crop().width(1980).height(1600).gravity("auto"))
//                 .quality(100)
//                 .format("auto")}
//         />
//     );
// };

export const Banner = ({ img }) => {
    return (
        <AdvancedImage
            cldImg={cld
                .image(img)
                .resize(Resize.crop().width(2500).height(1000).gravity("auto"))
                .quality(100)
                .format("auto")}
        />
    );
};

//!--------- Card Image ---------
export const CardImg = ({ img }) => {
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
export const CardImgLg = ({ img }) => {
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

//!--------- Product Image ---------
// export const ProductImg = ({ img }) => {
//     return (
//         <AdvancedImage
//             cldImg={cld
//                 .image(img)
//                 .resize(Resize.scale().width(1200).height(1280))
//                 .resize(Resize.crop().width(1500).height(1550).gravity("auto"))
//                 .quality("auto")
//                 .format("auto")}
//         />
//     );
// };
export const ProductImg = ({ img }) => {
    return (
        <AdvancedImage
            cldImg={cld
                .image(img)
                .resize(Resize.fill().width(1200).height(1280)) // Set maximum width and height
                .resize(Resize.crop().width(1200).height(1280).gravity("auto"))
                .quality("auto")
                .format("auto")}
        />
    );
};
