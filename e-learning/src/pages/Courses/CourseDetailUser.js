import useSelection from "antd/lib/table/hooks/useSelection";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import TeacherCard from "../../components/MultipleItems/TeacherCard";
import { getCourseDetailAction } from "../../redux/actions/CourseAction";
import { FolderOpenOutlined, UserOutlined, ShareAltOutlined, HeartOutlined } from "@ant-design/icons";

import './CoursesDetailUser.css';
import CourseOverView from "./CourseOverView";
import LessonSlider from "./LessonSlider";

const courseDetail = {
  id: 1,
  name: "Làm chủ tiếng nhật trong 1 ngày",
  description:
    "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
  banner:
    "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
  teacher_name: "Ngũ Duy Vinh",
  price: "1.000.000",
  listLessons: [
    {
      id: 1,
      name: "Bài 1 là đây",
      description: "Bài 1 là bài 1. Sau khi học xong bài 1 sẽ sang bài 2.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 2,
      name: "Bài 2 là đây",
      description: "Bài 2 là bài 2. Sau khi học xong bài 2 sẽ sang bài 3.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 3,
      name: "Bài 3 là đây",
      description: "Bài 3 là bài 3. Sau khi học xong bài 3 sẽ sang bài 4.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 4,
      name: "Bài 4 là đây",
      description: "Bài 4 là bài 4. Sau khi học xong bài 4 sẽ sang bài 5.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 5,
      name: "Bài 5 là đây",
      description: "Bài 5 là bài 5. Sau khi học xong bài 5 sẽ sang bài 6.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 6,
      name: "Bài 6 là đây",
      description: "Bài 6 là bài 6. Sau khi học xong bài 6 sẽ sang bài 7.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 7,
      name: "Bài 7 là đây",
      description: "Bài 7 là bài 7. Sau khi học xong bài 7 sẽ sang bài 8.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
    {
      id: 8,
      name: "Bài 8 là đây",
      description: "Bài 8 là bài 8. Sau khi học xong bài 8 sẽ sang bài 9.",
      video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
    },
  ],
};

export const CourseDetailUser = (props) => {
  // const { courseDetail } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  // let { id } = props.match.params;
  // useEffect(() => {
  //   dispatch(getCourseDetailAction(id));
  // }, []);

  const renderLessons = () => {
    return courseDetail.listLessons.splice(0, 5).map((item, index) => {
      return (
        <div key={index} className="p-3 grid grid-cols-3">
          <img
            className="col-span-1"
            src={courseDetail.banner}
            alt={item.name}
            style={{ width: 200, height: 150 }}
          />
          <div className="col-span-2 ">
            <NavLink
              to={`/courses/${courseDetail.id}/lessons/${item.id}`}
              className="text-black font-bold"
            >
              {item.name}
            </NavLink>
            <p>{item.description}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div class="grid overflow-hidden grid-cols-2 grid-rows-none gap-px bg-white drop-shadow-xl m-4 rounded-lg">
          <div class="pl-16 pr-10 pt-10">
              <div class="course-info grid overflow-hidden grid-cols-1 grid-rows-7 gap-px">
                  <div class="row-span-1">
                      <span className="text-4xl font-bold">
                          The Complete 2022 Web Development Bootcamp
                      </span>
                  </div>
                  <div class="row-span-1 pb-1 border-b-2 border-gray-600">
                      <TeacherCard/>
                  </div>
                  <div class="row-span-1">
                      <div className="border-b-2 border-gray-600 py-3 flex justify-between">
                          <div className="flex space-x-8">
                              <div>
                                  <span className="block text-3xl font-bold">
                                      4.7
                                  </span>
                                  <span className="border-b-2 border-gray-600 text-lg font-bold tracking-tighter">
                                      205K ratings
                                  </span>
                              </div>
                              <div>
                                  <span className="block text-3xl font-bold">
                                      695K
                                  </span>
                                  <span className="text-lg font-bold tracking-tighter">
                                      students
                                  </span>
                              </div>
                              <div>
                                  <span className="block text-3xl font-bold">
                                      12
                                  </span>
                                  <span className="text-lg font-bold tracking-tighter">
                                      lessons
                                  </span>
                              </div>
                          </div>
                          <div className="relative w-2/5">
                            <div className="space-x-4 absolute top-3   right-0">
                              <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <ShareAltOutlined className="icon"/>
                              </button>
                              <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <HeartOutlined className="icon"/>
                              </button>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div class="row-span-2 pt-2">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Course overview</h5>
                      <CourseOverView/>
                  </div>
                  <div class="row-span-1 flex justify-end h-20">
                      <div className="w-full h-full relative">
                        <NavLink
                          to="/"
                          className="py-2 px-7 enroll-button absolute right-1 top-2">
                          Enroll
                        </NavLink>
                      </div>
                  </div>
              </div>
          </div>
          <div class="">
              <img className="w-full h-full" src="https://s.udemycdn.com/premium-clp/1565838/CourseImage-2x.jpg"/>
          </div>
      </div>

      <div
        class="mt-10 mb-4 ml-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-white text-gray-700 border drop-shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-hard-drive mr-2"
        >
          <line x1="22" y1="12" x2="2" y2="12"></line>
          <path
            d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
          ></path>
          <line x1="6" y1="16" x2="6.01" y2="16"></line>
          <line x1="10" y1="16" x2="10.01" y2="16"></line>
        </svg>
        Lessons in this course
      </div>

      {/* neu la giao vien */
        true
        ?
        <>
        <NavLink
        to="/"
        class="mt-10 mb-4 ml-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-orange-200 hover:bg-orange-300 hover:text-white text-white border drop-shadow-lg"
      >
        <svg className="mr-1 w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        EDIT COURSE
      </NavLink>
        <NavLink
        to="/course/1/add-new/lesson"
        class="mt-10 mb-4 ml-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-orange-200 hover:bg-orange-300 hover:text-white text-white border drop-shadow-lg"
      >
        <svg className="mr-1 w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        Add
      </NavLink>
        </>
        :
        <></>
      }


      <LessonSlider />

    </>
  );
};

{/* <div className="border border-black ">
<div className=" container py-6">
  <div className="flex justify-between gap-10 items-center leading-10">
    <div className="">
      <img
        src={courseDetail.banner}
        alt={courseDetail.name}
        className="rounded-lg"
      />
    </div>
    <div className="">
      <h1 className="grid grid-cols-3 gap-2">
        <span className="col-span-1 font-bold text-lg ">
          Course name:
        </span>
        <span className="col-span-2">{courseDetail.name}</span>
      </h1>
      <h1 className="grid grid-cols-3 gap-2">
        <span className="col-span-1 font-bold text-lg">Teacher:</span>
        <span className="col-span-2">{courseDetail.teacher_name}</span>
      </h1>
      <h1 className="grid grid-cols-3 gap-2">
        <span className="col-span-1 font-bold text-lg">
          Description:
        </span>
        <span className="col-span-2">{courseDetail.description}</span>
      </h1>
      <h1 className="grid grid-cols-3 gap-2">
        <span className="col-span-1 font-bold text-lg">
          Study subjects:
        </span>
        <span className="col-span-2">{courseDetail.name}</span>
      </h1>
      <hr />
      <div className="text-right py-2">
        <i
          className="fa fa-shopping-cart text-red-600"
          style={{ fontSize: 40 }}
        ></i>
        <span className="text-2xl p-2">Price: </span>
        <span className="text-2xl">{courseDetail.price}</span>
      </div>
      <Button
        textContent="Join Course"
        className="w-full !rounded-none col-span-1"
        onClick={() => {
          // props.history.push("/login");
          alert("Thanh toán thành công");
        }}
      ></Button>
    </div>
  </div>
</div>
</div> */}
