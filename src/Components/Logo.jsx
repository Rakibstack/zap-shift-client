import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router';


const Logo = () => {
    return (

       <Link to='/'>
       <div className='relative'>
    <img src={logo} alt="" />
      <span className=" absolute bottom-0 left-5 btn-ghost font-bold text-[1.5rem]">ZapShift</span>
  </div>
   
       </Link>
    );
};

export default Logo;