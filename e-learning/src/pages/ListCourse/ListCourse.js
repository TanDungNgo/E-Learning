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
import { ERROR, USER_LOGIN } from "../../utils/settings/config";
import { useHistory } from "react-router-dom";
import { openNotificationWithIcon } from "../../components/Notification/Notification";
const ListCourse = () => {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const { studentsDefault } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (userLogin !== null) {
      window.scrollTo(0, 0);
      if (userLogin.role === "user") {
        dispatch(getCourseEnrolledAction(userLogin.id));
      } else if (userLogin.role === "admin") {
        openNotificationWithIcon(ERROR, "You cannot access this page", "error");
        history.push("/");
      } else {
        dispatch(getCourseByIdTeacherAction(userLogin.id));
        dispatch(getStudentsInCourseAction(userLogin.id));
      }
    } else {
      history.push("/");
    }
  }, []);

  const listCourses = coursesDefault?.map((item) => {
    return <CourseCard key={item.id} course={item} />;
  });
  return (
    <>
      <div hidden={userLogin?.role !== "teacher"}>
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
      <div hidden={userLogin?.role !== "teacher"}>
        <div className="pb-5 border-t-2 border-gray-400 mt-20">
          <div className="flex items-center justify-center pt-5 mb-5">
            <span className="line-text text-4xl font-bold">
              All student in course
            </span>
          </div>
          <StudentList listStudents={studentsDefault} />
        </div>
      </div>
    </>
  );
};

export default ListCourse;
