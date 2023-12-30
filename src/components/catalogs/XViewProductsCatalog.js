import React from "react";
import { useState } from "react";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon";

function XViewProductsCatalog({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="flex w-full gap-5">
      <div className="w-[13%] flex-col gap-y-5 flex">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative pb-[130%] outline-2 outline-gray-300 hover:outline cursor-pointer"
          >
            <img
              className="absolute w-full h-full"
              src={item}
              alt={`product ${index + 1}`}
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="relative pb-[130%]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="product"
              className={`absolute object-cover w-full h-full transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute left-0 transform -translate-y-1/2 top-1/2">
            <button
              className="text-white bg-black bg-opacity-50 border-none rounded-none btn-sm sm:btn-md btn btn-square hover:bg-opacity-80 hover:bg-black focus:bg-opacity-80"
              onClick={handlePrev}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute right-0 transform -translate-y-1/2 top-1/2">
            <button
              className="text-white bg-black bg-opacity-50 border-none rounded-none btn-sm sm:btn-md btn btn-square hover:bg-opacity-80 hover:bg-black focus:bg-opacity-80"
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XViewProductsCatalog;
