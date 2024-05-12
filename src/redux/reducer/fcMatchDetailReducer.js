const initialState = {
  userMatchDetail: {},
  loading: true,
};

const fcMatchDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MATCHDETAIL_REQUEST":
      return { ...state, loading: true };
    case "GET_MATCHDETAIL_SUCCESS":
      return {
        ...state,
        userMatchDetail: payload.userMatchDetail,
        loading: false,
      };
    case "GET_MATCHDETAIL_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default fcMatchDetailReducer;
