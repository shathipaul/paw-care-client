import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    const services = useLoaderData();

    return (
        <>
            <Banner></Banner>

            <div className='text-center py-10'>
                <h2 className='text-4xl font-semibold'>Our Services</h2>
                <p className='text-xl'>Here's a quick look of Paw Care's services...</p>
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 '>
               {
                    services.map(service => <div className="card bg-base-100 shadow-xl">
                    <figure><img className='h-56' src={service.image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {service.service}
                        </h2>
                        <p>{service.description.slice(0, 90)}...</p>
                        <h3 className="card-title">
                            Price: ${service.price}
                        </h3>
                    </div>
                </div>
                )
                }
               </div>
               <Link to='/services'><button className="btn btn-primary">See all services</button></Link>
            </div>
            <About></About>
        </>
    );
};

export default Home;