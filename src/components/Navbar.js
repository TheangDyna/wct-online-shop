import React from "react";
import { BsCart3 } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full fixed bg-white  z-40">
      <div className="navbar  w-11/12 m-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-opacity-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 text-xs font-medium z-[1] p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <a>Home</a>
                <ul className="p-2 font-normal">
                  <li>
                    <a>HomePage1</a>
                  </li>
                  <li>
                    <a>HomePage2</a>
                  </li>
                  <li>
                    <a>HomePage3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost md:text-md text-xs hover:bg-white hover:bg-opacity-0">
            Online Shop
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal px-1 text-xs font-semibold items-center  ">
            <li tabIndex={0}>
           
              <details>
                <summary className=" hover:bg-slate-50 hover:bg-opacity-0 hover:text-blue-700">
                  Home
                </summary>
                <ul className="z-50 text-xs ">
                  <li>
                    <a>HomePage1</a>
                  </li>
                  <li>
                    <a>HomePage2</a>
                  </li>
                  <li>
                    <a>HomePage3</a>
                  </li>
                </ul>
              </details>
              
            </li>
            <li>
              <a className="hover:bg-red-300 hover:bg-opacity-0 hover:text-blue-700 ">
                Shop
              </a>
            </li>
            <li>
              <a className=" hover:bg-white hover:bg-opacity-0 hover:text-blue-700">
                Features
              </a>
            </li>
            <li>
              <a className=" hover:bg-white hover:bg-opacity-0 hover:text-blue-700">
                Blog
              </a>
            </li>
            <li>
              <a className=" hover:bg-white hover:bg-opacity-0 hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a className=" hover:bg-white hover:bg-opacity-0 hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4 sm:gap-6 md:gap-8">
          <div className="mr-5">
            <IoSearchSharp className="hover:text-blue-700" />
          </div>
          <div className="indicator ">
            <span className="indicator-item badge border-none w-4 h-4 badge-secondary text-xs text-white bg-blue-500 ml-2 -mt-2">
              9
            </span>
            <BsCart3 className="hover:text-blue-700" />
          </div>
          <div className="indicator ">
            <span className="indicator-item badge border-none w-4 h-4 badge-secondary text-xs text-white bg-blue-500 ml-2 -mt-2">
              5
            </span>
            <FaRegHeart className="hover:text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
