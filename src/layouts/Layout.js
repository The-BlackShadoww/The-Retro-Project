import React from "react";
import { Container } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav";

const Layout = () => {
    return (
        <div className="akira relative overflow-x-hidden">
            <div className="p-4">
                <div>
                    <Nav />
                </div>
                <div mt="5">
                    <Outlet />
                </div>
            </div>
            <div className="mt-5 p-4 bg-black text-white">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
