import React from "react";
import { Dropdown } from "../UI/Dropdowns/Dropdown";
import { Link } from "react-router-dom";

const FooterDropdown = () => {
    return (
        <div>
            {/* -------- 1 ------- */}
            <Dropdown title={"Get help"}>
                <ul>
                    <li>
                        <Link
                            to=""
                            style={{ fontSize: 7 }}
                            className="text-gray-400"
                        >
                            order Status
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={{ fontSize: 7 }}
                            className="text-gray-400"
                        >
                            Shipping and Delivery
                        </a>
                    </li>
                </ul>
            </Dropdown>
            {/* ------- 2 -------- */}
            <Dropdown title={"About Retro"}>
                <ul>
                    <li>
                        <a
                            href="#"
                            style={{ fontSize: 7 }}
                            className="text-gray-400"
                        >
                            order Status
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={{ fontSize: 7 }}
                            className="text-gray-400"
                        >
                            Shipping and Delivery
                        </a>
                    </li>
                </ul>
            </Dropdown>
            {/* ------- 3 ------ */}
            <Dropdown title={"Promotions & Discounts"}>
                <ul>
                    <li>
                        <a
                            href="#"
                            style={{ fontSize: 7 }}
                            className="text-gray-400"
                        >
                            order Status
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={{ fontSize: 7 }}
                            className="text-gray-400"
                        >
                            Shipping and Delivery
                        </a>
                    </li>
                </ul>
            </Dropdown>
        </div>
    );
};

export default FooterDropdown;
