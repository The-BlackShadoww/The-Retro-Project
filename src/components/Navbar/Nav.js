import React from "react";
import logo from "../../assests/images/logo(PNG).png";
import "./Nav.css";
import {
    HamburgerMenuIcon,
    PersonIcon,
    ZoomInIcon,
    BackpackIcon,
    Cross1Icon,
} from "@radix-ui/react-icons";

const Nav = () => {
    return (
        <>
            <div className="flex justify-between items-center max-h-16 p-3 bg-purple-600">
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
                    <span className="cursor-pointer">
                        <HamburgerMenuIcon />
                    </span>
                </div>
            </div>
            <div className="akira bg-green-300 p-5 w-64 h-screen flex justify-center text-2xl">
                <span className="cursor-pointer">
                    <Cross1Icon />
                </span>
                <div>
                    <ul>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">Kids</a>
                        </li>
                        <li>
                            <a href="#">New</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Nav;
