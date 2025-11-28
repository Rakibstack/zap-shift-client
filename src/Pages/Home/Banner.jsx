import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from '../../assets/banner/banner1.png'
import bannerimg2 from '../../assets/banner/banner2.png'
import bannerimg3 from '../../assets/banner/banner3.png'
import Arrow from '../../Components/Arrow';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>

            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={2500}
                stopOnHover={false}
                swipeable={true}

            >
                <div className='relative'>
                    <img src={bannerimg1} />

                    <div className='absolute bottom-2 left-4 sm:bottom-6 sm:left-12 lg:bottom-18 lg:left-20 flex  font-semibold '>
                        <button className='px-4 py-2 rounded-2xl text-black bg-primary'>Track Your Parcel</button>
                        <Arrow></Arrow>
                        <Link to='/beARider' className='btn ml-4'> Be A Rider</Link>
                    </div>

                </div>
                <div className='relative'>
                    <img src={bannerimg2} />

                    <div className='absolute bottom-2 left-4 sm:bottom-6 sm:left-12 lg:bottom-18 lg:left-20 flex  font-semibold'>
                        <button className='px-4 py-2 rounded-2xl text-black bg-primary'>Track Your Parcel</button>
                        <Arrow></Arrow>
                       <Link to='/beARider' className='btn ml-4'> Be A Rider</Link>
                    </div>

                </div>
                <div className='relative'>
                    <img src={bannerimg3} />

                    <div className='absolute bottom-2 left-4 sm:bottom-6 sm:left-12 lg:bottom-18 lg:left-20 flex  font-semibold'>
                         <button className='px-4 py-2 rounded-2xl text-black bg-primary'>Track Your Parcel </button> 
                           <Arrow ></Arrow>                
                       
                         <Link to='/beARider' className='btn ml-4'> Be A Rider</Link>
                    </div>

                </div>
            </Carousel>

        </div>
    );
};

export default Banner;