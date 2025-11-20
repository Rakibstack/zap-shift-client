import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAuth = () => {
    
    const Authinfo = useContext(AuthContext);
    return Authinfo;
};

export default useAuth;