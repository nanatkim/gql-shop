import orderTypes from "./order.types";

const INITIAL_STATE = {
  orders: [],
  status: false,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case orderTypes.SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case orderTypes.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
