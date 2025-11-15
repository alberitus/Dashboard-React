import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "users", element: <Users /> },
            { path: "settings", element: <Settings /> },
        ],
    },
]);
