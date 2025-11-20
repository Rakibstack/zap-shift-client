import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from '../../assets/banner/banner1.png'
import bannerimg2 from '../../assets/banner/banner2.png'
import bannerimg3 from '../../assets/banner/banner3.png'
import Arrow from '../../Components/Arrow';

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

                    <div className='absolute bottom-20 flex  font-semibold left-21'>
                        <button className='px-4 py-2 rounded-2xl text-black bg-primary'>Track Your Parcel</button>
                        <Arrow></Arrow>
                        <button className='btn ml-4'> Be A Rider</button>
                    </div>

                </div>
                <div className='relative'>
                    <img src={bannerimg2} />

                    <div className='absolute bottom-20 flex  font-semibold left-21'>
                        <button className='px-4 py-2 rounded-2xl text-black bg-primary'>Track Your Parcel</button>
                        <Arrow></Arrow>
                        <button className='btn ml-4'> Be A Rider</button>
                    </div>

                </div>
                <div className='relative'>
                    <img src={bannerimg3} />

                    <div className='absolute bottom-20 flex font-semibold left-21'>
                         <button className='px-4 py-2 rounded-2xl text-black bg-primary'>Track Your Parcel </button> 
                           <Arrow ></Arrow>                
                       
                        <button className='btn ml-4 '> Be A Rider</button>
                    </div>

                </div>
            </Carousel>

        </div>
    );
};

export default Banner;