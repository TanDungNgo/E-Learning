import { LessonService } from "../../services/LessonService";
import {
  GET_ALL_LESSONS,
  GET_LESSON_DETAILS,
  SET_AUDIO,
} from "../types/LessonTypes";

export const setAudioActions = (recordFile) => {
  return async (dispatch) => {
    try {
      // Gọi API
      // {
      //   todo code
      // }
      dispatch({
        type: SET_AUDIO,
        value: recordFile,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

const lessons = [
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
];
export const getLessonByIdAction = (id) => {
  return async (dispatch) => {
    try {
      // const result = await LessonService.getLessonById(id);
      // console.log("abc", result);

      const lesson = lessons[id - 1];

      // dispatch({
      //   type: GET_LESSON_DETAILS,
      //   value: result.lesson,
      // });
      dispatch({
        type: GET_LESSON_DETAILS,
        value: lesson,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getAllLessonsAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await LessonService.getAllLessons(id);
      console.log("abc", result);
      dispatch({
        type: GET_ALL_LESSONS,
        value: result.lessons,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
export const deleteLessonByIdAction = (lessonId, courseId) => {
  return async (dispatch) => {
    try {
      const result = await LessonService.deleteLessonById(lessonId);
      // Gọi api lấy thông tin từ /students
      console.log("alo", result);

      // const result = await UserService.login(userLogin);
      // Đưa lên kho chứa (redux)
      // dispatch({
      //   type: GET_Lesson_DETAILS,
      //   value: result.Lesson,
      // });
      dispatch(getAllLessonsAction(courseId));
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
// export const getLessonAction = (value) => {
//   return async (dispatch) => {
//     try {
//       // Gọi API
//       // {
//       //   todo code
//       // }
//       dispatch({
//         type: GET_AUDIO,
//         value: value,
//       });
//     } catch (error) {
//       console.log("error>>", error);
//     }
//   };
// };
