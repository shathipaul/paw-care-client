import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import useTitleHook from '../../hooks/useTitleHook';

const ServiceDetail = () => {
    const service = useLoaderData();
    useTitleHook('Service');
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <PhotoProvider>
                    <PhotoView src={service.image}>
                    <img src={service.image} alt='' className=" h-80 rounded-lg shadow-2xl" />
                    </PhotoView>
                </PhotoProvider>
                <div className='lg:w-1/2 sm:w-3/4 mx-auto'>
                    <h1 className="text-5xl font-bold">{service.service}</h1>
                    <p className="py-6">{service.description}</p>
                    <p className='text-lg font-bold'>Price: ${service.price}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;