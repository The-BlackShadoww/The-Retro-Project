import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import Searchbar from "./Searchbar";
import {
    BagIcon,
    PersonIcon,
    MagnifyingGlassIcon,
    HamburgerIcon,
} from "../../assests/icons/Icons";

const MobileNav = () => {
    const [sideNav, setSideNav] = useState(false);
    const [search, setSearch] = useState(false);

    const searchInputRef = useRef();

    const siderHandler = () => {
        setSideNav(!sideNav);
    };

    const searchHandler = () => {
        setSearch(!search);
        if (search) {
            searchInputRef.current.blur();
        } else {
            searchInputRef.current.focus();
        }
    };

    return (
        <div className="tablet:hidden block">
            <div className="">
                <div className="">
                    {/* Icons */}
                    <div className="flex justify-end items-center">
                        <span
                            onClick={searchHandler}
                            className="cursor-pointer px-2"
                        >
                            <MagnifyingGlassIcon />
                        </span>
                        <Link
                            to="https://learnwithsumit.com/"
                            className="cursor-pointer px-2"
                        >
                            <BagIcon />
                        </Link>
                        <Link to="" className="cursor-pointer px-2">
                            <PersonIcon />
                        </Link>
                        <span onClick={siderHandler} className="cursor-pointer px-2">
                            <HamburgerIcon />
                        </span>
                    </div>
                </div>
            </div>
            {/* Sider nav */}
            <SideNav handler={sideNav} siderHandler={siderHandler} />
            {/* Searchbar */}
            <Searchbar
                isSearch={search}
                searchHandler={searchHandler}
                searchInputRef={searchInputRef}
            />
        </div>
    );
};

export default MobileNav;

//! Previous code

// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import SideNav from "./SideNav";
// import Searchbar from "./Searchbar";
// import logo from "../../assests/images/logo(PNG).png";
// import magnifyingGlassIcon from "../../assests/images/magnifyingIcon.png";
// import userIcon from "../../assests/images/userIcon.png";
// import bagIcon from "../../assests/images/bagIcon.png";
// import hamburgerIcon from "../../assests/images/hamburgerIcon.png";

// const MobileNav = () => {
//     const [sideNav, setSideNav] = useState(false);
//     const [search, setSearch] = useState(false);

//     const searchInputRef = useRef();

//     const siderHandler = () => {
//         setSideNav(!sideNav);
//     };

//     const searchHandler = () => {
//         setSearch(!search);
//         if (search) {
//             searchInputRef.current.blur();
//         } else {
//             searchInputRef.current.focus();
//         }
//     };
//     return (
//         <>
//             <div className="w-full bg-slate-300">
//                 <div className="w-full flex justify-between items-center max-h-16 ">
//                     {/* Logo */}
//                     <div className="items-center ">
//                         <Link to="/">
//                             <img src={logo} alt="logo" className="h-14" />
//                         </Link>
//                     </div>
//                     {/* Icons */}
//                     <div className="flex basis-3/6 justify-between items-center">
//                         <span
//                             onClick={searchHandler}
//                             className="cursor-pointer"
//                         >
//                             <img
//                                 src={magnifyingGlassIcon}
//                                 alt="magnify"
//                                 className="h-6"
//                             />
//                         </span>
//                         <a
//                             href="https://learnwithsumit.com/"
//                             className="cursor-pointer"
//                         >
//                             <img src={bagIcon} alt="magnify" className="h-6" />
//                         </a>
//                         <a
//                             href="https://learnwithsumit.com/"
//                             className="cursor-pointer"
//                         >
//                             <img
//                                 src={userIcon}
//                                 alt="user icon"
//                                 className="h-6"
//                             />
//                         </a>
//                         <span onClick={siderHandler} className="cursor-pointer">
//                             <img
//                                 src={hamburgerIcon}
//                                 alt="hamburger"
//                                 className="h-6"
//                             />
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             {/* Sider nav */}
//             <SideNav handler={sideNav} siderHandler={siderHandler} />
//             {/* Searchbar */}
//             <Searchbar
//                 isSearch={search}
//                 searchHandler={searchHandler}
//                 searchInputRef={searchInputRef}
//             />
//         </>
//     );
// };

// export default MobileNav;
