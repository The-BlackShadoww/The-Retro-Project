import React from "react";
import { WindowWidth } from "../../utils/windowWidth/WindowWidth";

const HeroBanner = () => {
    return (
        <div>
            <WindowWidth
                screen={767}
                src_lg={"/Retro/heroBanner_r74rys"}
                srt_sm={"/Retro/heroBannerLong_fw837w"}
            />
        </div>
    );
};

export default HeroBanner;
