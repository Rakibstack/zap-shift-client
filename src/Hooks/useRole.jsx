import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading';

const useRole = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
     
    const { isLoading:roleLoading,  data: role = 'user'} = useQuery({
        queryKey: ['user-role',user?.email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/users/${user?.email}/role`)
            return res.data?.role;
            
        }
    })

    if(roleLoading){
        return <Loading></Loading>
    }
    //  console.log('user Role',role);
    return {roleLoading, role};
};

export default useRole;