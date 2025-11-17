import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Rootlayout from "../Layout/Rootlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children: [
        {
            index:true,
            path: '/',
            element: <Home></Home>,
        }
    ]
   
  },
  
]);

export default router;