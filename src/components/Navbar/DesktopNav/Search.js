import React from "react";
import { Link } from "react-router-dom";
import "../Nav.css";
import {
    MagnifyingGlassIcon,
    CloseIcon,
    BagIcon,
    HeartIcon,
} from "../../../assests/icons/Icons";
import Image from "../../../assests/images/featuredImg-5.webp";

const Search = () => {
    return (
        <div className="w-full h-[312px] inline-block absolute top-0 left-0 z-[5] px-4 text-start overflow-y-scroll bg-indigo-300">
            {/* Search Box */}
            <div className="max-w-[1920px] pt-3 m-auto bg-orange-600">
                {/* Flex here */}
                <div className="relative flex justify-end bg-red-500">
                    {/* pre search contain --> Notice: there is transform here */}
                    <div className="w-full inline-block px-[144px] m-auto bg-white">
                        {/* Input Box --> Note: -translate-x-[50vw]*/}
                        <div className="relative w-[656px] max-w-[656px] my-auto mx-0 transform float-right">
                            {/* Visibility will be hidden and will be visible when nav is opened */}
                            <input
                                className="w-full h-10 m-auto py-2 pl-[44px] pr-[50px] visible cursor-text bg-gray-100 text-inherit outline-none border-none rounded-full "
                                type="search"
                                tabIndex="0"
                                placeholder="Search"
                            />
                            <button className="absolute top-[2px] right-[2px] px-2 py-[6px] inline-flex rounded-full z-[2] text-center hover:bg-gray-200">
                                <CloseIcon />
                            </button>
                            <button className="absolute top-[2px] left-[2px] px-2 py-[6px] flex items-center  rounded-full hover:bg-gray-200">
                                <MagnifyingGlassIcon />
                            </button>
                        </div>
                        <button className="absolute top-2 right-8 visible bg-transparent">
                            Cancel
                        </button>
                    </div>
                </div>
                {/* Links contain -- pre-l-vs-box ta-sm-l*/}
                {/* Note: Animation TranslateY */}
                <div className="pt-[46px] px-8 bg-green-400">
                    <div className="max-w-[656px] mx-auto bg-blue-700">
                        <p className="pb-4">Popular search items</p>
                        <ul>
                            <li>
                                <Link to="">Link 1</Link>
                            </li>
                            <li>
                                <Link to="">Link 2</Link>
                            </li>
                            <li>
                                <Link to="">Link 3</Link>
                            </li>
                            <li>
                                <Link to="">Link 4</Link>
                            </li>
                            <li>
                                <Link to="">Link 5</Link>
                            </li>
                        </ul>
                    </div>
                    {/* pre-l-vs-overlay bg-white u-full-width flx-dir-lg-r z1 d-lg-flx */}
                    <div className="w-full flex flex-row bg-amber-400">
                        <div className="w-[16.6666667%] pr-4 text-left flex flex-col">
                            <p className="pb-4">Top Suggestions</p>
                            <ul>
                                <li>
                                    <Link to="">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="">Link 3</Link>
                                </li>
                                <li>
                                    <Link to="">Link 4</Link>
                                </li>
                                <li>
                                    <Link to="">Link 5</Link>
                                </li>
                            </ul>
                        </div>
                        {/* There will a spinner in this div*/}
                        <div></div>
                        {/* pre-l-vs-results bg-white pt12-sm pt0-lg mb12-sm d-sm-flx flx-dir-sm-r flx-wr-sm-w flx-wr-lg-nw d-lg-flx */}
                        {/* There will be flex warp in small screen */}
                        <ul className="w-[100% - 100px] flex flex-row flex-nowrap mb-12">
                            <li className="w-1/5 pr-1">
                                <Link>
                                    <figure>
                                        <div>
                                            <img src={Image} alt="img" />
                                        </div>
                                    </figure>
                                    <figure className="pr-3 mt-3">
                                        <h4> Air jordan 1 low</h4>
                                        <p>Men's shoe</p>
                                        <div>
                                            <p>$180</p>
                                        </div>
                                    </figure>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Icons */}
            {/* <div className="inline-block pt-3">
                <Link
                    to=""
                    className="relative overflow-hidden text-center items-center p-[6px] mr-3"
                >
                    <HeartIcon />
                </Link>
                <Link>
                    <BagIcon />
                </Link>
            </div> */}
        </div>
    );
};

export default Search;
