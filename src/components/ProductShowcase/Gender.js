import React from "react";
import { CheckMarkIcon } from "../../assests/icons/Icons";

const Gender = () => {
    return (
        <div className={`pt-3 pb-6 font-medium`}>
            <h4>Gender</h4>
            <ul className="pt-4">
                <li className="flex cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkboxForMen"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                    />
                    <label
                        for="checkboxForMen"
                        className="pl-2 cursor-pointer hover:opacity-50 "
                    >
                        Men
                    </label>
                    <CheckMarkIcon />
                </li>

                <li className="flex cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkboxForWomen"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                    />
                    <label
                        for="checkboxForWomen"
                        className="pl-2 cursor-pointer hover:opacity-50"
                    >
                        Women
                    </label>
                    <CheckMarkIcon />
                </li>
                <li className="flex cursor-pointer">
                    <input
                        type="checkbox"
                        id="checkboxForKids"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                    />
                    <label
                        for="checkboxForKids"
                        className="pl-2 cursor-pointer hover:opacity-50"
                    >
                        Kid
                    </label>
                    <CheckMarkIcon />
                </li>
            </ul>
        </div>
    );
};

export default Gender;
