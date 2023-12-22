import React from "react";
import { XMarkIcon } from "../icons/XMarkIcon";
import XQuickCheckOutProductCard from "../cards/XQuickCheckOutProductCard";
import XButton from "../button/XButton";

const XDrawerSide = () => {
  return (
    <div className="flex h-full pt-16 py-[100px] pl-16 pr-6 bg-white w-96">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between pb-10">
          <p className="text-xl font-bold">YOUR CART</p>
          <label htmlFor="my-drawer" className="btn btn-circle btn-ghost">
            <XMarkIcon className="w-6 h-6" />
          </label>
        </div>
        <div className="flex flex-col gap-2 overflow-auto">
          <XQuickCheckOutProductCard />
          <XQuickCheckOutProductCard />
          <XQuickCheckOutProductCard />
          <XQuickCheckOutProductCard />
        </div>
        <div className="mt-auto">
          <p className="my-10 text-xl">Total: $75.00</p>
          <div className="flex justify-between">
            <XButton>VIEW CART </XButton>
            <XButton>CHECK OUT</XButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XDrawerSide;
