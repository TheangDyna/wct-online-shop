import React from "react";
import model2 from "../assets/model2.jpg";

function CategoryCard() {
  const card = [1, 2, 3];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-4/5 m-auto gap-x-5 gap-y-5 ">
      {card.map(() => (
        <div className="flex justify-center">
          <div className=" w-[25rem] h-72 flex  relative  group border border-gray-500">
            <img
              className=" w-full h-full object-cover object-left"
              src={model2}
              alt="showe"
            />
            <div className="absolute top-5 left-10">
              <h1 className=" text-2xl font-semibold">Men</h1>
              <p className="italic font-medium">Spring 2023</p>
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
      ))}
    </div>
  );
}

export default CategoryCard;
