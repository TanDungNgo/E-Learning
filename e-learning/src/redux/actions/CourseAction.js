import { CourseService } from "../../services/CourseService";
import { GET_ALL_COURSES, GET_COURSE_DETAILS } from "../types/CourseTypes";

export const getCourseByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await CourseService.getCourseById(id);

      console.log(result);
      dispatch({
        type: GET_COURSE_DETAILS,
        value: result.course,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getCourseDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await CourseService.getCourseDetail(id);

      const courseDetail = { ...result.course[0], lessons: result.lessons };
      dispatch({
        type: GET_COURSE_DETAILS,
        value: courseDetail,
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
      const result = await CourseService.deleteCourseById(id);
      console.log("alo", result);

      // dispatch({
      //   type: GET_COURSE_DETAILS,
      //   value: result.course,
      // });
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
