import React from "react";
import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { BellFilled, SettingFilled } from "@ant-design/icons";
import TeacherSideBar from "./TeacherSideBar";

import { useSelector, useDispatch } from "react-redux";
import { NotifyUserAction } from "../../../redux/actions/NotifyAction";
import { logoutAction } from "../../../redux/actions/UserActions";
import { openNotificationWithIcon } from "../../../components/Notification/Notification";
import { ERROR } from "../../../utils/settings/config";
const SideBar = () => {
  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));
  const { notifyUserDefault } = useSelector((state) => state.NotifyReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (userLogin !== null) {
      dispatch(NotifyUserAction(userLogin.id));
    } else {
      openNotificationWithIcon(ERROR, "Please login", "error");
      history.push("/");
    }
  }, []);

  return (
    <>
      <aside className="w-64 pl-2 fixed" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-white rounded-2xl dark:bg-white drop-shadow">
          <ul className="space-y-2">
            <li>
              <NavLink
                hidden={userLogin.role === "user" ? false : true}
                to="/enrolled-course"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="absolute flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="pl-6 font-semibold tracking-tighter text-blue-600 flex-1 ml-3 whitespace-nowrap">
                  Enrolled Courses
                </span>
              </NavLink>
              <NavLink
                hidden={userLogin.role === "teacher" ? false : true}
                to="/enrolled-course"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="absolute flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="pl-6 font-semibold tracking-tighter text-blue-600 flex-1 ml-3 whitespace-nowrap">
                  My Courses
                </span>
              </NavLink>
            </li>
            <li>
              {userLogin.role === "user" ? (
                <NavLink
                  to="/"
                  className=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    openNotificationWithIcon(
                      ERROR,
                      "Sorry this feature is being updated!!",
                      "error"
                    );
                  }}
                >
                  <svg
                    className="absolute w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    ></path>
                  </svg>
                  <span className="pl-6 font-semibold tracking-tighter text-red-600 flex-1 ml-3 whitespace-nowrap">
                    My Record
                  </span>
                </NavLink>
              ) : (
                <></>
              )}
            </li>
            <li>
              <NavLink
                to="/my-notification"
                className=" flex items-center p-2 text-base font-normal text-yellow-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BellFilled
                  className="absolute text-xl mr-1"
                  style={{ color: "rgb(250 204 21)" }}
                />
                <span className="pl-6 font-semibold tracking-tighter text-yellow-500 flex-1 ml-3 whitespace-nowrap">
                  Notification
                </span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-yellow-600 bg-yellow-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  {notifyUserDefault.length}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => {
                  openNotificationWithIcon(
                    ERROR,
                    "Sorry this feature is being updated!!",
                    "error"
                  );
                }}
              >
                <SettingFilled
                  className="absolute text-xl mr-1"
                  style={{ color: "#6b7280" }}
                />
                <span className="pl-6 font-semibold tracking-tighter text-gray-800 flex-1 ml-3 whitespace-nowrap">
                  Setting
                </span>
              </NavLink>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => {
                  dispatch(logoutAction());
                  history.push("/");
                }}
              >
                <svg
                  className="absolute flex-shrink-0 w-6 h-6 text-red-500 transition duration-75 dark:text-red-400 group-hover:text-red-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="pl-6 font-semibold tracking-tighter flex-1 ml-3 whitespace-nowrap text-red-500">
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      {userLogin?.role === "teacher" && <TeacherSideBar />}
    </>
  );
};

export default SideBar;
