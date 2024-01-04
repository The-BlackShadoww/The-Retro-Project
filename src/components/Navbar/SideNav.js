import React from "react";
import { Button, ButtonOutlined } from "../UI/Buttons/Button";
import {
    CaretRightIcon,
    CloseIcon,
    BagIcon,
    FileIcon,
    StoreIcon,
    QuestionIcon,
} from "../../assests/icons/Icons";
import { Link } from "react-router-dom";

const SideNav = ({ handler, siderHandler }) => {
    const show = (
        <div
            className={`bg-white p-5 w-72 h-screen text-1xl fixed top-0 right-0 transition-all z-[100] ${
                handler ? null : "translate-x-full"
            }`}
        >
            <div
                onClick={siderHandler}
                className="cursor-pointer w-full flex justify-end"
            >
                <CloseIcon />
            </div>
            <div className="mt-4">
                <div className="flex flex-col">
                    <Link
                        to={"men"}
                        className="flex justify-between items-center"
                    >
                        Men <CaretRightIcon />
                    </Link>
                    <Link
                        to={"women"}
                        className="flex justify-between items-center mt-3"
                    >
                        Women <CaretRightIcon />
                    </Link>
                    <Link
                        to={"kids"}
                        className="flex justify-between items-center mt-3"
                    >
                        Kids <CaretRightIcon />
                    </Link>
                    <Link
                        to={"new"}
                        className="flex justify-between items-center mt-3"
                    >
                        New & Featured <CaretRightIcon />
                    </Link>
                </div>

                <div className="mt-16 text-slate-600">
                    <p>Become a Retro member</p>
                    <div className="mt-5 cursor-pointer">
                        <Button path="/join">Join Us</Button>
                        <ButtonOutlined path="/log">log in</ButtonOutlined>
                    </div>
                </div>

                <div className="mt-16">
                    <a
                        href="https://learnwithsumit.com/"
                        className="text-sm mt-3 flex items-center"
                    >
                        <span className="mr-4">
                            <BagIcon />
                        </span>
                        Bag
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="text-sm mt-3 flex items-center"
                    >
                        <span className="mr-4">
                            <FileIcon />
                        </span>
                        Orders
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="text-sm mt-3 flex items-center"
                    >
                        <span className="mr-4">
                            <StoreIcon />
                        </span>
                        Find a store
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="text-sm mt-3 flex items-center"
                    >
                        <span className="mr-4">
                            <QuestionIcon />
                        </span>
                        Help
                    </a>
                </div>
            </div>
        </div>
    );

    return <div>{show}</div>;
};

export default SideNav;
