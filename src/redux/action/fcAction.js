import api from "../api";

const getFc = (ouid) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_FC_REQUEST",
      });
      const userOuidApi = api.get(`id?nickname=${ouid}`);
      const [userOuid] = await Promise.all([userOuidApi]);
      dispatch({
        type: "GET_FC_SUCCESS",
        payload: {
          userOuid: userOuid.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_FC_FAILURE",
      });
    }
  };
};

export const fcAction = { getFc };
