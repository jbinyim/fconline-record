import api from "../api";

const getMatch = (ouid, type, offset) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MATCH_REQUEST",
      });
      const userMatchApi = api.get(
        `/user/match?ouid=${ouid}&matchtype=${type}&offset=${offset}&limit=1`
      );

      const [userMatch] = await Promise.all([userMatchApi]);
      dispatch({
        type: "GET_MATCH_SUCCESS",
        payload: {
          userMatch: userMatch.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MATCH_FAILURE",
      });
    }
  };
};

export const fcMatchAction = { getMatch };
