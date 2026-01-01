import axios from 'axios';
import React from 'react';

const axiosIntercept = axios.create({
    baseURL: 'https://zap-shift-server-beryl.vercel.app'
})

const useAxios = () => {
    return axiosIntercept;
};

export default useAxios;