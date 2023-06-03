import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a0c7594d1e616e6b0a482f36a9db482f",
  },
});

export default axiosInstance;
