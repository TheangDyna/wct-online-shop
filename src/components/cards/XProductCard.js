import React from "react";
import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";

const XProductCard = ({ title, price, cover }) => {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden group">
        <div className="relative pb-[120%]">
          <img
            src={cover}
            alt={title}
            className="absolute object-cover w-full h-full duration-700 ease-in-out group-hover:scale-110"
          />
        </div>

        <div className="absolute right-0 duration-300 transform -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-20 group-hover:bottom-5">
          <button className="h-10 px-8 font-normal bg-white border-none rounded-full w-max btn btn-sm hover:bg-[#222] hover:text-white">
            Quick View
          </button>
        </div>
      </div>
      <div className="flex items-start pt-3">
        <div className="flex-1 ">
          <p className="mb-1 text-sm text-gray-400">{title}</p>
          <p className="text-sm text-gray-500 ">${price}</p>
        </div>
        <button>
          <HeartOutlineIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default XProductCard;
