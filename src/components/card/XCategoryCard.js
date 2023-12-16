import React from "react";

const XCategoryCard = ({ cover, title, description }) => {
  return (
    <div className="flex justify-center">
      <div className="relative flex border group h-[280px] min-w-[300px] max-w-[450px]">
        <img
          className="object-cover object-right w-full h-full "
          src={cover}
          alt={title}
        />
        <div className="absolute top-0 w-full h-full transition duration-300 opacity-75 group-hover:bg-blue-600" />

        <div className="absolute w-full h-full p-10 group-hover:text-white">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500 group-hover:text-white">{description}</p>
        </div>

        <div className="absolute bottom-10 left-10">
          <p className="font-bold text-white transition duration-300 ease-in-out scale-50 translate-y-4 opacity-0 group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-200">
            SHOP NOW
          </p>
          <hr className="transition h-[3px] duration-500 ease-in-out scale-x-0 bg-white group-hover:scale-x-100" />
        </div>
      </div>
    </div>
  );
};

export default XCategoryCard;
