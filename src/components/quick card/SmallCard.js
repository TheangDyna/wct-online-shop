import React from "react";

function SmallCard() {
  return (
    <div className="mb-4 flex   ">
      <div className=" group mr-4 rounded-lg bg-gray-950 text-transparent hover:text-slate-950">
        <div className=" flex items-center justify-center group-hover:opacity-75  ">
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/item-cart-01.jpg"
            alt=""
            className="object-cover"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute mr-1  h-4 w-4  rounded-lg   "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <div className="">
        <a href="/" className="mr-4">
          White Shirt Pleat
        </a>
        <div className="mt-2">1 x $19.00</div>
      </div>
    </div>
  );
}

export default SmallCard;
