import React from "react";
import { Outlet } from "react-router-dom";
import "../assests/styles/global.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="akira relative overflow-x-hidden">
            <div>
                {/* Be careful about the p-4 padding in every component */}
                <div className="tablet:p-0 md:p-0">
                    <Navbar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            {/* This padding is very important */}
            <div className="p-4 md:p-12 bg-[#111111] text-white">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
