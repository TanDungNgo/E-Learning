import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { FeedbackService } from "../../services/FeedbackService";
import { ERROR, SUCCESS } from "../../utils/settings/config";
import { NOTIFY_USER } from "../types/NotifyTypes";

export const NotifyUserAction = (userID) => {
  return async (dispatch) => {
    try {
      const result = await FeedbackService.getFeedbacksById(userID);
      dispatch({
        type: NOTIFY_USER,
        value: result.notify,
      });
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};

export const sendFeedbackAction = (body) => {
  return async (dispatch) => {
    try {
      const result = await FeedbackService.sendFeedBack(body);
      openNotificationWithIcon(
        SUCCESS,
        "Comment has been sent to the student",
        "success"
      );
      dispatch({
        type: NOTIFY_USER,
        value: result.notify,
      });
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};
