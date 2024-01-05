import React from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { FilterIcon } from "../../assests/icons/Icons";

const TopNav = ({
    scrollY,
    releasesNumber,
    handleFilter,
    handleSort,
    isFilter,
    isSortOpen,
}) => {
    return (
        <div
            className={`flex tablet:flex-row flex-col tablet:px-0 px-4  tablet:items-center w-full tablet:h-[60px] h-auto ${
                scrollY >= 20 ? "fixed top-0 z-10" : "relative"
            }  bg-white`}
        >
            <div>
                <h1 className="text-2xl font-medium">
                    New Releases<span>({releasesNumber})</span>
                </h1>
            </div>
            {/* Nav */}
            <div className="flex justify-center flex-grow-[1] ">
                <nav>
                    <ul>
                        <li>CategoryNav</li>
                    </ul>
                </nav>
            </div>
            {/* Top Navigation */}
            <div className="flex items-center ">
                <button
                    className="flex items-center mr-6 text-lg"
                    onClick={handleFilter}
                >
                    <span className="pr-2">
                        {isFilter ? "Hide " : "Show "}Filters
                    </span>
                    <FilterIcon />
                </button>
                <button
                    className="tablet:flex hidden items-center text-lg"
                    onClick={handleSort}
                >
                    <span className="pr-2">Sort By</span>
                    {isSortOpen ? <RxCaretUp /> : <RxCaretDown />}
                </button>
                <div
                    className={`absolute top-[60px] right-0 text-right px-8 py-5 rounded-b-lg bg-white transition-all z-[100] ${
                        isSortOpen ? "block" : "hidden"
                    }`}
                >
                    <ul>
                        <li className="hover:opacity-50">
                            <button>Featured</button>
                        </li>
                        <li className="hover:opacity-50">
                            <button>Newest</button>
                        </li>
                        <li className="hover:opacity-50">
                            <button>Price: High-Low </button>
                        </li>
                        <li className="hover:opacity-50">
                            <button>Price: Low-High </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
