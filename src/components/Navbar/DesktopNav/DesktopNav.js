import React from "react";
import DropdownLinks from "./DropdownLinks";

const DesktopNav = () => {
    return (
        <div className="w-full absolute left-0 top-0 text-center tablet:block hidden">
            <div className="text-center">
                <DropdownLinks />
            </div>
        </div>
    );
};

export default DesktopNav;
