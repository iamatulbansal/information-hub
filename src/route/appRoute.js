import { lazy, Suspense } from "react";
import { ROUTE_ROOT_PATH } from "../constants/constant";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import Shimmer from '../components/Shimmer'
import Error from "../pages/Error";
import { mainData } from "../utils/helper";

//Pages
// import CssQuestion from "../pages/CssQuestion";
// import HtmlQuestion from "../pages/HtmlQuestion";
// import JavascriptQuestion from "../pages/JavascriptQuestion";
// import NodeQuestion from "../pages/NodeQuestion";
// import ReactQuestion from "../pages/ReactQuestion";
// import SecurityQuestion from "../pages/SecurityQuestion";

//Lazy loading pages
const CssQuestion = lazy(() => import("../pages/CssQuestion"));
const HtmlQuestion = lazy(() => import("../pages/HtmlQuestion"));
const JavascriptQuestion = lazy(() => import("../pages/JavascriptQuestion"));
const NodeQuestion = lazy(() => import("../pages/NodeQuestion"));
const ReactQuestion = lazy(() => import("../pages/ReactQuestion"));
const SecurityQuestion = lazy(() => import("../pages/SecurityQuestion"));






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
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <CssQuestion {...mainData} />,
                    </Suspense>
                ),
            },
            {
                path: ROUTE_ROOT_PATH.HTML,
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <HtmlQuestion {...mainData} />,
                    </Suspense>
                ),
            },
            {
                path: ROUTE_ROOT_PATH.JAVASCRIPT,
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <JavascriptQuestion {...mainData} />,
                    </Suspense>
                ),
            },
            {
                path: ROUTE_ROOT_PATH.NODE,
                element: <Suspense fallback={<Shimmer />}>
                    <NodeQuestion {...mainData} />,
                </Suspense>
            },
            {
                path: ROUTE_ROOT_PATH.REACT,
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <ReactQuestion {...mainData} />,
                    </Suspense>
                ),
            },
            {
                path: ROUTE_ROOT_PATH.SECURITY,
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <SecurityQuestion {...mainData} />,
                    </Suspense>
                ),
            },
        ],
    },
]);
export default appRoute;
