import { GET_ALL_COURSES, GET_COURSE_DETAILS } from "../types/CourseTypes";

const stateDefault = {
  coursesDefault: [],
  courseDetail: {},
};

export const CourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ALL_COURSES: {
      state.coursesDefault = action.value;
      return { ...state };
    }
    case GET_COURSE_DETAILS: {
      state.courseDetail = action.value;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
