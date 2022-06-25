import { USER_LOGIN } from "../../utils/settings/config";
import { LOGIN } from "../types/UserTypes";

const stateDefault = {
  userLogin: {},
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN:
      state.userLogin = action.value;
      console.log("state.userLogin", state.userLogin);
      localStorage.setItem(USER_LOGIN, JSON.stringify(state.userLogin));
      // localStorage.setItem(TOKEN, action.value.accessToken);
      return { ...state };

    default:
      return { ...state };
  }
};
