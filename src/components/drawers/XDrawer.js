import React from "react";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";

const XDrawer = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="z-30 overflow-x-hidden drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="min-h-full p-4 w-96 bg-base-200">
          {/* Sidebar content here */}
          <label htmlFor="my-drawer">
            <ShoppingCartIcon className="w-6 h-6" />
          </label>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default XDrawer;
