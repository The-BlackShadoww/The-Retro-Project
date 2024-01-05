import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import NewFeatured from "../pages/Product/NewFeatured";

const Routers = () => {
    return (
        <div>
            <Routes>
                {/* Parent route */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="men" element={<Men />} />
                    <Route path="women" element={<Women />} />
                    <Route path="kids" element={<Kids />} />
                    <Route path="new" element={<NewFeatured />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Routers;
