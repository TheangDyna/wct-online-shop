import React from "react";

export default function YourCard() {
  return (
    <div className="mb-4  flex">
      <div className="my-4 text-2xl font-bold">YourCard</div>
      <div className="max-w-xs grow "></div>

      <div className="m-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}
