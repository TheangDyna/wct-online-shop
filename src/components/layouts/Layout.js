import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import XNavbar from "../navbars/XNavbar";
import XHeaderSlide from "../headers/XHeaderSlide";
import XFooter from "../footers/XFooter";
import XDrawer from "../drawers/XDrawer";
import XBanner from "../headers/XBanner";

const Layout = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  return (
    <XDrawer>
      <XNavbar isHomepage={isHomepage} />
      {isHomepage && <XHeaderSlide />}
      {isAbout && <XBanner title="About" />}
      {isContact && <XBanner title="Contact" />}
      {!isHomepage && <div className="h-10" />}
      <main className="px-6 mx-auto max-w-[1380px]">
        <Outlet />
      </main>
      <div className="h-20" />
      <XFooter />
    </XDrawer>
  );
};

export default Layout;
