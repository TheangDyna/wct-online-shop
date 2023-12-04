import React from "react";

function CategoryCard({ title, text, cover }) {
  return (
    
      <div className="flex justify-center">
        <div className=" w-[25rem] h-72 flex  relative  group border border-gray-500">
          <img
            className=" w-full h-full object-cover object-left"
            src={cover}
            alt="showe"
          />
          <div className="absolute top-5 left-10">
            <h1 className=" text-2xl font-semibold">{title}</h1>
            <p className="italic font-medium">{text}</p>
          </div>
          <h1 className="absolute group-hover:bg-black hover:backdrop-blur-lg w-full h-full top-0 opacity-50 transition duration-300"></h1>
          <div className="group absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition duration-700 delay-75">
            <p className=" font-semibold  text-black group-hover:text-white transition  delay-300 group-hover:-translate-y-3 group-hover:scale-110 duration-700">
              SHOP NOW
            </p>
            <hr className=" h-1 bg-black group-hover:bg-white transition ease-in-out delay-100 group-hover:-translate-px-5 group-hover:scale-110 duration-1000"></hr>
          </div>
        </div>
      </div>
  );
}

export default CategoryCard;
