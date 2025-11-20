import React from 'react';
import Logo from '../Components/Logo';
import { Outlet } from 'react-router';
import authimage from '../assets/authimage.png';

const AuthLayout = () => {
    return (     
             
            <div className='flex '>
               
                <div className='flex-1'>
                  <div className='ml-12 mt-5'>
                      <Logo></Logo>
                  </div>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 min-h-screen bg-[#F2FADA]'>
                    <img className='mx-auto mt-18 ' src={authimage} alt="" />

                </div>
            </div>
            
    );
};

export default AuthLayout;