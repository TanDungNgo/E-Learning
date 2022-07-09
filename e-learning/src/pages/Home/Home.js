import { Input, Search } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultipleCourses } from "../../components/MultipleItems/MultipleICourses";
import { MultipleTeachers } from "../../components/MultipleItems/MultipleTeachers";
import { getAllCoursesAction } from "../../redux/actions/CourseAction";

import { HomeCarousel } from "../../templates/HomeTemplate/HomeCarousel/HomeCarousel";

const mockDataTeachers = [
  {
    avatar:
      "https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-girl-xinh-dep-tu-nhien_104525368.jpg",
    teacherName: "Ngũ Duy Vinh",
    description:
      "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
  },
  {
    avatar:
      "https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg",
    teacherName: "Ngũ Duy Vinh",
    description:
      "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
  },
  {
    avatar:
      "https://dep365.com/wp-content/uploads/2021/07/bi-kip-tao-dang-chup-anh-dep-voi-goc-ben-trai-scaled.jpg",
    teacherName: "Ngũ Duy Vinh",
    description:
      "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
  },
  {
    avatar:
      "https://dep365.com/wp-content/uploads/2021/07/bi-kip-tao-dang-chup-anh-dep-voi-goc-ben-trai-scaled.jpg",
    teacherName: "Ngũ Duy Vinh",
    description:
      "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
  },
  {
    avatar:
      "https://dep365.com/wp-content/uploads/2021/07/bi-kip-tao-dang-chup-anh-dep-voi-goc-ben-trai-scaled.jpg",
    teacherName: "Ngũ Duy Vinh",
    description:
      "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.",
  },
];

export const Home = (props) => {
  const { coursesDefault } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoursesAction());
  }, [getAllCoursesAction]);
  const { Search } = Input;
  const test = () => {
    console.log(coursesDefault);
  }
  return (
    <>
      <HomeCarousel />
      <div className="container mt-10 ">
      <button onClick={test}> a</button>
        <div className="grid grid-cols-3 gap-5 ">
          <Input
            allowClear
            placeholder="Input course name"
            className="col-span-1 !text-black !border-gray-800"
          />
          <Input
            allowClear
            placeholder="Input teacher name"
            className="col-span-1 !text-black !border-gray-800"
          />
          <Search
            placeholder="Input lesson name"
            allowClear
            enterButton="Search"
            className="col-span-1 !text-black "
            style={{ borderColor: "black" }}
          />
        </div>
      </div>
      <div className="line flex items-center justify-center mb-20 mt-10">
        <div className="each-line"></div>
        <span className="line-text text-4xl font-bold">Latest Courses</span>
        <div className="each-line"></div>
      </div>
      <MultipleCourses
        listCourses={coursesDefault}
        history={props.history}
        localtion={props.localtion}
      />
      <div className="line flex items-center justify-center my-20">
        <div className="each-line"></div>
        <span className="line-text text-4xl font-bold">
          Most popular Courses
        </span>
        <div className="each-line"></div>
      </div>
      <MultipleCourses
        listCourses={coursesDefault}
        history={props.history}
        localtion={props.localtion}
      />
      <div className="line flex items-center justify-center my-20">
        <div className="each-line"></div>
        <span className="line-text text-4xl font-bold">Famous Teachers</span>
        <div className="each-line"></div>
      </div>
      <MultipleTeachers
        listTeachers={mockDataTeachers}
        history={props.history}
        localtion={props.localtion}
      />
      <hr className="mt-10" />
    </>
  );
};
