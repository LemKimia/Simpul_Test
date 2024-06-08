import axios from "axios";

let appId = "666305f255708d13edf490f2";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token: string) => {
  appId = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = "https://dummyapi.io/data/v1/";
  axiosConfig.headers["app-id"] = appId

  return axiosConfig;
});

export default axiosWithConfig;
