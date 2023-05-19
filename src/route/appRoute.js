import { createBrowserRouter } from "react-router-dom";
import { ROUTE_ROOT_PATH } from "../constants/constant";
import App from "../App";
import Body from "../components/Body";
import Error from "../pages/Error";
//Pages
import CssQuestion from "../pages/CssQuestion";
import HtmlQuestion from "../pages/HtmlQuestion";
import JavascriptQuestion from "../pages/JavascriptQuestion";
import NodeQuestion from "../pages/NodeQuestion";
import ReactQuestion from "../pages/ReactQuestion";
import SecurityQuestion from "../pages/SecurityQuestion";
import { mainData } from '../utils/helper'



const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <App {...mainData} />,
        errorElement: <Error />,

        children: [
            {
                path: ROUTE_ROOT_PATH.HOME,
                element: <Body />,
            },
            {
                path: ROUTE_ROOT_PATH.CSS,
                element: <CssQuestion {...mainData} />,
            },
            {
                path: ROUTE_ROOT_PATH.HTML,
                element: <HtmlQuestion {...mainData} />,
            },
            {
                path: ROUTE_ROOT_PATH.JAVASCRIPT,
                element: <JavascriptQuestion {...mainData} />,
            },
            {
                path: ROUTE_ROOT_PATH.NODE,
                element: <NodeQuestion {...mainData} />,
            },
            {
                path: ROUTE_ROOT_PATH.REACT,
                element: <ReactQuestion {...mainData} />,
            },
            {
                path: ROUTE_ROOT_PATH.SECURITY,
                element: <SecurityQuestion {...mainData} />,
            },
        ],
    },
]);
export default appRoute;
