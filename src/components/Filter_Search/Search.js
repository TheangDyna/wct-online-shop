import React from "react";

export default function Search() {
  return (
    <div id="dropdown" className="mx-[150px]  ">
      <div
        className="flex  focus-within:text-gray-600 "
        aria-labelledby="dropdownDefaultButton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 absolute mx-1 my-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          placeholder="Search"
          className="h-6 pb-3  mb-4 pl-6 border pt-1 w-full "
        />
      </div>
    </div>
  );
}
