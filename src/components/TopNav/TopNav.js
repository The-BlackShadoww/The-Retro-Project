import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <div className="w-full px-10 py-2 flex justify-end bg-[#f5f5f5]">
            <p className="font-medium text-sm pr-4">Hi, user name</p>
            <Link to="/auth" className="font-medium text-sm pr-4">
                Login
            </Link>
            <Link to="/member/profile">
                <span>
                    <svg
                        aria-hidden="true"
                        class="pre-nav-design-icon"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="22px"
                        height="22px"
                        fill="none"
                        data-var="glyph"
                        // style="display: inline-block;"
                    >
                        <path
                            fill="currentColor"
                            d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"
                        ></path>
                    </svg>
                </span>
            </Link>
        </div>
    );
};

export default TopNav;
