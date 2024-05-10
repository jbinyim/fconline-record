const initialState = {
  userMatchDetail: {},
};

const fcMatchDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MATCHDETAIL_REQUEST":
      return { ...state };
    case "GET_MATCHDETAIL_SUCCESS":
      return {
        ...state,
        userMatchDetail: payload.userMatchDetail,
      };
    case "GET_MATCHDETAIL_FAILURE":
      return { ...state };
    default:
      return { ...state };
  }
};

export default fcMatchDetailReducer;
