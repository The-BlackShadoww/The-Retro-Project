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
    const hide = (
        <div className="akira bg-green-300 p-5 w-64 h-screen flex justify-center text-2xl fixed top-0 right-0 translate-x-full">
            <span onClick={siderHandler} className="cursor-pointer">
                <Cross1Icon />
            </span>
            <div>
                <ul>
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                    <li>
                        <a href="#">Kids</a>
                    </li>
                    <li>
                        <a href="#">New</a>
                    </li>
                </ul>
            </div>
        </div>
    );

    const show = (
        <div className="bg-slate-200 p-5 w-64 h-screen text-1xl fixed top-0 right-0 transition-all">
            <div
                onClick={siderHandler}
                className="cursor-pointer w-full flex justify-end"
            >
                <Cross1Icon />
            </div>
            <div className="mt-4">
                <div className="flex flex-col">
                    <a href="#" className="flex justify-between items-center">
                        Men
                        <ChevronRightIcon />
                    </a>
                    <a
                        href="#"
                        className="flex justify-between items-center mt-3"
                    >
                        Women
                        <ChevronRightIcon />
                    </a>
                    <a
                        href="#"
                        className="flex justify-between items-center mt-3"
                    >
                        Kids
                        <ChevronRightIcon />
                    </a>
                    <a
                        href="#"
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
                    <a href="#" className="text-sm mt-3 flex items-center">
                        <span className="mr-4">
                            <BackpackIcon />
                        </span>
                        Bag
                    </a>
                    <a href="#" className="text-sm mt-3 flex items-center">
                        <span className="mr-4">
                            <BoxIcon />
                        </span>
                        Orders
                    </a>
                    <a href="#" className="text-sm mt-3 flex items-center">
                        <span className="mr-4">
                            <ZoomInIcon />
                        </span>
                        Find a store
                    </a>
                    <a href="#" className="text-sm mt-3 flex items-center">
                        <span className="mr-4">
                            <QuestionMarkCircledIcon />
                        </span>
                        Help
                    </a>
                </div>
            </div>
        </div>
    );

    return <div>{handler ? show : hide}</div>;
};

export default SideNav;
