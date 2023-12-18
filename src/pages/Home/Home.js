import React from "react";
import Hero from "../../components/Hero/Hero";
import Trending from "../../components/Trending/Trending";
import Offer from "../../components/Offers/Offer";
import Featured from "../../components/Featured/Featured";
import Gift from "../../components/Gifts/Gift";
import Iconic from "../../components/Iconic/Iconic";
import Community from "../../components/Community/Community";
import Sport from "../../components/Sport/Sport";
import BottomNav from "../../components/Navbar/BottomNav";

const Home = () => {
    return (
        <main>
            <Hero />
            <Trending />
            <Offer />
            <Featured />
            <Gift />
            <Iconic />
            <Sport />
            <Community />
            <BottomNav />
        </main>
    );
};

export default Home;
