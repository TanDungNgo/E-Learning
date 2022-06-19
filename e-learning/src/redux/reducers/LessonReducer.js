import { SET_AUDIO } from "../types/LessonType";

const stateDefault = {
  listAudio: [],
  audio: {},
};

export const LessonReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_AUDIO:
      state.listAudio = [...state.listAudio, action.value];
      return { ...state };

    default:
      return { ...state };
  }
};
