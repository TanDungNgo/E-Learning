import Api from "./baseApi";

const getAllStudents = () => {
  return Api.get("/students");
};

const updateUser = (id, formData) => {
  return Api.post(`/users/update/${id}`, formData);
}

const requestToBecomeTeacher = (formData) => {
  console.log(formData);
  return Api.post(`/request-to-become-teacher`,formData);
}

const login = (formData) => {
  return Api.post("/users/login", formData);
};
const register = (formData) => {
  return Api.post("/users/register", formData);
};

export const UserService = {
  getAllStudents,
  updateUser,
  login,
  register,
  requestToBecomeTeacher,
};
