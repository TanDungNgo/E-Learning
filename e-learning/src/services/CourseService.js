import Api from "./baseApi";

const getCourseById = (id) => {
  return Api.get(`/edit-course/${id}`);
};

export const CourseService = {
  getCourseById,
};
