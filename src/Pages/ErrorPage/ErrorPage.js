import React from 'react';
import video from '../../Assets/videos/error.mp4'
import useTitleHook from '../../hooks/useTitleHook';

const ErrorPage = () => {
    useTitleHook('Error');
    return (
        <div>
            <video src={video} controls autoPlay={true} className='mx-auto pt-10'></video>
        </div>
    );
};

export default ErrorPage;