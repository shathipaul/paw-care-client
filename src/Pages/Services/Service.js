import React from 'react';

const Service = ({service}) => {

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-56' src={service.image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {service.service}
                </h2>
                <p>{service.description.slice(0, 100)}...</p>
                {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">Review</div>
                </div> */}
                <h3 className="card-title">
                    Price: ${service.price}
                </h3>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;