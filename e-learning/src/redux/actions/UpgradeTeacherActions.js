import { PENDING_REQUEST_TEACHER } from "../types/UpgradeTeacherTypes";

import { TeacherService } from "../../services/TeacherService";

export const getPendingRequestTeacherAction = () => {
  return async (dispatch) => {
    try {
      const result = await TeacherService.UpgradeTeacherPendingRequest();
      dispatch({
        type: PENDING_REQUEST_TEACHER,
        value: result.requests,
      });
    } catch (error) {
      console.log("error>>", error);
    }
  };
};
