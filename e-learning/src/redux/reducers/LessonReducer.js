import {
  GET_ALL_LESSONS,
  GET_LESSON_DETAILS,
  SET_AUDIO,
} from "../types/LessonTypes";

const stateDefault = {
  lesson: {},
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
    case GET_LESSON_DETAILS:
      state.lesson = action.value;
      return { ...state };
    default:
      return { ...state };
  }
};
