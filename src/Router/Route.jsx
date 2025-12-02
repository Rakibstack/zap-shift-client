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
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import ParcelsDetails from "../Pages/Dashboard/ParcelsDetails";
import AboutUs from "../Pages/Home/AboutUsSection";
import BeARider from "../Pages/BeARider/BeARider";
import ApproveRider from "../Pages/Dashboard/ApproveRider/ApproveRider";
import UserManagement from "../Pages/Dashboard/UserManagement/UserManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../Pages/Dashboard/AssignRider/AssignRiders";


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
        },
        {
          path: '/aboutus',
          Component: AboutUs
        },
        {
          path: '/beARider',
           loader: () => fetch('/warehouses.json'),
          element:<PrivateRoute>
             <BeARider></BeARider>
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
        element:
          <MyParcel></MyParcel>
       
      },
      {
        path: 'payment/:paymentId',
        element:
          <Payment></Payment>
       
      },
      {
        path: 'payment-success',
        element: 
          <PaymentSuccessful></PaymentSuccessful>
        
      },
      {
        path: 'payment-cancelled',
        element: 
          <PaymentCancelled></PaymentCancelled>
       
      },
      {
        path:'paymentHistory',
        Component: PaymentHistory,
      },
      {
        path: 'parcelDetails/:id',
       element: 
        <ParcelsDetails></ParcelsDetails>
      
      },
      {
        path: 'approverider',
        element: <AdminRoute>
          <ApproveRider></ApproveRider>
        </AdminRoute>
      },
      {
        path: 'Users-Management',     
        element: <AdminRoute>
          <UserManagement></UserManagement>
        </AdminRoute>
      },
      {
        path: 'Assign-Riders',     
        element: <AdminRoute>
          <AssignRiders></AssignRiders>
        </AdminRoute>
      }
    ]

  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
]);

export default router;