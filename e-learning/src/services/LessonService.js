import Api from "./baseApi";

const getLessonById = (id) => {
  return Api.get(`/lessons/${id}`);
};
const editLessonById = (id,data) => {
    return Api.put(`/lessons/${id}`,data);
  };
const deleteLessonById = (id) => {
  return Api.delete(`/lessons/${id}`);
};

export const LessonService = {
  getLessonById,
  deleteLessonById,
  editLessonById
};
