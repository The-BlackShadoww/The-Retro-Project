import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Settings = () => {
    return (
        <div className="pl-20">
            <div className="pb-5">
                <h1 className="text-2xl">Settings</h1>
            </div>
            <div className="flex flex-row mt-8">
                <SideNav />
                <Outlet />
            </div>
        </div>
    );
};

export default Settings;
