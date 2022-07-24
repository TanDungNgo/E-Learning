import { SearchService } from "../../services/SearchService";
import { GET_ALL_COURSES } from "../types/CourseTypes";

export const searchCourseAction = (searchTerm) => {
  return async (dispatch) => {
    try {
      const result = await SearchService.searchCourse(searchTerm);
      dispatch({
        type: GET_ALL_COURSES,
        value: result.courses,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
