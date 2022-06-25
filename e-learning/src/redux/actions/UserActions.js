import { LOGIN } from "../types/UserTypes";

export const loginAction = (userLogin) => {
  return async (dispatch) => {
    try {
      // const result = await UserService.login(userLogin);
      // dispatch({
      //   type: LOGIN,
      //   value: result,
      // });

      dispatch({
        type: LOGIN,
        value: userLogin,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
