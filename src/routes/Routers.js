import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
// import NewFeatured from "../pages/Product/NewFeatured";
import Product from "../pages/Product/Product";
import SingleProduct from "../pages/Product/SingleProduct";
import Bag from "../pages/Bag/Bag";
import Auth from "../pages/Auth/Auth";

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
                    {/* <Route path="new" element={<NewFeatured />} /> */}
                    <Route path="product" element={<Product />} />
                    <Route path="singleProduct" element={<SingleProduct />} />
                    <Route path="bag" element={<Bag />} />
                </Route>
                <Route path="/auth">
                    <Route index element={<Auth />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Routers;
