import React from "react";

const AdminDashboard = () => {
    return (
        <div className="relative w-full h-full">
            <h1 className="text-lg font-semibold mb-5">Dashboard</h1>

            <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-20 p-2 rounded-sm shadow-sm border">
                    AdminDashboard
                </div>
                <div className="w-full h-20 p-2 rounded-sm shadow-sm border">
                    AdminDashboard
                </div>
                <div className="w-full h-20 p-2 rounded-sm shadow-sm border">
                    AdminDashboard
                </div>
            </div>
            <div className="w-full mt-10 p-2 bg-indigo-400">
                <h1 className="text-lg font-semibold mb-5">Latest Orders</h1>
            </div>
        </div>
    );
};

export default AdminDashboard;
