import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import XNavbar from "../navbars/XNavbar";
import XHeaderSlide from "../headers/XHeaderSlide";
import XFooter from "../footers/XFooter";
import XDrawer from "../drawers/XDrawer";

const Layout = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <XDrawer>
      <XNavbar isHomepage={isHomepage} />
      {isHomepage && <XHeaderSlide />}
      {!isHomepage && <div className="h-10" />}
      <main className="px-4 mx-auto max-w-[1380px]">
        <Outlet />
      </main>
      <div className="h-10" />
      <XFooter />
    </XDrawer>
  );
};

export default Layout;
