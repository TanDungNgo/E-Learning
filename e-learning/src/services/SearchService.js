import api from './baseApi'

const searchCourse = (searchTerm) => {
    return api.get(`/search-course`,{
        'searchTerm': searchTerm
    })
}

export const SearchService = {
    searchCourse
}