import api from "../api";

const getMatchDetail = (matchId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MATCHDETAIL_REQUEST",
      });
      const userMatchDetailApi = api.get(`/match-detail?matchid=${matchId}`);

      const [userMatchDetail] = await Promise.all([userMatchDetailApi]);
      dispatch({
        type: "GET_MATCHDETAIL_SUCCESS",
        payload: {
          userMatchDetail: userMatchDetail.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MATCHDETAIL_FAILURE",
      });
    }
  };
};

export const fcMatchDetailAction = { getMatchDetail };
