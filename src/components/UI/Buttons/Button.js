import React from "react";

export const Button = ({ children, path }) => {
    return (
        <span className="text-sm text-white bg-black p-3 mr-1 rounded-3xl transition-all hover:opacity-50">
            <a href={path}>{children}</a>
        </span>
    );
};

export const ButtonOutlined = ({ children, path }) => {
    return (
        <span className="text-sm text-black border border-gray-400 p-3 mr-1 rounded-full transition-all hover:border-gray-800">
            <a href={path}>{children}</a>
        </span>
    );
};
