import React, { use } from 'react';
import Customerimg from '../../assets/customer-top.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import ReviewCard from './ReviewCard';

const reviewPromise = fetch('/reviews.json').then(res => res.json())

const Reviews = () => {

    const reviews = use(reviewPromise)


    return (
        <div className='py-16 '>
            <div className=''>
                <div className='text-center '>
                    <img className='mx-auto mb-4' src={Customerimg} alt="" />
                    <h2 className='text-[2.2rem] font-extrabold text-secondary'>What our customers are sayings</h2>
                    <p className='text-[#606060] mt-2'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
                </div>

                <div className='py-10'>
                    <Swiper
                        effect={'coverflow'}
                        autoplay={{
                            delay:2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: '50%',
                            depth: 100,
                            modifier: 1,
                            scale: 0.75,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow,Autoplay, Pagination]}
                       
                    >
                       {
                        reviews.map(review => (
                             <SwiperSlide key={review.id}>
                          <ReviewCard review={review} ></ReviewCard>
                        </SwiperSlide>
                        ))
                       }
                    
                      
                    </Swiper>

                </div>

            </div>

        </div>
    );
};

export default Reviews;