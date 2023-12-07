import React from "react";

export default function Card() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          <a href="#" className="group">
            <div className="static flex aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7   justify-center items-center">
              <img
                src="https://preview.colorlib.com/theme/cozastore/images/product-01.jpg"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-110 duration-300 "
              />

              <div className="absolute group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="rounded-full bg-white my-4 px-4 py-2 inline-block  ">
                  See Mo
                </button>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
          </a>
        </div>
      </div>
    </div>
  );
}
