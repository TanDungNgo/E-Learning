export function searhCourse(state = stateDefault, action) {
    switch (action.type) {
        case SEARCH_COURSE:
            state.coursesDefault = action.value;
            return { ...state };
        default:
            return { ...state };
    }
}
