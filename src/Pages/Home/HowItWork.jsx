import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';

const HowItWork = () => {

    return (

        <div className='py-10 w-10/12 mx-auto container'>
              <h2 className='text-secondary mb-3 font-bold text-[1.2rem]'>How It Works</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 space-y-1.5'>
              
                <div className='p-4 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300'>
                  <span><CiDeliveryTruck size={28} /></span>
                <h2 className='text-secondary py-1.5 font-medium'>Booking Pick & Drop</h2>
                <p className='text-[#606060] leading-relaxed tracking-wide'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
                <div className='p-4 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300'>
                  <span><CiDeliveryTruck size={28} /></span>
                <h2 className='text-secondary py-1.5 font-medium'>Booking Pick & Drop</h2>
                <p className='text-[#606060] leading-relaxed tracking-wide'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
                <div className='p-4 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300'>
                  <span><CiDeliveryTruck size={28} /></span>
                <h2 className='text-secondary py-1.5 font-medium'>Booking Pick & Drop</h2>
                <p className='text-[#606060] leading-relaxed tracking-wide'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
                <div className='p-4 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300'>
                  <span><CiDeliveryTruck size={28} /></span>
                <h2 className='text-secondary py-1.5 font-medium'>Booking Pick & Drop</h2>
                <p className='text-[#606060] leading-relaxed tracking-wide'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
            </div>
            
        </div>
    );
};

export default HowItWork;