import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { FeedbackService } from "../../services/FeedbackService";
import { SUCCESS } from "../../utils/settings/config";

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

export const sendFeedbackAction = (body) => {
  return async (dispatch) => {
    try {
      const result = await FeedbackService.sendFeedBack(body);
      console.log("result feeback", result);
      openNotificationWithIcon(
        SUCCESS,
        "Comment has been sent to the student",
        "success"
      );
      // dispatch({
      //   type: NOTIFY_USER,
      //   value: result.notify,
      // });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
