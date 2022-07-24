import React from "react";
import { NavLink } from "react-router-dom";
import "./CourseCard.css";
import { FolderOpenOutlined } from "@ant-design/icons";

const CourseCard = (props) => {
  const { course } = props;

  const renderOverView = course.description
    ?.split(";")
    .slice(0, 1)
    .map((item, index) => {
      return (
        <li
          className="my-1 truncate"
          style={{ maxInlineSize: "none" }}
          key={index}
        >
          <div className="flex align-center relative">
            <span className="dot absolute"></span>
            <span
              className="pl-8 text-medium font-medium tracking-tight truncate"
              title={item}
            >
              {item}
            </span>
          </div>
        </li>
      );
    });

  return (
    <>
      <NavLink to={`/course/${course.id}`}>
        <div className=" bg-white rounded-lg border-8 border-white shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="banned-img rounded-t-lg"
            src={props.course.banner}
            alt={course.name}
          />
          <div className="p-3">
            <h6 className="mb-2 text-base font-bold tracking-tight text-gray-800 dark:text-white truncate">
              <span title={course.name}>{course.name}</span>
            </h6>
            <ul className=" mb-2 text-base font-bold tracking-tight text-gray-800 dark:text-white">
              {renderOverView}
            </ul>
            <div className="flex w-full justify-between">
              <div className="flex">
                <FolderOpenOutlined className="folder-icon" />
                <span className="ml-2 text-gray-800 font-medium text-xs leading-none flex items-center">
                  23
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-800 font-medium text-xs leading-none flex items-center align-middle">
                  23
                </span>
                <span className="ml-1 text-gray-800 font-thin text-xs leading-none flex items-end">
                  students
                </span>
              </div>
            </div>
            <hr className="mb-4 mt-2 line" />
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={course.avatar}
                  alt={course.name}
                />
                <div className="text-sm">
                  <span className="text-gray-800 font-bold leading-none flex items-center">
                    {course.teacher_name}
                  </span>
                </div>
              </div>
              <div className="text-lg flex item-center">
                <span className="text-pink-500 font-bold leading-none flex items-center">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default CourseCard;
