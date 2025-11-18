import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {user_photoURL,user_email,userName,review:customerreview} = review;

    return (
        <div className='mt-5 mx-auto w-11/12'>

         <div className="max-w-sm p-6 bg-base-100 rounded-2xl shadow-md border border-gray-100">
      <FaQuoteLeft className="text-primary text-3xl mb-3" />

      <p className="text-gray-600 leading-relaxed">
        {customerreview}
      </p>

      <div className="border-t border-dashed border-secondary my-4"></div>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12  ">
            <img className='rounded-full' src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">{user_email}</p>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default ReviewCard;