import { Link, Navigate } from "react-router-dom";
import Stats from "../components/Stats/Stats";
import MainLayout from "../Layout/MainLayout";


const MainRoute = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            element: <Stats />
        },
        {
            path: '/',
            element: <Navigate to="/dashboard" replace />
        },

    ]
};

export default MainRoute;