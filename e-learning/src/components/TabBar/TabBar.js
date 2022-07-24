import React from "react";
import { NavLink } from "react-router-dom";

const TabBar = () => {
  return (
    <div className="bg-white rounded-lg drop-shadow-lg">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px pl-4">
          <li className="mr-2">
            <NavLink
              to="/add-new/course"
              className="text-medium text-blue-600 dark:text-blue-500 dark:border-blue-500 inline-block p-3 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              title="Create New Course"
            >
              Create New Course
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabBar;
