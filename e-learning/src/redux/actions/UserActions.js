import { UserService } from "../../services/UserService";
import { GET_ALL_STUDENTS, LOGIN } from "../types/UserTypes";

export const loginAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await UserService.login(userLogin);
      // dispatch({
      //   type: LOGIN,
      //   value: result,
      // });

     console.log('Login',result);
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getAllStudentsAction = () => {
  return async (dispatch) => {
    try {
      const result = await UserService.getAllStudents();
      // Gọi api lấy thông tin từ /students
      // console.log(result);

      // const result = await UserService.login(userLogin);
      // Đưa lên kho chứa (redux)
      dispatch({
        type: GET_ALL_STUDENTS,
        value: result.students,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
