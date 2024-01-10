import React, { useState } from "react";

const DashNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const handleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div
            className={`max-w-[265px] w-full h-screen fixed top-0 ${
                isNavOpen ? "left-0" : "left-[-265px]"
            } left-0 px-2 border-r shadow-xl`}
        >
            <dvi className="relative w-full h-full">
                {/* Admin profile */}
                <div className="w-full h-[60px] relative p-2 border-b">
                    <div className="flex">
                        <div className="w-[40px] h-[40px] rounded-full bg-[#000]"></div>
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
                            isNavOpen ? "right-0" : "-right-9"
                        }`}
                    >
                        <button
                            onClick={handleNav}
                            className="p-2 bg-[#757575] rounded-md"
                        >
                            <span>{isNavOpen ? "<<" : ">>"}</span>
                        </button>
                    </div>
                </div>
            </dvi>
        </div>
    );
};

export default DashNav;

// import React, { useState } from "react";

// const DashNav = () => {
//     const [isNavOpen, setIsNavOpen] = useState(true);

//     const handleNav = () => {
//         setIsNavOpen(!isNavOpen);
//     };

//     return (
//         <div
//             className={`w-[15vw] h-screen fixed top-0 ${
//                 isNavOpen ? "left-0" : "left-[-15vw]"
//             } left-0 px-2 border-r shadow-xl`}
//         >
//             <dvi className="relative w-full h-full">
//                 {/* Admin profile */}
//                 <div className="w-full h-[60px] flex justify-between items-center border-b">
//                     <div className=" flex">
//                         <div className="w-[40px] h-[40px] rounded-full bg-[#000]"></div>
//                         <div className="pl-2 leading-[10px]">
//                             <span className="text-base font-semibold">
//                                 Admin Name
//                             </span>
//                             <br />
//                             <span className="text-xs">Admin</span>
//                         </div>
//                     </div>
//                     <div className="">
//                         <button
//                             onClick={handleNav}
//                             className="p-1 border rounded-md"
//                         >
//                             <span>{"<<"}</span>
//                         </button>
//                     </div>
//                 </div>
//             </dvi>
//         </div>
//     );
// };

// export default DashNav;
