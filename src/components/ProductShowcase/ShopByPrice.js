import React from "react";
import { CheckMarkIcon } from "../../assests/icons/Icons";

const ShopByPrice = () => {
    return (
        <div className={`pt-3 pb-6 font-medium`}>
            <h4>Shop By Price</h4>
            <ul className="pt-4">
                <li className="flex cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkboxFor0-25"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                    />
                    <label
                        for="checkboxFor0-25"
                        className="pl-2 cursor-pointer hover:opacity-50"
                    >
                        $0 - $25
                    </label>
                    <CheckMarkIcon />
                </li>
                <li className="flex cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkboxFor25-50"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                    />
                    <label
                        for="checkboxFor25-50"
                        className="pl-2 cursor-pointer hover:opacity-50"
                    >
                        $25 - $50
                    </label>
                    <CheckMarkIcon />
                </li>
                <li className="flex cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkboxFor50-100"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                    />
                    <label
                        for="checkboxFor50-100"
                        className="pl-2 cursor-pointer hover:opacity-50"
                    >
                        $50 - $100
                    </label>
                    <CheckMarkIcon />
                </li>{" "}
                <li className="flex cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkboxForOver100"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                    />
                    <label
                        for="checkboxForOver100"
                        className="pl-2 cursor-pointer hover:opacity-50"
                    >
                        over $100
                    </label>
                    <CheckMarkIcon />
                </li>
            </ul>
        </div>
    );
};

export default ShopByPrice;
