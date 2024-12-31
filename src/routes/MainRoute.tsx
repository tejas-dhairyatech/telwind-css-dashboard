import { Navigate } from "react-router-dom";
import Stats from "../components/Stats/Stats";
import MainLayout from "../layout/MainLayout";
import DataTable from "../ui/DataTable";
import { users } from "../utils/Data/user";


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
        {
            path: '/user',
            element: <DataTable data={users} />
        },

    ]
};

export default MainRoute;