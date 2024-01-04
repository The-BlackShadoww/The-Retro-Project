import React from "react";
import { Link } from "react-router-dom";
import "../../../assests/styles/global.css";

export const Button = ({ children, path }) => {
    return (
        <button className="Poppins text-white text-sm bg-[#111111] px-5 py-2 mx-1 md:my-0 my-2 rounded-full transition-all hover:opacity-50">
            <Link to={path} className="font-semibold text-base">
                {children}
            </Link>
        </button>
    );
};

export const ButtonWhite = ({ children, path }) => {
    return (
        <button className="roboto text-sm font-bold text-[#111111] bg-white px-5 py-2 mr-1 rounded-3xl transition-all hover:opacity-50">
            <Link to={path} className="font-semibold text-base">
                {children}
            </Link>
        </button>
    );
};

export const ButtonOutlined = ({ children, path }) => {
    return (
        <button className="roboto font-bold text-sm text-black border border-gray-400 p-3 mr-1 rounded-full transition-all hover:border-gray-800">
            <Link to={path}>{children}</Link>
        </button>
    );
};
