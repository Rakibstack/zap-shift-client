import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

const axiossecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const { user, logoutuser } = useAuth()

    useEffect(() => {
        
        // Request Interceptor
        const requestInterceptor = axiossecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config;
        })
        // Response Interceptors.
        const responsIntercept = axiossecure.interceptors.response.use((res) => {
            return res
        }, (error) => {

            const statusCode = error?.status
            if (statusCode === 401 || statusCode === 403) {
                logoutuser()
            }
            return Promise.reject(error)
        })

        return () => {

            axiossecure.interceptors.request.eject(requestInterceptor);
            axiossecure.interceptors.response.eject(responsIntercept);
        }
    }, [user?.accessToken, logoutuser])

    return axiossecure;
};

export default useAxiosSecure;