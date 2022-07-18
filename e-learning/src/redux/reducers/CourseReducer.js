import { GET_ALL_COURSES, GET_COURSE_DETAILS } from "../types/CourseTypes";

// const courseDetail = {
//   id: 1,
//   name: "Làm chủ tiếng nhật trong 1 ngày",
//   description:
//     "Khóa học tạo ra nhằm giúp các bạn học sinh, sinh viên có thêm môi trường rèn luyện tiếng nhật. Học viên sẽ được học hỏi kinh nghiệm từ các sensei hàng đầu Việt Nam. Kết thúc khóa học sẽ đạt kết quả cao blabla...",
//   banner:
//     "https://riki.edu.vn/library-n3-online/images/hoc-tieng-nhat-n3-online-2.png",
//   teacher_name: "Ngũ Duy Vinh",
//   price: "1.000.000",
//   listLessons: [
//     {
//       id: 1,
//       name: "Bài 1 là đây",
//       description: "Bài 1 là bài 1. Sau khi học xong bài 1 sẽ sang bài 2.",
//       video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
//     },
//     {
//       id: 2,
//       name: "Bài 2 là đây",
//       description: "Bài 2 là bài 2. Sau khi học xong bài 2 sẽ sang bài 3.",
//       video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
//     },
//     {
//       id: 3,
//       name: "Bài 3 là đây",
//       description: "Bài 3 là bài 3. Sau khi học xong bài 3 sẽ sang bài 4.",
//       video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
//     },
//     {
//       id: 4,
//       name: "Bài 4 là đây",
//       description: "Bài 4 là bài 4. Sau khi học xong bài 4 sẽ sang bài 5.",
//       video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
//     },
//     {
//       id: 5,
//       name: "Bài 5 là đây",
//       description: "Bài 5 là bài 5. Sau khi học xong bài 5 sẽ sang bài 6.",
//       video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
//     },
//     {
//       id: 6,
//       name: "Bài 6 là đây",
//       description: "Bài 6 là bài 6. Sau khi học xong bài 6 sẽ sang bài 7.",
//       video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
//     },
//     {
//       id: 7,
//       name: "Bài 7 là đây",
//       description: "Bài 7 là bài 7. Sau khi học xong bài 7 sẽ sang bài 8.",
//       video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
//     },
//     {
//       id: 8,
//       name: "Bài 8 là đây",
//       description: "Bài 8 là bài 8. Sau khi học xong bài 8 sẽ sang bài 9.",
//       video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
//     },
//   ],
// };

const stateDefault = {
  coursesDefault: [],
  courseDetail: [],
};

export const CourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ALL_COURSES: {
      state.coursesDefault = action.value;
      return { ...state };
    }
    case GET_COURSE_DETAILS: {
      state.courseDetail = action.value;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
