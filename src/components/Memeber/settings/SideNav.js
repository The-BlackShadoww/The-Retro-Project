import React from "react";
import { PersonIcon, WalletIcon, LinkIcon } from "../../../assests/icons/Icons";
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="max-w-[290px] w-full">
            <nav>
                <ul>
                    <li className="pb-5">
                        <Link to="">
                            <div className="flex items-center">
                                <PersonIcon />
                                <p className="pl-5 font-medium">
                                    Account Details
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="pb-5">
                        <Link to="payment">
                            <div className="flex items-center">
                                <WalletIcon />
                                <p className="pl-5 font-medium">
                                    Payment Methods
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="pb-5">
                        <Link to="">
                            <div className="flex items-center">
                                <LinkIcon />
                                <p className="pl-5 font-medium">
                                    Profile Visibility
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
