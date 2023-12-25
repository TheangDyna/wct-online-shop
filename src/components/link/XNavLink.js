import React from "react";
import { NavLink } from "react-router-dom";

const XNavLink = ({ path, children }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "font-normal btn btn-ghost text-[#717fe0]"
          : "font-normal btn btn-ghost"
      }
    >
      {children}
    </NavLink>
  );
};

export default XNavLink;
