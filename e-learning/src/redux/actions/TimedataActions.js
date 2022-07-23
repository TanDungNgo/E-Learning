import { TimedataService } from "../../services/TimedataService";
import { GET_ALL_TIMEDATA } from "../types/TimedataTypes";

// export const saveTimeAction = (formData,lessonId) => {
//   return async (dispatch) => {
//     try {
//       const result = await RecordService.saveRecord(formData);
//       console.log("alo", result);

//       // dispatch(getAllRecordsByLessonIdAction(lessonId));
//     } catch (error) {
//       console.log("error>>", error);
//     }
//   };
// };

export const getTimedatasByLessonIdAction = (lessonId) => {
  return async (dispatch) => {
    try {
      const result = await TimedataService.getTimeDatasByLessonId(lessonId);
      dispatch({
        type: GET_ALL_TIMEDATA,
        value: result.time,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
