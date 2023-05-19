import { createBrowserRouter } from 'react-router-dom'
import { ROUTE_ROOT_PATH } from '../constants/constant'
import JavascriptQuestion from '../pages/JavascriptQuestion'
import App from '../App';
import Body from '../components/Body';
import  Error from '../components/Error';
const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,

        children: [
            {
                path: ROUTE_ROOT_PATH.HOME,
                element: <Body />
            },
            {
                path: ROUTE_ROOT_PATH.JAVASCRIPT,
                element: <JavascriptQuestion />
            },
        ]

    },
]);
export default appRoute;
