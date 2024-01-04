import React from "react";
import { Link } from "react-router-dom";
import { SmallText } from "../UI/Texts/Text";
import { Dropdown } from "../UI/Dropdowns/Dropdown";
import Section from "../../layouts/Section";

const BottomNav = () => {
    const dropDowns = (
        // <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5 md:mx-auto md:w-[100%] lg:w-[50%] lg:p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5 md:mx-auto w-full xl:w-container_70 lg:p-5">
            {/* 1 */}
            <Dropdown title="Featured">
                <ul className="md:py-2 md:px-0 p-5">
                    <li>
                        <Link to="">
                            <SmallText>Air Force 1</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Metcon</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Air Max 270</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Air Max 97</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Blazer</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Pegasus</SmallText>
                        </Link>
                    </li>
                </ul>
            </Dropdown>
            {/* 2 */}
            <Dropdown title="Shoes">
                <ul className="md:py-2 md:px-0 p-5">
                    <li>
                        <Link to="">
                            <SmallText>Air Force 1</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Metcon</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Air Max 270</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Air Max 97</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Blazer</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Pegasus</SmallText>
                        </Link>
                    </li>
                </ul>
            </Dropdown>
            {/* 3 */}
            <Dropdown title="Clothing">
                <ul className="md:py-2 md:px-0 p-5">
                    <li>
                        <Link to="">
                            <SmallText>Air Force 1</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Metcon</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Air Max 270</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Air Max 97</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Blazer</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Pegasus</SmallText>
                        </Link>
                    </li>
                </ul>
            </Dropdown>
            {/* 4 */}
            <Dropdown title="Kids">
                <ul className="md:py-2 md:px-0 p-5">
                    <li>
                        <Link to="">
                            <SmallText>Air Force 1</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Metcon</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Air Max 270</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Air Max 97</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Blazer</SmallText>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <SmallText>Pegasus</SmallText>
                        </Link>
                    </li>
                </ul>
            </Dropdown>
        </div>
    );

    return <Section title={""}>{dropDowns}</Section>;
};

export default BottomNav;
