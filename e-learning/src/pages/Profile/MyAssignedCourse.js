import React from "react";
import CourseCard from "../../components/MultipleItems/CourseCard";
import TabBar from "../../components/TabBar/TabBar";

const numbers = [1, 2, 3, 4, 5, 6, 7];

const listCourses = numbers.map((number) => {
  return <CourseCard key={number.toString()} course="" />;
});

const MyAssignedCourse = () => {
  return (
    <>
      <TabBar />
      <div className="mt-8 grid overflow-hidden grid-cols-3 grid-rows-none gap-5">
        {listCourses}
      </div>
    </>
  );
};

export default MyAssignedCourse;
