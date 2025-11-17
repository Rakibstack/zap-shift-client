import React from 'react';
import amazon from '../../assets/brands/amazon.png'
import casio from '../../assets/brands/casio.png'
import monstar from '../../assets/brands/moonstar.png'
import randstand from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import startpeople from '../../assets/brands/start_people.png'
import amazonvectore from '../../assets/brands/amazon_vector.png'
import Marquee from 'react-fast-marquee';

const brands = [amazon,casio,monstar,randstand,star,startpeople,amazonvectore];

const Company = () => {

    return (
     <div className='py-14'>
        <h2 className='text-secondary text-2xl mb-10 font-bold text-center'>We've helped thousands of sales teams</h2>
          <Marquee
           pauseOnHover={true}
           speed={60}
           >
        {
            brands.map((brand,index) =>  (
                <img className='w-52 px-8 ' key={index} src={brand}  />
            ))
        }
       </Marquee>
     </div>
    );
};

export default Company;