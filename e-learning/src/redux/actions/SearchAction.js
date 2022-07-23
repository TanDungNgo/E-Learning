import {searchService} from '../../services/SearchService'

export const searchCourseAction = (searchTerm) => {
    return async (dispatch) => {
        try {
            const result = await searchService.searchCourse(searchTerm);
            dispatch({
                type: SEARCH_COURSE,
                value: result.courses,
            });
        } catch (error) {
            console.log("error>>", error);
        }
    }
}