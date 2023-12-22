import React from "react";

function ButtonCoupon({ chidren }) {
  return (
    <div>
      <button className="btn btn-primary w-36 rounded-full border-none bg-slate-300 text-xs font-medium y-800 outline-none hover:text-white">
        {chidren}
      </button>
    </div>
  );
}

export default ButtonCoupon;
