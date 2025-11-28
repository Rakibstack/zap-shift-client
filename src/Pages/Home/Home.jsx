import React from 'react';
import Banner from './Banner';
import HowItWork from './HowItWork';
import Ourservices from './Ourservices';
import Company from './Company';
import Trackingsestem from './Trackingsestem';
import MercentSection from './MercentSection';
import Reviews from './Reviews';
import Frequently from './Frequently';

const Home = () => {

    return (
        <div className='container w-11/12 mx-auto'>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <Ourservices></Ourservices>
            <Company></Company>
            <Trackingsestem></Trackingsestem>
            <MercentSection></MercentSection>
            <Reviews></Reviews>
            <Frequently></Frequently>
        </div>
    );
};

export default Home;