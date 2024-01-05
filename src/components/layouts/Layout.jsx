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
      <>
        <XNavbar isHomepage={isHomepage} />
        <main className="min-h-[calc(100vh-500px)]">
          {isHomepage && <XHeaderSlide />}
          {isAbout && <XBanner title="About" />}
          {isContact && <XBanner title="Contact" />}
          {!isHomepage && <div className="h-10" />}
          <div className="px-6 mx-auto max-w-[1380px] ">
            <Outlet />
          </div>
        </main>
        <div className="h-20" />
        <XFooter />
      </>
    </XDrawer>
  );
};

export default Layout;
