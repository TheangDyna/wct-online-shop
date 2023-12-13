import React from "react";

function SmallCard() {
  return (
    <div className="flex mb-4   ">
      <div className=" group rounded-lg bg-gray-950 hover:text-slate-950 mr-4 text-transparent">
        <div className=" group-hover:opacity-75 flex justify-center items-center  ">
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
            className="w-4 h-4  mr-1 absolute  rounded-lg   "
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
        <a href="#" className="mr-4">
          White Shirt Pleat
        </a>
        <div className="mt-2">1 x $19.00</div>
      </div>
    </div>
  );
}

export default SmallCard;
