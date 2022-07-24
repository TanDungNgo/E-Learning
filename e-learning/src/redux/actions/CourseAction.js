import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { CourseService } from "../../services/CourseService";
import { ERROR, SUCCESS } from "../../utils/settings/config";

import {
  GET_ALL_COURSES,
  GET_COURSE_DETAILS,
  GET_PENDING_COURSES,
} from "../types/CourseTypes";

export const getCourseDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await CourseService.getCourseDetail(id);
      dispatch({
        type: GET_COURSE_DETAILS,
        value: result.course,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const createCourseAction = (data) => {
  return async (dispatch) => {
    try {
      await CourseService.createCourse(data);
      openNotificationWithIcon(
        SUCCESS,
        "Successfully created a new course",
        "success"
      );
      dispatch(getAllCoursesAction());
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};

export const updateCourseAction = (data, id) => {
  return async (dispatch) => {
    try {
      await CourseService.updateCourseById(id, data);
      openNotificationWithIcon(
        SUCCESS,
        "Successfully updated the course",
        "success"
      );
      dispatch(getAllCoursesAction());
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};
export const deleteCourseByIdAction = (id) => {
  return async (dispatch) => {
    try {
      await CourseService.deleteCourseById(id);
      openNotificationWithIcon(
        SUCCESS,
        "Successfully deleted the course",
        "success"
      );
      dispatch(getAllCoursesAction());
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};

export const getAllCoursesAction = () => {
  return async (dispatch) => {
    try {
      const result = await CourseService.getAllCourses();
      dispatch({
        type: GET_ALL_COURSES,
        value: result.courses,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
export const getCourseByIdTeacherAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await CourseService.getCoursesByIdTeacher(id);
      dispatch({
        type: GET_ALL_COURSES,
        value: result.courses,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
export const getCourseEnrolledAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await CourseService.getCoursesEnrolled(id);
      dispatch({
        type: GET_ALL_COURSES,
        value: result.courses,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getPendingCourseAction = () => {
  return async (dispatch) => {
    try {
      const result = await CourseService.getPendingCourse();
      dispatch({
        type: GET_ALL_COURSES,
        value: result.course,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
