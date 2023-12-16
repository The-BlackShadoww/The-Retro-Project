import React, { useState } from "react";
import logo from "../../assests/images/logo(PNG).png";
import "./Nav.css";
import {
    HamburgerMenuIcon,
    PersonIcon,
    ZoomInIcon,
    BackpackIcon,
} from "@radix-ui/react-icons";
import SideNav from "./SideNav";

const Nav = () => {
    const [sideNav, setSideNav] = useState(false);

    const siderHandler = () => {
        setSideNav(!sideNav);
    };

    return (
        <div className="">
            <div className="flex justify-between items-center max-h-16 bg-purple-600">
                <div className="basis-3/5 bg-indigo-800 items-center">
                    <img src={logo} alt="logo" className="max-h-9" />
                </div>
                <div className="flex basis-2/5 justify-between bg-orange-600 items-center">
                    <span className="cursor-pointer">
                        <ZoomInIcon />
                    </span>
                    <span className="cursor-pointer">
                        <BackpackIcon />
                    </span>
                    <span className="cursor-pointer">
                        <PersonIcon />
                    </span>
                    <span onClick={siderHandler} className="cursor-pointer">
                        <HamburgerMenuIcon />
                    </span>
                </div>
                {/* Sider nav */}
                <SideNav handler={sideNav} siderHandler={siderHandler} />
            </div>
        </div>
    );
};

export default Nav;
