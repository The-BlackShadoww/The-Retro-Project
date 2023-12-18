import React from "react";
import { Link } from "react-router-dom";
import offerImg from "../../assests/images/offer.webp";
import { DescriptiveText } from "../UI/Texts/Text";
import { Button } from "../UI/Buttons/Button";

const Offer = () => {
    return (
        <section className="mt-24">
            <div className="mb-7">
                <h1>Happening Now</h1>
            </div>
            <Link to="">
                <div>
                    <div>
                        <img src={offerImg} alt="offer banner" />
                    </div>
                    <div className="mt-12">
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
