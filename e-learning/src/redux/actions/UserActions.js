import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { TeacherService } from "../../services/TeacherService";
import { UserService } from "../../services/UserService";
import { ERROR, SUCCESS, USER_LOGIN } from "../../utils/settings/config";
import {
  CHECK_ENROLL,
  GET_ALL_STUDENTS,
  GET_ALL_TEACHERS,
  GET_ALL_USER,
  LOGIN,
  LOGOUT,
} from "../types/UserTypes";

export const loginAction = (userLogin, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.login(userLogin);
      if (result.status === 200) {
        dispatch({
          type: LOGIN,
          value: result.user,
        });
        result.user.role === "admin"
          ? propsRoute.history.push("/admin")
          : propsRoute.history.push(
              propsRoute.location.state ? propsRoute.location.state.from : "/"
            );
        openNotificationWithIcon(SUCCESS, "Login successfully", "success");
      } else {
        openNotificationWithIcon(
          ERROR,
          "Login failed, please check the information again",
          "error"
        );
      }
    } catch (error) {
      openNotificationWithIcon(
        ERROR,
        "Login failed, please check the information again",
        "error"
      );
      console.log("error>>", error);
    }
  };
};
export const registerAction = (userRegister, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.register(userRegister);

      if (result.status === 200) {
        openNotificationWithIcon(SUCCESS, "Sign Up Success", "success");
        // dispatch(getAllUsers());
        propsRoute.history.push("/login");
      } else {
        openNotificationWithIcon(ERROR, "Registration failed", "error");
      }
    } catch (error) {
      openNotificationWithIcon(ERROR, "Registration failed", "error");
      console.log("error>>", error);
    }
  };
};
export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem(USER_LOGIN);
    dispatch({
      type: LOGOUT,
      value: {},
    });
    openNotificationWithIcon(SUCCESS, "Logout successfully", "success");
  };
};

export const updateUserAction = (userEdit, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.updateUser(userEdit.id, userEdit);
      if (result.status === 200) {
        const oldData = JSON.parse(localStorage.getItem(USER_LOGIN));
        const newData = JSON.stringify({ ...oldData, ...userEdit });
        localStorage.setItem(USER_LOGIN, newData);
        propsRoute.history.push("/profile");
        openNotificationWithIcon(
          SUCCESS,
          "Successfully updated information",
          "success"
        );
      } else {
        openNotificationWithIcon(ERROR, "Update failed information", "error");
      }
    } catch (error) {
      openNotificationWithIcon(ERROR, "Update failed information", "error");
      console.log("error>>", error);
    }
  };
};

export const requestToBecomeTeacher = (userEdit, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.requestToBecomeTeacher(userEdit);
      if (result.status === 200) {
        propsRoute.history.push("/profile");
        openNotificationWithIcon(SUCCESS, "Upgrade success", "success");
      } else {
        openNotificationWithIcon(ERROR, "Upgrade fail", "error");
      }
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
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
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};

export const getStudentsInCourseAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await UserService.getStudentsInCourse(id);
      dispatch({
        type: GET_ALL_STUDENTS,
        value: result.students,
      });
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
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
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      const result = await UserService.getAllUser();
      dispatch({
        type: GET_ALL_USER,
        value: result.users,
      });
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};
