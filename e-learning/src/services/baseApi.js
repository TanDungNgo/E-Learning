import axios from "axios";
import { BASE_URL, TOKEN } from "../utils/settings/config";

const baseApi = axios.create({
  baseURL: BASE_URL,
});

baseApi.interceptors.request.use(async (config) => {
  // Handle TOKEN here ...
  // attach TOKEN to header if exists
  const token = localStorage.getItem(TOKEN);
  if (token !== null && token !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

baseApi.interceptors.response.use(
  (response) => {
    if (response && response.data !== undefined) {
      // only get data
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response) {
      throw error.response;
    }

    if (error.request) {
      throw error.request;
    }

    // Handle errors
    throw error;
  }
);

export default baseApi;
