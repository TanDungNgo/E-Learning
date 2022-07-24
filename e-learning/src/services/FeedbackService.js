import Api from "./baseApi";
const getFeedbacks = (id) => {
  return Api.get(`/feedback/${id}`);
};
const getFeedbacksById = (id) => {
  return Api.get(`/see-feedback/${id}`);
};
const saveFeedBack = (body) => {
  return Api.post(body);
};
export const FeedbackService = {
  getFeedbacks,
  saveFeedBack,
  getFeedbacksById,
};
