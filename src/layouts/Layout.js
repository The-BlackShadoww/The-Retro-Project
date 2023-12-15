import React from "react";
import { Container } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <Container className="bg-slate-400">
            <div className="">{children}</div>
        </Container>
    );
};

export default Layout;
