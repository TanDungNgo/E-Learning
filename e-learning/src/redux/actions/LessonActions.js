import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { LessonService } from "../../services/LessonService";
import { ERROR, SUCCESS } from "../../utils/settings/config";
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
        value: result.course.lessons,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
export const deleteLessonByIdAction = (lessonId, courseId) => {
  return async (dispatch) => {
    try {
      await LessonService.deleteLessonById(lessonId);
      dispatch(getAllLessonsAction(courseId));
      openNotificationWithIcon(SUCCESS, "Lesson has been deleted", "success");
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};

export const updateLessonAction = (data, lessonId, courseId) => {
  return async (dispatch) => {
    try {
      const re = await LessonService.editLessonById(lessonId, data);
      console.log(re);
      dispatch(getAllLessonsAction(courseId));
      openNotificationWithIcon(
        SUCCESS,
        "Lesson has been updated again",
        "success"
      );
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};
