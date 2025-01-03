import { Navigate } from "react-router-dom";
import Stats from "../components/Stats/Stats";
import MainLayout from "../Layout/MainLayout";
import DataTable from "../ui/DataTable";
import { users } from "../utils/Data/user";
import Form from "../ui/Form/Form";
import SearchFilter from "../ui/SearchFilter";


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
        {
            path: '/form-user',
            element: <Form />
        },
        {
            path: '/date-filter',
            element: <SearchFilter />
        },


    ]
};

export default MainRoute;