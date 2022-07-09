import Api from "./baseApi";

const getAllLessons = (id) => {
  return Api.get(`/lessons/${id}`);
};
const getLessonById = (id) => {
  return Api.get(`/edit-lesson/${id}`);
};
const editLessonById = (id, data) => {
  return Api.put(`/update-lesson/${id}`, data);
};
const deleteLessonById = (id) => {
  return Api.delete(`/lessons/${id}`);
};

const createLesson = (data) => {
  return Api.post("/lessons", data);
};

export const LessonService = {
  getLessonById,
  deleteLessonById,
  editLessonById,
  getAllLessons,
  createLesson,
};
