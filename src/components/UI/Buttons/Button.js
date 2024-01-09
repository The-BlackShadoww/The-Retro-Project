import React from "react";
import { Link } from "react-router-dom";
import "../../../assests/styles/global.css";

export const Button = ({ title, children, path }) => {
    return (
        <button className="Poppins text-white text-sm bg-[#111111] px-5 py-2 mx-1 md:my-0 my-2 rounded-full transition-all hover:opacity-50">
            <Link to={path} className="font-semibold text-base">
                {children}
                {title}
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

export const LargeButtonBlack = ({ children, path }) => {
    return (
        <Link to={path}>
            <button className="w-full bg-black text-white text-lg font-semibold p-4 my-3 rounded-full hover:opacity-50">
                {children}
            </button>
        </Link>
    );
};

export const LargeButtonWhite = ({ children, path }) => {
    return (
        <Link to={path}>
            <button className="w-full bg-white text-black text-lg font-semibold p-4 border border-gray-200 rounded-full flex justify-center items-center hover:border-black">
                {children}
            </button>
        </Link>
    );
};


