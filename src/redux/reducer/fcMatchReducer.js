const initialState = {
  userMatch: {},
};

const fcMatchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MATCH_REQUEST":
      return { ...state };
    case "GET_MATCH_SUCCESS":
      return {
        ...state,
        userMatch: payload.userMatch,
      };
    case "GET_MATCH_FAILURE":
      return { ...state };
    default:
      return { ...state };
  }
};

export default fcMatchReducer;
