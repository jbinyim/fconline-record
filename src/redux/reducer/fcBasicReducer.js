const initialState = {
  userBasic: {},
};

const fcBasicReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_BASIC_REQUEST":
      return { ...state };
    case "GET_BASIC_SUCCESS":
      return { ...state, userBasic: payload.userBasic };
    case "GET_BASIC_FAILURE":
      return { ...state };
    default:
      return { ...state };
  }
};

export default fcBasicReducer;
