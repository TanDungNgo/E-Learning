import { CourseService } from "../../services/CourseService";
import { GET_COURSE_DETAILS } from "../types/CourseTypes";

export const getCourseByIdAction = (id) => {
    return async (dispatch) => {
      try {
        const result = await CourseService.getCourseById(id);
        // Gọi api lấy thông tin từ /students
         console.log(result);
  
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
