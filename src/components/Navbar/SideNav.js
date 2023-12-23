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

const SideNav = ({ handler, siderHandler }) => {
    const show = (
        <div
            className={`bg-slate-200 p-5 w-64 h-screen text-1xl fixed top-0 right-0 transition-all ${
                handler ? null : "translate-x-full"
            } z-[100]`}
        >
            <div
                onClick={siderHandler}
                className="cursor-pointer w-full flex justify-end"
            >
                <CloseIcon />
            </div>
            <div className="mt-4">
                <div className="flex flex-col">
                    <a
                        href="https://learnwithsumit.com/"
                        className="flex justify-between items-center"
                    >
                        Men <CaretRightIcon />
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="flex justify-between items-center mt-3"
                    >
                        Women <CaretRightIcon />
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="flex justify-between items-center mt-3"
                    >
                        Kids <CaretRightIcon />
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="flex justify-between items-center mt-3"
                    >
                        New & Featured <CaretRightIcon />
                    </a>
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
