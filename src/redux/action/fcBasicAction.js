import api from "../api";

const getBasic = (ouid) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_BASIC_REQUEST",
      });
      const usersBasicApi = api.get(`/user/basic?ouid=${ouid}`);
      const userMaxDivisionApi = api.get(`/user/maxdivision?ouid=${ouid}`);
      // const userMatchApi = api.get(
      //   `/user/match?ouid=${ouid}&matchtype=${type}&offset=${offset}&limit=10`
      // );
      const [userBasic, userMaxDivision] = await Promise.all([
        usersBasicApi,
        userMaxDivisionApi,
        // userMatchApi,
      ]);
      dispatch({
        type: "GET_BASIC_SUCCESS",
        payload: {
          userBasic: userBasic.data,
          userMaxDivision: userMaxDivision.data,
          // userMatch: userMatch.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_BASIC_FAILURE",
      });
    }
  };
};

export const fcBasicAction = { getBasic };
