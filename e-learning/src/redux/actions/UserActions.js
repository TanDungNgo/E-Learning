import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { UserService } from "../../services/UserService";
import { ERROR, SUCCESS } from "../../utils/settings/config";
import { LOGIN, LOGOUT } from "../types/UserTypes";

export const loginAction = (userLogin, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.login(userLogin);
      console.log("Login", result);
      // dispatch({
      //   type: LOGIN,
      //   value: userLogin,
      // });
      // userLogin.role === "ADMIN"
      //   ? propsRoute.history.push("/admin")
      //   : propsRoute.history.push(
      //       propsRoute.location.state ? propsRoute.location.state.from : "/"
      //     );
      openNotificationWithIcon(SUCCESS, "Login thành công", "success");
    } catch (error) {
      openNotificationWithIcon(ERROR, "Login thất bại", "error");
      console.log("error>>", error);
    }
    // try {
    //   const result = await UserService.login(userLogin);
    //   dispatch({
    //     type: LOGIN,
    //     value: result,
    //   });
    //   result.role === "ADMIN"
    //     ? propsRoute.history.push("/admin")
    //     : propsRoute.history.push(
    //         propsRoute.location.state ? propsRoute.location.state.from : "/"
    //       );
    //   openNotificationWithIcon(SUCCESS, "Login thành công", "success");
    // } catch (error) {
    //   openNotificationWithIcon(ERROR, "Login thất bại", "error");
    //   console.log("error>>", error);
    // }
  };
};
export const registerAction = (userRegister) => {
  return async (dispatch) => {
    try {
      const result = await UserService.register(userRegister);
      console.log("Register", result);
      //   dispatch({
      //     type: LOGIN,
      //     value: result,
      //   });
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
