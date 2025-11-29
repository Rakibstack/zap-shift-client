import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import ForbiddenAccess from '../Components/ForbiddenAccess';
import Loading from '../Components/Loading';

const AdminRoute = ({children}) => {

    const {loader} = useAuth()
    const {role} = useRole()

   if(loader){
      return <Loading></Loading>
    }

    if(role !== "Admin"){
        return <ForbiddenAccess></ForbiddenAccess>
    }
    return children ;
};

export default AdminRoute;