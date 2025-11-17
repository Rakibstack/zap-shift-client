import React from 'react';
import marcent from '../../assets/be-a-merchant-bg.png'
import locationmerchant from '../../assets/location-merchant.png'

const MercentSection = () => {
    return (
        <div className='py-10 w-11/12 mx-auto '>
            <div className='relative bg-secondary rounded-2xl h-96 w-full overflow-hidden '>
                <img src={marcent} alt="" />
                <div className='absolute bottom-14 left-2 flex px-10 '>
                    <div>
                    <h2 className='text-white  font-extrabold text-[2.2rem]'>Merchant and Customer Satisfaction <br /> is Our First Priority</h2>
                    <p className='text-[#DADADA] mb-6 mt-2'>We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className='font-bold flex gap-4'>
                         <button className='px-4 py-2 rounded-2xl text-black bg-primary cursor-pointer'>Become a Merchant</button>
                         <button className='px-4 py-2 rounded-4xl text-primary border-1 border-primary cursor-pointer'>Earn with ZapShift Courier</button>
                    </div>
                    </div>

                    <div>
                        <img className='w-full' src={locationmerchant} />

                    </div>
                    
                   
                </div>

            </div>
        </div>
    );
};

export default MercentSection;