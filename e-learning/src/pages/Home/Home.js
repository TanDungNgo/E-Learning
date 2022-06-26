import { Input, Search } from "antd";
import React from "react";
import { MultipleCourses } from "../../components/MultipleItems/MultipleICourses";
import { MultipleTeachers } from "../../components/MultipleItems/MultipleTeachers";

import { HomeCarousel } from "../../templates/HomeTemplate/HomeCarousel/HomeCarousel";

const mockDataCourses = [
  {
    image:
      "https://dungmori.com/cdn/course/default/1642045699_61725_b14e1f.png",
    teacherName: "Ngũ Duy Vinh",
    description: "Quá tuyệt con mẹ nó vời luôn. tuyệt cú mèo. abc xyz...",
    courseName: "Làm chủ tiếng nhật trong 1 đêm duy nhất",
    voting: 4.7,
  },
  {
    image:
      "https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg",
    teacherName: "Duy Vinh",
    description: "Quá tuyệt con mẹ nó vời luôn. tuyệt cú mèo. abc xyz... hii ",
    courseName: "Kaiwa cùng người bản xứ",
    voting: 4.7,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszZuaV_1IEGyYWERDbVnEYyS1RR-sHw-3Lg&usqp=CAU",
    teacherName: "Ngũ Duy Vinh",
    description: "Quá tuyệt con mẹ nó vời luôn. tuyệt cú mèo. abc xyz...",
    courseName: "Làm giàu không khó",
    voting: 4.7,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pAIIBaFOCM5JVVg6D__yqwtZ4cJjeKTV3Z0Cef92bZwH2ZZNZ4ahqVckaoOO0HIcCBE&usqp=CAU",
    teacherName: "Ngũ Duy Vinh",
    description: "Quá tuyệt con mẹ nó vời luôn. tuyệt cú mèo. abc xyz...",
    courseName: "Làm chủ tiếng nhật trong 1 đêm duy nhất",
    voting: 4.7,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52GUnI2Yewt1EMXa62-REIE7Y2XoBl7bSbQ&usqp=CAU",
    teacherName: "Ngũ Duy Vinh",
    description: "Quá tuyệt con mẹ nó vời luôn. tuyệt cú mèo. abc xyz...",
    courseName: "Làm chủ tiếng nhật trong 1 đêm duy nhất",
    voting: 4.7,
  },
  {
    image:
      "https://dep365.com/wp-content/uploads/2021/07/bi-kip-tao-dang-chup-anh-dep-voi-goc-ben-trai-scaled.jpg",
    teacherName: "Ngũ Duy Vinh",
    description: "Quá tuyệt con mẹ nó vời luôn. tuyệt cú mèo. abc xyz...",
    courseName: "Làm chủ tiếng nhật trong 1 đêm duy nhất",
    voting: 4.7,
  },
];

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
  const { Search } = Input;
  return (
    <>
      <HomeCarousel />

      <div className="container mt-10 ">
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
            // onSearch={onSearch}
          />
        </div>
      </div>
      <div className="line flex items-center justify-center mb-20 mt-10">
        <div className="each-line"></div>
        <span className="line-text text-4xl font-bold">Latest Courses</span>
        <div className="each-line"></div>
      </div>
      <MultipleCourses
        listCourses={mockDataCourses}
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
        listCourses={mockDataCourses}
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
