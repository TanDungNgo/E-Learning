import Api from "./baseApi";

const getAllTeachers = () => {
  return Api.get("/teacher-list");
};

const UpgradeTeacherPendingRequest = () => {
  return Api.get("admin/all-request-become-teacher");
}

const ApproveTeacher = (id) => {
  return Api.put(`admin/approve-request-become-teacher/${id}`);
}
const RejectTeacher = (id) => {
  return Api.put(`admin/reject-request-become-teacher/${id}`);
}

export const TeacherService = {
  UpgradeTeacherPendingRequest,
  ApproveTeacher,
  RejectTeacher,
  getAllTeachers,
};
