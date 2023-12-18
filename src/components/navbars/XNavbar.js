import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "../icons/MagnifyingGlassIcon";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";
import { Link } from "react-router-dom";
import { navigations } from "../../constants/navigation";
import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";

const XNavbar = ({ isHomepage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 flex w-full items-center duration-500 px-4 ${
        isHomepage
          ? isScrolled
            ? "h-[70px] bg-white shadow-sm"
            : "h-[84px] bg-transparent"
          : "h-[70px] bg-white shadow-sm sticky"
      }`}
    >
      <div className="navbar mx-auto max-w-[1380px]">
        <div className="flex flex-1">
          <Link to="/" className="text-2xl">
            <span className="font-bold">Online</span> Shop
          </Link>
          <div className="hidden ml-10 lg:flex">
            <ul className="items-center menu menu-horizontal">
              {navigations.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path} className="focus:bg-inherit">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <button className="btn btn-circle btn-ghost">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
        <label className="btn btn-circle btn-ghost" htmlFor="my-drawer">
          <div className="indicator ">
            <span className="px-1 badge indicator-item badge-secondary">9</span>
            <ShoppingCartIcon className="w-6 h-6" />
          </div>
        </label>
        <button className="btn btn-circle btn-ghost">
          <div className="indicator ">
            <span className="px-1 badge indicator-item badge-secondary">9</span>
            <HeartOutlineIcon className="w-6 h-6" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default XNavbar;
