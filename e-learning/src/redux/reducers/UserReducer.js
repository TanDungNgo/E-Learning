import { USER_LOGIN } from "../../utils/settings/config";
import { GET_ALL_STUDENTS, LOGIN } from "../types/UserTypes";

const stateDefault = {
  userLogin: {},
  listStudents: []
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN:
      state.userLogin = action.value;
      console.log("state.userLogin", state.userLogin);
      localStorage.setItem(USER_LOGIN, JSON.stringify(state.userLogin));
      // localStorage.setItem(TOKEN, action.value.accessToken);
      return { ...state };
      //  Cập nhật kho chứa (redux)
    case GET_ALL_STUDENTS:
      state.listStudents = action.value;
      console.log("student Redux",state.listStudents);
      return { ...state };
    default:
      return { ...state };
  }
};
