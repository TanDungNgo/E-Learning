import { CourseService } from "../../services/CourseService";
import { GET_ALL_COURSES, GET_COURSE_DETAILS } from "../types/CourseTypes";

export const getCourseByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await CourseService.getCourseById(id);
      // Gọi api lấy thông tin từ /students
      console.log("alo", result);

      // const result = await UserService.login(userLogin);
      // Đưa lên kho chứa (redux)
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
      const result = await CourseService.createCourse(data);
      // Gọi api lấy thông tin từ /students
      console.log("alo", result);

      // const result = await UserService.login(userLogin);
      // Đưa lên kho chứa (redux)
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

export const deleteCourseByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await CourseService.deleteCourseById(id);
      // Gọi api lấy thông tin từ /students
      console.log("alo", result);

      // const result = await UserService.login(userLogin);
      // Đưa lên kho chứa (redux)
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
      // Gọi api lấy thông tin từ /students

      // const result = await UserService.login(userLogin);
      // Đưa lên kho chứax)
      dispatch({
        type: GET_ALL_COURSES,
        value: result.courses,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
