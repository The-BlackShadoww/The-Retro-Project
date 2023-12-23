import React from "react";
import { Link } from "react-router-dom";
import "../Nav.css";
import Dropdown from "./Dropdown";

const DropdownLinks = () => {
    return (
        <div className="flex justify-center">
            {/* New and Featured */}
            <Dropdown title={"New & Featured"} path={"/new"}>
                <div className="flex flex-col">
                    <Link to="" className="font-bold">Winter Sale</Link>
                    <Link to="">Shop up to 50% off</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New & Featured</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">All the Shoes</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">All the Clothes</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Jordan</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
            </Dropdown>
            {/* Men */}
            <Dropdown title={"Men"} path={"/men"}>
                <div className="flex flex-col">
                    <Link to="">Winter Sale</Link>
                    <Link to="">Shop up to 50% off</Link>
                    <Link to="">Men Section</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New & Featured</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New for men</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Shop Icon</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Jordan</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
            </Dropdown>
            {/* Women */}
            <Dropdown title={"Women"} path={"/women"}>
                <div className="flex flex-col">
                    <Link to="">Winter Sale</Link>
                    <Link to="">Shop up to 50% off</Link>
                    <Link to="">Women Section</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New & Featured</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New for women</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Shop Icon</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Jordan</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
            </Dropdown>
            {/* Kids */}
            <Dropdown title={"Kids"} path={"/kids"}>
                <div className="flex flex-col">
                    <Link to="">Winter Sale</Link>
                    <Link to="">Shop up to 50% off</Link>
                    <Link to="">Kids Section</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New & Featured</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New for Kids</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Shop Icon</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Jordan</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
            </Dropdown>
            {/* Accessories */}
            <Dropdown title={"Accessories"} path={"/accessories"}>
                <div className="flex flex-col">
                    <Link to="">Winter Sale</Link>
                    <Link to="">Shop up to 50% off</Link>
                    <Link to="">Accessories Section</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New & Featured</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New Accessories</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Shop Icon</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Jordan</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
            </Dropdown>
            {/* Sales */}
            <Dropdown title={"Sale"} path={"/sale"}>
                <div className="flex flex-col">
                    <Link to="">Winter Sale</Link>
                    <Link to="">Shop up to 50% off</Link>
                    <Link to="">Sale Section</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New & Featured</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">New for men</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Shop Icon</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="">Jordan</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                    <Link to="">Link</Link>
                </div>
            </Dropdown>
        </div>
    );
};

export default DropdownLinks;
