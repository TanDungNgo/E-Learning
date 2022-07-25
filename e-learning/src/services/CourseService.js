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
  return Api.delete(`/delete-course/${id}`);
};

const getAllCourses = () => {
  return Api.get(`/courses`);
};
const getCoursesByIdTeacher = (id) => {
  return Api.get(`/courses-teacher/${id}`);
};
const getCoursesEnrolled = (id) => {
  return Api.get(`/listcourse-enroll/${id}`);
};

const getPendingCourse = () => {
  return Api.get(`/pending-course`);
};
const AcceptCourse = (id) => {
  return Api.post(`/accept-course/${id}`);
};
const RejectCourse = (id) => {
  return Api.post(`/reject-course/${id}`);
};
export const CourseService = {
  getCourseById,
  createCourse,
  getAllCourses,
  deleteCourseById,
  updateCourseById,
  getCourseDetail,
  getCoursesByIdTeacher,
  getCoursesEnrolled,
  getPendingCourse,
  AcceptCourse,
  RejectCourse,
};
