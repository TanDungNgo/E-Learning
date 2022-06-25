import { GET_COURSE_DETAILS } from "../types/CourseTypes";

const stateDefault = {
  courseDetails: {},
};

export const CourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COURSE_DETAILS:
      state.courseDetails = action.value;
     // console.log("haha", state.courseDetails);
      return { ...state };

    default:
      return { ...state };
  }
};
