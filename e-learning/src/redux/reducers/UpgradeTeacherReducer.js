import {
    PENDING_REQUEST_TEACHER
} from "../types/UpgradeTeacherTypes";

const stateDefault = {
    pendingRequests: [],
}
export const UpgradeTeacherReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case PENDING_REQUEST_TEACHER:
            state.pendingRequests = action.value;
            return { ...state };
        default:
            return { ...state };
    }
}