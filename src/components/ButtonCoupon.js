import React from 'react'

function ButtonCoupon({chidren}) {
  return (
    <div>
        <button 
            className="btn-sm lg:btn-md btn-primary rounded-full  text-sm font-semibold  hover:text-white bg-slate-300 outline-none border-none text-gray-800">
            {chidren}
        </button>
    </div>
  )
}

export default ButtonCoupon
