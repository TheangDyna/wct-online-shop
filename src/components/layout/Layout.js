import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import XNavbar from "../navbars/XNavbar";
import XHeaderSlide from "../headers/XHeaderSlide";

const Layout = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div>
      <XNavbar isHomepage={isHomepage} />
      {isHomepage && <XHeaderSlide />}
      {!isHomepage && <div className="h-10" />}
      <main className="px-4 mx-auto max-w-[1200px]">
        <Outlet />
      </main>
      <div className="h-10" />
    </div>
  );
};

export default Layout;
