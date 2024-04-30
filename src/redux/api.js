import axios from "axios";

//const API_KEY =
// "test_8fe786cce7f7ae48cfc42749cde66ec1f24a0712e02df26cb4df8ce00d72a2661adc361db9adbdd7f21d9627de734cd7";
const API_KEY =
  "test_686f8c782cb0d01354eeb775b8cb14eba6fa93bb5b59e33094a93360002b4a398fa8b865f45b41e5015f882354941fdf";

const api = axios.create({
  baseURL: "https://open.api.nexon.com/fconline/v1/",
  headers: { "x-nxopen-api-key": API_KEY, "Content-Type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    console.log("requset start", config);
    return config;
  },
  function (error) {
    console.log("request error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("get response", response);
    return response;
  },
  function (error) {
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export default api;
