import React from 'react'
import ButtonCoupon from './ButtonCoupon'

function FormReview() {
  return (
        <div className='mt-8'>
            <span className='text-gray-600'>Your review</span>
            <div className='w-full mt-2'>
                <textarea  className="textarea textarea-bordered textarea-md w-full h-36 rounded-none " ></textarea>
            </div>
            <div className='sm:flex gap-5'>
                <div className=' sm:w-6/12'>
                    <span>Name</span>
                    <input type="text" className="input input-bordered w-full rounded-none" />
                </div>
                <div className='sm:w-6/12'>
                    <span>Email</span>
                    <input type="email"  className="input input-bordered w-full rounded-none" />
                </div>
            </div>
            <div className='mt-7'>
                <ButtonCoupon chidren={"SUBMIT"}/>
            </div>
        </div>
  )
}

export default FormReview
