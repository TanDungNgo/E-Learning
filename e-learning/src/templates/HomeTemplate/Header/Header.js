import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { USER_LOGIN } from "../../../utils/settings/config";
import { Dropdown, Menu, Space } from "antd";

export const Header = (props) => {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const menuDropdown = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <NavLink to="/profile" className=" text-black">
              Profile
            </NavLink>
          ),
        },
        {
          key: "2",
          label: (
            <NavLink to="/my-assigned-courses" className=" text-black">
              My Courses
            </NavLink>
          ),
        },
        {
          key: "3",
          label: (
            <NavLink to="/settings" className=" text-black">
              Settings
            </NavLink>
          ),
        },
        {
          key: "4",
          danger: true,
          label: (
            <button
              className="font-bold "
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                props.history.push("/login");
              }}
            >
              LOGOUT
            </button>
          ),
        },
      ]}
    />
  );

  const dropdownHeader = () => (
    <Dropdown overlay={menuDropdown}>
      <Space>
        Hello,
        <NavLink to="/profile" className="!text-black !font-bold">
          {userLogin.email}
        </NavLink>
      </Space>
    </Dropdown>
  );

  return (
    <div className={"mb-24 px-24 py-6 bg-transparent z-50 w-full drop-shadow-2xl " + ( props.absolute ? "absolute" : "")}>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="px-4 flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/xzv4QsC/e-learningkaiwalogo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </NavLink>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="align-middle hidden w-full md:block md:w-auto"
            id="mobile-menu"
          >
            <ul className="align-middle flex flex-col mt-4 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/teacher"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Teacher
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/courses"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  All Course
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/support"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
          {userLogin ? (
            dropdownHeader()
          ) : (
            <>
              <div className="items-center flex-shrink-0 grid grid-cols-2 gap-2">
                <hr
                  style={{
                    height: "40px",
                    width: "1px",
                    backgroundColor: "gray",
                  }}
                  className="absolute"
                ></hr>
                <button
                  className="w-full !rounded-none col-span-1"
                  onClick={() => {
                    props.history.push("/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="w-full col-span-1 bg-orange-100 hover:bg-orange-300 text-orange-700 font-semibold hover:text-white py-1 px-4 border  border-orange-300 hover:border-transparent rounded"
                  onClick={() => {
                    props.history.push("/register");
                  }}
                >
                  Register
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
    // <header className="bg-white sticky w-full z-20">
    //   <div className="container flex justify-between h-16 mx-auto text-black">
    //     <NavLink
    //       to="/"
    //       aria-label="Back to homepage"
    //       className="flex items-center p-2"
    //     >
    //       <img
    //         src="https://i.ibb.co/xzv4QsC/e-learningkaiwalogo.png"
    //         alt="logo"
    //         style={{ height: 50 }}
    //       />
    //     </NavLink>
    //     <ul className="items-stretch hidden space-x-3 lg:flex">
    //       <li className="flex">
    //         <NavLink
    //           to="/"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400
    //           text-black"
    //         >
    //           Home
    //         </NavLink>
    //       </li>
    //       <li className="flex">
    //         <NavLink
    //           to="/teachers"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-black"
    //         >
    //           Teacher
    //         </NavLink>
    //       </li>
    //       <li className="flex">
    //         <NavLink
    //           to="/courses"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-black"
    //         >
    //           All Courses
    //         </NavLink>
    //       </li>
    //       <li className="flex">
    //         <NavLink
    //           to="/support"
    //           className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-black"
    //         >
    //           Support
    //         </NavLink>
    //       </li>
    //     </ul>
    //     {userLogin ? (
    //       dropdownHeader()
    //     ) : (
    //       <div className="items-center flex-shrink-0 grid grid-cols-2 gap-2">
    //         <Button
    //           textContent="Login"
    //           className="w-full !rounded-none col-span-1"
    //           onClick={() => {
    //             props.history.push("/login");
    //           }}
    //         ></Button>
    //         <Button
    //           textContent="Register"
    //           className="w-full !rounded-none col-span-1"
    //           onClick={() => {
    //             props.history.push("/register");
    //           }}
    //         ></Button>
    //       </div>
    //     )}
    //   </div>
    // </header>
  );
};
