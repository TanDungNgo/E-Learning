import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import TeacherCard from "../../components/MultipleItems/TeacherCard";
import { getCourseDetailAction } from "../../redux/actions/CourseAction";
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons";

import "./CoursesDetailUser.css";
import CourseOverView from "./CourseOverView";
import LessonSlider from "./LessonSlider";
import {
  ERROR,
  SUCCESS,
  USER_LOGIN,
  WARNING,
} from "../../utils/settings/config";
import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { checkEnrollAction } from "../../redux/actions/UserActions";
import { UserService } from "../../services/UserService";
import { CourseService } from "../../services/CourseService";

export const CourseDetailUser = (props) => {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const dispatch = useDispatch();
  let { id } = props.match.params;
  const { courseDetail } = useSelector((state) => state.CourseReducer);
  const { checkenroll } = useSelector((state) => state.UserReducer);

  const history = useHistory();
  useEffect(() => {
    if (userLogin !== null) {
      window.scrollTo(0, 0);
      dispatch(getCourseDetailAction(id));
      dispatch(checkEnrollAction(userLogin.id, id));
    } else {
      openNotificationWithIcon(ERROR, "Please login", "error");
      history.push("/");
    }
  }, []);

  const teacher = {
    username: courseDetail.username,
    avatar: "https://v1.tailwindcss.com/img/jonathan.jpg",
  };
  const enroll = async () => {
    const data = new FormData();
    data.append("user_id", userLogin.id);
    data.append("course_id", id);
    try {
      await UserService.enrollCourse(data);
      dispatch(checkEnrollAction(userLogin.id, id));
      openNotificationWithIcon(
        SUCCESS,
        "You have successfully attended the course",
        "success"
      );
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
  const unenroll = async () => {
    try {
      await UserService.unenrollCourse(userLogin.id, id);
      dispatch(checkEnrollAction(userLogin.id, id));
      openNotificationWithIcon(
        WARNING,
        "You have left the course list",
        "warning"
      );
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
  const deleteCourse = async (e, id) => {
    try {
      await CourseService.deleteCourseById(id);
      openNotificationWithIcon(
        SUCCESS,
        "Deleted course successfully",
        "success"
      );
      history.push("/");
    } catch (error) {
      console.log("error>>", error);
    }
  };
  return userLogin ? (
    <div className="px-16 mx-4">
      <div className="grid overflow-hidden grid-cols-2 grid-rows-none gap-px bg-white drop-shadow-xl m-4 rounded-lg">
        <div className="pl-16 pr-10 pt-10">
          <div className="course-info grid overflow-hidden grid-cols-1 grid-rows-7 gap-px">
            <div className="row-span-1">
              <span className="text-4xl font-bold">{courseDetail.name}</span>
            </div>
            <div className="row-span-1 pb-1 border-b-2 border-gray-600">
              <TeacherCard teacher={teacher} />
            </div>
            <div className="row-span-1">
              <div className="border-b-2 border-gray-600 py-3 flex justify-between">
                <div className="flex space-x-8">
                  <div>
                    <span className="block text-3xl font-bold">4.7</span>
                    <span className="border-b-2 border-gray-600 text-lg font-bold tracking-tighter">
                      205K ratings
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold">695K</span>
                    <span className="text-lg font-bold tracking-tighter">
                      students
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold">12</span>
                    <span className="text-lg font-bold tracking-tighter">
                      lessons
                    </span>
                  </div>
                </div>
                <div className="relative w-2/5">
                  <div className="space-x-4 absolute top-3   right-0">
                    <button
                      type="button"
                      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                    >
                      <ShareAltOutlined className="icon" />
                    </button>
                    <button
                      type="button"
                      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                    >
                      <HeartOutlined className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-2 pt-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Course overview
              </h5>
              <CourseOverView description={courseDetail.description} />
            </div>
            <div
              className="row-span-1 flex justify-end h-20"
              hidden={checkenroll !== false}
            >
              <div className="w-full h-full relative">
                <button
                  className="py-3 px-7 enroll-button absolute right-1 top-2"
                  hidden={userLogin.role !== "user"}
                  style={{ width: 200 }}
                  onClick={enroll}
                >
                  Enroll
                </button>
              </div>
            </div>
            <div
              className="row-span-1 flex justify-end h-20"
              hidden={checkenroll !== true}
            >
              <div className="w-full h-full relative">
                <button
                  className="py-3 px-7 text-green-700 absolute right-1 top-2 text-lg uppercase font-bold hover:bg-green-700 border-green-700 hover:text-white duration-500 "
                  style={{
                    border: "3px solid",
                    width: 200,
                  }}
                  hidden={userLogin.role !== "user"}
                  onClick={unenroll}
                >
                  Enrolled
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${courseDetail.banner}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="mt-10 mb-4 ml-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-white text-gray-700 border drop-shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-hard-drive mr-2"
        >
          <line x1="22" y1="12" x2="2" y2="12"></line>
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          <line x1="6" y1="16" x2="6.01" y2="16"></line>
          <line x1="10" y1="16" x2="10.01" y2="16"></line>
        </svg>
        Lessons in this course
      </div>

      {userLogin.username === courseDetail.username ? (
        <>
          <NavLink
            to="/"
            className="mt-10 mb-4 ml-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-orange-200 hover:bg-orange-300 hover:text-white text-white border drop-shadow-lg"
          >
            <svg
              className="mr-1 w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            EDIT COURSE
          </NavLink>
          <NavLink
            to={`/course/${id}/add-new/lesson`}
            className="mt-10 mb-4 ml-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-orange-200 hover:bg-orange-300 hover:text-white text-white border drop-shadow-lg"
          >
            <svg
              className="mr-1 w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add
          </NavLink>
          <button
            onClick={(e) => deleteCourse(e, id)}
            className="mt-10 mb-4 ml-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-orange-200 hover:bg-orange-300 hover:text-black text-black border drop-shadow-lg"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            DELETE COURSE
          </button>
        </>
      ) : (
        <></>
      )}
      <LessonSlider lessons={courseDetail.lessons} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};
