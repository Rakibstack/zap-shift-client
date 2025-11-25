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
import Dashboard from "../Layout/Dashboard";
import MyParcel from "../Pages/Dashboard/MyParcel";
import Payment from "../Pages/Dashboard/Payment";
import PaymentSuccessful from "../Pages/Dashboard/PaymentSuccessful";
import PaymentCancelled from "../Pages/Dashboard/PaymentCancelled";
import PageNotFound from "../Components/PageNotFound";


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
          element:
            <Coverage></Coverage>       
        },
        {
          path: '/send-parcel',
           loader: () => fetch('/warehouses.json'),
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
  },
  {
    path: 'dashboard',
    element:<PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children : [
      {
        path: 'myParcels',
        Component: MyParcel
      },
      {
        path: 'payment/:paymentId',
        Component: Payment,
      },
      {
        path: 'payment-success',
        Component: PaymentSuccessful,
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancelled,
      }
    ]

  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
]);

export default router;