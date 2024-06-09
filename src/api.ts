const BASE_URL = "https://open.api.nexon.com/fconline/v1/";

const API_KEY =
  "live_64e9c0ad58b6b728b9e9a1fe21928afe70f677c63dabf9c00e94a6d6fd07a929efe8d04e6d233bd35cf2fabdeb93fb0d";

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
