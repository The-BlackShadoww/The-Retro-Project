import React from "react";
import { Button } from "../UI/Buttons/Button";
import OrderTable from "./OrderTable";

const Orders = () => {
    const data = [
        {
            transaction_id: "transaction id",
            status: "status",
            paymentStatus: "paymentStatus",
            items: [
                {
                    _id: "",
                    productName: "product name",
                    price: 0,
                    count: 0,
                    createdAt: "date",
                },
            ],
            discount: 0,
        },
        {
            transaction_id: "transaction id",
            status: "status",
            paymentStatus: "paymentStatus",
            items: [
                {
                    _id: "",
                    productName: "product name",
                    price: 0,
                    count: 0,
                    createdAt: "date",
                },
            ],
            discount: 0,
        },
    ];

    const formatDateTime = (dateTimeString) => {
        const options = {
            // weekday: "short",
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(dateTimeString).toLocaleDateString("en-US", options);
    };

    return (
        <main className="w-full h-[70vh]">
            <div className="w-full flex justify-between pb-4 tablet:pt-0 pt-4 px-2 border-b">
                <h1 className="text-2xl">Orders</h1>
                <Button title={"Continue Shopping"} path={"/"} />
            </div>
            <div className="my-6">
                <OrderTable formatDateTime={formatDateTime} data={data} />
            </div>
        </main>
    );
};

export default Orders;
