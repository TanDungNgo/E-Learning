import Api from "./baseApi";

const getTimeDatasByLessonId = (lessonId) => {
  return Api.get(`/timedata/${lessonId}`);
};

const createTimedata = (data) => {
  return Api.post("/save-timedata", data);
};

const deleteTimedata = (id) => {
  return Api.delete(`/delete-timedata/${id}`);
};

export const TimedataService = {
  getTimeDatasByLessonId,
  createTimedata,
  deleteTimedata,
};
