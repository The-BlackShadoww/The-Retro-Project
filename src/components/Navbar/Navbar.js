import React from "react";
import "./Nav.css";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="hidden md:block">
                    <DesktopNav />
                </div>
                <div className="md:hidden block">
                    <MobileNav />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
