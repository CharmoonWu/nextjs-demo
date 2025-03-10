import axios from "axios";
import qs from "qs";

const jsonplaceholderUrl = process.env.JSONPLACEHOLDER_BASE_URL;

export const http = axios.create({
  baseURL: jsonplaceholderUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: "repeat", allowDots: true }); /// 传递数组 paramsSerializer序列化 ids:[1,2,3] -> ids=1&ids=2&id=3
  },
});

http.interceptors.request.use(async (config) => {
  //   const token = await localStorage.getItem("Authorization");
  //   if (token) {
  //     config.headers = {
  //       ...config.headers,
  //       token,
  //     };
  //   }
  return config;
});

http.interceptors.response.use((data) => {
  return data;
});
