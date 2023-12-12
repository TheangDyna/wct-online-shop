import React from 'react'
import { RxCross2 } from "react-icons/rx";

function Product() {
  return (
    <div>
        <div className='w-20 h-20 relative group'>
            <img 
                className='w-full h-full object-cover'
                src='https://cdn.mukama.com/31812-large_default/formal-friday-ultrafine-merino-t-shirt-black.jpg'
            />
            <div className='bg-black opacity-0 absolute flex top-0 w-full group-hover:opacity-30  h-full'>
                {/* <div className='flex items-center justify-center w-full h-full text-white text-2xl  '> <RxCross2 /></div> */}
            </div>
            <div className='absolute  text-2xl items-center text-white  top-1/2 left-1/2 -translate-x-3 group -translate-y-2 invisible group-hover:visible '>
                <RxCross2 />
            </div>
        </div>
    </div>
  )
}

export default Product
