import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../components/MultipleItems/CourseCard";
import { getAllCoursesAction } from "../../redux/actions/CourseAction";
import { getAllTeachersAction } from "../../redux/actions/UserActions";
import "./AllCourses.css";

const AllCourses = () => {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllCoursesAction());
    dispatch(getAllTeachersAction());
  }, []);
  const listCourses = () => {
    return coursesDefault?.map((item, index) => {
      return (
        <Fragment key={item.id}>
          <div className="card w-fit">
            <CourseCard course={item} />
          </div>
        </Fragment>
      );
    });
  };

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div
        className={
          "sidebar drop-shadow-lg rounded-r-2xl " + (showSideBar ? " open" : "")
        }
      >
        <button
          type="button"
          className="z- sidebar-show-button absolute text-blue-700 border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 bg-white"
          onClick={() => {
            setShowSideBar(!showSideBar);
            console.log(showSideBar);
          }}
        >
          {showSideBar ? (
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
        <ul className="nav-list">
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:border-gray-500"
            />
            <span className="tooltip">Search</span>
          </li>
          <div className="container-checkbox relative"></div>
        </ul>
      </div>
      <section className="home-section">
        <div className="cards">{listCourses()}</div>
      </section>
    </>
  );
};

export default AllCourses;
