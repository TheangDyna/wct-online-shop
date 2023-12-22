import React from "react";

const XButton = ({ children }) => {
  return (
    <button className="px-8 border-none rounded-full w-max btn bg-[#222] hover:bg-[#717fe0] text-white">
      {children}
    </button>
  );
};

export default XButton;
