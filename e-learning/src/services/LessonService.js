import Api from "./baseApi";

const getAllLessons = (id) => {
  return Api.get(`/lessons/${id}`);
};

const getLessonById = (id) => {
  return Api.get(`/edit-lesson/${id}`);
};

const getOneLessonById = (courseId, lessonId) => {
  return Api.get(`/course/${courseId}/lesson/${lessonId}`);
};
const editLessonById = (id, data) => {
  return Api.put(`/update-lesson/${id}`, data);
};
const deleteLessonById = (id) => {
  return Api.delete(`/lessons/${id}`);
};

const createLesson = (data) => {
  return Api.post("/add-lesson", data);
};

export const LessonService = {
  getLessonById,
  deleteLessonById,
  editLessonById,
  getAllLessons,
  createLesson,
  getOneLessonById,
};
