import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../components/MultipleItems/CourseCard";
import "./ListCourse.css";
import {
  getCourseByIdTeacherAction,
  getCourseEnrolledAction,
} from "../../redux/actions/CourseAction";
import TabBar from "../../components/TabBar/TabBar";

import { getStudentsInCourseAction } from "../../redux/actions/UserActions";
import StudentList from "../Student/StudentList";

let courses = [];
const ListCourse = () => {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const { userLogin } = useSelector((state) => state.UserReducer);
  const { studentsDefault } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (userLogin.role === "user") {
      dispatch(getCourseEnrolledAction(userLogin.id));
    } else {
      dispatch(getCourseByIdTeacherAction(userLogin.id));
      dispatch(getStudentsInCourseAction(userLogin.id));
    }
  }, []);
  courses = coursesDefault?.filter((item) => item.id === userLogin.id);
  const listCourses = courses?.map((item) => {
    return <CourseCard key={item.id} course={item} />;
  });
  return (
    <>
      <div hidden={userLogin.role !== "teacher"}>
        <TabBar />
      </div>
      <div
        className="min-h-full grid grid-cols-3 gap-4 background-list-courses p-5 rounded-lg drop-shadow"
        style={{ minHeight: "500px" }}
        hidden={userLogin.role !== "user"}
      >
        <div className="flex items-center justify-center pt-5 mb-5">
          <span className="line-text text-2xl font-bold">
            All enrolled courses
          </span>
        </div>
      </div>
      <div className="mt-8 grid overflow-hidden grid-cols-3 grid-rows-none gap-5">
        {listCourses}
      </div>
      <div hidden={userLogin.role !== "teacher"}>
        <div className="background-record pb-5">
          <div className="flex items-center justify-center pt-5 mb-5">
            <span className="line-text text-4xl font-bold">
              All student in course
            </span>
          </div>
          <StudentList liststudent={studentsDefault} />
        </div>
      </div>
    </>
  );
};

export default ListCourse;
