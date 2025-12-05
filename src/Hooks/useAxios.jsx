import axios from 'axios';
import React from 'react';

const axiosIntercept = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxios = () => {
    return axiosIntercept;
};

export default useAxios;