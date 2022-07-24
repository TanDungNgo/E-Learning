import Api from "./baseApi";

const getRecordsByLessonId = (lessonId) => {
  return Api.get(`/records/${lessonId}`);
};

const saveRecord = (formData) => {
  return Api.post("/save-audio-record", formData);
};

const deleteRecord = (id) => {
  return Api.delete(`/delete-record/${id}`);
}
export const RecordService = {
  saveRecord,
  getRecordsByLessonId,
  deleteRecord,
};
