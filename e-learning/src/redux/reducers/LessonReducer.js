import {
  GET_ALL_LESSONS,
  GET_LESSON_DETAILS,
  SET_AUDIO,
} from "../types/LessonTypes";

const listLessons = [
  {
    id: 1,
    name: "Bài 1 là đây",
    description: "Bài 1 là bài 1. Sau khi học xong bài 1 sẽ sang bài 2.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 2,
    name: "Bài 2 là đây",
    description: "Bài 2 là bài 2. Sau khi học xong bài 2 sẽ sang bài 3.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 3,
    name: "Bài 3 là đây",
    description: "Bài 3 là bài 3. Sau khi học xong bài 3 sẽ sang bài 4.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 4,
    name: "Bài 4 là đây",
    description: "Bài 4 là bài 4. Sau khi học xong bài 4 sẽ sang bài 5.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 5,
    name: "Bài 5 là đây",
    description: "Bài 5 là bài 5. Sau khi học xong bài 5 sẽ sang bài 6.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 6,
    name: "Bài 6 là đây",
    description: "Bài 6 là bài 6. Sau khi học xong bài 6 sẽ sang bài 7.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 7,
    name: "Bài 7 là đây",
    description: "Bài 7 là bài 7. Sau khi học xong bài 7 sẽ sang bài 8.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    id: 8,
    name: "Bài 8 là đây",
    description: "Bài 8 là bài 8. Sau khi học xong bài 8 sẽ sang bài 9.",
    video_link: "http://media.w3.org/2010/05/bunny/movie.mp4",
  },
];

const stateDefault = {
  lesson: {},
  listAudio: [],
  audio: {},
  lessonsDefault: listLessons,
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
      return {...state};
    default:
      return { ...state };
  }
};
