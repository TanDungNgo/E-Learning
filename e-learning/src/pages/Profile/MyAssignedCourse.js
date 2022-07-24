import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../components/MultipleItems/CourseCard";
import TabBar from "../../components/TabBar/TabBar";
import {
  getCourseByIdTeacherAction,
  getCourseEnrolledAction,
} from "../../redux/actions/CourseAction";
import { getStudentsInCourseAction } from "../../redux/actions/UserActions";
import StudentList from "../Student/StudentList";
import { USER_LOGIN } from "../../utils/settings/config";

const MyAssignedCourse = () => {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const { studentsDefault } = useSelector((state) => state.UserReducer);
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
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
  console.log("listcourse: ", coursesDefault);
  const listCourses = coursesDefault.map((item) => {
    return <CourseCard key={item.id} course={item} />;
  });
  return (
    <>
      <div hidden={userLogin.role !== "teacher"}>
        <TabBar />
      </div>
      <div
        className="bg-white rounded-lg drop-shadow-lg"
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
        <div className="pb-5">
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

export default MyAssignedCourse;
