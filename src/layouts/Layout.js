import React from "react";
import { Container } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";
import './Layout.css'
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav";

const Layout = () => {
    return (
        <div className="akira bg-slate-400 relative overflow-x-hidden">
            <div>
                <Nav />
            </div>
            <Container>
                <Outlet />
            </Container>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
