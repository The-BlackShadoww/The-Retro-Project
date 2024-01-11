import React from "react";
import { CardImg } from "../UI/Media/AdvancedImg";

const DashNav = ({ isNavOpen, handleNav }) => {
    return (
        <div
            className={`${
                isNavOpen ? "w-[310px]" : "w-[50px]"
            }  h-screen  fixed top-0 left-0 px-0 z-[100]`}
        >
            {/* Fix Nav */}
            <div className="fixed w-[50px] h-full z-[10] overflow-hidden bg-[#f5f5f5]">
                div
            </div>
            {/* The Nav */}
            <div
                className={`absolute w-[260px] h-full ${
                    isNavOpen ? "left-[50px]" : "left-[-210px]"
                } shadow-xl z-[5] border-r border-gray-300 bg-white transition-all`}
            >
                {/* Admin profile */}
                <div className="w-full h-[60px] relative p-2 border-b bg-[#f5f5f5]">
                    <div className="flex items-center">
                        <div className="w-[40px] h-[40px] rounded-full border-2 overflow-hidden">
                            <CardImg img={"/Retro/dp"} />
                        </div>
                        <div className="pl-2 leading-[10px]">
                            <span className="text-base font-semibold">
                                Admin Name
                            </span>
                            <br />
                            <span className="text-xs">Admin</span>
                        </div>
                    </div>
                    <div
                        className={`absolute top-2 ${
                            isNavOpen ? "-right-5" : "-right-9"
                        }`}
                    >
                        <button
                            onClick={handleNav}
                            className="w-[35px] h-[35px] bg-black text-white rounded-full "
                        >
                            <span>{isNavOpen ? "<<" : ">>"}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashNav;

// import React from "react";
// import { CardImg } from "../UI/Media/AdvancedImg";

// const DashNav = ({ isNavOpen, handleNav }) => {
//     return (
//         <div
//             className={`max-w-[265px] w-full h-screen fixed top-0 ${
//                 isNavOpen ? "left-0" : "left-[-262px]"
//             } left-0 px-2 border-r shadow-xl z-[100]`}
//         >
//             {/* This div will get the width 265px */}
//             <div className="relative w-full h-full">
//                 {/* Admin profile */}
//                 <div className="w-full h-[60px] relative p-2 border-b">
//                     <div className="flex">
//                         <div className="w-[40px] h-[40px] rounded-full">
//                             <CardImg img={"/Retro/dp"} />
//                         </div>
//                         <div className="pl-2 leading-[10px]">
//                             <span className="text-base font-semibold">
//                                 Admin Name
//                             </span>
//                             <br />
//                             <span className="text-xs">Admin</span>
//                         </div>
//                     </div>
//                     <div
//                         className={`absolute top-2 ${
//                             isNavOpen ? "right-0" : "-right-9"
//                         }`}
//                     >
//                         <button
//                             onClick={handleNav}
//                             className="w-[35px] h-[35px] bg-[#757575] rounded-md"
//                         >
//                             <span>{isNavOpen ? "<<" : ">>"}</span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashNav;
