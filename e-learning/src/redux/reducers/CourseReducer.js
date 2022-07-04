import { GET_ALL_COURSES, GET_COURSE_URL } from "../types/CourseTypes";

const stateDefault = {
  coursesDefault: "",
};

export const CourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ALL_COURSES: {
      state.coursesDefault = action.value;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
