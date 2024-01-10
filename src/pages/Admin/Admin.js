import React from "react";
import { Outlet } from "react-router-dom";
import DashNav from "../../components/Admin/DashNav";
import "../../assests/styles/global.css";

const Admin = () => {
    return (
        <main className="w-full h-full relative Poppins">
            {/* DashNav has width 15vw */}
            <DashNav />
            <div className="w-[calc(100%-265px)] h-full absolute top-0 right-0">
                <Outlet />
            </div>
        </main>
    );
};

export default Admin;
