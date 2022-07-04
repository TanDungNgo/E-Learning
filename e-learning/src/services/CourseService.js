import Api from "./baseApi";

const getCourseById = (id) => {
  return Api.get(`/edit-course/${id}`);
};
const updateCourseById = (id, data) => {
  return Api.get(`/update-course/${id}`, data);
};

const createCourse = (data) => {
  return Api.post("/courses", data);
};

const deleteCourseById = (id) => {
  return Api.delete(`/courses/${id}`);
};

const getAllCourses = () => {
  return Api.get(`/courses`);
};
export const CourseService = {
  getCourseById,
  createCourse,
  getAllCourses,
  deleteCourseById,
  updateCourseById,
};
