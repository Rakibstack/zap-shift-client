import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Rootlayout from "../Layout/Rootlayout";
import Coverage from "../Pages/Covareg/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Registation from "../Pages/Auth/Registation";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import SendPercel from "../Pages/send-percel/SendPercel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children: [
        {
            index:true,
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/coverage',
          loader: () => fetch('/warehouses.json'),
          element: <PrivateRoute>
            <Coverage></Coverage>
          </PrivateRoute>
        },
        {
          path: '/send-parcel',
          element: <PrivateRoute>
            <SendPercel></SendPercel>
          </PrivateRoute>
        }
    ]
   
  },
  {
    path : '/',
    element: <AuthLayout></AuthLayout>,
    children : [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registation></Registation>
      },
      {
        path: '/forgotpass',
        element: <ForgotPassword></ForgotPassword>
      }
    ]
  }
]);

export default router;