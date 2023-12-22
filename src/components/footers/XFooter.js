import React from "react";

const XFooter = () => {
  return (
    <footer className="bg-[#222222] pt-[75px] pb-[75px] text-gray-400 text-sm px-6">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="leading-8">
          <p className="mb-5 text-base font-bold text-white">CATEGORIES </p>
          <p>Women </p>
          <p>Men </p>
          <p>Shoes </p>
          <p>Watches</p>
        </div>
        <div className="leading-8">
          <p className="mb-5 text-base font-bold text-white">HELP </p>
          <p>Track </p>
          <p>Order </p>
          <p>Returns </p>
          <p>Shipping </p>
          <p>FAQs</p>
        </div>
        <div>
          <p className="mb-5 text-base font-bold text-white">GET IN TOUCH</p>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
        </div>
        <div>
          <p className="mb-5 text-base font-bold text-white">NEWSLETTER</p>
          <input
            type="text"
            placeholder="email@example.com"
            className="w-full mb-5 border-gray-600 input bg-inherit focus:outline-gray-600 focus:border-gray-600"
          />

          <button className="rounded-full btn bg-[#717fe0] border-none text-white px-12 hover:text-[#717fe0] hover:bg-white">
            SUBCRIBE
          </button>
        </div>
      </div>
      <div className="h-[75px]" />
      <div className="text-center">
        <p>
          Copyright ©2023 All rights reserved | This UI we have follow{" "}
          <a
            href="https://preview.colorlib.com/theme/cozastore/index.html"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 link"
          >
            template
          </a>{" "}
          made by{" "}
          <a
            href="https://colorlib.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 link"
          >
            Colorlib
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default XFooter;
