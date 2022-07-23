import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { TeacherService } from "../../services/TeacherService";
import { UserService } from "../../services/UserService";
import { ERROR, SUCCESS, USER_LOGIN } from "../../utils/settings/config";
import {
  CHECK_ENROLL,
  GET_ALL_STUDENTS,
  GET_ALL_TEACHERS,
  LOGIN,
  LOGOUT,
} from "../types/UserTypes";

export const loginAction = (userLogin, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.login(userLogin);
      dispatch({
        type: LOGIN,
        value: result.user,
      });
      if (result.status === 200) {
        result.user.role === "admin"
          ? propsRoute.history.push("/admin")
          : propsRoute.history.push(
              propsRoute.location.state ? propsRoute.location.state.from : "/"
            );
        openNotificationWithIcon(SUCCESS, "Login thành công", "success");
      } else {
        openNotificationWithIcon(ERROR, "Login thất bại", "error");
      }
    } catch (error) {
      openNotificationWithIcon(ERROR, "Login thất bại", "error");
      console.log("error>>", error);
    }
  };
};
export const registerAction = (userRegister, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.register(userRegister);

      if (result.status === 200) {
        openNotificationWithIcon(
          SUCCESS,
          "Tạo tài khoản thành công",
          "success"
        );
        // dispatch(getAllUsers())
        propsRoute.history.push("/login");
      } else {
        openNotificationWithIcon(ERROR, "Tạo tài khoản thất bại", "error");
      }
    } catch (error) {
      openNotificationWithIcon(ERROR, "Tạo tài khoản thất bại", "error");
      console.log("error>>", error);
    }
  };
};
export const logoutAction = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
      value: {},
    });
    openNotificationWithIcon(SUCCESS, "Logout thành công", "success");
  };
};

export const updateUserAction = (userEdit, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.updateUser(userEdit.id, userEdit);
      console.log("updateUser", result);

      if (result.status === 200) {
        const oldData = JSON.parse(localStorage.getItem(USER_LOGIN));
        const newData = JSON.stringify({ ...oldData, ...userEdit });
        localStorage.setItem(USER_LOGIN, newData);
        propsRoute.history.push("/profile");
        openNotificationWithIcon(SUCCESS, "Cập nhật thành công", "success");
      } else {
        openNotificationWithIcon(ERROR, "Cập nhật thất bại", "error");
      }
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const requestToBecomeTeacher = (userEdit, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.requestToBecomeTeacher(userEdit);
      console.log("updateUser", result);

      if (result.status === 200) {
        propsRoute.history.push("/profile");
        openNotificationWithIcon(SUCCESS, "Nâng cấp thành công", "success");
      } else {
        openNotificationWithIcon(ERROR, "Nâng cấp thất bại", "error");
      }
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getAllTeachersAction = () => {
  return async (dispatch) => {
    try {
      const result = await TeacherService.getAllTeachers();
      dispatch({
        type: GET_ALL_TEACHERS,
        value: result.teachers,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getStudentsInCourseAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await UserService.getStudentsInCourse(id);
      // console.log("student: ", result.students)
      dispatch({
        type: GET_ALL_STUDENTS,
        value: result.students,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const checkEnrollAction = (user_id, course_id) => {
  return async (dispatch) => {
    try {
      const result = await UserService.checkenroll(user_id, course_id);
      dispatch({
        type: CHECK_ENROLL,
        value: result.status,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
