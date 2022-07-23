import { RecordService } from "../../services/RecordService";
import {
  GET_ALL_RECORDS,
  GET_ALL_USER_RECORDS,
  SAVE_RECORD,
} from "../types/RecordTypes";

export const saveRecordAction = (formData, lessonId) => {
  return async (dispatch) => {
    try {
      const result = await RecordService.saveRecord(formData);

      dispatch(getAllRecordsByLessonIdAction(lessonId));
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getAllRecordsByLessonIdAction = (lessonId) => {
  return async (dispatch) => {
    try {
      const result = await RecordService.getRecordsByLessonId(lessonId);
      console.log("result", result);
      // Đưa lên kho chứa
      dispatch({
        type: GET_ALL_RECORDS,
        value: result.users,
      });
    } catch (error) {
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
      console.log("error>>", error);
    }
  };
};
