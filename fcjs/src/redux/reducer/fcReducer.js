const initialState = {
  userOuid: {},
};

const fcReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_FC_REQUEST":
      return { ...state };
    case "GET_FC_SUCCESS":
      return {
        ...state,
        userOuid: payload.userOuid,
      };
    case "GET_FC_FAILURE":
      return { ...state };
    default:
      return { ...state };
  }
};

export default fcReducer;
