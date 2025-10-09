import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import gitImg from "../../assets/gitbub.png";

const Navbar = () => {
  const manuLink = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-500 px-3 py-1 rounded"
              : "text-black hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive || window.location.pathname.startsWith("/detailsapp")
              ? "text-white bg-blue-500 px-3 py-1 rounded"
              : "text-black hover:text-blue-500"
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-500 px-3 py-1 rounded"
              : "text-black hover:text-blue-500"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" max-w-[1400px] mx-auto bg-[#D2D2D2] text-black navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* <li>
              <a>Item 1</a>
            </li> */}
            {manuLink}
          </ul>
        </div>
        <a className=" flex items-center gap-2 text-xl">
          <img className="w-[40px] h-[40px]" src={logoImg} alt="" />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">HERO.IO</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Item 1</a>
          </li> */}
          {manuLink}
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          className="btn bg-linear-65 from-[#632EE3] to-[#9F62F2]"
          href="https://github.com/SYDUR98"
          target="_blank"
        >
          <img src={gitImg} alt="" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
