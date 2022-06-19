import React from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className="bg-white fixed w-full z-20">
      <div className="container flex justify-between h-16 mx-auto text-black">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://jwchat.org/kaiwa/images/logo-big.png"
            alt="logo"
            style={{ width: 80, height: 40 }}
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400
              text-black"
            >
              Trang Chủ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-black"
            >
              News
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-black"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink to="/login" className="text-black font-semibold px-8 py-3">
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="text-black font-semibold px-8 py-3"
          >
            Register
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
