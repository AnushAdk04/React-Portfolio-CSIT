import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar fixed width */}
            <div className="w-64 shrink-0">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-white">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
