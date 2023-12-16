import React from "react";
import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";

const XProductCard = ({ title, price, cover }) => {
  return (
    <div className="max-w-[500px] min-w-[240px]">
      <div className="relative flex justify-center w-full overflow-hidden group h-[330px]">
        <img
          src={cover}
          alt={title}
          className="object-cover w-full duration-700 group-hover:scale-110"
        />

        <div className="absolute duration-300 -bottom-10 group-hover:bottom-5">
          <button className="h-10 px-8 font-normal bg-white border-none rounded-full btn btn-sm">
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
