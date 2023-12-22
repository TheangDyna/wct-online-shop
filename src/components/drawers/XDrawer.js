import React from "react";
import XDrawerSide from "./XDrawerSide";

const XDrawer = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="z-30 overflow-hidden drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <XDrawerSide />
      </div>
    </div>
  );
};

export default XDrawer;
