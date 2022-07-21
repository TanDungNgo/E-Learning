import React from "react";
import { NavLink } from "react-router-dom";
import "./TeacherCard.css";
import { FolderOpenOutlined } from "@ant-design/icons";

const TeacherCard = (props) => {
  let { teacher } = props;
  return (
    <>
      <NavLink to="/" className="pointer-events-none">
        <div className="flex bg-white items-center rounded-lg px-5">
          <img
            className="avatar-img object-cover rounded-lg md:h-auto md:w-48"
            src={teacher.avatar}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {teacher.username}
            </h5>
            <div className="flex justify-between">
              <div className="flex">
                <FolderOpenOutlined className="folder-icon" />
                <span className="ml-2 text-gray-800 font-medium text-xs leading-none flex items-center">
                  23 lessons
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-800 font-medium text-sm leading-none flex items-center">
                  23
                </span>
                <span className="ml-1 text-gray-800 font-thin text-xs leading-none flex items-end">
                  Students
                </span>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default TeacherCard;
