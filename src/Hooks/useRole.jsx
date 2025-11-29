import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const { isLoading:roleLoading,  data: role = 'user'} = useQuery({
        queryKey: ['user-role',user?.Email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/users/${user?.Email}/role`)
            return res.data;
        }
    })
    return {roleLoading, role};
};

export default useRole;