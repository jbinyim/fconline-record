const BASE_URL = "https://open.api.nexon.com/fconline/v1/";

// const API_KEY =
//   "test_8fe786cce7f7ae48cfc42749cde66ec1f24a0712e02df26cb4df8ce00d72a2661adc361db9adbdd7f21d9627de734cd7";
// const API_KEY =
//   "test_53f79550489eb108211ebb3bd8e2397d5dec05d3afa4a513935d710ad677314996da7fe4649431134b060075b74d1355";
const API_KEY =
  "test_686f8c782cb0d01354eeb775b8cb14eba6fa93bb5b59e33094a93360002b4a398fa8b865f45b41e5015f882354941fdf";

export const fetchOuid = (userName: string | undefined) => {
  return fetch(`${BASE_URL}id?nickname=${userName}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  }).then((response) => response.json());
};
