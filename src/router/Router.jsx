import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Error404 from "../components/pages/Error404";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <Error404/>,
    }
])

export default router