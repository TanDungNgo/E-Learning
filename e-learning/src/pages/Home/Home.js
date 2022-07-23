import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MultipleCourses } from "../../components/MultipleItems/MultipleICourses";
import { MultipleTeachers } from "../../components/MultipleItems/MultipleTeachers";
import { getAllCoursesAction } from "../../redux/actions/CourseAction";
import { getAllTeachersAction } from "../../redux/actions/UserActions";

import { HomeCarousel } from "../../templates/HomeTemplate/HomeCarousel/HomeCarousel";
import RecordListAll from "../RecordList/RecordListAll";

// const mockDataTeachers = [
//   {
//     avatar:
//       "https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-girl-xinh-dep-tu-nhien_104525368.jpg",
//     teacherName: "Ngũ Duy Vinh",
//     description:
//       "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
//   },
//   {
//     avatar:
//       "https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg",
//     teacherName: "Ngũ Duy Vinh",
//     description:
//       "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
//   },
//   {
//     avatar:
//       "https://dep365.com/wp-content/uploads/2021/07/bi-kip-tao-dang-chup-anh-dep-voi-goc-ben-trai-scaled.jpg",
//     teacherName: "Ngũ Duy Vinh",
//     description:
//       "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
//   },
//   {
//     avatar:
//       "https://dep365.com/wp-content/uploads/2021/07/bi-kip-tao-dang-chup-anh-dep-voi-goc-ben-trai-scaled.jpg",
//     teacherName: "Ngũ Duy Vinh",
//     description:
//       "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
//   },
//   {
//     avatar:
//       "https://dep365.com/wp-content/uploads/2021/07/bi-kip-tao-dang-chup-anh-dep-voi-goc-ben-trai-scaled.jpg",
//     teacherName: "Ngũ Duy Vinh",
//     description:
//       "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
//   },
// ];

export const Home = (props) => {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const { teachersDefault } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllCoursesAction());
    dispatch(getAllTeachersAction());
  }, []);
  // console.log("course: ", coursesDefault);
  // console.log("teacher: ", teachersDefault);

  return (
    <>
      <HomeCarousel />
      <div className="bg-xoan-cham bg-F9F6E8 pt-10 pb-20">
        <div className="flex items-center justify-center pt-20 mb-20">
          <span className="line-text text-4xl font-bold">
            Our lastest courses
          </span>
        </div>
        <MultipleCourses listCourses={coursesDefault} />
        <div className="flex items-center w-full justify-center pt-12">
          <NavLink
            className="text-lg col-span-1 bg-orange-100 hover:bg-orange-300 text-orange-500 font-semibold hover:text-white py-2 px-8 border  border-orange-300 hover:border-transparent rounded-xl"
            to='/all-courses'
          >
            View All
          </NavLink>
        </div>
      </div>
      <div className="py-10 background-teacher">
        <div className="flex items-center justify-center pt-20 mb-20">
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
      {/* <div>
        <div className="background-record pb-20">
          <div className="flex items-center justify-center pt-20 mb-20">
            <span className="line-text text-4xl font-bold">
              Student Records
            </span>
          </div>
          <RecordListAll />
        </div>
      </div> */}
    </>
  );
};
