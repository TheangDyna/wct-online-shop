import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";

const slides = [
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
    title: "title 01",
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
    title: "title 02",
  },
  {
    cover:
      "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
    title: "title 03",
  },
];

const XHeaderSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleNext = () => {
    clearInterval(intervalId);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    clearInterval(intervalId);
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    setIntervalId(newIntervalId);

    return () => clearInterval(newIntervalId);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen bg-gray-200 carousel">
      {slides.map((item, index) => {
        return (
          <div
            key={index}
            className={`carousel-item h-screen w-full animate-opacity ${
              index === currentSlide ? "absolute" : "hidden"
            }`}
          >
            <img
              alt=""
              src={item.cover}
              className="object-cover w-full h-full"
            />
          </div>
        );
      })}
      {slides.map((item, index) => {
        return (
          <div
            key={index}
            className={`mx-auto h-min text-black transform -translate-y-1/2 top-1/2 min-w-[1380px] px-6 ${
              index === currentSlide ? "relative" : "hidden"
            }`}
          >
            <div>
              <p className="text-3xl w-max animate-moveRight">{item.title}</p>
              <div className="h-5" />
              <h1 className="text-6xl text-black w-max animate-moveLeft">
                NEW SEASON
              </h1>
              <div className="h-10" />
              <button className="px-12 rounded-full bg-[#717fe0] hover:bg-[#222] border-none text-white btn">
                SHOP NOW
              </button>
            </div>
          </div>
        );
      })}
      <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button className="btn btn-circle btn-ghost" onClick={handlePrev}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button className="btn btn-circle btn-ghost" onClick={handleNext}>
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default XHeaderSlide;
