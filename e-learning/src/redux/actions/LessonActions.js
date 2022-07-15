import { LessonService } from "../../services/LessonService";
import {
  GET_ALL_LESSONS,
  GET_LESSON_DETAILS,
  SET_AUDIO,
} from "../types/LessonTypes";

export const setAudioActions = (recordFile) => {
  return async (dispatch) => {
    try {
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
      dispatch({
        type: GET_LESSON_DETAILS,
        value: result.lesson,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getOneLessonByIdAction = (lessonId, courseId) => {
  return async (dispatch) => {
    try {
      const result = await LessonService.getOneLessonById(lessonId, courseId);
      dispatch({
        type: GET_LESSON_DETAILS,
        value: result.lesson,
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

      dispatch(getAllLessonsAction(courseId));
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const updateLessonAction = (data, lessonId, courseId) => {
  return async (dispatch) => {
    try {
      const result = await LessonService.editLessonById(lessonId, data);
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
