import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "../icons/MagnifyingGlassIcon";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";
import { Link } from "react-router-dom";
import { navigations } from "../../constants/navigation";
import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";
import XNavLink from "../link/XNavLink";
import { Bars3CenterLeftIcon } from "../icons/Bars3CenterLeftIcon";

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
          : isScrolled
          ? "h-[70px] bg-white shadow-sm sticky"
          : "h-[84px] bg-white shadow-sm sticky"
      }`}
    >
      <div className="navbar mx-auto max-w-[1380px]">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle` lg:hidden"
          >
            <Bars3CenterLeftIcon className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="flex flex-col dropdown-content mt-3 z-[1] shadow-lg bg-white rounded-md w-52 p-3"
          >
            {navigations.map((item, index) => {
              return (
                <li key={index}>
                  <XNavLink path={item.path}>{item.title}</XNavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center flex-1 lg:justify-start">
          <Link to="/" className="hidden text-2xl sm:block">
            <span className="font-bold">WCT</span> Shop
          </Link>
          <div className="hidden ml-10 lg:flex">
            <ul className="flex">
              {navigations.map((item, index) => {
                return (
                  <li key={index}>
                    <XNavLink path={item.path}>{item.title}</XNavLink>
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
