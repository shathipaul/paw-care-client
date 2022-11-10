import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();

    return (
        <>
            <div className='text-center pb-5'>
                <h2 className='text-4xl font-semibold'>Our Services!!!</h2>
                <p className='text-xl w-9/12 mx-auto pt-3'>We offer quick & easy services for both dogs and cat of various breeds. No matter their
                    size or age, we can provide positive grooming experience.</p>
                    <Link to='/addservice'><button className="btn btn-info mt-3">Add Service</button></Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;