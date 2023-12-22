import React from "react";
import { XMarkIcon } from "../icons/XMarkIcon";

const XCartProductCard = () => {
  return (
    <div className="relative w-[60px] h-[80px] group cursor-pointer">
      <img
        alt=""
        className="object-cover w-full h-full"
        src="https://preview.colorlib.com/theme/cozastore/images/item-cart-04.jpg.webp"
      />
      <div className="absolute top-0 right-0 w-full h-full bg-black opacity-0 group-hover:opacity-30" />
      <div className="absolute top-0 right-0 flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100">
        <XMarkIcon className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export default XCartProductCard;
