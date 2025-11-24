import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Sharead Page/Footer';
import Navber from '../Pages/Sharead Page/Navber';

const Rootlayout = () => {
    return (
        <div className='bg-base-200'>
           <title>Zap-Shift Home Page</title>
            <Navber></Navber>
            <Outlet>

            </Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Rootlayout;