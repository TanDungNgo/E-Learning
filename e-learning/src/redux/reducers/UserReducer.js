import { USER_LOGIN } from "../../utils/settings/config";
import {
  CHECK_ENROLL,
  GET_ALL_STUDENTS,
  GET_ALL_TEACHERS,
  GET_ALL_USER,
  LOGIN,
  LOGOUT,
} from "../types/UserTypes";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  teachersDefault: [],
  allUser : [],
  checkenroll: false,
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN:
      state.userLogin = action.value;
      localStorage.setItem(USER_LOGIN, JSON.stringify(state.userLogin));
      return { ...state };
    case LOGOUT: {
      localStorage.removeItem(USER_LOGIN);
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
    case CHECK_ENROLL: {
      state.checkenroll = action.value;
      return { ...state };
    }
    case GET_ALL_USER: {
      state.allUser = action.value;
      return { ...state };
    };
    default:
      return { ...state };
  }
};
