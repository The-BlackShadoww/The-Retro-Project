import React from "react";
import { Link } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import { DescriptiveText } from "../UI/Texts/Text";
import { Button } from "../UI/Buttons/Button";

const HeroContent = ({ data }) => {
    const content = data.map((item) => (
        <section key={item.id}>
            <Link to="">
                <div>
                    <HeroBanner img_lg={item.img_lg} img_sm={item.img_sm} />
                    <div className="mt-3 tablet:text-center">
                        <h1 className="tablet:text-6xl text-3xl tablet:mt-12">
                            {item.title}
                        </h1>
                        <div className="mt-7">
                            <DescriptiveText>{item.des_text}</DescriptiveText>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="w-full flex mt-8 tablet:justify-center">
                <Button path={"/"}>Shop </Button>
            </div>
        </section>
    ));

    return content;
};
export default HeroContent;
