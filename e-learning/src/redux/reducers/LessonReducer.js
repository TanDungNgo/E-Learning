import { GET_ALL_LESSONS, SET_AUDIO } from "../types/LessonTypes";

const stateDefault = {
  listAudio: [],
  audio: {},
  lessonsDefault: [],
};

export const LessonReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_AUDIO:
      state.listAudio = [...state.listAudio, action.value];
      return { ...state };
    case GET_ALL_LESSONS:
      state.lessonsDefault = action.value;
      return { ...state };

    default:
      return { ...state };
  }
};
