import React from "react";
import XQuantityButton from "../button/XQuantityButton";
import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

const AddToCartCatalog = () => {
  return (
    <div className="flex flex-col w-full gap-y-5">
      <h1 className="text-2xl font-normal text-gray-700 ">
        Lightweight Jacket
      </h1>
      <p className="text-lg font-bold"> $58.79</p>
      <p className="text-sm text-gray-500">
        Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
        Mauris consequat ornare feugiat.
      </p>
      <div className="mt-5">
        <table className="min-w-full [&_tr>td]:pb-5">
          <tbody>
            <tr>
              <td className="w-14 sm:w-28">
                <p className="text-sm text-center text-gray-500">Size:</p>
              </td>
              <td>
                <select className="flex-1 w-full max-w-xs rounded-md select select-bordered select-sm">
                  <option disabled>Choose an option</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-14 sm:w-28">
                <p className="text-sm text-center text-gray-500">Color:</p>
              </td>
              <td>
                <select className="flex-1 w-full max-w-xs rounded-md select select-bordered select-sm">
                  <option disabled>Choose an option</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="flex flex-wrap gap-5">
                  <XQuantityButton />
                  <button className="px-8 rounded-full bg-[#717fe0] hover:bg-[#222] border-none text-white btn">
                    ADD TO CART
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="flex gap-5 text-gray-500">
                  <button>
                    <HeartOutlineIcon className="w-5 h-5" />
                  </button>
                  <span className="text-gray-400 ">|</span>
                  <button>
                    <InstagramIcon className="w-5 h-5" />
                  </button>
                  <button>
                    <FacebookIcon className="w-5 h-5" />
                  </button>
                  <button>
                    <TwitterIcon className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToCartCatalog;
