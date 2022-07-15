
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FolderOpenOutlined, UserOutlined, ShareAltOutlined, HeartOutlined } from "@ant-design/icons";

import CourseOverView from "../Courses/CourseOverView";
import TeacherCard from "../../components/MultipleItems/TeacherCard";


const DemoCourseDetailUser = (props) => {
    const demoCourse = {
        top: "-9rem",
        left: "-20rem",
    }
  return (
<>

<div 
    class={"grid overflow-hidden grid-cols-2 grid-rows-none gap-px bg-white drop-shadow-xl rounded-lg z-10 scale-50 w-screen absolute"}
    style={demoCourse}
    >
<span 
    class="top-0 absolute z-auto text-white bg-orange-600 font-bold upcase rounded-lg text-base px-4 pt-2 pb-2 text-center">
    Demo
</span>
    <div class="pl-16 pr-10 pt-10">
        <div class="course-info grid overflow-hidden grid-cols-1 grid-rows-7 gap-px">
            <div class="row-span-1">
                <a 
                    className="text-4xl font-bold text-current"
                    onClick={(()=> props.toggleName())}>
                    {props.name ? props.name : 'Here is Title'}
                </a>
            </div>
            <div class="row-span-1 pb-1 border-b-2 border-gray-600">
                <TeacherCard fixedData/>
            </div>
            <div class="row-span-1">
                <div className="border-b-2 border-gray-600 py-3 flex justify-between">
                    <div className="flex space-x-8">
                        <div>
                            <span className="block text-3xl font-bold">
                                0
                            </span>
                            <span className="border-b-2 border-gray-600 text-lg font-bold tracking-tighter">
                                records
                            </span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold">
                                0
                            </span>
                            <span className="text-lg font-bold tracking-tighter">
                                students
                            </span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold">
                                0
                            </span>
                            <span className="text-lg font-bold tracking-tighter">
                                lessons
                            </span>
                        </div>
                    </div>
                    <div className="relative w-2/5">
                      <div className="space-x-4 absolute top-3   right-0">
                        <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                          <ShareAltOutlined className="icon"/>
                        </button>
                        <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                          <HeartOutlined className="icon"/>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
            <div class="row-span-2 pt-2">
                <a 
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-current"
                    onClick={(()=> props.toggleDescription())}
                >
                    Course overview
                </a>
                <CourseOverView fixedData={props.description}/>
            </div>
            <div class="row-span-1 flex justify-end h-20">
                <div className="w-full h-full relative">
                  <NavLink
                    to="/"
                    className="py-2 px-7 enroll-button absolute right-1 top-2">
                    Enroll
                  </NavLink>
                </div>
            </div>
        </div>
    </div>
  <div class="">
      <img 
        className="w-full h-full must-have-pointer" 
        src={props.imgSrc ? props.imgSrc : "https://s.udemycdn.com/premium-clp/1565838/CourseImage-2x.jpg"}
        onClick={(()=> 
        {props.toggleImg()
         console.log(props.imgSrc)})}
        />
  </div>
</div>
</>
  )
}

export default DemoCourseDetailUser