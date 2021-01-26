import errorTypes from "./error.types";

export const setErrors = (errors) => ({
  type: errorTypes.SET_ERRORS,
  payload: errors,
});

export const clearErrors = () => ({
  type: errorTypes.CLEAR_ERRORS,
});
