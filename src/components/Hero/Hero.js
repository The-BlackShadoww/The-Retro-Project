import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assests/images/HeroImg-2.jpg";
import { Button } from "../UI/Buttons/Button";
import { DescriptiveText } from "../UI/Texts/Text";

const Hero = () => {
    return (
        <div className="">
            <Link to="">
                <div>
                    <div className="w-ful">
                        <img src={HeroImg} alt="hero-img" className="w-full" />
                    </div>
                    <div className="mt-3">
                        <h1 className="text-4xl">New Arrivals to Discover</h1>
                        <div className="mt-7">
                            <DescriptiveText>
                                Enjoy the high quality experience
                            </DescriptiveText>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="w-full flex mt-8">
                <Button path={"/"}>men's</Button>
                <Button path={"/"}>Women's</Button>
                <Button path={"/"}>Kid's</Button>
            </div>
        </div>
    );
};

export default Hero;
