import Api from "./baseApi";

const getRecordsByLessonId = (lessonId) => {
  return Api.get(`/records/${lessonId}`);
};

const saveRecord = (formData) => {
  return Api.post("/save-audio-record", formData);
};

export const RecordService = {
  saveRecord,
  getRecordsByLessonId,
};
