import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../components/MultipleItems/CourseCard";
import TabBar from "../../components/TabBar/TabBar";
import { getCourseByIdTeacherAction } from "../../redux/actions/CourseAction";
import { getStudentsInCourseAction } from "../../redux/actions/UserActions";
import StudentList from "../Student/StudentList";


const MyAssignedCourse = () => {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const { studentsDefault} = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCourseByIdTeacherAction(1));
    dispatch(getStudentsInCourseAction(3))
  }, []);
  console.log(studentsDefault);
  const listCourses = coursesDefault.map((item) => {
    return <CourseCard key={item.id} course={item} />;
  });
  return (
    <>
      <TabBar />
      <div className="mt-8 grid overflow-hidden grid-cols-3 grid-rows-none gap-5">
        {listCourses}
      </div>
      <div>
        <div className="background-record pb-5">
          <div className="flex items-center justify-center pt-5 mb-5">
            <span className="line-text text-4xl font-bold">
              All student in course 
            </span>
          </div>
          <StudentList liststudent={studentsDefault}/>
        </div>
      </div>
    </>
  );
};

export default MyAssignedCourse;
