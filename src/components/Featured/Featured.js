import React from "react";
import featuredImg from "../../assests/images/featuredImg-5.webp";
import featuredIm2 from "../../assests/images/featuredImg-2.png";
import { ButtonWhite } from "../UI/Buttons/Button";
import { Link } from "react-router-dom";

const Featured = () => {
    return (
        <section className="mt-24">
            <div className="mb-7">
                <h1>Featured</h1>
            </div>
            <div className="flex flex-col gap-3">
                <Link to="/featured">
                    <div
                        className="w-full overflow-hidden relative"
                        style={{ height: "60vh" }}
                    >
                        <img
                            src={featuredImg}
                            alt="featured"
                            className="w-full h-full object-cover"
                        />
                        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40"></div>
                        <div className="absolute left-6 bottom-6 text-white">
                            <h1 className="mb-6">Latest from LeBron</h1>
                            <ButtonWhite path="/featured">Shop</ButtonWhite>
                        </div>
                    </div>
                </Link>
                {/* ---- 2 ---- */}
                <Link to="/featured">
                    <div
                        className="w-full overflow-hidden relative"
                        style={{ height: "60vh" }}
                    >
                        <img
                            src={featuredIm2}
                            alt="featured"
                            className="w-full h-full object-cover"
                        />
                        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40"></div>
                        <div className="absolute left-6 bottom-6 text-white">
                            <h1 className="mb-6">Stay warm looking cool</h1>
                            <ButtonWhite path="/featured">Shop</ButtonWhite>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Featured;
