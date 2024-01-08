import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import Product from "../pages/Product/Product";
import SingleProduct from "../pages/Product/SingleProduct";
import Bag from "../pages/Bag/Bag";
import Auth from "../pages/Auth/Auth";
import Registration from "../components/Auth/Registration";
// import Member from "../pages/Member/Member";
// import Account from "../pages/Member/Account";
import AccountLayout from "../layouts/Member/AccountLayout";
import Orders from "../components/Memeber/Orders";
import Profile from "../components/Memeber/Profile";
import Favorites from "../components/Memeber/Favorites";
import Settings from "../components/Memeber/settings/Settings";
import AccDetails from "../components/Memeber/settings/AccDetails";
import Payment from "../components/Memeber/settings/Payment";

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
                    <Route path="product" element={<Product />} />
                    <Route path="singleProduct" element={<SingleProduct />} />
                    <Route path="bag" element={<Bag />} />
                    {/* Member */}
                    <Route path="/member" element={<AccountLayout />}>
                        <Route path="profile" element={<Profile />}></Route>
                        <Route path="order" element={<Orders />}></Route>
                        <Route path="favorites" element={<Favorites />}></Route>
                        {/* Settings */}
                        <Route path="settings" element={<Settings />}>
                            <Route index element={<AccDetails />}></Route>
                            <Route path="payment" element={<Payment />}></Route>
                        </Route>
                    </Route>
                </Route>
                {/* Auth routes */}
                <Route path="/auth">
                    <Route index element={<Auth />} />
                    <Route path="resignation" element={<Registration />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Routers;
