import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { TeacherService } from "../../services/TeacherService";
import { UserService } from "../../services/UserService";
import { ERROR, SUCCESS, USER_LOGIN } from "../../utils/settings/config";
import { GET_ALL_TEACHERS, LOGIN, LOGOUT } from "../types/UserTypes";

export const loginAction = (userLogin, propsRoute) => {
  return async (dispatch) => {
    try {
      // const result = await UserService.login(userLogin);

      const userLogin1 = {
        role: userLogin.email.length > 15 ? "admin" : "user",
        email: userLogin.email,
        id: 1,
        username: "Mike1212002",
        firstname: "Ngu Duy",
        lastname: "Vinh",
        phone_number: "12345678910",
        avatar:
          "https://i.pinimg.com/originals/51/90/10/519010d9ee8167bfe445e616f260f758.png",
        email_verified_at: null,
        created_at: "2022-07-01T08:07:09.000000Z",
        updated_at: "2022-07-01T08:07:09.000000Z",
      };
      // dispatch({
      //   type: LOGIN,
      //   value: result.user,
      // });

      dispatch({
        type: LOGIN,
        value: userLogin1,
      });
      // if (result.status === 200) {
      // result.user.role === "admin"
      userLogin1.role === "admin"
        ? propsRoute.history.push("/admin")
        : propsRoute.history.push(
            propsRoute.location.state ? propsRoute.location.state.from : "/"
          );
      openNotificationWithIcon(SUCCESS, "Login thành công", "success");
      // } else {
      //   openNotificationWithIcon(ERROR, "Login thất bại", "error");
      // }
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
      console.log("Register", result);

      if (result.status === 200) {
        propsRoute.history.push("/login");
        openNotificationWithIcon(
          SUCCESS,
          "Tạo tài khoản thành công",
          "success"
        );
      } else {
        openNotificationWithIcon(ERROR, "Tạo tài khoản thất bại", "error");
      }
    } catch (error) {
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
        const newData = JSON.stringify({...oldData,...userEdit});
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
        openNotificationWithIcon(
          SUCCESS,
          "Nâng cấp thành công",
          "success"
        );
      } else {
        openNotificationWithIcon(ERROR, "Nâng cấp thất bại", "error");
      }
    } catch (error) {
      console.log("error>>", error);
    }
  };
}

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
