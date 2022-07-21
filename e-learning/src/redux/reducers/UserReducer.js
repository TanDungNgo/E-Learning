import { USER_LOGIN } from "../../utils/settings/config";
import { GET_ALL_STUDENTS, GET_ALL_TEACHERS, LOGIN, LOGOUT } from "../types/UserTypes";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  teachersDefault: [],
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN:
      state.userLogin = action.value;
      localStorage.setItem(USER_LOGIN, JSON.stringify(state.userLogin));
      // localStorage.setItem(TOKEN, action.value.accessToken);
      return { ...state };
    case LOGOUT: {
      localStorage.removeItem(USER_LOGIN);
      // localStorage.removeItem(TOKEN);
      state.userLogin = action.value;
      return { ...state };
    }
    case GET_ALL_TEACHERS: {
      state.teachersDefault = action.value;
      return { ...state };
    }
    case GET_ALL_STUDENTS: {
      state.studentsDefault = action.value;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
