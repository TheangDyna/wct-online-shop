import React from "react";

export default function Total() {
  return (
    <div className="w-full">
      <div className="m-4">Total: 75$</div>
      <div className="flex">
        <button className="mr-1 rounded-full bg-gray-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          ViewCard
        </button>
        <button className="rounded-full bg-gray-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          CheckCard
        </button>
      </div>
    </div>
  );
}
