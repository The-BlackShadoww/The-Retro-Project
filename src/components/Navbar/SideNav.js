import React from "react";
import {
    Cross1Icon,
    ChevronRightIcon,
    BackpackIcon,
    QuestionMarkCircledIcon,
    ZoomInIcon,
    BoxIcon,
} from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import { Button, ButtonOutlined } from "../UI/Buttons/Button";

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
                <Cross1Icon />
            </div>
            <div className="mt-4">
                <div className="flex flex-col">
                    <a
                        href="https://learnwithsumit.com/"
                        className="flex justify-between items-center"
                    >
                        Men
                        <ChevronRightIcon />
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="flex justify-between items-center mt-3"
                    >
                        Women
                        <ChevronRightIcon />
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="flex justify-between items-center mt-3"
                    >
                        Kids
                        <ChevronRightIcon />
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="flex justify-between items-center mt-3"
                    >
                        New & Featured
                        <ChevronRightIcon />
                    </a>
                </div>

                <div className="mt-16 text-slate-600">
                    <Text size="2">Become a Retro member</Text>
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
                            <BackpackIcon />
                        </span>
                        Bag
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="text-sm mt-3 flex items-center"
                    >
                        <span className="mr-4">
                            <BoxIcon />
                        </span>
                        Orders
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="text-sm mt-3 flex items-center"
                    >
                        <span className="mr-4">
                            <ZoomInIcon />
                        </span>
                        Find a store
                    </a>
                    <a
                        href="https://learnwithsumit.com/"
                        className="text-sm mt-3 flex items-center"
                    >
                        <span className="mr-4">
                            <QuestionMarkCircledIcon />
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
