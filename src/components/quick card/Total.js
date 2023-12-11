import React from "react";

export default function Total() {
  return (
    <div className="w-full">
      <div className="m-4">Total: 75$</div>
      <div className="flex">
        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-1">
          ViewCard
        </button>
        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          CheckCard
        </button>
      </div>
    </div>
  );
}
