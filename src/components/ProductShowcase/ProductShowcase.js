import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import LeftSideNav from "./LeftSideNav";
import ProductGrid from "./ProductGrid";
import TabFilter from "./TabFilter";

const ProductShowcase = ({ data, productIds, selectProductsById }) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilter, setIsFilter] = useState(true);
    const [isTabFilterOpen, setIsTabFilterOpen] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const releasesNumber = data.length;

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const controlScrollY = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", controlScrollY);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleSort = () => {
        setIsSortOpen(!isSortOpen);
    };

    const handleFilter = () => {
        setIsFilter(!isFilter);
    };

    const handleTabFilter = () => {
        setIsTabFilterOpen(!isTabFilterOpen);
    };

    let content = (
        <div className="p-0 tablet:p-12 Poppins">
            <TopNav
                scrollY={scrollY}
                releasesNumber={releasesNumber}
                handleFilter={handleFilter}
                handleSort={handleSort}
                isFilter={isFilter}
                isSortOpen={isSortOpen}
            />

            <TabFilter
                handleTabFilter={handleTabFilter}
                isTabFilterOpen={isTabFilterOpen}
                releasesNumber={releasesNumber}
            />
            <div className="relative flex pt-4">
                <LeftSideNav scrollY={scrollY} isFilter={isFilter} />
                <ProductGrid
                    data={data}
                    isFilter={isFilter}
                    windowWidth={windowWidth}
                />
            </div>
        </div>
    );

    return content;
};

export default ProductShowcase;
