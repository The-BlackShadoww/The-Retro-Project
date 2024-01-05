import React, { useState } from "react";
import { FilterIcon } from "../../assests/icons/Icons";
import Gender from "./Gender";
import ShopByPrice from "./ShopByPrice";
import { CloseIcon } from "../../assests/icons/Icons";
import SortBy from "./SortBy";

const TabFilter = ({ isTabFilterOpen, handleTabFilter }) => {
    return (
        <div className="tablet:hidden block mt-3">
            <div className="flex justify-end">
                <button
                    className="flex items-center px-5 py-[2px] mr-6 text-lg border rounded-full hover:border-black"
                    onClick={handleTabFilter}
                >
                    <span className="pr-2">Filters</span>
                    <FilterIcon />
                </button>
            </div>
            <div
                className={`${
                    isTabFilterOpen ? "w-full h-screen" : "w-0 h-0"
                }    fixed ${
                    isTabFilterOpen ? "top-0" : "top-full"
                } left-0 py-4 px-7 z-10 bg-white`}
            >
                <div className="flex justify-between mb-7">
                    <span className="">Filters</span>
                    <button ton onClick={handleTabFilter}>
                        <CloseIcon />
                    </button>
                </div>
                <SortBy />
                <hr className="mb-4" />
                <Gender />
                <hr className="mb-4" />
                <ShopByPrice />
            </div>
        </div>
    );
};

export default TabFilter;
