import React from "react";
import { NavLink } from "react-router-dom";
import "./TeacherCard.css";
import { FolderOpenOutlined } from "@ant-design/icons";

const TeacherCard = (props) => {
  const disableClick = (e) => {
    if (props.fixedData) e.preventDefault();
  };
  return (
    <>
        <NavLink
            to="/"
            onClick={disableClick}
            className={ props.fixedData && "pointer-events-none"}>
            <div className='flex bg-white items-center rounded-lg px-5'>
                <img class="avatar-img object-cover rounded-lg md:h-auto md:w-48" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.teacher_name}</h5>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <FolderOpenOutlined className='folder-icon'/>
                                <span class="ml-2 text-gray-800 font-medium text-xs leading-none flex items-center">23 lessons</span>
                            </div>
                            <div className='flex'>
                                <span class="text-gray-800 font-medium text-sm leading-none flex items-center">23</span>
                                <span class="ml-1 text-gray-800 font-thin text-xs leading-none flex items-end">Students</span>
                            </div>
                        </div>
                </div>
            </div>
      </NavLink>
    </>
  );
};

export default TeacherCard;
