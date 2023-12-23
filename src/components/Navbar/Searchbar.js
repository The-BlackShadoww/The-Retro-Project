import React from "react";
import magnifyingGlassIcon from "../../assests/images/magnifyingIcon.png";

const Searchbar = ({ isSearch, searchHandler, searchInputRef }) => {
    return (
        <div
            className={`w-full h-screen fixed top-0 left-0 p-3 bg-white transition-all ${
                isSearch ? null : "-translate-x-full"
            } z-[100]`}
        >
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center  bg-slate-200 rounded-full">
                    <span className="p-2 bg-slate-300 rounded-full">
                        <img
                            src={magnifyingGlassIcon}
                            className="h-5"
                            alt="img"
                        />
                    </span>
                    <input
                        type="text"
                        placeholder="search"
                        className="ml-2 p-2 bg-transparent outline-none placeholder:opacity-50 placeholder:text-sm"
                        ref={searchInputRef}
                    />
                </div>
                <span onClick={searchHandler} style={{ fontSize: 12 }}>
                    Cancel
                </span>
            </div>
            <div className="mt-16 p-3">
                <h6 className="text-gray-500">Popular Search Terms</h6>
                <ul className="mt-4">
                    <li>
                        <a href="https://learnwithsumit.com/">Air Force 1</a>
                    </li>
                    <li>
                        <a href="https://learnwithsumit.com/">Jordan</a>
                    </li>
                    <li>
                        <a href="https://learnwithsumit.com/">Air Max</a>
                    </li>
                    <li>
                        <a href="https://learnwithsumit.com/">Blazer</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Searchbar;
