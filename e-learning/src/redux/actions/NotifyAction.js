import { NotifyService } from "../../services/NotifyService";
import {NOTIFY_USER} from "../types/NotifyTypes";

export const NotifyUserAction = (userID) => {
    return async (dispatch) => {
        try {
        const result = await NotifyService.getUserNotifications(userID)
        dispatch({
            type: NOTIFY_USER,
            value: result.notify
        });
        } catch (error) {
        console.log("error>>", error);
        }
    }
}