import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import LeftSideNav from "./LeftSideNav";
import ProductGrid from "./ProductGrid";
import TabFilter from "./TabFilter";

const ProductShowcase = ({ data }) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilter, setIsFilter] = useState(true);
    const [isTabFilterOpen, setIsTabFilterOpen] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const controlScrollY = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", controlScrollY);
    });

    const handleSort = () => {
        setIsSortOpen(!isSortOpen);
    };

    const handleFilter = () => {
        setIsFilter(!isFilter);
    };

    const handleTabFilter = () => {
        setIsTabFilterOpen(!isTabFilterOpen);
    };

    const releasesNumber = data.length;

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
            />
            <div className="relative flex pt-4">
                <LeftSideNav scrollY={scrollY} isFilter={isFilter} />
                <ProductGrid data={data} isFilter={isFilter} />
            </div>
        </div>
    );

    return content;
};

export default ProductShowcase;
