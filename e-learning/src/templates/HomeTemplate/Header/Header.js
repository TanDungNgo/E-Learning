import React from "react";
import { NavLink } from "react-router-dom";
import {
  ERROR,
  logoE_Learning,
  USER_LOGIN,
} from "../../../utils/settings/config";
import { Dropdown, Menu, Space } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/actions/UserActions";
import { openNotificationWithIcon } from "../../../components/Notification/Notification";

export const Header = (props) => {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const dispatch = useDispatch();
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
          label:
            userLogin?.role === "admin" ? (
              <NavLink to="/admin" className=" text-black">
                Admin Management
              </NavLink>
            ) : (
              <NavLink to="/enrolled-course" className=" text-black">
                My Courses
              </NavLink>
            ),
        },

        {
          key: "3",
          label: (
            <NavLink
              to="/"
              className=" text-black"
              onClick={() => {
                openNotificationWithIcon(
                  ERROR,
                  "Sorry this feature is being updated!!",
                  "error"
                );
              }}
            >
              Settings
            </NavLink>
          ),
        },
        {
          key: "5",
          danger: true,
          label: (
            <button
              className="font-bold "
              onClick={() => {
                dispatch(logoutAction());
                props.history.push("/");
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
          {userLogin.username}
        </NavLink>
      </Space>
    </Dropdown>
  );

  return (
    <div
      className={
        "mb-6 px-24 py-6 bg-transparent z-50 w-full drop-shadow-2xl " +
        (props.absolute ? "absolute" : "")
      }
    >
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="px-4 flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex items-center">
            <img src={logoE_Learning} className="mr-3 h-6 sm:h-9" alt="Logo" />
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
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
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
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
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
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  onClick={() => {
                    openNotificationWithIcon(
                      ERROR,
                      "Sorry this feature is being updated!!",
                      "error"
                    );
                  }}
                >
                  Teacher
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/all-courses"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  All Course
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                  onClick={() => {
                    openNotificationWithIcon(
                      ERROR,
                      "Sorry this feature is being updated!!",
                      "error"
                    );
                  }}
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
                  className="w-full !rounded-none col-span-1 font-semibold "
                  onClick={() => {
                    props.history.push("/login");
                  }}
                >
                  Login
                </button>
                <button
                  // className="text-lg col-span-1 bg-orange-100 uppercase text-orange-500 font-semibold  py-2 px-8 border border-orange-300 hover:border-transparent rounded-sm duration-500 hover:bg-orange-300 hover:!text-white"
                  className="w-full col-span-1 bg-orange-100 hover:bg-orange-300 text-orange-700 font-semibold hover:text-white py-1 px-4 border  border-orange-300 hover:border-transparent rounded-sm duration-500"
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
  );
};
