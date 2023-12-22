import React from "react";
import { Link } from "react-router-dom";
import { DescriptiveText } from "../UI/Texts/Text";
import { Button } from "../UI/Buttons/Button";
import "../../assests/styles/global.css";
import { WindowWidth } from "../../utils/windowWidth/WindowWidth";

const Offer = () => {
    return (
        <section className="mt-24">
            <div className="mb-7">
                <h1>Happening Now</h1>
            </div>
            <Link to="">
                <div>
                    <div className="relative overflow-hidden w-full">
                        <div className=" absolute  2xl:left-8 2xl:top-[4rem]   xl:top-[3rem] xl:left-7   lg:top-12 lg:left-5   tablet:top-11 tablet:left-4   md:top-9 md:left-4  hidden md:block">
                            <h1 className="2xl:text-[3.5vw] xl:text-[3.2vw] lg:text-[3vw] tablet:text-[2.8vw]  md:text-[2.8vw] ">
                                Save up to 50%
                            </h1>
                            <p className="roboto my-2 xl:my-5 tablet:text-sm md:text-[10px]">
                                Order now to get your gifts in time for the
                                holidays.
                                <br /> Shop new markdowns- no code needed. sale
                                ends 31.12.
                            </p>
                            <div className="">
                                <Button>Shop Now</Button>
                            </div>
                        </div>
                        {/* image */}
                        <WindowWidth
                            screen={767}
                            src_lg={"/Retro/offer-2_t0xeb8"}
                            srt_sm={"/Retro/offer-3_fkduya"}
                        />
                    </div>

                    <div className="mt-12 md:hidden">
                        <DescriptiveText>
                            Order now to get your gifts in time for the
                            holidays. Shop new markdowns- no code needed. sale
                            ends 31.12.
                        </DescriptiveText>
                        <div className="mt-10">
                            <Button>Shop Now</Button>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default Offer;
