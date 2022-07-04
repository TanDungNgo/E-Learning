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
export const getLessonByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await LessonService.getLessonById(id);
      console.log("abc", result);
      dispatch({
        type: GET_LESSON_DETAILS,
        value: result.lessons,
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
// export const getAudioActions = (value) => {
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
