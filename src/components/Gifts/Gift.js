import React from "react";
import { Link } from "react-router-dom";
import { DescriptiveText } from "../UI/Texts/Text";
import { Button } from "../UI/Buttons/Button";
import { WindowWidth } from "../../utils/windowWidth/WindowWidth";
import Section from "../../layouts/Section";

const Gift = () => {
    const src_lg = "/Retro/giftBanner-lg";
    const src_sm = "/Retro/giftBanner-sm";

    return (
        <Section title={"All The Greatest Gifts"}>
            <Link to="/" gifts>
                <div className="mb-3">
                    <WindowWidth screen={767} src_lg={src_lg} srt_sm={src_sm} />
                </div>
                <div className="text-left lg:text-center">
                    <h1 className="text-4xl">Top Gifts By Price</h1>
                    <div className="mt-10">
                        <DescriptiveText>
                            Order now to get your gifts in time for the
                            holidays. Shop new markdowns- no code needed. sale
                            ends 31.12.
                        </DescriptiveText>

                        <div className="mt-10 ">
                            <Button path="/30">Gifts under $30</Button>
                            <Button path="/">Gifts under $50</Button>
                            <Button path="/">Gifts under $100</Button>
                            <Button path="/">Shop all gifts</Button>
                        </div>
                    </div>
                </div>
            </Link>
        </Section>
    );
};

export default Gift;
