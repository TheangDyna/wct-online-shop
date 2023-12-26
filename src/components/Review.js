import React from 'react'
import Profile from './Profile'
import { IoIosStarOutline } from "react-icons/io";
import FormReview from './FormReview';

function Review() {
  return (
    <div>
        <div className='border border-gray-300 m-auto w-11/12 sm:w-4/5 p-7 md:p-16 '>
            <div className=' text-center text-xl font-semibold'>
                <h1 >Review</h1>
            </div>
            <div className='  lg:w-3/5 w-11/12 m-auto mt-10 '>
                <div>
                    <Profile/>
                </div>
                <div className='mt-10'>
                    <h1 className='font-semibold text-xl text-gray-900'>Add a review</h1>
                    <p className='text-gray-600 '>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className='mt-10 flex items-center gap-5'>
                    <span className='text-gray-600'>Your Rating</span>
                        <div className="rating rating-md ">
                            <input type="radio" name="rating-7" className="mask mask-star bg-yellow-500"  checked/>
                            <input type="radio" name="rating-7" className="mask mask-star  bg-yellow-500 "  />
                            <input type="radio" name="rating-7" className="mask mask-star  bg-yellow-500"/>
                            <input type="radio" name="rating-7" className="mask mask-star bg-yellow-500" />
                            <input type="radio" name="rating-7" className="mask mask-star  bg-yellow-500" />
                        </div>                   
                </div>
                <div>
                    <FormReview/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review
