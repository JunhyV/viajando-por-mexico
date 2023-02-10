import { createHashRouter } from "react-router-dom";
import NotFound from "../layout/NotFound";
import PublicLayout from "../layout/PublicLayout";
import Colima from "../pages/Colima";
import Hidalgo from "../pages/Hidalgo";
import Home from "../pages/Home";
import Michoacan from "../pages/Michoacan";
import NuevoLeon from "../pages/NuevoLeon";
import Oaxaca from "../pages/Oaxaca";
import Zacatecas from "../pages/Zacatecas";

export const router = createHashRouter([
{
    path: '/',
    element: <PublicLayout/>,
    errorElement: <NotFound/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/colima',
            element: <Colima/>
        },
        {
            path: '/oaxaca',
            element: <Oaxaca/>
        },
        {
            path: '/zacatecas',
            element: <Zacatecas/>
        },
        {
            path: '/hidalgo',
            element: <Hidalgo/>
        },
        {
            path: '/nuevo-leon',
            element: <NuevoLeon/>
        },
        {
            path: '/michoacan',
            element: <Michoacan/>
        },
    ]
}])