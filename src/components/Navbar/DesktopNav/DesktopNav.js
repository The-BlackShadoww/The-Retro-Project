import React from "react";
import logo from "../../../assests/images/logo(PNG).png";
import { Link } from "react-router-dom";
import "../../../assests/styles/global.css";
import "../Nav.css";
import DropdownLinks from "./DropdownLinks";
import Search from "./Search";
import { BagIcon, HeartIcon } from "../../../assests/icons/Icons";

const DesktopNav = () => {
    return (
        <div className="max-w-[1920px] max-h-[60px] z-[2] Poppins bg-white">
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
                <div className="basis-1/4">
                    <div className="">
                        <Search />
                    </div>
                    <div className="inline-block pt-3">
                        {/* display inline-flex and non */}
                        <Link
                            to=""
                            className="relative overflow-hidden text-center items-center p-[6px] mr-3"
                        >
                            <HeartIcon />
                        </Link>
                        <Link>
                            <BagIcon />
                        </Link>
                    </div>
                </div>

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
