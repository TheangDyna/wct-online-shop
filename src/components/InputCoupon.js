import React from "react";

function InputCoupon() {
  return (
    <div>
      <input
        type="text"
        placeholder="Coupon code..."
        className="input input-bordered input-primary w-64 max-w-xs rounded-full border-gray-300"
      />
    </div>
  );
}

export default InputCoupon;
