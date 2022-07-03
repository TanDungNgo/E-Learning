import { GET_COURSE_URL } from "../types/CourseTypes";

const stateDefault = {
  courseUrl: "",
};

export const CourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSE_URL: {
      state.courseUrl = action.value;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
