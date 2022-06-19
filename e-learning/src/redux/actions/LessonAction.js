import { SET_AUDIO } from "../types/LessonType";

export const setAudioActions = (recordFile) => {
  return async (dispatch) => {
    try {
      // Gọi API
      // {
      //   todo code
      // }
      dispatch({
        type: SET_AUDIO,
        value: recordFile,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};

// export const getAudioActions = (value) => {
//   return async (dispatch) => {
//     try {
//       // Gọi API
//       // {
//       //   todo code
//       // }
//       dispatch({
//         type: GET_AUDIO,
//         value: value,
//       });
//     } catch (error) {
//       console.log("error>>", error);
//     }
//   };
// };
