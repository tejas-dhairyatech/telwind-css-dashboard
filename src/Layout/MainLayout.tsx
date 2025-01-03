// src/components/Layout.tsx

import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { MENU } from '../utils/constants/menu';

const MainLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const location = useLocation();
    const paths = location.pathname.split('/').filter((x) => x).map((path, index, arr) => ({
        label: path.charAt(0).toUpperCase() + path.slice(1), // Capitalize first letter
        link: '/' + arr.slice(0, index + 1).join('/'), // Generate breadcrumb link
    }));



    return (
        <>
            <div className="font-quickSand">
                <Header toggleSidebar={toggleSidebar} />
                <Sidebar activePath={paths[0]?.label || MENU.DASHBOARD}
                    isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                <div className="text-gray-500 bg-slate-200 p-4 sm:ml-64 gap-1 
            translate-all duration-300 mt-14 ">

                    <div className="px-4 py-4">
                        {/* Add Breadcrumb here */}
                        <Breadcrumb paths={paths} />
                    </div>
                    <Outlet />

                </div>
            </div>
        </>

    );
};

export default MainLayout;
