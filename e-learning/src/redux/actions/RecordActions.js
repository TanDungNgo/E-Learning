import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { RecordService } from "../../services/RecordService";
import { ERROR, SUCCESS } from "../../utils/settings/config";
import { GET_ALL_RECORDS, GET_ALL_USER_RECORDS } from "../types/RecordTypes";

export const saveRecordAction = (formData, lessonId) => {
  return async (dispatch) => {
    try {
      await RecordService.saveRecord(formData);
      openNotificationWithIcon(
        SUCCESS,
        "You have uploaded one audio file",
        "success"
      );
      dispatch(getAllRecordsByLessonIdAction(lessonId));
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};

export const getAllRecordsByLessonIdAction = (lessonId) => {
  return async (dispatch) => {
    try {
      const result = await RecordService.getRecordsByLessonId(lessonId);
      dispatch({
        type: GET_ALL_RECORDS,
        value: result.users,
      });
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};

export const getAllRecordsOfUserByLessonIdAction = (lessonId, userId) => {
  return async (dispatch) => {
    try {
      const result = await RecordService.getRecordsByLessonId(lessonId);
      const userRecords = result.users.filter(
        (item) => item.user_id === userId && item
      );
      if (userRecords.length) {
        dispatch({
          type: GET_ALL_USER_RECORDS,
          value: userRecords[0].record,
        });
      }
    } catch (error) {
      openNotificationWithIcon(ERROR, "Sorry, something went wrong", "error");
      console.log("error>>", error);
    }
  };
};
