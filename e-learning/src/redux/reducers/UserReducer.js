import { USER_LOGIN } from "../../utils/settings/config";
import { LOGIN, LOGOUT } from "../types/UserTypes";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN:
      state.userLogin = action.value;
      localStorage.setItem(USER_LOGIN, JSON.stringify(state.userLogin));
      // localStorage.setItem(TOKEN, action.value.accessToken);
      return { ...state };
    case LOGOUT: {
      console.log("abc");
      localStorage.removeItem(USER_LOGIN);
      // localStorage.removeItem(TOKEN);
      state.userLogin = action.value;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
