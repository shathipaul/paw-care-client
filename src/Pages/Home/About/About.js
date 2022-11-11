import React from 'react';
import video from '../../../Assets/videos/video1.mp4'
import useTitleHook from '../../../hooks/useTitleHook';


const About = () => {
    useTitleHook('About');
    return (
        <div className="hero bg-base-200 rounded-lg mb-10">
            <div className="flex flex-col lg:flex-row">
                <div className='lg:w-1/2 p-6'>
                    <h1 className="text-5xl font-bold">What's Special About Paw Care!</h1>
                    <li className="py-6 text-xl font-normal">We offer quick & easy services for both dogs and cat of various breeds. No matter their
                        size or age, we can provide positive grooming experience.</li>
                    <li className="py-3 text-xl font-normal">We have an experienced qualified
                        team to take care of your best
                        friend.</li>
                </div>
                <video src={video} controls autoPlay={true} className="w-3/5"></video>
            </div>
        </div>
    );
};

export default About;