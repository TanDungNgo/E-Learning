import { RecordService } from "../../services/RecordService";
import { GET_ALL_RECORDS, SAVE_RECORD } from "../types/RecordTypes";

export const saveRecordAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await RecordService.saveRecord(formData);
      console.log("alo", result);
      // Đưa lên kho chứa (redux)
      // dispatch({
      //   type: SAVE_RECORD,
      //   value: result,
      // });
      // dispatch(getAllRecordsByLessonIdAction());
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

export const getAllRecordsByLessonIdAction = (lessonId) => {
  return async (dispatch) => {
    try {
      const result = await RecordService.getRecordsByLessonId();
      console.log("alo", result);
      // Đưa lên kho chứa
      // dispatch({
      //   type: GET_ALL_RECORDS,
      //   value: result.users,
      // });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
