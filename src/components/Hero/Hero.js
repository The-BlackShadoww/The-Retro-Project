import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Buttons/Button";
import { DescriptiveText } from "../UI/Texts/Text";
import HeroBanner from "./HeroBanner";

const Hero = () => {
    return (
        <section className="">
            <Link to="">
                <div>
                    <HeroBanner />
                    <div className="mt-3 tablet:text-center">
                        <h1 className="tablet:text-6xl text-3xl tablet:mt-12">
                            New Arrivals to <br /> Discover
                        </h1>
                        <div className="mt-7">
                            <DescriptiveText>
                                Enjoy the high quality experience
                            </DescriptiveText>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="w-full flex mt-8 tablet:justify-center">
                <Button path={"/"}>Shop Men's</Button>
                <Button path={"/"}>Shop Women's</Button>
                <Button path={"/"}>Shop Kid's</Button>
            </div>
        </section>
    );
};

export default Hero;
