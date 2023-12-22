import React from "react";
import { Container } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";
import "../assests/styles/global.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="akira relative overflow-x-hidden">
            <div>
                {/* Be careful about the p-4 padding in every component */}
                <div className="p-4 tablet:p-0 md:p-0">
                    <Navbar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <div className="mt-5 p-4 md:p-12 bg-[#111111] text-white">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
