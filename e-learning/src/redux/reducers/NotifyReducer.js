import {NOTIFY_USER} from "../types/NotifyTypes";

const stateDefault = {
    notifyUserDefault: [],
}
export const NotifyReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case NOTIFY_USER:
            state.notifyUserDefault = action.value;
            return { ...state };
        default:
            return { ...state };
    }
}