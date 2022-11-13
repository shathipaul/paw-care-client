import React from "react";

const Review = ({ rev }) => {
  const { review, user_image, user_name } = rev;
  return (
    <div className="text-center">
      <div className="bg-white rounded-2xl px-5 py-8 shadow-lg hover:shadow-2xl">
        <div className="flex justify-end">
          <button className="btn btn-square btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex justify-center gap-5">
          <img className="w-12 h-12 rounded-xl" src={user_image} alt="" />
          <h1 className="text-lg text-gray-700 font-semibold mt-2">
            Review By <span className="text-amber-500">{user_name}</span>
          </h1>
        </div>
        <p className="mt-2 text-md text-gray-600 border rounded p-1">{review}</p>
      </div>
    </div>
  );
};

export default Review;