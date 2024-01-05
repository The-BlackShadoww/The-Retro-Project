import React from "react";
import { Link } from "react-router-dom";
import Gender from "./Gender";
import ShopByPrice from "./ShopByPrice";

const LeftSideNav = ({ scrollY, isFilter }) => {
    return (
        <div
            className={`${
                isFilter ? "w-[240px] tablet:block" : "w-0 tablet:hidden"
            } fixed ${
                scrollY >= 20 ? "top-[60px]" : "top-[18%]"
            }  left-[3rem] right-auto pr-16 overflow-y-auto inset-0 hidden`}
        >
            <nav className={`relative pt-3 pb-8`}>
                <ul>
                    <li className="pb-2 font-medium">
                        <Link>Clothings</Link>
                    </li>
                    <li className="pb-2 font-medium">
                        <Link>Shoes</Link>
                    </li>
                    <li className="pb-2 font-medium">
                        <Link>Accessories</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Gender />
            <hr />
            <ShopByPrice />
        </div>
    );
};

export default LeftSideNav;

// import React from "react";
// import { Link } from "react-router-dom";
// import Gender from "./Gender";
// import ShopByPrice from "./ShopByPrice";

// const LeftSideNav = ({ scrollY, isFilter }) => {
//     return (
//         <div
//             className={`${isFilter ? "w-[240px] block" : "w-0 hidden"} fixed ${
//                 scrollY >= 20 ? "top-[60px]" : "top-[18%]"
//             }  left-[3rem] right-auto pr-16 overflow-y-auto inset-0 bg-gray-400`}
//         >
//             <nav className={`relative pt-3 pb-8`}>
//                 <ul>
//                     <li className="pb-2 font-medium">
//                         <Link>Clothings</Link>
//                     </li>
//                     <li className="pb-2 font-medium">
//                         <Link>Shoes</Link>
//                     </li>
//                     <li className="pb-2 font-medium">
//                         <Link>Accessories</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <hr />
//             <Gender />
//             <hr />
//             <ShopByPrice />
//         </div>
//     );
// };

// export default LeftSideNav;
