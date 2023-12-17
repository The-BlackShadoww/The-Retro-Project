import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export const Dropdown = ({ title, children }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };

    return (
        <div className="w-full mb-9">
            <div
                onClick={handleDropdown}
                className="flex justify-between items-center cursor-pointer"
            >
                <h6 className="text-sm">{title}</h6>
                {openDropdown ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div className={`${openDropdown ? null : "hidden"} transition-all`}>
                {children}
            </div>
        </div>
    );
};
