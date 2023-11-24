import React from "react";

export default function Card() {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-screen-2xl  ">
      <div className="group relative items-center justify-center overflow-hidden">
        <div className="h-px w-0.5">
          <img
            className="h-full w-full object-cover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            src="https://preview.colorlib.com/theme/cozastore/images/product-01.jpg"
            alt=""
          />
          <div className="absolute">
            <button className=" bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
              button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
