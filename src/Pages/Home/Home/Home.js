import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='text-center py-10'>
                <h2 className='text-4xl font-semibold'>Our Services</h2>
                <p className='text-xl'>Here's a quick look of Paw Care's services...</p>
            </div>
            <About></About>
        </div>
    );
};

export default Home;