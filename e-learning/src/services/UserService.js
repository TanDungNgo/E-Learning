import Api from "./baseApi";

const getAllStudents = () => {
  return Api.get("/students");
};

const updateUser = (id, formData) => {
  return Api.post(`/users/update/${id}`, formData);
};

const requestToBecomeTeacher = (formData) => {
  return Api.post(`/request-to-become-teacher`, formData);
};

const login = (formData) => {
  return Api.post("/users/login", formData);
};
const register = (formData) => {
  return Api.post("/users/register", formData);
};
const getStudentsInCourse = (id) => {
  return Api.get(`/liststudent/${id}`);
};

const checkenroll = (user_id, course_id) => {
  return Api.get(`/checkenroll/${user_id}/${course_id}`);
};
const enrollCourse = (data) => {
  return Api.post("/students/enroll", data);
};

const unenrollCourse = (user_id, course_id) => {
  return Api.delete(`/students/unenroll/${user_id}/${course_id}`);
};

const getAllUser = () => {
  return Api.get("/user-list");
};
export const UserService = {
  getAllStudents,
  updateUser,
  login,
  register,
  requestToBecomeTeacher,
  getStudentsInCourse,
  checkenroll,
  enrollCourse,
  unenrollCourse,
  getAllUser,
};
