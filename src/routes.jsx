import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/admin/home.jsx";
import SiteHome from "./pages/site/home.jsx";
import AdminLayout from "./layout/adminLayout.jsx";

const routes = createBrowserRouter([
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { element: <Home />, index: true }
        ]
    },
    {
        path: "/",
        element: <SiteHome />,
    }
]);

export default function Routes() {
    return <RouterProvider router={routes} />;
}
