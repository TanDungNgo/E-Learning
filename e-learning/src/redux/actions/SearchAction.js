import { SearchService } from "../../services/SearchService";
import { SEARCH_COURSE } from "../types/CourseTypes";

export const searchCourseAction = (searchTerm) => {
  return async (dispatch) => {
    try {
      const result = await SearchService.searchCourse(searchTerm);

      console.log("result", result);
      dispatch({
        type: SEARCH_COURSE,
        value: result.courses,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
