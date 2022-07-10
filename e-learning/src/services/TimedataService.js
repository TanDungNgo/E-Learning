import Api from "./baseApi";

const getTimeDatasByLessonId = (lessonId) => {
  return Api.get(`/edit-lesson/${lessonId}`);
};

const createTimedata = (data) => {
  return Api.post("/save-timedata", data);
};

export const TimedataService = {
  getTimeDatasByLessonId,
  createTimedata,
};
