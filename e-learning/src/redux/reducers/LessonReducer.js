import {
  GET_ALL_LESSONS,
  GET_LESSON_DETAILS,
  SET_AUDIO,
} from "../types/LessonTypes";

const stateDefault = {
  lesson: {
    id: 1,
    name: "Bài 1 là đây",
    description: "Bài 1 là bài 1. Sau khi học xong bài 1 sẽ sang bài 2.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
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
    default:
      return { ...state };
  }
};
