import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { UserService } from "../../services/UserService";
import { ERROR, SUCCESS } from "../../utils/settings/config";
import { LOGIN, LOGOUT } from "../types/UserTypes";

export const loginAction = (userLogin, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.login(userLogin);
      console.log(result);
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
