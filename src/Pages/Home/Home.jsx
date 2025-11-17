import React from 'react';
import Banner from './Banner';
import HowItWork from './HowItWork';
import Ourservices from './Ourservices';

const Home = () => {

    return (
        <div className='container w-11/12 mx-auto'>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <Ourservices></Ourservices>
        </div>
    );
};

export default Home;