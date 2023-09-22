import axios from "axios";
export const brigAdminApi = axios.create({
    baseURL: `https://brigbackend.onrender.com/`,
  });