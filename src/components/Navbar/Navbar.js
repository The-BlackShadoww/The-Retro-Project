import React from "react";
import { Logo } from "../../assests/icons/Icons";
import { BagIcon, HeartIcon } from "../../assests/icons/Icons";
import { Link } from "react-router-dom";
import "../../assests/styles/global.css";
import DesktopNav from "./DesktopNav/DesktopNav";
import Search from "./DesktopNav/Search";
import MobileNav from "./MobileNav";

const Navbar = () => {
    return (
        <header className="w-full h-[60px] relative z-[2] Poppins">
            <div className="max-w-[1920px] max-h-[60px] mx-auto tablet:pr-[38px] tablet:pl-[36px] pr-3 pl-4 opacity-100 flex items-center">
                <div className="z-[100] visible pl-3">
                    <Link
                        to="/"
                        className="my-[1px] h-[59px] w-[59px] block"
                    >
                        <Logo />
                    </Link>
                </div>
                <div className="w-[160px] flex-grow-[1] items-center">
                    <nav>
                        <MobileNav />
                        <DesktopNav />
                    </nav>
                    <Search />
                </div>
                {/* tablet:block hidden */}
                <div className="tablet:flex hidden z-[2]">
                    <Link to={""} className="mx-4"> 
                        <HeartIcon />
                    </Link>
                    <Link to={"/bag"}>
                        <BagIcon />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
