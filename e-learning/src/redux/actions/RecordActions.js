import { RecordService } from "../../services/RecordService";
import { GET_ALL_RECORDS, SAVE_RECORD } from "../types/RecordTypes";

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
