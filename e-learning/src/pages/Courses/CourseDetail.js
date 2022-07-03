import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

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

export const CourseDetail = (props) => {
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
      <div className="mt-5 border border-black ">
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
      </div>
      <div className="mt-5 border border-black ">
        <div className="container py-6">
          <div className="grid grid-cols-7 gap-10">
            <div className="col-span-3 ">
              <h1 className="text-center text-4xl">Feedback</h1>
              <div className="flex-col flex ">
                <div className="">
                  <i className="fa fa-user-circle mr-5"></i>
                  <span>Very good</span>
                </div>
                <div>
                  <i className="fa fa-user-circle mr-5"></i>
                  <span>Very good</span>
                </div>
                <div>
                  <i className="fa fa-user-circle mr-5"></i>
                  <span>Very good</span>
                </div>
              </div>
            </div>
            <div className="col-span-4 ">
              <div className="flex-col flex ">{renderLessons()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
