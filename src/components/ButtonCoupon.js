import React from "react";

// function ButtonCoupon({ chidren }) {
//   return (
//     <div>
//       <button className="text-xs font-medium border-none rounded-full outline-none btn btn-primary w-36 bg-slate-300 y-800 hover:text-white">
//         {chidren}
//       </button>
function ButtonCoupon({ chidren }) {
  return (
    <div>
      <button className="text-sm font-semibold text-gray-800 border-none rounded-full outline-none btn-sm lg:btn-md btn-primary hover:text-white bg-slate-300">
        {chidren}
      </button>
    </div>
  );
}

export default ButtonCoupon;
