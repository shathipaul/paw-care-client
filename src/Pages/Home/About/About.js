import React from 'react';
import video from '../../../Assets/videos/video1.mp4'

const About = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <video src={video} controls autoPlay={true} className="w-2/5"></video>
                <div className='w-1/2 p-6'>
                    <h1 className="text-5xl font-bold">What's Special About Paw Care!</h1>
                    <p className="py-6 text-xl font-normal">We offer quick & easy services for both dogs and cat of various breeds. No matter their
                        size or age, we can provide positive grooming experience.</p>
                    <p className="py-3 text-xl font-normal">We have an experienced qualified
                        team to take care of your best
                        friend.</p>
                </div>
            </div>
        </div>
    );
};

export default About;