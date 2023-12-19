import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { useState } from "react";

function SlideView({ images }) {
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
    <div className="  ">
      <div className=" flex gap-5 w-full">
        <div className="w-1/5 ">
          <div className="w-full sm:h-32 h-20 md:h-24 lg:h-28 mt-3 ">
            {images.map((item, index) => (
              <img
                onClick={() => handleClick(index)}
                key={index}
                src={item}
                alt={`Image ${index + 1}`}
                className="mx-auto w-full h-full object-cover mt-3 hover:border border-gray-500"
              />
            ))}
          </div>
        </div>
        <div className=" mx-auto mt-3 h-[20rem] sm:h-[30rem] md:h-[23rem] lg:h-[30rem] w-4/5 bg-red-400">
          <div className="relative h-full w-full bg-fuchsia-400 ">
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 text-white  p-1 sm:p-2 rounded"
            >
              <MdOutlineArrowBackIosNew />
            </button>

            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="mx-auto w-full h-full object-cover "
            />

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0  text-base -translate-y-1/2 bg-gray-600 text-white p-1 sm:p-2  rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideView;
