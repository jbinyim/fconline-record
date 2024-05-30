const BASE_URL = "https://open.api.nexon.com/fconline/v1/";

// const API_KEY =
//   "test_8fe786cce7f7ae48cfc42749cde66ec1f24a0712e02df26cb4df8ce00d72a2661adc361db9adbdd7f21d9627de734cd7";
// const API_KEY =
//   "test_53f79550489eb108211ebb3bd8e2397d5dec05d3afa4a513935d710ad677314996da7fe4649431134b060075b74d1355";
// const API_KEY =
//   "test_686f8c782cb0d01354eeb775b8cb14eba6fa93bb5b59e33094a93360002b4a398fa8b865f45b41e5015f882354941fdf";
// const API_KEY =
// "test_f8ee63e55d4786523c14ecdca10abd05cd0bb9a79d798059b146852a2818c141efe8d04e6d233bd35cf2fabdeb93fb0d";
// const API_KEY =
//   "test_e6c678a7611ec94183dd553108975fe0d8618617ebba311d60805eb71d72bde1efe8d04e6d233bd35cf2fabdeb93fb0d"
// const API_KEY =
//   "test_f8ee63e55d4786523c14ecdca10abd0598c0e31e2fdc8444674e9031779a9cb2efe8d04e6d233bd35cf2fabdeb93fb0d";
const API_KEY =
  "test_f8ee63e55d4786523c14ecdca10abd0516ca30c046b24f36feaa329bbcb6d681efe8d04e6d233bd35cf2fabdeb93fb0d";

export const fetchOuid = (userName: string | undefined) => {
  return fetch(`${BASE_URL}id?nickname=${userName}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  }).then((response) => response.json());
};

export const fetchUserBasic = (ouid: string) => {
  return fetch(`${BASE_URL}user/basic?ouid=${ouid}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  }).then((response) => response.json());
};

export const fetchMaxdivision = (ouid: string) => {
  return fetch(`${BASE_URL}user/maxdivision?ouid=${ouid}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  }).then((response) => response.json());
};

export const fetchMatch = <T>(ouid: string, type: T, offset: T, limit: T) => {
  return fetch(
    `${BASE_URL}user/match?ouid=${ouid}&matchtype=${type}&offset=${offset}&limit=${limit}`,
    {
      headers: {
        "x-nxopen-api-key": API_KEY,
      },
    }
  ).then((response) => response.json());
};

export const fetchMatchDetail = (matchId: string) => {
  return fetch(`${BASE_URL}match-detail?matchid=${matchId}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  }).then((response) => response.json());
};

export const fetchSpid = () => {
  return fetch(
    "https://open.api.nexon.com/static/fconline/meta/spid.json"
  ).then((response) => response.json());
};
