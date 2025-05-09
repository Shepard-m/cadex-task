import axios from "axios";

const baseURL = "https://cadex-task-fyct.vercel.app/";

const createApi = () => {
  const api = axios.create({
    baseURL,
    timeout: 10000,
  });

  return api;
};

const api = createApi();

export { api };