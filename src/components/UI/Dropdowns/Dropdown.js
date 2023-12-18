import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export const Dropdown = ({ title, children }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };

    const dropdownStyle = {
        maxHeight: openDropdown ? "1000px" : "0",
        opacity: openDropdown ? "1" : "0",
        visibility: openDropdown ? "visible" : "hidden",
        transformOrigin: "top",
        transform: openDropdown ? "scaleY(1)" : "scaleY(0.8)",
        transitionProperty: "max-height, opacity, visibility, transform",
        transitionDuration: openDropdown ? "0.5s" : "0.5s", // Adjust duration for reveal vs hide
        transitionTimingFunction: openDropdown ? "ease-in-out" : "ease-in-out", // Adjust timing for reveal vs hide
    };

    return (
        <div className="w-full mb-9">
            <div
                onClick={handleDropdown}
                className="flex justify-between items-center cursor-pointer"
            >
                <h6 className="text-sm">{title}</h6>
                {openDropdown ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div style={dropdownStyle}>{children}</div>
        </div>
    );
};

//! --------- 2 ----------
// import React, { useState } from "react";
// import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

// export const Dropdown = ({ title, children }) => {
//     const [openDropdown, setOpenDropdown] = useState(false);

//     const handleDropdown = () => {
//         setOpenDropdown(!openDropdown);
//     };

//     const dropdownStyle = {
//         maxHeight: openDropdown ? "1000px" : "0",
//         opacity: openDropdown ? "1" : "0",
//         visibility: openDropdown ? "visible" : "hidden",
//         transformOrigin: "top",
//         transform: openDropdown ? "scaleY(1)" : "scaleY(0.8)",
//         transitionProperty: "max-height, opacity, visibility, transform",
//         transitionDuration: openDropdown ? "0.5s" : "0.5s", // Adjust duration for reveal vs hide
//         transitionTimingFunction: openDropdown ? "ease-in-out" : "ease-in-out", // Adjust timing for reveal vs hide
//     };

//     return (
//         <div className="w-full mb-9 fill">
//             <div
//                 onClick={handleDropdown}
//                 className="flex justify-between items-center cursor-pointer"
//             >
//                 <h6 className="text-sm">{title}</h6>
//                 <span className="md:hidden">{openDropdown ? <MinusIcon /> : <PlusIcon />}</span>
//             </div>
//             <div className="md:max-h-96">{children}</div>
//         </div>
//     );
// };
