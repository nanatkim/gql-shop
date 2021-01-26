import errorTypes from "./error.types";

const INITIAL_STATE = {
  errors: [],
};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case errorTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case errorTypes.CLEAR_ERRORS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default errorReducer;
