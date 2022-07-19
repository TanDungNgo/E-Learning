import '../../services/NotifyService';
import { USER_LOGIN } from "../../utils/settings/config";

export const notifyUserAction = (userLogin)=>{
    return async (dispatch) => {
        const result = await NotifyService.getUserNotifications(userLogin);
        dispatch({
            type: NotifyUser,
            data: result.notify,
        });
    }
}