import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../Components/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loader} = useAuth()
    const location = useLocation()

    if(loader){

        return <Loading></Loading>
    }

    if(user){

        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;