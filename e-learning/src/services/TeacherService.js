import Api from "./baseApi";

const getAllTeachers = () => {
  return Api.get("/teacher-list");
};

export const TeacherService = {
  getAllTeachers,
};
