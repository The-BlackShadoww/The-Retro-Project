import React from "react";
import Hero from "../../components/Hero/Hero";
import Headline from "./Headline";
import Trending from "../../components/Trending/Trending";
import Offer from "../../components/Offers/Offer";
import Featured from "../../components/Featured/Featured";
import Gift from "../../components/Gifts/Gift";
import Iconic from "../../components/Iconic/Iconic";
import Community from "../../components/Community/Community";
import Sport from "../../components/Sport/Sport";
import BottomNav from "../../components/Navbar/BottomNav";
import CloudinarySdk from "../../lib/Cloudinary/CloudinarySdk";
import UploadWidget from "../../lib/Cloudinary/UploadWidget";

const Home = () => {
    return (
        <main>
            <Headline />
            <div className="mobile_sm:p-0 p-4">
                <Hero />
            </div>
            <div className="p-4 tablet:p-12 md:p-6">
                <Trending />
                <Offer />
                <Featured />
                <Gift />
                <Iconic />
                <Sport />
                <Community />
                <BottomNav />
                {/* <CloudinarySdk /> */}
                {/* <UploadWidget /> */}
            </div>
        </main>
    );
};

export default Home;
