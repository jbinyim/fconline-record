import api from "../api";

const getBasic = (ouid) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_BASIC_REQUEST",
      });
      const usersBasicApi = api.get(`/user/basic?ouid=${ouid}`);

      const [userBasic] = await Promise.all([usersBasicApi]);
      dispatch({
        type: "GET_BASIC_SUCCESS",
        payload: {
          userBasic: userBasic.data,
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
