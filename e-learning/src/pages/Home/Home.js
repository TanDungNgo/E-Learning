import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MultipleCourses } from "../../components/MultipleItems/MultipleICourses";
import { MultipleTeachers } from "../../components/MultipleItems/MultipleTeachers";
import { getAllCoursesAction } from "../../redux/actions/CourseAction";
import { getAllTeachersAction } from "../../redux/actions/UserActions";

import { HomeCarousel } from "../../templates/HomeTemplate/HomeCarousel/HomeCarousel";
import RecordListAll from "../RecordList/RecordListAll";

export const Home = (props) => {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const { teachersDefault } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoursesAction());
    dispatch(getAllTeachersAction());
  }, []);

  return (
    <>
      <HomeCarousel />
      <div className="bg-xoan-cham bg-F9F6E8 py-5">
        <div className="flex items-center justify-center pt-10 mb-10">
          <span className="line-text text-4xl font-bold">
            Our lastest courses
          </span>
        </div>
        <MultipleCourses listCourses={coursesDefault} />
        <div className="flex items-center w-full justify-center pt-12">
          <NavLink
            className="text-lg col-span-1 bg-orange-100 uppercase text-orange-500 font-semibold  py-2 px-8 border border-orange-300 hover:border-transparent rounded-sm duration-500 hover:bg-orange-300 hover:!text-white"
            to="/all-courses"
          >
            View All
          </NavLink>
        </div>
      </div>
      <div className="py-5 background-teacher">
        <div className="flex items-center justify-center pt-10 mb-10">
          <span className="line-text text-4xl font-bold">
            Meet our teachers
          </span>
        </div>
        <MultipleTeachers
          listTeachers={teachersDefault}
          history={props.history}
          location={props.location}
        />
        {/* <div className="flex items-center w-full justify-center pt-12">
          <button
            className="text-lg col-span-1 bg-orange-100 hover:bg-orange-300 text-orange-500 font-semibold hover:text-white py-2 px-8 border  border-orange-300 hover:border-transparent rounded-xl"
            onClick={() => {}}
          >
            View All
          </button>
        </div> */}
      </div>
      <div>
        <div className="background-record pb-20">
          <div className="flex items-center justify-center pt-20 mb-20">
            <span className="line-text text-4xl font-bold">
              Student Records
            </span>
          </div>
          {/* <RecordListAll lesson={lesson} /> */}
        </div>
      </div>
    </>
  );
};
