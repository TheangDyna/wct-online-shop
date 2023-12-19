import React from "react";
import SlideView from "./SlideView";
import SelectOptions from "./SelectOptions";
import Quantity from "./Quantity";
import ButtonCoupon from "./ButtonCoupon";
import { IoIosHeart } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function QuickView() {
  const images = [
    "https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg.webp",
    "https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg.webp",
    "https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg.webp",
  ];

  const selectSize = ["S", "M", "L", "XL"];
  const selectColors = ["Blue", "Red", "White", "Black"];

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Quick View
      </button>
      <div className="  ">
        <dialog id="my_modal_2" className="modal">
          <div className=" modal-box rounded-none h-4/5 md:h-5/6 md:w-11/12 w-4/5 lg:w-4/5 bg-white p-10">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3  top-3">
                ✕
              </button>
            </form>
            <div className="md:flex">
              <div className=" h-5/6 w-full md:w-2/4 ">
                <SlideView images={images} />
              </div>
              <div className=" h-5/6 w-full md:w-2/4 p-5 ml-5">
                <div className=" ">
                  <h1 className=" text-2xl font-normal text-gray-700">
                    Lightweight Jacket
                  </h1>
                  <p className=" font-medium text-lg mt-2 md:mt-5"> $58.79</p>
                  <p className=" text-base mt-2 md:mt-5">
                    {" "}
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>
                </div>
                <div className="p-5">
                  <div className=" flex items-center gap-2 md:gap-4 ">
                    <div className="w-1/5">
                      <label className="lg:font-medium md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                        Size:
                      </label>
                    </div>
                    <div className="w-4/5">
                      <SelectOptions products={selectSize} />
                    </div>
                  </div>
                  <div className=" flex items-center gap-2 md:gap-4">
                    <div className="w-1/5">
                      <label className="lg:font-medium md:font-medium font-normal  text-sm md:text-base lg:text-lg">
                        Colors:
                      </label>
                    </div>
                    <div className="w-4/5">
                      <SelectOptions products={selectColors} />
                    </div>
                  </div>
                  <div className="px-[20%] mt-5">
                    <Quantity />
                  </div>
                  <div className="px-[20%] mt-5">
                    <ButtonCoupon chidren={"ADD TO CART"} />
                  </div>
                  <div className="px-[20%] mt-8">
                    <div className="flex gap-4 text-lg items-center">
                      <IoIosHeart className=" cursor-pointer hover:text-blue-800" />
                      <span>/</span>
                      <FaFacebookF className="cursor-pointer hover:text-blue-800" />
                      <FaGooglePlusG className="cursor-pointer hover:text-blue-800" />
                      <FaTelegramPlane className="cursor-pointer hover:text-blue-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
export default QuickView;
