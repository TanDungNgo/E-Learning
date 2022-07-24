import Api from "./baseApi";
const getFeedbacks = (id) => {
  return Api.get(`/feedback/${id}`);
};
const getFeedbacksById = (id) => {
  return Api.get(`/see-feedback/${id}`);
};
const sendFeedBack = (body) => {
  return Api.post("/save-feedback", body);
};
export const FeedbackService = {
  getFeedbacks,
  sendFeedBack,
  getFeedbacksById,
};
