import api from "./baseApi";

const searchCourse = (searchTerm) => {
  const searchParams = {
    searchTerm: searchTerm,
  };
  return api.get(`/search-course`, { params: searchParams });
};

export const SearchService = {
  searchCourse,
};
