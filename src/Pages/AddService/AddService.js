import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTitleHook from '../../hooks/useTitleHook';

const AddService = () => {
    useTitleHook('Add Service');
    const navigate = useNavigate();
    

    const handleAddSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const serviceDes = form.serviceDes.value;
        const servicePrice = form.servicePrice.value;
        
    const service = {
        image: serviceImage,
        service: serviceName,
        description: serviceDes,
        price: servicePrice
    };
//    console.log(service);
    fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(service)
    })
    .then( res => res.json())
    .then(data =>{
        if(data.acknowledged) {
            alert('successfully added')
        }
    })
    form.reset();
    navigate('/services');
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
            <h1 className="text-3xl font-bold">Fill the form to add a service</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Image</span>
                            </label>
                            <input type="text" name='serviceImage' placeholder="service Image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='serviceName' placeholder="service name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Description</span>
                            </label>
                            <input type="text" name='serviceDes' placeholder="service description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <input type="text" name='servicePrice' placeholder="service price" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;