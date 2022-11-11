import React from 'react';
import { Link } from 'react-router-dom';
import useTitleHook from '../../hooks/useTitleHook';

const Service = ({service}) => {
    useTitleHook('Service');

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-56' src={service.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {service.service}
                </h2>
                <p>{service.description.slice(0, 100)}...</p>
                <h3 className="card-title">
                    Price: ${service.price}
                </h3>
                <div className="card-actions justify-center">
                    <Link to={`/services/${service._id}`}><button className="btn btn-primary">View Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;