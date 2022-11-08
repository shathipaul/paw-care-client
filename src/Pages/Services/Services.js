import React from 'react';

const Services = () => {
    return (
        <>
            <div className='text-center pb-10'>
                <h2 className='text-4xl font-semibold'>Our Services!!!</h2>
                <p className='text-xl w-9/12 mx-auto pt-3'>We offer quick & easy services for both dogs and cat of various breeds. No matter their
                    size or age, we can provide positive grooming experience.</p>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Review</div>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;