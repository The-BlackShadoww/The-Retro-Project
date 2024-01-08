import React, { useState } from "react";
import { CheckMarkIcon } from "../../assests/icons/Icons";
import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const passwordController = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main>
            <div className="max-w-[500px] h-auto mt-8 px-4 mx-auto flex flex-col">
                <div>
                    <h1 className="text-4xl font-bold">
                        Now let's make you a Retro Member
                    </h1>
                </div>
                <div className="mt-8">
                    <div className="relative w-full  rounded-lg border  mt-8 border-black">
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-transparent outline-none px-4 py-3 "
                        />
                        <label
                            for="email"
                            className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
                        >
                            E-mail
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative w-full  rounded-lg border mt-8 border-black">
                            <input
                                type="text"
                                id="firstName"
                                className="w-full bg-transparent outline-none px-4 py-3 "
                            />
                            <label
                                for="firstName"
                                className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
                            >
                                First Name
                            </label>
                        </div>
                        <div className="relative w-full  rounded-lg border mt-8 border-black">
                            <input
                                type="text"
                                id="lastName"
                                className="w-full bg-transparent outline-none px-4 py-3 "
                            />
                            <label
                                for="lastName"
                                className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
                            >
                                Last Name
                            </label>
                        </div>
                    </div>
                    <div className="relative w-full flex items-center  rounded-lg border mt-8 border-black">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="w-[92.5%] bg-transparent outline-none px-4 py-3 "
                        />
                        <label
                            for="password"
                            className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
                        >
                            Password
                        </label>
                        <span
                            className="cursor-pointer"
                            onClick={passwordController}
                        >
                            {showPassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                    <div className="relative w-full  rounded-lg border mt-8 border-black">
                        <input
                            type="date"
                            id="password"
                            className="w-full bg-transparent outline-none px-4 py-3 "
                        />
                        <label
                            for="password"
                            className="absolute top-[-50%] translate-y-[50%] left-2 px-[5px] text-[14px] font-medium text-gray-500 bg-white"
                        >
                            Date of Birth
                        </label>
                    </div>
                </div>
                {/* checkbox */}
                <div>
                    <ul className="">
                        <li className="flex items-start mt-12 ">
                            <input
                                type="checkbox"
                                id="singUpForEmail"
                                className="relative peer shrink-0 w-[18px] h-[18px]  appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                            />
                            <label
                                for="singUpForEmail"
                                className="pl-5  font-medium"
                            >
                                Sign up for emails to get updates from Retro on
                                products, offers and your membership benefits
                            </label>
                            <CheckMarkIcon />
                        </li>
                        <li className="flex items-start mt-12 ">
                            <input
                                type="checkbox"
                                id="singUpForEmail"
                                className="relative peer shrink-0 w-[18px] h-[18px]  appearance-none border border-gray-400 rounded-sm bg-white  checked:bg-black checked:border-0 outline-none cursor-pointer"
                            />
                            <label
                                for="singUpForEmail"
                                className="pl-5  font-medium"
                            >
                                I agree to Retro's{" "}
                                <span>
                                    <Link to="" className="underline">
                                        Privacy Policy{" "}
                                    </Link>
                                </span>
                                and{" "}
                                <span>
                                    <Link to="" className="underline">
                                        Terms of Use
                                    </Link>
                                </span>
                            </label>
                            <CheckMarkIcon />
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-end mt-8">
                    <button className="px-7 py-[10px] rounded-full text-white font-medium bg-black hover:opacity-50">
                        Create Account
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Registration;
