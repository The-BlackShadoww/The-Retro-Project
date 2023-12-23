import React from "react";
import logo from "../../../assests/images/logo(PNG).png";
import { Link } from "react-router-dom";
import "../../../assests/styles/global.css";
import "../Nav.css";
import DropdownLinks from "./DropdownLinks";
import Search from "./Search";

const DesktopNav = () => {
    return (
        <div className="w-full h-[60px] z-[2] Poppins bg-white">
            <div className="flex justify-between items-center tablet:px-12">
                <div className="basis-1/4">
                    <span>
                        <Link to="/">
                            <img src={logo} alt="logo" className="h-14" />
                        </Link>
                    </span>
                </div>
                {/* Navigation */}
                <div className="basis-2/4">
                    <DropdownLinks />
                </div>
                {/* Search */}
                <Search />

                {/* Previous */}
                {/* <div className="basis-1/4 flex justify-end items-center">
                    <div className="flex px-2 py-2 mr-4 rounded-full bg-gray-100">
                        <MagnifyingGlassIcon />
                        <input
                            className="w-28 outline-none bg-transparent"
                            placeholder="Search"
                        />
                    </div>
                    <div className="flex">
                        <HeartIcon />
                        <BagIcon />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default DesktopNav;
