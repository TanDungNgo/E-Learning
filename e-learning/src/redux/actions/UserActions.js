import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { UserService } from "../../services/UserService";
import { ERROR, SUCCESS } from "../../utils/settings/config";
import { LOGIN, LOGOUT } from "../types/UserTypes";

export const loginAction = (userLogin, propsRoute) => {
  return async (dispatch) => {
    try {
      // const result = await UserService.login(userLogin);

      const userLogin1 = {
        id: 1,
        email: userLogin.email,
        role: userLogin.email.length > 15 ? "ADMIN" : "CUSTOMER",
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
      userLogin1.role === "ADMIN"
        ? propsRoute.history.push("/admin")
        : propsRoute.history.push(
            propsRoute.location.state ? propsRoute.location.state.from : "/"
          );
      // propsRoute.history.push("/");
      openNotificationWithIcon(SUCCESS, "Login thành công", "success");
      // } else {
      //   openNotificationWithIcon(ERROR, "Login thất bại", "error");
      // }
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
export const registerAction = (userRegister, propsRoute) => {
  return async (dispatch) => {
    try {
      const result = await UserService.register(userRegister);
      console.log("Register", result);
      //   dispatch({
      //     type: LOGIN,
      //     value: result,
      //   });
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
