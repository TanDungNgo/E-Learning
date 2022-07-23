const stateDefault = {
    notifyDefault: [],
}
export const NotifyUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case USER_LOGIN:
            state.notifyDefault = action.data;
            console.log("Notify: ", action.data);
            return { ...state };
        default:
            return { ...state };
    }
}