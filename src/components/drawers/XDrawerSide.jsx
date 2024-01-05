import { XMarkIcon } from "../icons/XMarkIcon";
import XQuickCheckOutProductCard from "../cards/XQuickCheckOutProductCard";
import { Link } from "react-router-dom";

const XDrawerSide = () => {
  return (
    <div className="flex h-full pt-16 py-[100px] pl-16 pr-6 bg-white w-96">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between pb-10">
          <p className="text-xl font-bold">YOUR CART</p>
          <label htmlFor="drawerModal" className="btn btn-circle btn-ghost">
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
            <Link
              to="/shop/checkout"
              className="px-8 border-none rounded-full w-max btn bg-[#222] hover:bg-[#717fe0] text-white"
            >
              VIEW CART
            </Link>
            <Link
              to="/shop/checkout"
              className="px-8 border-none rounded-full w-max btn bg-[#222] hover:bg-[#717fe0] text-white"
            >
              CHECK OUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XDrawerSide;
