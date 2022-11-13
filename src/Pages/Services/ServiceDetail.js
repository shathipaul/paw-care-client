import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import useTitleHook from '../../hooks/useTitleHook';
import Review from './review';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceDetail = () => {
    const [review, setReview] = useState([]);
    useTitleHook('Service');

    const { user } = useContext(AuthContext);


    const services = useLoaderData();
    const { image, service, _id } = services;



    useEffect(() => {
        fetch(`https://paw-care-server.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])

    const handleSubmitSend = event => {
        event.preventDefault();

        const review = event.target.review.value;

        const user_review = {
            user_image: user.photoURL,
            user_email: user.email,
            uid: user.uid,
            user_name: user.displayName,
            service_id: _id,
            review: review,
            serviceName: service,
            serviceImage: image,
        };

        fetch("https://paw-care-server.vercel.app/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user_review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert("Review Added!");
                }
            });
        event.target.reset();
    };


    return (

        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <PhotoProvider>
                        <PhotoView src={services.image}>
                            <img src={services.image} alt='' className=" h-80 rounded-lg shadow-2xl" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className='lg:w-1/2 sm:w-3/4 mx-auto'>
                        <h1 className="text-5xl font-bold">{services.service}</h1>
                        <p className="py-6">{services.description}</p>
                        <p className='text-lg font-bold'>Price: ${services.price}</p>
                    </div>
                </div>
            </div>
            <div className=''>
                {
                    user?.uid ?
                        <form onSubmit={handleSubmitSend}>
                            <div className="w-2/3 m-auto rounded-lg border border-amber-600 bg-amber-50">
                                <div className='flex justify-center'>
                                    <img className='rounded-lg m-5' src={user?.photoURL} alt="" />
                                    <div className='my-10 text-md font-semibold'>
                                        <p>Name: {user?.displayName}</p>
                                        <p>Email: {user?.email}</p>
                                    </div>
                                </div>
                                <div className='my-5 mx-20'>
                                    <textarea name="review" id="comment" className="textarea textarea-info  border-amber-600  w-full" placeholder="Write your review here" required></textarea>
                                    <button className="btn btn-accent btn-wide mx-28 mt-3">Submit</button>
                                </div>

                            </div>
                        </form>
                        :
                        <button className="btn btn-accent btn-wide">Add a comment</button>

                }


            </div>
            <div className='grid grid-cols-2 gap-5 my-10'>
                {
                    review.map(rev => <Review
                        key={rev._id}
                        rev={rev}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default ServiceDetail;