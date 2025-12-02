import useAuth from '../Hooks/useAuth';
import Loading from '../Components/Loading';
import { Navigate, useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loader} = useAuth()
    const location = useLocation()
    // const navigate = useNavigate()
    // console.log(location);

    if(loader){

        return <Loading></Loading>
    }

   if(!user){
        return <Navigate state={location.pathname} replace to="/login"></Navigate>
    }

    return children;
    
};

export default PrivateRoute;