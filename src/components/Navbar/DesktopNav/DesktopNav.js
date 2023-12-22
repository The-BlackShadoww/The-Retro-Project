import React from "react";
import logo from "../../../assests/images/logo(PNG).png";
import { Link } from "react-router-dom";
import "../../../assests/styles/global.css";
import "../Nav.css";
import DropdownLinks from "./DropdownLinks";
import HeartIcon from "../../../assests/icons/HeartIcon";
import BagIcon from "../../../assests/icons/BagIcon";
import MagnifyingGlassIcon from "../../../assests/icons/MagnifyingGlassIcon";

const DesktopNav = () => {
    return (
        <div className="w-full h-[60px] z-[2] roboto bg-white">
            <div className="flex justify-between items-center tablet:px-12">
                <div className="basis-1/4">
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-14" />
                    </Link>
                </div>
                {/* Navigation */}
                <div className="basis-2/4">
                    <DropdownLinks />
                </div>
                {/* Icons */}
                <div className="basis-1/4 flex justify-end">
                    <div className="mx-1">
                        <MagnifyingGlassIcon />
                       
                    </div>
                    <div className="mx-1 flex">
                        <HeartIcon />
                        <BagIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopNav;
