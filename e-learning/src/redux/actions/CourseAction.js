import { CourseService } from "../../services/CourseService";
import { GET_ALL_COURSES, GET_COURSE_DETAILS } from "../types/CourseTypes";

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

      dispatch(getAllCoursesAction());
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const updateCourseAction = (data, id) => {
  return async (dispatch) => {
    try {
      await CourseService.updateCourseById(id, data);

      dispatch(getAllCoursesAction());
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
export const deleteCourseByIdAction = (id) => {
  return async (dispatch) => {
    try {
      await CourseService.deleteCourseById(id);
      dispatch(getAllCoursesAction());
    } catch (error) {
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
