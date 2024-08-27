import axios from "axios";

const options = {
  headers: {
    "X-API-Key": "48bb32c0-c370-439f-b38a-6c5ae3f13894",
  },
};

const baseUrl = "https://technicalproof.lisdatasolutions.com/";

export const apiClient = {
  get: async function (path) {
    return axios.get(`${baseUrl}${path}`, options);
  },
};
