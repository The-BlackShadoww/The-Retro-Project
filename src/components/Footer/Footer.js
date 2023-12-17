import React from "react";
import { Link } from "react-router-dom";
import {
    InstagramLogoIcon,
    TwitterLogoIcon,
    DiscordLogoIcon,
} from "@radix-ui/react-icons";
import FooterDropdown from "./FooterDropdown";

const Footer = () => {
    return (
        <div>
            {/* Top links */}
            <div className="my-4">
                <ul>
                    <li className="mb-2">
                        <Link href="#" style={{ fontSize: 10 }}>
                            Gift cards
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="#" style={{ fontSize: 10 }}>
                            Find a store
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="#" style={{ fontSize: 10 }}>
                            Become a member
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="#" style={{ fontSize: 10 }}>
                            Retro journal
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="#" style={{ fontSize: 10 }}>
                            Send us feedback
                        </Link>
                    </li>
                </ul>
                <hr />
            </div>
            {/* Dropdowns */}
            <div>
                <FooterDropdown />
            </div>
            {/* social icons */}
            <div className="flex my-8">
                <Link href="#" className="mr-2">
                    <InstagramLogoIcon />
                </Link>
                <Link href="#" className="mr-2">
                    <TwitterLogoIcon />
                </Link>
                <Link href="#" className="">
                    <DiscordLogoIcon />
                </Link>
            </div>
            {/* Location */}
            <div className="flex items-center my-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <p style={{ fontSize: 7 }} className="ml-2">
                    Bangladesh
                </p>
            </div>
            {/* Copy rights */}
            <div>
                <p className="text-gray-200 opacity-50" style={{ fontSize: 7 }}>
                    <p>&copy; 2023 Retro, Inc. All Rights Reserved</p>
                </p>
            </div>
            {/* Bottom links */}
            <div className="mt-8">
                <ul>
                    <li className="mt-3">
                        <Link
                            href="#"
                            style={{ fontSize: 8 }}
                            className="opacity-50 hover:opacity-100"
                        >
                            Guides
                        </Link>
                    </li>
                    <li className="mt-3">
                        <Link
                            href="#"
                            style={{ fontSize: 8 }}
                            className="opacity-50 hover:opacity-100"
                        >
                            Terms of sale
                        </Link>
                    </li>
                    <li className="mt-3">
                        <Link
                            href="#"
                            style={{ fontSize: 8 }}
                            className="opacity-50 hover:opacity-100"
                        >
                            Terms of use
                        </Link>
                    </li>
                    <li className="mt-3">
                        <Link
                            href="#"
                            style={{ fontSize: 8 }}
                            className="opacity-50 hover:opacity-100"
                        >
                            Retro Privacy policy
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
