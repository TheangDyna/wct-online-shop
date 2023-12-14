import React from 'react'

function ButtonCoupon({chidren}) {
  return (
    <div>
        <button 
            className="btn btn-primary rounded-full  text-xs font-medium hover:text-white bg-slate-300 outline-none border-none text-gray-800">
            {chidren}
        </button>
    </div>
  )
}

export default ButtonCoupon
