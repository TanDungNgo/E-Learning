import { FeedbackService } from "../../services/FeedbackService";

export const NotifyUserAction = (userID) => {
  return async (dispatch) => {
    try {
      const result = await FeedbackService.getFeedbacksById(userID);
      console.log("result feeback", result);
      // dispatch({
      //   type: NOTIFY_USER,
      //   value: result.notify,
      // });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
