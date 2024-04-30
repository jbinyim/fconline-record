import api from "../api";

const getBasic = (ouid) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_BASIC_REQUEST",
      });
      const usersBasicApi = api.get(`/user/basic?ouid=${ouid}`);
      const userMaxDivisionApi = api.get(`/user/maxdivision?ouid=${ouid}`);
      const [userBasic, userMaxDivision] = await Promise.all([
        usersBasicApi,
        userMaxDivisionApi,
      ]);
      dispatch({
        type: "GET_BASIC_SUCCESS",
        payload: {
          userBasic: userBasic.data,
          userMaxDivision: userMaxDivision.data,
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
