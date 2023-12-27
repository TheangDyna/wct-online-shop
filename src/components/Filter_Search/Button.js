import React from "react";
import Search from "./Search";

export default function Button() {
  return (
    <div className="flex space-x-2 pt-2 flex-row-reverse px-[150px]">
      <div className="group">
        <button
          id="dropdownDefaultButton"
          type="button"
          data-dropdown-toggle="dropdown"
          className="flex items-center border rounded group-hover:bg-blue-600  py-1 px-2 pr-4 text-gray-500 hover:text-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-3 mx-1 group-hover:text-slate-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          Search
        </button>
      </div>

      <div className="group flex px-1">
        <button className="flex items-center border rounded  group-hover:bg-blue-600  px-3 text-gray-500 group-hover:text-slate-200">
          <img
            src="https://www.svgrepo.com/show/472431/bars-filter.svg"
            alt="Icon Filter"
            className="w-3 mx-1"
          />
          Filter
        </button>
      </div>
    </div>
  );
}
