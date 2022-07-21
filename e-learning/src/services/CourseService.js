import Api from "./baseApi";

const getCourseById = (id) => {
  return Api.get(`/edit-course/${id}`);
};

const getCourseDetail = (id) => {
  return Api.get(`/lessons/${id}`);
};
const updateCourseById = (id, data) => {
  return Api.put(`/update-course/${id}`, data);
};

const createCourse = (data) => {
  return Api.post("/add-course", data);
};

const deleteCourseById = (id) => {
  return Api.delete(`/courses/${id}`);
};

const getAllCourses = () => {
  return Api.get(`/courses`);
};
const getCoursesByIdTeacher = (id) => {
  return Api.get(`/courses-teacher/${id}`);
};
export const CourseService = {
  getCourseById,
  createCourse,
  getAllCourses,
  deleteCourseById,
  updateCourseById,
  getCourseDetail,
  getCoursesByIdTeacher,
};
