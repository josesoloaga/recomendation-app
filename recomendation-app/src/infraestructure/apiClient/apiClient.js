import axios from "axios";

const options = {
  headers: {
    "X-API-Key": import.meta.env.VITE_API_KEY,
  },
};

const baseUrl = "https://technicalproof.lisdatasolutions.com/";

export const apiClient = {
  get: async function (path) {
    return axios.get(`${baseUrl}${path}`, options);
  },
};
