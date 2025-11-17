import React from 'react';
import livetrack from '../../assets/live-tracking.png'
import safedelivary from '../../assets/safe-delivery.png'

const Trackingsestem = () => {

    return (
        <div className='w-11/12 mx-auto container py-5'>

            <div>
                <div className='flex justify-center items-center gap-8 p-6 bg-white rounded-2xl mb-4'>
                    <img className='w-30' src={livetrack}  />
                    <div className='border-l border-dashed border-secondary pl-5'>
                        <h2 className='text-xl font-bold text-secondary mb-2'>Live Parcel Tracking</h2>
                        <p className='text-[#606060]'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-8 p-6 bg-white rounded-2xl mb-4'>
                    <img className='w-30' src={safedelivary}  />
                    <div className='border-l border-dashed border-secondary pl-5'>
                        <h2 className='text-xl font-bold text-secondary mb-2'>100% Safe Delivery</h2>
                        <p className='text-[#606060]'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-8 p-6 bg-white rounded-2xl mb-8'>
                    <img className='w-30' src={safedelivary}  />
                    <div className='border-l border-dashed border-secondary pl-5'>
                        <h2 className='text-xl font-bold text-secondary mb-2'>24/7 Call Center Support</h2>
                        <p className='text-[#606060]'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Trackingsestem;