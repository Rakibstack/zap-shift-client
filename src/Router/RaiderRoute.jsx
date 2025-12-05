import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Loading from '../Components/Loading';
import ForbiddenAccess from '../Components/ForbiddenAccess';

const RaiderRoute = ({children}) => {

     const {loader} = useAuth()
    const {role,roleLoading} = useRole()

   if(loader || roleLoading){
      return <Loading></Loading>
    }

    if(role !== "Rider"){
        return <ForbiddenAccess></ForbiddenAccess>
    }
    return children ;
};

export default RaiderRoute;