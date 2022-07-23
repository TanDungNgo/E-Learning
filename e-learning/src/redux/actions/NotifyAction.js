import { USER_LOGIN } from '../../utils/settings/config';
import { NotifyServiece } from '../../services/NotifyService';

export const NotifyUserAction = (userID) => {
    return async (dispatch) => {
        try {
        const result = await NotifyServiece.NotifyUser(userID);
        console.log("result>>", result);
        dispatch({
            type: USER_LOGIN,
            data: result.notify,
        });
        } catch (error) {
        console.log("error>>", error);
        }
    }
}