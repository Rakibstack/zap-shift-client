import React from 'react';
import logo from '../assets/logo.png'


const Logo = () => {
    return (
        <div>
             <div className='relative'>
    <img src={logo} alt="" />
      <a  className=" absolute bottom-0 left-5 btn-ghost font-bold text-[1.5rem]">ZapShift</a>
  </div>
            
        </div>
    );
};

export default Logo;